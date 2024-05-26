from django.shortcuts import render
from rest_framework import generics, pagination, viewsets
from . import serializers
from . import models
# Create your views here.


class InstructorList(generics.ListCreateAPIView):
    queryset =models.Instructor.objects.all()
    serializer_class = serializers.InstructorSerializer

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