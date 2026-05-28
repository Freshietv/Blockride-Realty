export const demoAccounts = [
  {
    id: "avery",
    name: "Avery Stone",
    email: "Douglaslee347@gmail.com",
    password: "Avery#2048",
    plan: "Pro Trader",
    avatar: "AS",
    riskProfile: "Balanced growth",
    accountAge: "5 years",
    cashBalance: 180420,
    holdings: [
      { id: "bitcoin", symbol: "BTC", name: "Bitcoin", amount: 100.284, price: 67240, change: 2.84, costBasis: 74250, color: "#f6c453" },
      { id: "ethereum", symbol: "ETH", name: "Ethereum", amount: 39.72, price: 3585, change: -1.12, costBasis: 61240, color: "#9d4edd" },
      { id: "tether", symbol: "USDT", name: "Tether", amount: 42850, price: 1, change: 0.01, costBasis: 42850, color: "#51f7ff" }
    ]
  },
  {
    id: "maya",
    name: "Maya Chen",
    email: "raeishathomas74@gmail.com",
    password: "Maya#9137",
    plan: "Yield Builder",
    avatar: "MC",
    riskProfile: "Conservative income",
    accountAge: "11 months",
    cashBalance: 90200,
    holdings: [
      { id: "bitcoin", symbol: "BTC", name: "Bitcoin", amount: 10.642, price: 67240, change: 2.84, costBasis: 38600, color: "#f6c453" },
      { id: "ethereum", symbol: "ETH", name: "Ethereum", amount: 19.18, price: 3585, change: -1.12, costBasis: 29880, color: "#9d4edd" },
      { id: "tether", symbol: "USDT", name: "Tether", amount: 60350, price: 1, change: 0.01, costBasis: 60350, color: "#51f7ff" }
    ]
  },
  {
    id: "leo",
    name: "Leo Martinez",
    email: "leo@demo.com",
    password: "Leo#6821",
    plan: "Momentum",
    avatar: "LM",
    riskProfile: "Aggressive growth",
    accountAge: "4 years",
    cashBalance: 31200,
    holdings: [
      { id: "bitcoin", symbol: "BTC", name: "Bitcoin", amount: 2.05, price: 67240, change: 2.84, costBasis: 114300, color: "#f6c453" },
      { id: "ethereum", symbol: "ETH", name: "Ethereum", amount: 31.4, price: 3585, change: -1.12, costBasis: 91200, color: "#9d4edd" },
      { id: "tether", symbol: "USDT", name: "Tether", amount: 22200, price: 1, change: 0.01, costBasis: 22200, color: "#51f7ff" }
    ]
  }
];

export const defaultAccount = demoAccounts[0];

export const performanceData = [
  { month: "Jan", portfolio: 168400, pnl: 4200 },
  { month: "Feb", portfolio: 174900, pnl: 9100 },
  { month: "Mar", portfolio: 169800, pnl: 5600 },
  { month: "Apr", portfolio: 181600, pnl: 12600 },
  { month: "May", portfolio: 190450, pnl: 18450 },
  { month: "Jun", portfolio: 186300, pnl: 14300 },
  { month: "Jul", portfolio: 198780, pnl: 24780 },
  { month: "Aug", portfolio: 207950, pnl: 31950 },
  { month: "Sep", portfolio: 214620, pnl: 38620 },
  { month: "Oct", portfolio: 226180, pnl: 48180 }
];

export const transactions = [
  { type: "Buy", asset: "Bitcoin", symbol: "BTC", amount: "+0.184 BTC", value: "$12,245", date: "May 24, 2026", status: "Completed" },
  { type: "Sell", asset: "Ethereum", symbol: "ETH", amount: "-1.80 ETH", value: "$6,453", date: "May 21, 2026", status: "Completed" },
  { type: "Deposit", asset: "Tether", symbol: "USDT", amount: "+10,000 USDT", value: "$10,000", date: "May 18, 2026", status: "Completed" },
  { type: "Buy", asset: "Ethereum", symbol: "ETH", amount: "+4.20 ETH", value: "$15,057", date: "May 14, 2026", status: "Completed" },
  { type: "Withdraw", asset: "Tether", symbol: "USDT", amount: "-2,500 USDT", value: "$2,500", date: "May 10, 2026", status: "Completed" }
];

export function getHoldingValue(holding) {
  return holding.amount * holding.price;
}

export function getAccountSummary(account = defaultAccount) {
  const cryptoValue = account.holdings.reduce((sum, holding) => sum + getHoldingValue(holding), 0);
  const costBasis = account.holdings.reduce((sum, holding) => sum + holding.costBasis, 0);
  const totalBalance = cryptoValue + account.cashBalance;
  const profitLoss = cryptoValue - costBasis;
  const profitLossPercent = costBasis ? (profitLoss / costBasis) * 100 : 0;

  return {
    cryptoValue,
    costBasis,
    totalBalance,
    profitLoss,
    profitLossPercent
  };
}

export const allocationData = defaultAccount.holdings.map((holding) => ({
  name: holding.symbol,
  value: Math.round(getHoldingValue(holding))
}));
