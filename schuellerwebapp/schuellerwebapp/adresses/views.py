from django.shortcuts import render
from .models import Adressen

# Create your views here.
def adressen(request):
    adressen = Adressen.objects.all()
    return render(request,'adressen/adressen.html',{'adressen':adressen})

