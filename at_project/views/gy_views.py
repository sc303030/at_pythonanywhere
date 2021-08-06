import os

from django.contrib.auth.decorators import login_required
from django.shortcuts import render
from django.utils.decorators import method_decorator
from django.views.generic import View, TemplateView, CreateView
from django.http import HttpResponse, JsonResponse
from bs4 import BeautifulSoup
import requests
import pandas as pd
from ..models import LikeKPop
from ..forms import LikeKPopForm


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

    def get_context_data(self, **kwargs):
        context = super().get_context_data()
        context['kpop'] = LikeKPop.objects.all()
        return context


class FoodRecipe2Views(TemplateView):
    template_name = "at_project/gy/food-recipe-2.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data()
        _predict = pd.read_csv('at_project/views/예측가격.csv', encoding='utf-8-sig')
        predict = _predict.to_json(orient='records')
        context['predict'] = predict
        return context


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


@method_decorator(login_required(login_url='/accounts/signin/'), name="dispatch")
class MyPageViews(TemplateView):
    template_name = "at_project/gy/mypage.html"

    def get_context_data(self):
        context = super().get_context_data()
        context['kpop'] = LikeKPop.objects.all()
        return context


class UpdateKPop(CreateView):
    form_class = LikeKPopForm

    def get_context_data(self, **kwargs):
        _name = self.request.POST['idol_name']
        _this = LikeKPop.objects.filter(idol_name=_name)
        return _this

    def post(self, request, *args, **kwargs):
        _check = self.get_context_data()
        if len(_check) > 0:
            _delete = request.POST['delete']
            if _delete == 'yes':
                _check.delete()
            response = []
            return JsonResponse(response, safe=False)
        else:
            form = self.get_form()
            if form.is_valid():
                form.save()
            response = []
            return JsonResponse(response, safe=False)


class KpopViews(TemplateView):
    template_name = "at_project/gy/kpop-main.html"
