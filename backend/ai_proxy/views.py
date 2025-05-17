import requests
from django.conf import settings
from django.contrib.auth.models import User
from django.http import HttpResponse
from django.views import View
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


class PageView(View):
    def get(self, request, *args, **kwargs):
        username = kwargs.get('username')
        page_name = kwargs.get('page')
        result = ''
        result += getattr(Page.objects.filter(user__username=username, name='header').first(), 'html_content', '')
        result += getattr(Page.objects.filter(user__username=username, name=page_name).first(), 'html_content', '')
        result += getattr(Page.objects.filter(user__username=username, name='footer').first(), 'html_content', '')
        return HttpResponse(result)


class GenerateDraftView(APIView):
    permission_classes = [IsAuthenticated]

    def generate_css(self, prompt):
        r = requests.post('http://host.docker.internal:11434/api/generate', json={
            'prompt': '{ "style": "generate design system css for '+prompt+'"}',
            "model": settings.MODEL_NAME,
            "stream": False
        })
        result = r.json()['response']
        Page.objects.update_or_create( html_content=result, create_defaults={'name':'css-draft','user_id': self.request.user.id})

    def generate_draft_demo(self):
        css = Page.objects.get(name='css-draft', user_id=self.request.user.id).html_content
        r = requests.post('http://host.docker.internal:11434/api/generate', json={
            'prompt': f'Output only raw html, create demo of design system {css}. Only raw Html content, dont talk.',
            "model": settings.MODEL_NAME,
            "stream": False
        })
        result = r.json()['response']
        Page.objects.update_or_create( html_content=result, create_defaults={'name':'css-demo','user_id': self.request.user.id})

    def post(self, request, *args, **kwargs):
        prompt = request.data.get('prompt')
        type = request.data.get('type')
        if type == 'style':
            self.generate_css(prompt)
            self.generate_draft_demo()
            return Response({
                'response': 'Style generated successfully',
                'previewUrl': f"{self.request.get_host()}/{self.request.user.username}/css-demo"
            })
