from django.contrib import admin
from . import models
# Register your models here.
admin.site.register(models.CategoryCourse)
admin.site.register(models.Course)
#admin.site.register(models.UserLocal)
admin.site.register(models.Instructor)
admin.site.register(models.Blog)
admin.site.register(models.Documentation)
admin.site.register(models.Customer)
admin.site.register(models.Order)
admin.site.register(models.OrderItems)