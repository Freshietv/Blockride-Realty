"use client";

import { ArrowDownLeft, ArrowUpRight, BarChart3, Clock3, CreditCard, Wallet2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { AllocationChart, PerformanceChart, YieldChart } from "@/components/Charts";
import { CryptoTicker } from "@/components/CryptoTicker";
import { MotionShell } from "@/components/MotionShell";
import { PageShell } from "@/components/PageShell";
import { PortfolioMetrics, UserPortfolioHeader } from "@/components/UserPortfolio";
import { transactions } from "@/lib/data";
import { useDemoAccount } from "@/lib/useDemoAccount";

export default function DashboardPage() {
  const router = useRouter();
  const { account, isAuthenticated, loaded } = useDemoAccount();

  useEffect(() => {
    if (loaded && !isAuthenticated) {
      router.replace("/login");
    }
  }, [isAuthenticated, loaded, router]);

  if (!loaded || !isAuthenticated) {
    return null;
  }

  return (
    <PageShell>
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <MotionShell className="mb-6 flex flex-col justify-between gap-5 sm:mb-8 lg:flex-row lg:items-end">
          <div className="mobile-safe">
            <p className="text-sm font-bold uppercase text-aurum">crypto dashboard</p>
            <h1 className="mt-3 text-[clamp(2rem,10vw,3rem)] font-black leading-tight">Investment Portfolio</h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/55 sm:text-base">Track BTC, ETH and USDT balances, profit/loss analytics, and transaction history from your investor dashboard.</p>
          </div>
          <div className="grid w-full grid-cols-1 gap-3 sm:w-auto sm:grid-cols-3 lg:flex">
            <button className="button-secondary inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 font-black">
              <CreditCard size={18} /> Deposit
            </button>
            <button className="button-secondary inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 font-black">
              <ArrowDownLeft size={18} /> Withdraw
            </button>
            <button className="button-primary inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 font-black">
              <Wallet2 size={18} /> Wallet
            </button>
          </div>
        </MotionShell>

        <UserPortfolioHeader />
        <PortfolioMetrics />

        <section className="mt-6">
          <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
            <div className="mobile-safe">
              <h2 className="text-xl font-black">Crypto holdings</h2>
              <p className="mt-1 text-sm text-white/45">Balances for Bitcoin, Ethereum and USDT.</p>
            </div>
          </div>
          <CryptoTicker holdings={account.holdings} />
        </section>

        <div className="mt-6 grid gap-6 xl:grid-cols-[1.5fr_.8fr]">
          <section className="glass rounded-3xl p-5 sm:p-6">
            <div className="mb-4 flex items-start justify-between gap-3">
              <div className="mobile-safe">
                <h2 className="text-xl font-black">Profit / loss chart</h2>
                <p className="mt-1 text-sm text-white/45">Portfolio balance performance</p>
              </div>
              <BarChart3 className="shrink-0 text-aurum" />
            </div>
            <PerformanceChart />
          </section>
          <section className="glass rounded-3xl p-5 sm:p-6">
            <h2 className="text-xl font-black">Asset allocation</h2>
            <p className="mt-1 text-sm text-white/45">BTC, ETH and USDT allocation</p>
            <AllocationChart />
            <div className="grid gap-3">
              {account.holdings.map((asset) => (
                <div key={asset.symbol} className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3 text-sm">
                  <span className="text-white/65">{asset.name}</span>
                  <span className="font-bold text-champagne">{asset.symbol}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-[.9fr_1.1fr]">
          <section className="glass rounded-3xl p-5 sm:p-6">
            <h2 className="text-xl font-black">Monthly P/L bars</h2>
            <YieldChart />
          </section>
          <section className="glass rounded-3xl p-5 sm:p-6">
            <div className="mb-5 flex items-start justify-between gap-3">
              <div className="mobile-safe">
                <h2 className="text-xl font-black">Transaction history</h2>
                <p className="mt-1 text-sm text-white/45">Completed crypto activity</p>
              </div>
              <Clock3 className="shrink-0 text-aurum" />
            </div>
            <div className="grid gap-3">
              {transactions.map((tx) => (
                <div key={`${tx.type}-${tx.date}-${tx.asset}`} className="flex flex-col gap-3 rounded-2xl bg-white/5 p-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3">
                    <span className={tx.type === "Sell" || tx.type === "Withdraw" ? "grid h-10 w-10 place-items-center rounded-xl bg-red-400/10 text-red-300" : "grid h-10 w-10 place-items-center rounded-xl bg-emerald-400/10 text-emerald-300"}>
                      {tx.type === "Sell" || tx.type === "Withdraw" ? <ArrowDownLeft size={18} /> : <ArrowUpRight size={18} />}
                    </span>
                    <div>
                      <p className="font-bold">{tx.type} · {tx.asset}</p>
                      <p className="text-sm text-white/45">{tx.date} · {tx.status}</p>
                    </div>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="font-black text-champagne">{tx.amount}</p>
                    <p className="text-sm text-white/45">{tx.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </PageShell>
  );
}
