from django.urls import path
from accounts.views import *
from django.contrib.auth.views import LogoutView
app_name = 'accounts'

urlpatterns = [
    path('signup/', signup, name='signup'),
    path('signin/', signin, name='signin'),
    path("logout/", LogoutView.as_view(), name="logout")
]
