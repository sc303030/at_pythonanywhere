from django.contrib import admin
from .models import *
# Register your models here.

@admin.register(LikeKPop)
class LikeKPopAdmin(admin.ModelAdmin):
    list_display = ['idol_name']
    list_display_links = ['idol_name']