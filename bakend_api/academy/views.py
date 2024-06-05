from django.shortcuts import render
from rest_framework import generics, pagination, viewsets
from . import serializers
from . import models
# Create your views here.


from django.db import IntegrityError
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from  django.contrib.auth import authenticate
from  django.contrib.auth.models import User
from .models import Instructor
from .models import Customer
from django.db.models.signals import post_save
from django.dispatch import receiver


@receiver(post_save, sender=User)
def create_instructor(sender, instance, created, **kwargs):
    if created:
        Instructor.objects.create(user=instance, name=instance.first_name,)


@csrf_exempt
def Instructor_login(request):
    username = request.POST.get('username')
    password = request.POST.get('password')
    user = authenticate(username=username, password=password)
    if user:
        msg = {
            'bool': True,
            'user': user.username
        }
    else:
        msg = {
            'bool': False,
            'msg': 'Nombre de usuario o contraseña inválido!!' 
        }
    return JsonResponse(msg)

@csrf_exempt
def Instructor_register(request):
    if request.method == 'POST':
        first_name = request.POST.get('first_name')
        last_name = request.POST.get('last_name')
        username = request.POST.get('username')
        email = request.POST.get('email')
        password = request.POST.get('password')
        description = request.POST.get('description')
        cv = request.POST.get('cv')
        linkedin = request.POST.get('linkedin')
        github = request.POST.get('github')

        if not username or not email or not password or not first_name or not last_name:
            return JsonResponse({'bool': False, 'msg': 'Los campos de nombre de usuario, correo electrónico, contraseña, nombre y apellido son necesarios.'})

        try:
            if User.objects.filter(username=username).exists():
                return JsonResponse({'bool': False, 'msg': 'El nombre de usuario ya está en uso.'})

            user = User.objects.create_user(username=username, email=email, password=password)
            instructor = Instructor.objects.create(
                user=user,
                name=f"{first_name} {last_name}",
                description=description,
                cv=cv,
                linkedin=linkedin,
                github=github
            )

            return JsonResponse({'bool': True, 'user': user.id, 'instructor': instructor.id, 'msg': 'Gracias por registrarse como instructor!'})
        except Exception as e:
            return JsonResponse({'bool': False, 'msg': str(e)})

    return JsonResponse({'bool': False, 'msg': 'Método no permitido'})
class InstructorList(generics.ListCreateAPIView):
    queryset =models.Instructor.objects.all()
    serializer_class = serializers.InstructorSerializer
    pagination_classes = pagination.PageNumberPagination
    
    # def get_queryset(self):
    #     qs=super().get_queryset()
    #     if 'category' in self.request.GET:
    #         category = self.request.GET['category']
    #         category = models.Categor.objects.get(id=category)
    #         qs = qs.filter(category=category)
            
    #     return qs    

class InstructorDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset =models.Instructor.objects.all()
    serializer_class = serializers.InstructorDetailSerializer
    
    
class CategoryCourse(generics.ListAPIView):  
    queryset = models.CategoryCourse.objects.all()
    serializer_class = serializers.CategoryCourseSerializer
    
       
class CourseList(generics.ListCreateAPIView):
    queryset =models.Course.objects.all()
    serializer_class = serializers.CourseSerializer
    pagination_classes = pagination.PageNumberPagination
    
    def get_queryset(self):
        qs=super().get_queryset()
        if 'category' in self.request.GET:
            category = self.request.GET['category']
            category = models.CategoryCourse.objects.get(id=category)
            qs = qs.filter(category=category)
            
        return qs
class RelatedCourseList(generics.ListCreateAPIView):
    queryset = models.Course.objects.all()
    serializer_class = serializers.CourseSerializer
    pagination_class = pagination.PageNumberPagination
    
    def get_queryset(self):
        qs = super().get_queryset()
        course_id = self.kwargs['pk']
        course = models.Course.objects.get(id=course_id)
        qs =qs.filter(category=course.category).exclude(id=course_id)
        return qs
    
class CourseDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset =models.Course.objects.all()
    serializer_class = serializers.CourseDetailSerializer
    
class BlogList(generics.ListCreateAPIView):
    queryset = models.Blog.objects.all()
    serializer_class = serializers.BlogSerializer
    
    
class BlogDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Blog.objects.all()
    serializer_class = serializers.BlogDetailSerializer
    
class DocumentationList(generics.ListCreateAPIView):
    queryset = models.Documentation.objects.all()
    serializer_class = serializers.DocumentationSerializer

class DocumentationDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Documentation.objects.all()
    serializer_class = serializers.DocumentationDetailSerializer
      
    
class CustomerList(generics.ListCreateAPIView):
    queryset = models.Customer.objects.all()
    serializer_class = serializers. CustomerSerializer
   #permission_classes = [permissions.IsAuthenticated]
   
class CustomerDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset= models.Customer.objects.all() 
    serializer_class= serializers. CustomerDetailSerializer
    
@receiver(post_save, sender=User)
def create_customer(sender, instance, created, **kwargs):
    if created:
        Customer.objects.create(user=instance, email=instance.email)
    
@csrf_exempt
def customer_login (request):
    username = request.POST.get('username')
    password = request.POST.get('password')
    user = authenticate(username=username, password=password)
    if user:
        msg={
            'bool': True,
            'user': user.username
        }
    else:
        msg={
            'bool': False,
            'msg': 'Nombre de usuario o contraseña invalido!!' 
        }
    return JsonResponse(msg)

@csrf_exempt
def customer_register (request):
    first_name = request.POST.get('first_name')
    last_name = request.POST.get('last_name')
    username = request.POST.get('username')
    email = request.POST.get('email')
    mobile = request.POST.get('mobile')
    password = request.POST.get('password')
    try:
        user= User.objects.create(
            first_name=first_name,
            last_name= last_name,
            username=username,
            email=email,
            password=password,
        )
        if user:
            try:
                #create customer
                customer = models.Customer.objects.create(
                    user = user,
                    mobile = mobile
                )
                msg={
                    'bool':True,
                    'user':User.id,
                    'customer': customer.id,
                    'msg': 'Gracias por su registro'
                }
            except IndentationError:
                msg={
                    'bool': False,
                    'msg' : 'El celular ya existe'
                }
        else:
            msg={
                'bool': False,
                'msg': 'Ooops... ha ocurrido un error!' 
            }
    except IndentationError:
           msg={
                'bool': False,
                'msg': 'El usuario ya existe!' 
            }
        
    return JsonResponse(msg)
    
class OrderList(generics.ListCreateAPIView):
    queryset = models.Order.objects.all()
    serializer_class= serializers.OrderSerializer
    
class OrderDetail(generics.ListAPIView): 
    serializer_class = serializers.OrderDetailSerializer         
    
    def get_queryset(self):
        order_id=  self.kwargs['pk']
        order= models.Order.objects.get(id=order_id)
        order_items = models.OrderCourses.objects.filter(order=order)
        return order_items
    
class CourseRatingViewSet(viewsets.ModelViewSet):
    queryset = models.CoursesRating.objects.all()
    serializer_class= serializers.CourseRatingSerializer
    
    
class CategoryList(generics.ListCreateAPIView):
    queryset= models.CategoryCourse.objects.all()
    serializer_class= serializers.CategoryCourseSerializer