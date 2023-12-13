from django.urls import path
from . import views
app_name = 'wissenswert'
urlpatterns = [
 
    path('aktuell/', views.wissenswertListView.as_view(), name='wissenswert'),
    path('aktuell/<int:pk>', views.wissenswertDetailView.as_view(), name='wissenswert-detail')
 
    ]
