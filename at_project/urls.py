from django.urls import path
from at_project.views import *

app_name = 'at_project'
urlpatterns = [
    # 경현
    path('k-food-report/', KFoodReportViews.as_view(), name='k-food-report'),
    path('recipe-ajax/', gy_views.recipe_ajax, name='recipe-ajax'),
    path('idol/', KFoodIdolViews.as_view(), name='idol'),
    path('food-recipe-2/', FoodRecipe2Views.as_view(), name='food-recipe-2'),
    path('test/', TableauTestViews.as_view(), name='test'),
    path('k-tour/', KTourViews.as_view(), name='k-tour'),
    path('k-tour-select/<str:id>', KTourSelectViews.as_view(), name='k-tour-select'),
    # path('k-tour/', AboutViews.as_view(), name='k-tour'),

    # 지원
    path('', IndexMainViews.as_view(), name='index'),
    path('k-food-report-2/', KFoodReport2Views.as_view(), name='k-food-report-2'),
    path('food-recipe-1/', FoodRecipe1Views.as_view(), name='food-recipe-1'),
]
