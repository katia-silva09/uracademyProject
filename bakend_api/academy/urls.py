from django.urls import path
from . import views

urlpatterns = [
    #path('users/', views.UserList.as_view()),   
    
    #instructor
    path('instructors/', views.InstructorList.as_view()),
    path('instructor/<int:pk>/', views.InstructorDetail.as_view()),
    
    #categorycourses
    path('coursescategorys/', views.CategoryCourse.as_view()),
    
    #course
    path('courses/', views.CourseList.as_view()),
    path('course/<int:pk>/', views.CourseDetail.as_view()),
    
    #blog
    path('blogs/', views.BlogList.as_view()),
    path('blog/<int:pk>/', views.BlogDetail.as_view()),
    
    #documentation
    path('documentations', views.DocumentationList.as_view()),
    path('documentation/<int:pk>/', views.DocumentationDetail.as_view()),
    
    #customer
    path('customers/', views.CustomerList.as_view()),
    path('customer/<int:pk>', views.CustomerDetail.as_view())
]
