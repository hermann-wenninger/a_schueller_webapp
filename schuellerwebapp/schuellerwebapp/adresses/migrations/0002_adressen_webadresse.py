# Generated by Django 4.1 on 2023-11-04 13:22

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("adresses", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="adressen",
            name="webadresse",
            field=models.URLField(blank=True),
        ),
    ]
