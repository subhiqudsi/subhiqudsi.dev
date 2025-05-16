from django.urls import path

from . import views
from .views import UserCreateAPIView

urlpatterns = [
    path('generate-website', views.GenerateView.as_view(), name='generate_website'),
    path('subhi-info', views.InquireInfoSubhiView.as_view(), name='subhi_info'),

    # Site Forge
    path('register/', UserCreateAPIView.as_view(), name='user-register'),
]