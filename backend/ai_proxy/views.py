import requests
from django.conf import settings
from django.contrib.auth.models import User
from django.shortcuts import render
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView

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
