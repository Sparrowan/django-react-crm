from .views import LeadCreateView, LeadListView
from django.urls import path

app_name = 'leads'

urlpatterns = [
     path('create/', LeadCreateView.as_view(), name='leads-create'),
     path('list/', LeadListView.as_view(), name='leads-list'),
]