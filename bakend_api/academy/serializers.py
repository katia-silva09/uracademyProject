from rest_framework import serializers

from . import models
     

class InstructorSerializer(serializers.ModelSerializer):
            class Meta:
                model = models.Instructor
                fields = ('id','user','name', 'last_name', 'description','cv', 'linkedin', 'github')

            def __init__(self, *args, **kwargs):
                super(InstructorSerializer, self).__init__(*args, **kwargs)
                #self.Meta.depth = 1
                
                    
class InstructorDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Instructor
        fields =('id','user', 'name', 'last_name','description', 'cv', 'linkedin', 'github')
        
        
    def __init__(self, *args, **kwargs):
            super(InstructorDetailSerializer, self).__init__(*args, **kwargs)
            #self.Meta.depth = 1

class CategoryCourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CategoryCourse
        fields = ('id',  'title', 'detail')

    def __init__(self,*args, **kwargs):
        super(CategoryCourseSerializer, self).__init__(*args, **kwargs)
        #self.Meta.depth = 1
class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Course
        fields = ('id','instructor', 'category', 'title', 'details', 'duration')
        
        
    def __init__(self, *args, **kwargs):
            super(CourseSerializer, self).__init__(*args, **kwargs)
            #self.Meta.depth = 1
            

class CourseDetailSerializer(serializers.ModelSerializer):
            class Meta:
                model = models.Course
                fields = ('id','instructor','category', 'title', 'details', 'duration')
                
            def __init__(self, *args, **kwargs):
                    super(CourseDetailSerializer, self).__init__(*args, **kwargs)
                    #self.Meta.depth = 1  


            
class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Blog
        fields = ('id','title', 'description','url')
        
    def __init__(self, *args, **kwargs):
            super(BlogSerializer, self).__init__(*args, **kwargs)
            #self.Meta.depth = 1    

class BlogDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Blog
        fields = ('id','title', 'description', 'url')

    def __init__(self, *args, **kwargs):
            super(BlogDetailSerializer, self).__init__(*args, **kwargs)
            #self.Meta.depth = 1
            
class DocumentationSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Documentation
        fields = ('id','title', 'description', 'url') 

    def __init__(self, *args, **kwargs):
        super(DocumentationSerializer, self).__init__(*args, **kwargs)
        #self.Meta.depth =1
        
        
class DocumentationDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Documentation
        fields =('id','title', 'description', 'url')                                   
    
    def __init__(self, *args, **kwargs):
        super(DocumentationDetailSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Customer
        fields=('id','user','name', 'email', 'cellphone')
        
    def __init__(self,*args,**kwargs):
        super(CustomerSerializer,self).__init__(*args, **kwargs)    

class CustomerDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Customer
        fields=('id', 'user', 'name', 'email', 'cellphone') 
        
    def __init__(self,*args,**kwargs):
        super(CustomerDetailSerializer,self).__init__(*args, **kwargs)
        #self.Meta.depth = 1         
        
class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Order
        fields = ('id', 'customer', 'detail')
        #depth = 1

class OrderDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.OrderItems
        fields = ('id', 'order_items', 'course')
        #depth = 1