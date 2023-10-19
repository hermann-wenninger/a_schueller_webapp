from django.contrib import admin
from .models import Kollektion, Ring


@admin.register(Kollektion)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug']
    prepopulated_fields = {'slug': ('name',)}


@admin.register(Ring)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug', 'price',
                    'available', 'created', 'updated']
    list_filter = ['available', 'created', 'updated' ,'category']
    list_editable = ['price', 'available']
    prepopulated_fields = {'slug': ('name',)}
