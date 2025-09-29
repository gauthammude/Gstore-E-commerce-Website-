from django.contrib import admin
from django.urls import path, include
from . import views
urlpatterns = [
    path('admin/', admin.site.urls),
    path('cart/', views.cart, name='cart'),
    path('', views.register_view, name='register'),
    path('signin/', views.signin_view, name='signin'),
    path('help/', views.help, name='help'),
    path('accounts/', include('accounts.urls')),
   path('payment/', views.payment_view, name='payment'),
    path('payment/success/', views.payment_success, name='payment_success'),
    path('payment/failed/', views.payment_failed, name='payment_failed'),
    
    
]
