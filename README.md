# CalcMax™ Enterprise Scientific Calculator

A paywalled scientific calculator desktop app built with Electron, React, and Stripe. A joke/parody project.

## Preview
![CalcMaxxing preview](assets/CalcMaxxing.png)

## Features
- Full scientific calculator (trig, log, factorial, etc.)
- Paywall on every answer — unlock with Stripe test payments
- Three subscription tiers: Pay Per Answer ($0.99), Monthly ($4.99), Annual ($49.99)
- Background changes between poor and rich dog depending on subscription status
- Rainbow strobing lights
- Lobby music and payment screen music
- Boo sound effect when closing without paying
- Cheer sound effect on successful payment
- Keyboard support

## Setup

### 1. Install dependencies
```bash
npm install
```

### 2. Add your Stripe test keys
- In `server.js`, replace `STRIPE_TEST_SECRET_KEY` with your key from [Stripe Dashboard](https://dashboard.stripe.com) → Developers → API Keys (starts with `sk_test_`)
- In `calc_github.html`, replace `STRIPE_TEST_PUBLISHABLE_KEY` with your publishable key (starts with `pk_test_`)

### 3. Add your own media files
Place these in the `App` folder:
- `bg_poor.png` — background image before payment
- `bg_rich.png` — background image after payment
- `theme1.mp3` — lobby music
- `theme2.mp3` — payment screen music
- `boo.mp3` — sound when closing without paying
- `cheer.mp3` — sound on successful payment
- `favicon.ico` — app icon

### 4. Run the backend
```bash
npm run server
```

### 5. Launch the app
```bash
npm start
```

### 6. Test payments
Use Stripe test card: `4242 4242 4242 4242`, any future date, any CVV.

## Disclaimer
This is a parody app. Payments run in Stripe test mode — no real charges are made.
