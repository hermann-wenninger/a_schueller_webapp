from django.db import models


class Index(models.Model):
    name = models.CharField(max_length=200)
    slug = models.SlugField(max_length=200,unique=True)
    image = models.ImageField(upload_to='Indexslider',blank=True)
    alt = models.CharField(max_length=200)
    def __str__(self):
        return self.name
