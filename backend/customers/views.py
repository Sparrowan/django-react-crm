from django.shortcuts import render
from .serializers import CustomerSerializer
from .models import Customer
from leads.models import Lead
from rest_framework.generics import (
    ListAPIView, RetrieveAPIView, CreateAPIView,
    UpdateAPIView, DestroyAPIView
)
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK, HTTP_400_BAD_REQUEST

from rest_framework.permissions import AllowAny, IsAuthenticated

class CustomerCreateView(CreateAPIView):
    permission_classes = (IsAuthenticated, )
    serializer_class = CustomerSerializer
    queryset = Customer.objects.all()

    def perform_create(self, serializer,*args, **kwargs):
        lead_id = self.request.data.get('lead_id', None)
        if lead_id is not None:
            lead = Lead.objects.get(id=lead_id)
            serializer.save(lead=lead,created_by=self.request.user)
        return Response({"message": "Invalid data received"}, status=HTTP_400_BAD_REQUEST)
    
class CustomerListView(ListAPIView):
    permission_classes = (AllowAny,)
    serializer_class = CustomerSerializer
    queryset = Customer.objects.all()