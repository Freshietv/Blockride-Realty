#  Blockride Realty

 Blockride Realty is a  -data crypto investment dashboard built with Next.js, React, Tailwind CSS, Framer Motion and Recharts.

## Features

- Login and signup screens
- Selectable  user accounts
- Portfolio balance
- Bitcoin, Ethereum and USDT holdings
- Profit/loss analytics chart
- Transaction history
- Modern dark fintech UI
- Mobile responsive layout
-    prices and transactions only

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

For a production check:

```bash
npm run build
npm run start
```

##  Accounts

All accounts use   data :

- `avery@demo.com` / `demo123`
- `maya@demo.com` / `demo123`
- `leo@demo.com` / `demo123`

The login form lets you select the  account directly and stores the selected account in local storage.

## Key Files

- `app/page.js`: Landing page for the  dashboard.
- `app/dashboard/page.js`: Main crypto investment dashboard.
- `app/login/page.js`:  login page.
- `app/signup/page.js`:  signup page.
- `components/AuthForm.jsx`: Login/signup form and  account selector.
- `components/CryptoTicker.jsx`: BTC, ETH and USDT holding cards.
- `components/UserPortfolio.jsx`:  account header and portfolio metric cards.
- `components/Charts.jsx`: Recharts profit/loss and allocation charts.
- `components/Navbar.jsx`: Responsive navigation.
- `lib/data.js`: All   users, holdings, prices, P/L data and transactions.
- `lib/useDemoAccount.js`: Local-storage  account selection hook.
