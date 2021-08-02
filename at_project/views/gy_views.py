import os

from django.shortcuts import render
from django.views.generic import View, TemplateView
from django.http import HttpResponse, JsonResponse
from bs4 import BeautifulSoup
import requests
import pandas as pd


class KFoodReportViews(TemplateView):
    template_name = "at_project/gy/k-food-report.html"


def recipe_ajax(request):
    if request.is_ajax():
        test = request.GET
        _url = ''.join(
            [f'{value}={test[value]}' if idx == 0 else f'&{value}={test[value]}' for idx, value in enumerate(test)])
        url = f'http://api.nongsaro.go.kr/service/{_url}'
        res = requests.get(url)
        soup = BeautifulSoup(res.content, 'html.parser')
        return HttpResponse(soup,
                            content_type='application/json')
    return render(request, 'at_project/gy/repice.html')


class KFoodIdolViews(TemplateView):
    template_name = "at_project/gy/k-food-idol.html"


class FoodRecipe2Views(TemplateView):
    template_name = "at_project/gy/food-recipe-2.html"


class TableauTestViews(TemplateView):
    template_name = "at_project/gy/tableau_test.html"


class KTourViews(TemplateView):
    def get_context_data(self):
        context = super().get_context_data()
        map = pd.read_csv('at_project/views/서울_맛집.csv', encoding='cp949')

        js = map.to_json(orient='records')
        context['map'] = js
        return context

    template_name = "at_project/gy/k-tour.html"


class KTourSelectViews(View):
    def get(self, request, id):
        return JsonResponse(self.get_data(id), safe=False)

    def get_data(self, id):
        print(id)
        _map = pd.read_csv('at_project/views/서울_맛집.csv', encoding='cp949')
        map = _map[_map['구'] == id]
        js = map.to_json(orient='records')
        return {'map': js}
