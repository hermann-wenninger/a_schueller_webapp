# Generated by Django 4.1 on 2023-12-07 16:59

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("aktuelles", "0002_aktuelles_location"),
    ]

    operations = [
        migrations.AlterField(
            model_name="aktuelles",
            name="termin_bis",
            field=models.DateField(blank=True),
        ),
        migrations.AlterField(
            model_name="aktuelles",
            name="termin_von",
            field=models.DateField(blank=True),
        ),
    ]