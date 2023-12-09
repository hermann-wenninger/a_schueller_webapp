from django.urls import path
from . import views
app_name = 'aktuelles'
urlpatterns = [
    path('atelier', views.aktuelles, name='aktuelles'),
    ]