from django.urls import path
from . import views
app_name = 'indexslider'

urlpatterns = [
    path('', views.indexslider, name='index'),
]