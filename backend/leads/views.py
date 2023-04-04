from django.shortcuts import render
from .serializers import LeadSerializer
from .models import Lead
from rest_framework.generics import (
    ListAPIView, RetrieveAPIView, CreateAPIView,
    UpdateAPIView, DestroyAPIView
)
from rest_framework.permissions import AllowAny, IsAuthenticated

class LeadCreateView(CreateAPIView):
    permission_classes = (IsAuthenticated, )
    serializer_class = LeadSerializer
    queryset = Lead.objects.all()

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)

class LeadListView(ListAPIView):
    permission_classes = (AllowAny,)
    serializer_class = LeadSerializer
    queryset = Lead.objects.all()