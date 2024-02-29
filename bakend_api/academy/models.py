from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class Course(models.Model):
    
    title = models.CharField(max_length=200)
    details = models.TextField(null=True, max_length=200)
    duration = models.CharField(max_length=100)
    image = models.ImageField(null=True)
    url = models.URLField(null=True)
    
    def __str__(self):
        return self.title
    
class Instructor (models.Model):
    name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    image = models.ImageField(null=True)
    description = models.TextField(null=True)
    url = models.URLField(null=True)
    
    def __str__(self):
        return self.name, self.last_name   
     
class UserLocal(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    description = models.TextField(null=True, max_length=200)
    image = models.ImageField(null=True)

    def __str__(self):
        return self.user.username
    
class Documentation (models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(null=False, max_length=200)
    image = models.ImageField(null=False)
    url = models.URLField(null=False)

    def __str__(self):
        return self.title
    
class Blog (models.Model):
    title = models.CharField(max_length=200, null = False)
    description = models.TextField(null=False)
    url = models.URLField(null = False)
    
    def __str__(self):
        return self.title