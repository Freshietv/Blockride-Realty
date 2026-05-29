"use client";

import { ShieldCheck, UserRound, Wallet2 } from "lucide-react";
import { currency, percent } from "@/lib/format";
import { getAccountSummary } from "@/lib/data";
import { useDemoAccount } from "@/lib/useDemoAccount";

export function UserPortfolioHeader() {
  const { account, selectAccount, accounts } = useDemoAccount();
  const accent = account.accent ?? "#f6c453";

  return (
    <section className="glass mb-6 rounded-3xl p-4 sm:mb-8 sm:p-6" style={{ boxShadow: `0 24px 80px ${account.glow ?? "rgba(0,0,0,.38)"}` }}>
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="mobile-safe flex items-start gap-3 sm:items-center sm:gap-4">
          <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border bg-white/10 text-lg font-black sm:h-16 sm:w-16 sm:text-xl" style={{ borderColor: `${accent}66`, color: accent }}>
            {account.avatar}
          </div>
          <div className="mobile-safe">
            <p className="text-xs font-bold uppercase sm:text-sm" style={{ color: accent }}>{account.interfaceName ?? "account"}</p>
            <h2 className="mt-1 break-words text-xl font-black sm:text-2xl">{account.name}</h2>
            <p className="mt-1 break-words text-sm leading-5 text-white/50">{account.plan}</p>
          </div>
        </div>
        <div className="grid w-full gap-3 sm:grid-cols-2 lg:w-auto lg:grid-cols-[1fr_1fr_auto]">
          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
            <p className="flex items-center gap-2 text-sm text-white/45"><Wallet2 size={16} /> Cash balance</p>
            <p className="mt-1 break-words font-black text-champagne">{currency(account.cashBalance)}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
            <p className="flex items-center gap-2 text-sm text-white/45"><ShieldCheck size={16} /> Risk profile</p>
            <p className="mt-1 break-words font-black text-champagne">{account.riskProfile}</p>
          </div>
          <label className="grid gap-2 text-xs text-white/45 sm:col-span-2 lg:col-span-1">
            Switch user
            <select
              value={account.id}
              onChange={(event) => selectAccount(event.target.value)}
              className="min-h-12 w-full rounded-2xl border border-white/10 bg-obsidian px-4 text-sm font-bold text-white outline-none"
            >
              {accounts.map((item) => <option key={item.id} value={item.id}>{item.name}</option>)}
            </select>
          </label>
        </div>
      </div>
    </section>
  );
}

export function PortfolioMetrics() {
  const { account } = useDemoAccount();
  const summary = getAccountSummary(account);
  const accent = account.accent ?? "#f6c453";

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <div className="glass mobile-safe rounded-2xl p-4 sm:p-5">
        <p className="text-sm text-white/55">Portfolio balance</p>
        <p className="mt-2 break-words text-[clamp(1.65rem,8vw,1.875rem)] font-black" style={{ color: accent }}>{currency(summary.totalBalance)}</p>
        <p className="mt-3 text-sm text-white/45">Crypto holdings + cash balance</p>
      </div>
      <div className="glass mobile-safe rounded-2xl p-4 sm:p-5">
        <p className="text-sm text-white/55">Crypto market value</p>
        <p className="mt-2 break-words text-[clamp(1.65rem,8vw,1.875rem)] font-black" style={{ color: accent }}>{currency(summary.cryptoValue)}</p>
        <p className="mt-3 text-sm text-white/45">BTC, ETH and USDT only</p>
      </div>
      <div className="glass mobile-safe rounded-2xl p-4 sm:p-5">
        <p className="text-sm text-white/55">Total profit / loss</p>
        <p className={summary.profitLoss >= 0 ? "mt-2 break-words text-[clamp(1.65rem,8vw,1.875rem)] font-black text-emerald-300" : "mt-2 break-words text-[clamp(1.65rem,8vw,1.875rem)] font-black text-red-300"}>
          {currency(summary.profitLoss)}
        </p>
        <p className={summary.profitLoss >= 0 ? "mt-3 text-sm text-emerald-300" : "mt-3 text-sm text-red-300"}>{percent(summary.profitLossPercent)} all time</p>
      </div>
      <div className="glass mobile-safe rounded-2xl p-4 sm:p-5">
        <p className="text-sm text-white/55">status</p>
        <p className="mt-2 text-[clamp(1.65rem,8vw,1.875rem)] font-black">Active</p>
        <p className="mt-3 flex items-center gap-2 text-sm text-white/45"><UserRound size={15} /> portfolio data</p>
      </div>
    </div>
  );
}
