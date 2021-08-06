from django.db import models


# Create your models here.

class LikeKPop(models.Model):
    idol_name = models.CharField(max_length=100)
    idol_group = models.TextField()
    idol_image = models.TextField()
