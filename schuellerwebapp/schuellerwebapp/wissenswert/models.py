from django.db import models
from django.urls import reverse

class Wissenswert(models.Model):
    ueberschrift_1 = models.CharField(max_length=200)
    slug = models.SlugField(max_length=200)
    image_1 = models.ImageField(upload_to='wissenswert/%Y/%m/%d',blank=True)
    text_1 = models.TextField(blank=True)
    ueberschrift_2 = models.CharField(max_length=200)
    image_2 = models.ImageField(upload_to='wissenswert/%Y/%m/%d',blank=True)
    text_2 = models.TextField(blank=True)
    

    def __str__(self):
        return self.ueberschrift_1
    
    def get_absolute_url(self):
        return reverse("wissenswert-detail", kwargs={"pk": self.pk})
    
    
