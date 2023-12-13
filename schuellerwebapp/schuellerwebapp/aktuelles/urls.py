from django.urls import path
from . import views
app_name = 'aktuelles'
urlpatterns = [
    path('aktuelles/', views.aktuelles, name='aktuelles'),
    path('aktuell/', views.AktuellesListView.as_view(), name='aktuell'),
    path('aktuell/<int:pk>', views.AktuellesDetailView.as_view(), name='aktuelles-detail')
 
    ]
