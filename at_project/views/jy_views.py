from django.shortcuts import render
from django.views.generic import TemplateView


class IndexMainViews(TemplateView):
    template_name = "at_project/jy/index.html"


class FoodRecipe1Views(TemplateView):
    template_name = "at_project/jy/food-recipe-1.html"


class KFoodReport2Views(TemplateView):
    template_name = "at_project/jy/k-food-report-2.html"
