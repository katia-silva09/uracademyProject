from rest_framework import serializers

from . import models

"""
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.UserLocal
        fields = ('id', 'user', 'name', 'last_name', 'description', 'image')

    def __init__(self, *args, **kwargs):
            super(UserSerializer, self).__init__(*args, **kwargs)
            self.Meta.depth = 1

class UserDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.UserLocal
        fields = ('id', 'user', 'name', 'last_name', 'description', 'image')  
        
    def __init__(self, *args, **kwargs):
            super(UserSerializer, self).__init__(*args, **kwargs)
            self.Meta.depth = 1 
"""                 

class InstructorSerializer(serializers.ModelSerializer):
            class Meta:
                model = models.Instructor
                fields = ('id','name', 'last_name', 'image', 'description','cv', 'linkedin', 'github')

            def __init__(self, *args, **kwargs):
                super(InstructorSerializer, self).__init__(*args, **kwargs)
                self.Meta.depth = 1
                
                    
class InstructorDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Instructor
        fields =('id','name', 'last_name', 'image', 'description', 'cv', 'linkedin', 'github')
        
        
    def __init__(self, *args, **kwargs):
            super(InstructorDetailSerializer, self).__init__(*args, **kwargs)
            self.Meta.depth = 1

class CategoryCourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CategoryCourse
        fields = ('id',  'title', 'detail')

    def __init__(self,*args, **kwargs):
        super(CategoryCourseSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1
class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Course
        fields = ('id','instructor', 'category', 'title', 'details', 'duration', 'image')
        
        
    def __init__(self, *args, **kwargs):
            super(CourseSerializer, self).__init__(*args, **kwargs)
            self.Meta.depth = 1
            

class CourseDetailSerializer(serializers.ModelSerializer):
            class Meta:
                model = models.Course
                fields = ('id','instructor', 'title', 'details', 'duration', 'image')
                
            def __init__(self, *args, **kwargs):
                    super(CourseDetailSerializer, self).__init__(*args, **kwargs)
                    self.Meta.depth = 1  


            
class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Blog
        fields = ('id','title', 'description','url')
        
    def __init__(self, *args, **kwargs):
            super(BlogSerializer, self).__init__(*args, **kwargs)
            self.Meta.depth = 1    

class BlogDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Blog
        fields = ('id','title', 'description', 'url')

    def __init__(self, *args, **kwargs):
            super(BlogDetailSerializer, self).__init__(*args, **kwargs)
            self.Meta.depth = 1
            
class DocumentationSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Documentation
        fields = ('id','title', 'description', 'image', 'url') 

    def __init__(self, *args, **kwargs):
        super(DocumentationSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth =1
        
        
class DocumentationDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Documentation
        fields =('id','title', 'description', 'image', 'url')                                   
    
    def __init__(self, *args, **kwargs):
        super(DocumentationDetailSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth = 1

            