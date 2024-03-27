from django.db import models
from django.contrib.auth.models import User

class Instructor(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    name = models.CharField(max_length=50, null= False)
    last_name = models.CharField(max_length=20)
    #image = models.ImageField()
    description = models.TextField(blank=False)
    cv = models.URLField(null=True)
    linkedin=  models.URLField(null=True)
    github= models.URLField(null=True)
    
    
    def __str__(self):
        return self.name 


#la categoria del curso, ejemplo: ciberseguridad, desarrollo web, administracion de servidores, entre otros.
class CategoryCourse(models.Model):
    title = models.CharField(max_length=100)
    detail = models.TextField(max_length=200)
    
    def __str__(self):
        return self.title


#course muestra la variante de curso de la categoria, es decir, interfaz de cursos ofertados por una entidad.    
class Course(models.Model):
    instructor = models.ForeignKey(Instructor, on_delete=models.SET_NULL, null=True)
    category = models.ForeignKey(CategoryCourse, on_delete=models.SET_NULL, null=True)
    title = models.CharField(max_length=200)
    details = models.TextField(blank=False, max_length=200)
    duration = models.CharField(max_length=100)
    price  = models.FloatField(null=True)
    #image = models.ImageField(null=True)
    
    
    def __str__(self):
        return self.title

#documentación proporciona información sobre diferentes categorias, fundamentales para modelos de principio o avanzado de aprendizaje
class Documentation (models.Model):
    title = models.TextField(max_length=200)
    description = models.TextField(null=False, max_length=200)
    #image = models.ImageField(null=True)
    url = models.URLField(null=True)

    def __str__(self):
        return self.title
    
#informative Blog  
class Blog (models.Model):
    title = models.CharField(max_length=200, blank=True)
    description = models.TextField(blank=True)
    url = models.URLField(blank= True)
    
    def __str__(self):
        return self.title

#representa el cliente o usuario    
class  Customer(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, default=1)
    name = models.CharField(max_length=50, null = False)
    email = models.EmailField(blank=True)
    #image = models.ImageField(null=True)
    cellphone = models.PositiveBigIntegerField()
    
    def __str__(self):
        return self.name
    


class Order(models.Model):
    customer= models.ForeignKey(Customer, on_delete=models.CASCADE)
    order_time=  models.DateTimeField(auto_now_add=True)
    detail = models.TextField(null=False)
    
    def __unicode__(self):
        return '%s' %(self.order_time)
        
    
class OrderCourses (models.Model):
    order_items= models.ForeignKey(Order, on_delete= models.CASCADE)
    course=models.ForeignKey(Course, on_delete=models.CASCADE)
    
    def __init__(self):
        return self.course.title