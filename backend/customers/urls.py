from .views import CustomerCreateView, CustomerListView
from django.urls import path

app_name = 'customers'

urlpatterns = [
     path('create/', CustomerCreateView.as_view(), name='customers-create'),
     path('list/', CustomerListView.as_view(), name='customers-list'),
]