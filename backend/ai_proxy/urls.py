from django.urls import path

from . import views
from .views import UserCreateAPIView

urlpatterns = [
    # path('generate-website', views.GenerateView.as_view(), name='generate_website'),
    path('subhi-info', views.InquireInfoSubhiView.as_view(), name='subhi_info'),
    path('<username>/<page>', views.PageView.as_view(), name='user_list'),
    # Site Forge
    path('register', UserCreateAPIView.as_view(), name='user-register'),
    path('generate-draft' , views.GenerateDraftView.as_view(), name='generate-draft'),
]