from django.shortcuts import render, get_object_or_404
from .models import Kollektion, Ring


#def product_list(request, kollektion_slug=None):
 #   kollektion = None
  #  kollektionen = Kollektion.objects.all()
   # rings = Ring.objects.filter(available=True)
    #if kollektion_slug:
     #   kollektion = get_object_or_404(Kollektion, slug=kollektion_slug)
      #  rings = rings.filter(kollektion=kollektion)
    #return render(request,
     #             'kollektion/ring/list.html',
      #            {'kollektion': kollektion,
       #            'kollektionen': kollektionen,
        #           'rings': rings})

def ring_list(request, category_slug=None):
    category = None
    categories = Kollektion.objects.all()
    products = Ring.objects.filter(available=True)
    if category_slug:
        category = get_object_or_404(Kollektion, 
                                     slug=category_slug)
        products = products.filter(category=category)
    return render(request,
                  'kollektionen/ring/list.html',
                  {'category': category,
                   'categories': categories,
                   'products': products})

def ring_detail(request, id, slug):
    product = get_object_or_404(Ring,
                                id=id,
                                slug=slug,
                                available=True)
    return render(request,
                  'kollektionen/ring/detail.html',
                  {'product': product})

def categories_m(request):
    kollektion = Kollektion.objects.all()
   
  
    return render(request, 'kollektion/ring/kollektion.html', {'kollektion': kollektion})