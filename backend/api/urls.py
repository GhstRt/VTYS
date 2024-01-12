from django.urls import path
from .views import *

urlpatterns = [
    path('places/<str:id>/', LocationView.as_view()),
    path('places/', LocationView.as_view()),
    path('chat/', ChatAPIView.as_view())
]