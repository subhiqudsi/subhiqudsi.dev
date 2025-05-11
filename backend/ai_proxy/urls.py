from django.urls import path

from . import views

urlpatterns = [
    path('generate-website', views.GenerateView.as_view(), name='generate_website'),
    path('subhi-info', views.InquireInfoSubhiView.as_view(), name='subhi_info'),
]