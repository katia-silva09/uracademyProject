from django.contrib import admin
from . import models
# Register your models here.
admin.site.register(models.CategoryCourse)
#admin.site.register(models.UserLocal)
admin.site.register(models.Instructor)
admin.site.register(models.Blog)
admin.site.register(models.Documentation)
admin.site.register(models.Customer)
admin.site.register(models.Order)
admin.site.register(models.OrderCourses)
admin.site.register(models.CoursesRating)


admin.site.register(models.CoursesImages)


class CourseImageInline(admin.StackedInline):
     model = models.CoursesImages
     
# class CourseAdmin(admin.ModelAdmin):
#      prepopulated_fields={'title':('title',)}
#      inlines = [
#          CourseImageInline
#      ]

# admin.site.register(models.Course)