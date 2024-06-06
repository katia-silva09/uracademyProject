from django.db import models
from django.contrib.auth.models import User
import os

# Define la función que determina la ruta de almacenamiento de la imagen
def get_upload_path(instance, filename):
    # Determinar la clase del objeto al que está asociada la imagen
    if instance.course:
        model_name = instance.course._meta.model_name
    elif instance.instructor:
        model_name = instance.instructor._meta.model_name
    elif instance.blog:
        model_name = instance.blog._meta.model_name
    elif instance.documentation:
        model_name = instance.documentation._meta.model_name
    elif instance.customer:
        model_name = instance.customer._meta.model_name
    elif instance.categorycourse:
        model_name = instance.categorycourse._meta.model_name
    else:
        model_name = 'unknown'
    # Crear la ruta de almacenamiento basada en la clase
    return os.path.join(f'{model_name}_imgs', filename)


class Instructor(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    name = models.CharField(max_length=50, null= False)
    image=models.ImageField(upload_to='instructor_imgs/', null= True)
    description = models.TextField(blank=True)
    cv = models.URLField(null=True, blank=True)
    linkedin=  models.URLField(null=True, blank=True)
    github= models.URLField(null=True, blank=True)
    
    
    def __str__(self):
        return self.name

# class CategoryInstructor(models.Model):
#     title = models.CharField(max_length=100)
#     detail = models.TextField(max_length=200)
    
#     def __str__(self):
#         return self.title

#la categoria del curso, ejemplo: ciberseguridad, desarrollo web, administracion de servidores, entre otros.
class CategoryCourse(models.Model):
    image=models.ImageField(upload_to='categorycourse_imgs/', null= True)
    title = models.CharField(max_length=100)
    detail = models.TextField(max_length=200)
    
    def __str__(self):
        return self.title


#course muestra la variante de curso de la categoria, es decir, interfaz de cursos ofertados por una entidad.    
class Course(models.Model):
    instructor = models.ForeignKey(Instructor, on_delete=models.SET_NULL, null=True)
    category = models.ForeignKey(CategoryCourse, on_delete=models.SET_NULL, null=True)
    title = models.CharField(max_length=200, blank=True)
    details = models.TextField(blank=False, max_length=200)
    duration = models.CharField(max_length=100)
    price  = models.FloatField(null=True)
    demo_url = models.URLField(null= True,blank=True)
    image=models.ImageField(upload_to='course_imgs/',null= True)
    
    
    def __str__(self):
        return self.title

#documentación proporciona información sobre diferentes categorias, fundamentales para modelos de principio o avanzado de aprendizaje
class Documentation (models.Model):
    title = models.TextField(max_length=200)
    description = models.TextField(null=False, max_length=200)
    image=models.ImageField(upload_to='documentation_imgs/', null= True)
    url = models.URLField(null=True)

    def __str__(self):
        return self.title
    
#informative Blog  
class Blog (models.Model):
    title = models.CharField(max_length=200, blank=True)
    description = models.TextField(blank=True)
    image=models.ImageField(upload_to='blog_imgs/', null= True)
    url = models.URLField(blank= True)
    
    def __str__(self):
        return self.title

#representa el cliente o usuario    
class  Customer(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    email = models.EmailField(blank=True)
    image=models.ImageField(upload_to='customer_imgs/', null= True)
    mobile = models.PositiveBigIntegerField(unique=True)
    
    def __str__(self):
        return self.user.username
    


class Order(models.Model):
    customer= models.ForeignKey(Customer, on_delete=models.CASCADE, related_name='order_items')
    order_time=  models.DateTimeField(auto_now_add=True)
    detail = models.TextField(null=False)
    
    def __unicode__(self):
        return '%s' %(self.order_time)
        
    
class OrderCourses (models.Model):
    order= models.ForeignKey(Order, on_delete= models.CASCADE, related_name='order_items')
    course=models.ForeignKey(Course, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.course.title
    
    
class CoursesRating(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE, related_name='customer_ratings') 
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='course_ratings')
    instructor = models.ForeignKey(Instructor, on_delete=models.CASCADE, related_name='instructor_ratings')
    rating = models.IntegerField()
    reviews = models.TextField()
    add_time = models.DateTimeField(auto_now_add=True)
        
    def __str__(self):
        return f'{self.rating} - {self.reviews}'
    
class CoursesImages(models.Model):
    course = models.ForeignKey(
        'Course',
        on_delete=models.CASCADE,
        related_name='course_imgs',
        null=True,
        blank=True
    )
    
    instructor = models.ForeignKey(
        'Instructor',
        on_delete=models.CASCADE,
        related_name='instructor_imgs',
        null=True,
        blank=True
    )
    blog = models.ForeignKey(
        'Blog',
        on_delete=models.CASCADE,
        related_name='blog_imgs',
        null=True,
        blank=True
    )
    documentation = models.ForeignKey(
        'Documentation',
        on_delete=models.CASCADE,
        related_name='documentation_imgs',
        null=True,
        blank=True
    )
    customer = models.ForeignKey(
        'Customer',
        on_delete=models.CASCADE,
        related_name='customer_imgs',
        null=True,
        blank=True
    )
    categorycourse = models.ForeignKey(
        'CategoryCourse',
        on_delete=models.CASCADE,
        related_name='categorycourse_imgs',
        null=True,
        blank=True
    )
    image = models.ImageField(upload_to=get_upload_path, null=True, blank=True)

    def __str__(self):
        return self.image.url if self.image else 'No Image'