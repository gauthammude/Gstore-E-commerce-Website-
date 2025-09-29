from django.urls import path
from . import views

urlpatterns = [
    path('index', views.index_view, name='index'),
    path('fresh', views.fresh, name='fresh'),
    path('today', views.today, name='today'),
    path('offers', views.offers, name='offers'),
    path('food', views.food, name='food'),
    path('grocery', views.grocery, name='grocery'),
    path('electronics', views.electronics, name='electronics'),
    path('fashion', views.fashion, name='fashion'),
    path('medicens', views.medicens, name='medicens'),
    path('books', views.books, name='books'),

    

    
]
