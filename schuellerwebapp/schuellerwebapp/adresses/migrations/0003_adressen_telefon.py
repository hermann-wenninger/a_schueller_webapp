# Generated by Django 4.1 on 2023-11-04 13:31

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("adresses", "0002_adressen_webadresse"),
    ]

    operations = [
        migrations.AddField(
            model_name="adressen",
            name="telefon",
            field=models.CharField(blank=True, max_length=25),
        ),
    ]
