from  django.contrib  import  admin 
from  django.urls  import  path

from  .views  import  contactView,success

app_name='sendemail'

urlpatterns  =  [ 
    path ("contact/", contactView , name="contact" ), 
    path ("success/", success , name="success" ), 
]