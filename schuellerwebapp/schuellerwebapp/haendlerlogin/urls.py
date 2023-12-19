from django.contrib import admin 
from django.urls import path

from .views import login, download_broschuere, download_vk, download_ekvk

app_name='haendlerlogin'

urlpatterns  =  [ 
    path ("haendlerlogin/", login, name="login" ), 
    path ("download_broschuere/", download_broschuere, name="broschuere" ), 
    path ("download_vk/", download_vk, name="vk" ), 
    path ("download_ekvk/", download_ekvk, name="ekvk" ), 
    #path ("pdf/", login, name="nachlogin" ),
    
]