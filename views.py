from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.conf import settings
import stripe
def register_view(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        email = request.POST.get('email')
        password1 = request.POST.get('password1')
        password2 = request.POST.get('password2')

        if password1 != password2:
            messages.error(request, "Passwords do not match.")
            return render(request, 'register.html')

        if User.objects.filter(username=username).exists():
            messages.error(request, "Username already exists.")
            return render(request, 'register.html')

        user = User.objects.create_user(username=username, email=email, password=password1)
        login(request, user)
        return redirect('index')

    return render(request, 'register.html')


@login_required
def index_view(request):
    return render(request, 'index.html')
def fashion(request):
    return render(request,'fashion.html')
def fresh(request):
    return render(request,'fresh.html')

def today(request):
    return render(request,'today.html')

def food(request):
    return render(request,'food.html')

def grocery(request):
    return render(request,'grocery.html')

def offers(request):
    return render(request,'offers.html')

def food(request):
    return render(request,'food.html')


def electronics(request):
    return render(request,'electronics.html')

def medicens(request):
    return render(request,'medicens.html')
def books(request):
    return render(request,'books.html')


def signin_view(request):
    if request.method == 'POST':
        username = request.POST.get('username') 
        password = request.POST.get('password')  

        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            return redirect('index')
        else:
            messages.error(request, "Invalid username or password.")

    return render(request, 'signin.html')

@login_required(login_url='signin')
def index_view(request):
    return render(request, 'index.html')



