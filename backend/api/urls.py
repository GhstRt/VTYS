from django.urls import path
from .views import *

urlpatterns = [
    path('location/', LocationView.as_view()),
]