from django.urls import path
from . import views
app_name = 'akt'
urlpatterns = [
    path('akt/', views.aktuelles, name='akt'),
 
    ]
  # path('aktuell/', views.AktuellesListView.as_view(), name='aktuell'),
   # path('aktuell/<int:pk>', views.AktuellesDetailView.as_view(), name='aktuelles-detail'),