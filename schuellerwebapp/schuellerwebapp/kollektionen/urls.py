from django.urls import path
from . import views
app_name = 'kollektionen'
urlpatterns = [
    path('', views.ring_list, name='ring_list'),
    path('<slug:category_slug>/', views.ring_listx,name='ring_list_by_category'),
    path('<int:id>/<slug:slug>/', views.ring_detail,name='ring_detail'),
    path('<slug:category_slug>/', views.get_rings,name='rings'),
]