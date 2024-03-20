from django.db import models
from django.contrib.auth.models import User

class Instructor(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    name = models.CharField(max_length=50, null= False)
    last_name = models.CharField(max_length=20)
    image = models.ImageField()
    description = models.TextField(blank=False)
    cv = models.URLField(null=True)
    linkedin=  models.URLField(null=True)
    github= models.URLField(null=True)
    
    
    def __str__(self):
        return self.name 



class CategoryCourse(models.Model):
    title = models.CharField(max_length=100)
    detail = models.TextField(max_length=200)
    
    def __str__(self):
        return self.title
    
class Course(models.Model):
    category = models.ForeignKey(CategoryCourse, on_delete=models.SET_NULL, null=True,  related_name ='course_category')
    instructor = models.ForeignKey(Instructor, on_delete=models.SET_NULL, null=True, related_name='instructor')
    title = models.CharField(max_length=200)
    details = models.TextField(blank=False, max_length=200)
    duration = models.CharField(max_length=100)
    image = models.ImageField(null=True)
    
    
    def __str__(self):
        return self.title

class Documentation (models.Model):
    title = models.TextField(max_length=200)
    description = models.TextField(null=False, max_length=200)
    image = models.ImageField(null=True)
    url = models.URLField(null=True)

    def __str__(self):
        return self.title
    
class Blog (models.Model):
    title = models.CharField(max_length=200, null = False)
    description = models.TextField(null=False)
    url = models.URLField(null = False)
    
    def __str__(self):
        return self.title
    
class  Customer(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=50, null = False)
    email = models.EmailField(null=False, max_length=100)
    image = models.ImageField(null=True)
    cellphone = models.PositiveBigIntegerField(max_length=20)
    
    