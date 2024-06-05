from django.contrib import admin
from . import models
from .models import Instructor
from .serializers import InstructorSerializer
# Register your models here.
admin.site.register(models.CategoryCourse)
#admin.site.register(models.UserLocal)
# admin.site.register(models.Instructor)
admin.site.register(models.Blog)
admin.site.register(models.Documentation)
# admin.site.register(models.Customer)
admin.site.register(models.Order)
admin.site.register(models.OrderCourses)
admin.site.register(models.CoursesRating)


admin.site.register(models.CoursesImages)


class CourseImageInline(admin.StackedInline):
     model = models.CoursesImages
     
class CourseAdmin(admin.ModelAdmin):
      prepopulated_fields={'title':('title',)}
      inlines = [
          CourseImageInline
      ]

admin.site.register(models.Course, CourseAdmin)
class CustomerAdmin(admin.ModelAdmin):
    list_display=['username', 'mobile']
    def username(self,obj):
        return obj.user.username
    
admin.site.register(models.Customer, CustomerAdmin)

class InstructorAdmin(admin.ModelAdmin):
    serializer = InstructorSerializer

admin.site.register(Instructor, InstructorAdmin)