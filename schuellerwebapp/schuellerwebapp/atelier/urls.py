from django.urls import path
from . import views
app_name = 'atelier'
urlpatterns = [
    path('atelier', views.atelier, name='atelier'),
    ]