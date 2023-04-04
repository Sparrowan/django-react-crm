from .views import CustomerCreateView
from django.urls import path

app_name = 'customers'

urlpatterns = [
     path('create/', CustomerCreateView.as_view(), name='customers-create'),
]