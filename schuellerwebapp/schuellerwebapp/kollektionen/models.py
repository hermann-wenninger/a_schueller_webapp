from django.db import models
from django.urls import reverse

class Kollektion(models.Model):
    name = models.CharField(max_length=200)
    slug = models.SlugField(max_length=200,unique=True)
    image = models.ImageField(upload_to='kollektionen/%Y/%m/%d',blank=True)
    ueberschrift_1 = models.CharField(max_length=200,default="")
    text_1 = models.TextField(blank=True,default="")
    ueberschrift_2 = models.CharField(max_length=200,default="")
    text_2 = models.TextField(blank=True,default="")
    ueberschrift_3 = models.CharField(max_length=200,default="")
    text_3 = models.TextField(blank=True,default="")
    ueberschrift_4 = models.CharField(max_length=200,default="")
    text_4 = models.TextField(blank=True,default="")






    class Meta:
        ordering = ['name']
        indexes = [
            models.Index(fields=['name']),
        ]
        verbose_name = 'kollektion'
        verbose_name_plural = 'kollektionen'
    def __str__(self):
        return self.name
    
    def get_absolute_url(self):
        return reverse('kollektionen:ring_list_by_category',
                       args=[self.slug])
 
    

class Ring(models.Model):
    category = models.ForeignKey(Kollektion,related_name='rings',on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    slug = models.SlugField(max_length=200)
    image = models.ImageField(upload_to='rings/%Y/%m/%d',blank=True)
    description = models.TextField(blank=True)
    price = models.DecimalField(max_digits=10,decimal_places=2)
    available = models.BooleanField(default=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    class Meta:
        ordering = ['name']
        indexes = [
            models.Index(fields=['id', 'slug']),
            models.Index(fields=['name']),
            models.Index(fields=['-created']),
        ]
    def __str__(self):
        return self.name
    def get_absolute_url(self):
        return reverse('kollektionen:ring_detail',
                       args=[self.id, self.slug])