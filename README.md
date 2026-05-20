# CalcMax™ Enterprise Scientific Calculator

A paywalled scientific calculator desktop app built with Electron, React, and Stripe. **A joke/parody project.**

![CalcMaxxing preview](assets/CalcMaxxing.png)

## Founder's Story

![CalcMax founder](assets/Founder.png)

<p align="center"><sub>our founder (real picture, not edited)</sub></p>

---

I was not always the visionary you see before you today. I began as a basic mathematician, doing ordinary calculations for ordinary people who did not understand the premium potential of numbers.

Then I lost my job. A lesser man would have quit. I did not quit. I simply entered an aggressive outdoor networking phase that some people, inaccurately and without entrepreneurial context, called "begging."

For years, I survived on the streets by providing high-value arithmetic solutions to pedestrians. Percentages. Fractions. Emergency tip calculations. You name it, I monetized it verbally.

Then one day, destiny fell from a schoolboy's bag.

A scientific calculator.

Now, to be clear, the calculator I found was regular technology. No AI. No premium acceleration. No monthly success infrastructure. Before that, I was using normal calculators. Weak calculators. Primitive calculators. Calculators that needed sunlight, batteries, and sometimes a very specific angle near a window just to produce a number.

That was the struggle I had to overcome.

I picked it up, pressed several buttons I did not fully understand, and immediately knew I was holding opportunity. Within weeks, I was doing advanced math stuff for Fortune 500 companies, Y Combinator startups, FAANG teams, and executives who needed projections so complicated nobody would question them.

I built a fortune the old-fashioned way, one suspicious projection at a time. Not by working harder, but by calculating smarter. Also by charging monthly.

You, however, do not have to suffer like I suffered.

With CalcMax, you are getting the advanced version I wish I had: AI-powered, payment-enhanced, better, faster, and profitabler.

Now I am giving you access to the same mathematical success system that changed my life. For only $49.99 a month, CalcMax allows you to experience premium computation, executive-grade answers, and the confidence of a man who has definitely read the terms and conditions.

Do not wait. Numbers are moving right now.

## Reviews

> ⭐⭐⭐⭐⭐ "I typed `2 + 2`, paid $0.99, and received `4`. Worth every cent. Possibly too cheap."
>
> **Melissa, Verified Math Enjoyer**

> ⭐⭐⭐⭐⭐ "It's not a calculator. It's a payment experience that occasionally does math."
>
> **Steven Jobbë, Turtleneck Visionary**

> ⭐⭐⭐⭐⭐ "CalcMax is inevitable. The button economy has arrived. I am redirecting three factories toward premium equals-sign production."
>
> **Yi Liang Musk, CEO of Several Things**

> ⭐⭐⭐⭐⭐ "Finally, a scientific calculator with the confidence of a luxury watch and the business model of airport Wi-Fi."
>
> **Anonymous CFO**

> ⭐☆☆☆☆ "This is a scam. I entered my card once and now the app keeps buying premium calculator skins. I tried to cancel, and now there's a black SUV outside my hous"
>
> **Jefrieque Ebbstein, Former Financier**

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
