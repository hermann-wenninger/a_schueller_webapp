from django.shortcuts import render
from .models import Aktuelles

def aktuelles(request):
    
    aktuelles = Aktuelles.objects.all()
    return render(request,'aktuelles/aktuelles.html',{'aktuelles': aktuelles})
