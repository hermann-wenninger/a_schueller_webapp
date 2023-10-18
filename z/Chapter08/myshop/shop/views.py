from django.shortcuts import render, get_object_or_404
from cart.forms import CartAddProductForm
from .models import Kollektion
from .models import Ring


def product_list(request, kollektion_slug=None):
    kollektion = None
    kollektionen = Kollektion.objects.all()
    ring = Ring.objects.filter(available=True)
    if kollektion_slug:
        kollektion = get_object_or_404(Kollektion, slug=kollektion_slug)
        ring = ring.filter(kollektion=kollektion)
    return render(request,
                  'shop/product/list.html',
                  {'kollektion': kollektion,
                   'kollektionen': kollektionen,
                   'rings': ring})


def product_detail(request, id, slug):
    product = get_object_or_404(Ring,
                                id=id,
                                slug=slug,
                                available=True)
    cart_product_form = CartAddProductForm()
    return render(request,
                  'shop/product/detail.html',
                  {'product': product,
                   'cart_product_form': cart_product_form})
