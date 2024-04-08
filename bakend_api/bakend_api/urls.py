"""
URL configuration for bakend_api project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
    
http post http://127.0.0.1:8000/api/token/
username=admin password=root

http http://127.0.0.1:8000/api/instructor/ "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzExNDk5NDY2LCJpYXQiOjE3MTE0OTkxNjYsImp0aSI6ImIyODFjYjY1NjZkMzRjMjk4OTlhMGIyMTI0ZWEzYmI1IiwidXNlcl9pZCI6MX0.kv7lOUcA-3E4b2AVBuEDmrgGVcSPNgp-wZoKmNLDr7k

http http://127.0.0.1:8000/api/token/refresh/ refresh=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxMTU4NTU2NiwiaWF0IjoxNzExNDk5MTY2LCJqdGkiOiJhZGE5ZjZlZjdjMTI0OGU3YmY4NGE0ZWRhNzM1N2ZmYiIsInVzZXJfaWQiOjF9.Cs5hlSh0cJryDDuih-fLgh7BT0iG1PpuETsWbfvlXE0
   
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt import views as  jwt_views
from rest_framework import routers

router = routers.DefaultRouter()


urlpatterns = [
    path('admin/', admin.site.urls),
    
    path('api/', include('academy.urls')),
    path('api-auth/', include('rest_framework.urls')),
    
    path('api/token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
]

urlpatterns += router.urls
