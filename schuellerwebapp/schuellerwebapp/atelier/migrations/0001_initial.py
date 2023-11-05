# Generated by Django 4.1 on 2023-11-05 12:47

from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="BilderAtelier",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(blank=True, max_length=255)),
                (
                    "image",
                    models.ImageField(blank=True, upload_to="kollektionen/%Y/%m/%d"),
                ),
                ("beschreibung", models.CharField(blank=True, max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name="EinleitungAtelier",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("ueberschrift", models.CharField(blank=True, max_length=255)),
                ("text", models.TextField(blank=True)),
            ],
        ),
    ]
