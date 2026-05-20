// server.js
// Express server for CalcMax™ – creates Stripe PaymentIntents in test mode
// Set STRIPE_SECRET_KEY as an environment variable in Railway — never hardcode it

const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();

// Enable CORS for all origins (required for frontend)
app.use(cors());
app.use(express.json());

// POST /create-payment-intent
app.post('/create-payment-intent', async (req, res) => {
  try {
    const { amount } = req.body; // amount in dollars (e.g., 0.99, 4.99, 49.99)

    // Validate amount
    const numericAmount = parseFloat(amount);
    if (isNaN(numericAmount) || numericAmount <= 0) {
      return res.status(400).json({ error: 'Invalid amount' });
    }

    // Stripe works in cents
    const amountInCents = Math.round(numericAmount * 100);

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amountInCents,
      currency: 'usd',
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    console.error('Stripe error:', err);
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`CalcMax payment backend running on port ${PORT}`);
});
