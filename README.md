## Installation

### Prerequisites
- Python 3.10+
- pip
- A Stripe account (test mode) — https://dashboard.stripe.com

### Setup

1. Clone the repository
   git clone https://github.com/gauthammude/Gstore-E-commerce-Website-.git
   cd Gstore-E-commerce-Website-

2. Create and activate a virtual environment
   python -m venv venv
   source venv/bin/activate      # On Windows: venv\Scripts\activate

3. Install dependencies
   pip install -r requirements.txt

4. Set up Stripe API keys
   In web/settings.py (or better, via environment variables), set:
   STRIPE_SECRET_KEY = "your_stripe_test_secret_key"
   STRIPE_PUBLISHABLE_KEY = "your_stripe_test_publishable_key"

5. Run migrations
   python manage.py migrate

6. (Optional) Create an admin user
   python manage.py createsuperuser

7. Start the development server
   python manage.py runserver

The app will be available at http://127.0.0.1:8000/
