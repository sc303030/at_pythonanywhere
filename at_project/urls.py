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
    path('mypage/', MyPageViews.as_view(), name='mypage'),
    path('like-kpop/', UpdateKPop.as_view(), name='like-kpop'),
    path('kpop/', KpopViews.as_view(), name='kpop'),
    # path('k-tour/', AboutViews.as_view(), name='k-tour'),

    # 지원
    path('', IndexMainViews.as_view(), name='index'),
    path('k-food-report-2/', KFoodReport2Views.as_view(), name='k-food-report-2'),
    path('k-food-report-3/', KFoodReport3Views.as_view(), name='k-food-report-3'),
    path('k-food-report-4/', KFoodReport4Views.as_view(), name='k-food-report-4'),

    path('food-recipe-1/', FoodRecipe1Views.as_view(), name='food-recipe-1'),
    path('food-recipe-main/', FoodRecipeMainViews.as_view(), name='food-recipe-main'),
    path('food-recipe-detail/', FoodRecipeDetailViews.as_view(), name='food-recipe-detail'),
    path('food-recipe-detail-1/', FoodRecipeDetail1Views.as_view(), name='food-recipe-detail-1'),
    path('food-recipe-detail-2/', FoodRecipeDetail2Views.as_view(), name='food-recipe-detail-2'),
    path('food-recipe-detail-3/', FoodRecipeDetail3Views.as_view(), name='food-recipe-detail-3'),
    path('food-recipe-detail-4/', FoodRecipeDetail4Views.as_view(), name='food-recipe-detail-4'),
    path('food-recipe-detail-5/', FoodRecipeDetail5Views.as_view(), name='food-recipe-detail-5'),

    path('boards/', CommunityBoardsViews.as_view(), name='boards'),
    path('writing/', CommunityBoardsWritingViews.as_view(), name='boards-writing'),
    path('boards-test/', CommunityBoardsTestViews.as_view(), name='boards-test'),
]
