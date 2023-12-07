from django.db import models

class PDF(models.Model):
    doc1 = models.FileField(upload_to='pdf/')
    doc2 = models.FileField(upload_to='pdf/')
    doc3 = models.FileField(upload_to='pdf/')

    def __str__(self):
        return str('3 Dokumente')

