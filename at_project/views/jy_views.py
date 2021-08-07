from django.shortcuts import render
from django.views.generic import TemplateView


class IndexMainViews(TemplateView):
    template_name = "at_project/jy/index.html"


class FoodRecipe1Views(TemplateView):
    template_name = "at_project/jy/food-recipe-1.html"


class KFoodReport2Views(TemplateView):
    template_name = "at_project/jy/k-food-report-2.html"

class KFoodReport3Views(TemplateView):
    template_name = "at_project/jy/k-food-report-3.html"

class KFoodReport4Views(TemplateView):
    template_name = "at_project/jy/k-food-report-4.html"

class FoodRecipeMainViews(TemplateView):
    template_name = "at_project/jy/food-recipe-main.html"

class FoodRecipeDetailViews(TemplateView):
    template_name = "at_project/jy/food-recipe-detail.html"

class FoodRecipeDetail1Views(TemplateView):
    template_name = "at_project/jy/food-recipe-detail-1.html"

class FoodRecipeDetail2Views(TemplateView):
    template_name = "at_project/jy/food-recipe-detail-2.html"

class FoodRecipeDetail3Views(TemplateView):
    template_name = "at_project/jy/food-recipe-detail-3.html"

class FoodRecipeDetail4Views(TemplateView):
    template_name = "at_project/jy/food-recipe-detail-4.html"

class FoodRecipeDetail5Views(TemplateView):
    template_name = "at_project/jy/food-recipe-detail-5.html"

class CommunityBoardsViews(TemplateView):
    # login_session = request.session.get('login_session', '')
    # context = {'login_session': login_session}
    # return render(request, "at_project/jy/boards.html", context)
    template_name =  "at_project/jy/boards.html"

class CommunityBoardsWritingViews(TemplateView):
    # login_session = request.session.get('login_session', '')
    # context = {'login_session': login_session}
    # return render(request, "at_project/jy/boards-writing.html", context)
    template_name = "at_project/jy/boards-writing.html"

class CommunityBoardsTestViews(TemplateView):
    # login_session = request.session.get('login_session', '')
    # context = {'login_session': login_session}
    # return render(request, "at_project/jy/boards.html", context)
    template_name =  "at_project/jy/boards-test.html"
