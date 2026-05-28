"use client";

import { currency, percent } from "@/lib/format";
import { getHoldingValue } from "@/lib/data";

export function CryptoTicker({ holdings }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {holdings.map((asset) => {
        const marketValue = getHoldingValue(asset);
        const pnl = marketValue - asset.costBasis;
        return (
          <div key={asset.id} className="glass mobile-safe rounded-2xl p-4 sm:p-5">
            <div className="flex items-start justify-between gap-3">
              <div className="mobile-safe flex items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full text-sm font-black" style={{ backgroundColor: `${asset.color}22`, color: asset.color }}>
                  {asset.symbol.slice(0, 2)}
                </span>
                <div className="mobile-safe">
                  <p className="break-words font-bold">{asset.name}</p>
                  <p className="break-words text-sm text-white/45">{asset.amount.toLocaleString()} {asset.symbol}</p>
                </div>
              </div>
              <p className={asset.change >= 0 ? "shrink-0 text-emerald-300" : "shrink-0 text-red-300"}>{percent(asset.change)}</p>
            </div>
            <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm text-white/45"> price</p>
                <p className="break-words text-2xl font-black">{currency(asset.price, asset.symbol === "USDT" ? 2 : 0)}</p>
              </div>
              <p className="break-words text-sm text-white/45">{currency(marketValue)}</p>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div className="mobile-safe rounded-xl bg-white/5 p-3">
                <p className="text-white/40">Cost basis</p>
                <p className="mt-1 break-words font-black">{currency(asset.costBasis)}</p>
              </div>
              <div className="mobile-safe rounded-xl bg-white/5 p-3">
                <p className="text-white/40">P/L</p>
                <p className={pnl >= 0 ? "mt-1 break-words font-black text-emerald-300" : "mt-1 break-words font-black text-red-300"}>{currency(pnl)}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
