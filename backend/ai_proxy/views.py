import re

import requests
from django.conf import settings
from django.contrib.auth.models import User
from django.http import HttpResponse
from django.utils.decorators import method_decorator
from django.views import View
from django.views.decorators.clickjacking import xframe_options_exempt
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Page

from .serializers import UserCreateSerializer


class GenerateView(APIView):
    def post(self, request, *args, **kwargs):
        prompt = request.data.get('prompt')
        r = requests.post('http://host.docker.internal:11434/api/generate',
                          json={'prompt': prompt, "model": settings.MODEL_NAME, "stream": False})
        return Response({'response': r.json()['response']})


class InquireInfoSubhiView(APIView):

    def get_system_content(self):
        with open('subhi.json') as f:
            mcp_config = f.read()
        return mcp_config

    def get_ai_payload(self):
        prompt = self.request.data.get('prompt')
        return {
            "model": settings.MODEL_NAME,
            "stream": False,
            "messages": [
                {
                    "role": "system",
                    "content": "user is potential client, you my assistant SubhiBot, don't guess, my profile " + self.get_system_content()
                },
                {
                    "role": "user",
                    "content": prompt
                }
            ]
        }

    def post(self, *args, **kwargs):
        r = requests.post(
            'http://host.docker.internal:11434/api/chat',
            json=self.get_ai_payload()
        )
        return Response({'response': r.json()['message']['content']})


class UserCreateAPIView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserCreateSerializer


@method_decorator(xframe_options_exempt, name='dispatch')
class PageView(View):
    def get(self, request, *args, **kwargs):
        username = kwargs.get('username')
        page_name = kwargs.get('page')
        result = ''
        if page_name == 'css-demo':

            css_demo = getattr(Page.objects.filter(user__username=username, name='css-demo').first(), 'html_content',
                               '')
            return HttpResponse(css_demo)


class GenerateDraftView(APIView):
    permission_classes = [IsAuthenticated]

    def generate_css(self, prompt):
        r = requests.post('http://host.docker.internal:11434/api/generate', json={
            'prompt': f'''Generate styles.css design system: "{prompt}" theme:
Design system:
- 6-tier color palette
- card design
- fields designs
- Fluid typography using clamp()
- CSS Grid layout utilities
- Links design
- Button & hover design
- Mobile-first responsive approach
- Transition presets
- Include :root variables and .container styles
''',
            "model": settings.MODEL_NAME,
            "stream": False
        })
        result = r.json()['response']
        print(result)
        html_match = re.search(r'```html(.*?)```', result, re.DOTALL).group(1).strip()
        styles = ''
        css_match = re.search(r'```css(.*?)```', result, re.DOTALL)
        style_file_match = re.search(r'```styles.css(.*?)```', result, re.DOTALL)
        if css_match:
            styles = css_match.group(1).strip()
        elif style_file_match:
            styles = style_file_match.group(1).strip()
        Page.objects.update_or_create(
            user_id=self.request.user.id,
            name='css-demo',
            defaults={'html_content': html_match.replace('<head>', '<head><style>'+styles+'</style>')}
        )


    def post(self, request, *args, **kwargs):
        prompt = request.data.get('prompt')
        type = request.data.get('type')
        if type == 'style':
            self.generate_css(prompt)
            # self.generate_draft_demo()
            return Response({
                'response': 'Style generated successfully',
                'previewUrl': f"{self.request._current_scheme_host}/{self.request.user.username}/css-demo"
            })
