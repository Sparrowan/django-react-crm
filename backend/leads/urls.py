from .views import LeadCreateView
from django.urls import path

app_name = 'leads'

urlpatterns = [
     path('create/', LeadCreateView.as_view(), name='leads-create'),
]