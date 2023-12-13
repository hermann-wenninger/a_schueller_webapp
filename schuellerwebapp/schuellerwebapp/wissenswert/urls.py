from django.urls import path
from . import views
app_name = 'wissenswert'
urlpatterns = [
 
    path('wissenswert/', views.wissenswertListView.as_view(), name='wissenswert'),
    path('wissenswert/<int:pk>', views.wissenswertDetailView.as_view(), name='wissenswert-detail')
 
    ]
