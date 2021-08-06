from django import forms
from .models import LikeKPop


class LikeKPopForm(forms.ModelForm):
    class Meta:
        model = LikeKPop
        fields = '__all__'
