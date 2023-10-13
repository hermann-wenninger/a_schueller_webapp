from django.db import models

class Sliderbild(models.Model):
    name = models.CharField(max_length=200)
    slug = models.SlugField(max_length=200)
    image = models.ImageField(upload_to='sliderbild/',blank=True)

    def __str__():
        return f'Sliderbild{self.id}'

