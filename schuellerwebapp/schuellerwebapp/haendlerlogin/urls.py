from django.contrib import admin 
from django.urls import path

from .views import login, pdf_view, pdf_viewx, pdf_viewy

app_name='haendlerlogin'

urlpatterns  =  [ 
    path ("haendlerlogin/", login, name="login" ), 
    path ("download/", pdf_view, name="pdf_view" ),
    path ("downloadx/", pdf_viewx, name="pdf_viewx" ), 
    path ("downloady/", pdf_viewy, name="pdf_viewy" ), 
  
    ]