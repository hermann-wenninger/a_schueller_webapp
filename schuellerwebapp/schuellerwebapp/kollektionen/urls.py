from django.urls import path
from . import views
app_name = 'kollektionen'
urlpatterns = [
    path('kollektionen', views.ring_list, name='ring_list'),
    path('kollektion/<slug:category_slug>/', views.ring_listx,name='ring_list_by_category'),
    path('kollektion/<int:id>/<slug:slug>/', views.ring_detail,name='ring_detail'),
    path('kollektion/<slug:category_slug>/', views.get_rings,name='rings'),
    path('kollektion/', views.contactView,name='contactView'),
     path ("success/", views.success , name="success" ),
]