from rest_framework import serializers

from . import models
     

class InstructorSerializer(serializers.ModelSerializer):
            class Meta:
                model = models.Instructor
                fields = ('id','user','name','description','cv', 'linkedin', 'github', 'instructor_ratings', 'image')

            def __init__(self, *args, **kwargs):
                super(InstructorSerializer, self).__init__(*args, **kwargs)
                self.Meta.depth = 1
                
                    
class InstructorDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Instructor
        fields =('id','user','name','description', 'cv', 'linkedin', 'github', 'instructor_ratings', 'instructor_imgs')
        
        
    def __init__(self, *args, **kwargs):
            super(InstructorDetailSerializer, self).__init__(*args, **kwargs)
            self.Meta.depth = 1

class CategoryCourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CategoryCourse
        fields = ('id',  'title', 'detail', 'image')

    def __init__(self,*args, **kwargs):
        super(CategoryCourseSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1
class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Course
        fields = ('id','instructor', 'category', 'title', 'details', 'duration', 'course_ratings', 'image', 'price')
        
        
    def __init__(self, *args, **kwargs):
            super(CourseSerializer, self).__init__(*args, **kwargs)
            self.Meta.depth = 1
            

class CourseDetailSerializer(serializers.ModelSerializer):
            class Meta:
                model = models.Course
                fields = ('id','instructor','category', 'title', 'details', 'duration','course_imgs', 'image', 'price')
                
            def __init__(self, *args, **kwargs):
                    super(CourseDetailSerializer, self).__init__(*args, **kwargs)
                    self.Meta.depth = 1  

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Blog
        fields = ('id','title', 'description','url', 'image')
        
    def __init__(self, *args, **kwargs):
            super(BlogSerializer, self).__init__(*args, **kwargs)
            self.Meta.depth = 1    

class BlogDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Blog
        fields = ('id','title', 'description', 'url', 'image')

    def __init__(self, *args, **kwargs):
            super(BlogDetailSerializer, self).__init__(*args, **kwargs)
            self.Meta.depth = 1
            
class DocumentationSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Documentation
        fields = ('id','title', 'description', 'url', 'image') 

    def __init__(self, *args, **kwargs):
        super(DocumentationSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth =1
        
        
class DocumentationDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Documentation
        fields =('id','title', 'description', 'url', 'image')                                   
    
    def __init__(self, *args, **kwargs):
        super(DocumentationDetailSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1


class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Customer
        fields=('id','user','email', 'mobile', 'customer_ratings', 'customer_imgs')
        
    def __init__(self,*args,**kwargs):
        super(CustomerSerializer,self).__init__(*args, **kwargs)    

class CustomerDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Customer
        fields=('id', 'user', 'email', 'mobile','image') 
        
    def __init__(self,*args,**kwargs):
        super(CustomerDetailSerializer,self).__init__(*args, **kwargs)
        self.Meta.depth = 1         
        
class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Order
        fields = ('id', 'customer', 'detail')
    
    
    def __init__(self, *args, **kwargs):
        super(OrderSerializer, self).__init__(*args,**kwargs)
        self.Meta.depth=1    
    
       

class OrderDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.OrderCourses 
        fields = ('id', 'course', 'order')
        
    def __init__(self,*args, **kwargs):
        super(OrderDetailSerializer,self).__init__(*args, **kwargs)
        self.Meta.depth = 1 
        
class CourseRatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CoursesRating
        fields = ['id','customer', 'course', 'instructor', 'rating', 'reviews', 'add_time']
        
    def __init__(self, *args, **kwargs):
        super(CourseRatingSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth =1 

class CourseImageSerializer(serializers.ModelSerializer):
    course = CourseSerializer(read_only=True)
    coursedetail = CourseDetailSerializer(read_only=True)
    instructor = InstructorSerializer(read_only=True)
    instructordetail = InstructorDetailSerializer(read_only=True)
    blog = BlogSerializer(read_only=True)
    documentation = DocumentationSerializer(read_only=True)
    customer = CustomerSerializer(read_only=True)
    categorycourse=CategoryCourseSerializer (read_only=True)

    class Meta:
        model = models.CoursesImages
        fields = ['id', 'course', 'instructor', 'blog', 'documentation', 'customer', 'categorycourse','coursedetail', 'image']
