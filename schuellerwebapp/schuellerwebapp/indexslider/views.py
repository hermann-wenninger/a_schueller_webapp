from django.shortcuts import render, get_object_or_404
from .models import Index
from kollektionen.models import Kollektion, Ring
from aktuelles.models import Aktuelles

# Create your views here.
def indexslider(request, category_slug=None):
    category = None
    categories = Kollektion.objects.all()
    products = Ring.objects.filter(available=True)
    aktuelles = Aktuelles.objects.filter(auf_erster_seite = True)
    if category_slug:
        category = get_object_or_404(Kollektion, 
                                     slug=category_slug)
        products = products.filter(category=category)
    indexslider = Index.objects.all()
    return render(request,'indexslider/index.html',{'indexslider': indexslider,
                                                    'category': category,
                                                    'categories': categories,
                                                    'products': products,
                                                    'aktuelles': aktuelles})

