from django.urls import path
from . import views
app_name = 'adresses'

urlpatterns = [
    path('adressen', views.adressen, name='adresses'),
]