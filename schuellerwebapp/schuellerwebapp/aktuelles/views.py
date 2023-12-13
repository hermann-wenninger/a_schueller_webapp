from django.shortcuts import render
from django.views import generic
from .models import Aktuelles

def aktuelles(request):
    aktuelles = Aktuelles.objects.all()
    return render(request,'aktuelles/aktuelles.html',{'aktuelles': aktuelles})

class AktuellesListView(generic.ListView):
    model = Aktuelles

class AktuellesDetailView(generic.DetailView):
    model = Aktuelles