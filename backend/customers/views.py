from django.shortcuts import render
from .serializers import CustomerSerializer
from .models import Customer
from rest_framework.generics import (
    ListAPIView, RetrieveAPIView, CreateAPIView,
    UpdateAPIView, DestroyAPIView
)
from rest_framework.permissions import AllowAny, IsAuthenticated

class CustomerCreateView(CreateAPIView):
    permission_classes = (IsAuthenticated, )
    serializer_class = CustomerSerializer
    queryset = Customer.objects.all()