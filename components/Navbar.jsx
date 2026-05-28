"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LogOut, Menu, UserPlus, Wallet2, X } from "lucide-react";
import { useEffect, useState } from "react";
import { activeAccountKey, findStoredAccount } from "@/lib/accountStorage";

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [account, setAccount] = useState(null);

  useEffect(() => {
    const storedId = window.localStorage.getItem(activeAccountKey);
    const saved = findStoredAccount(storedId);
    setAccount(saved ?? null);
  }, [pathname]);

  function logout() {
    window.localStorage.removeItem(activeAccountKey);
    setAccount(null);
    setOpen(false);
    window.setTimeout(() => {
      router.replace("/");
    }, 500);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-obsidian/80 backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="mobile-safe flex items-center gap-3">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-aurum/40 bg-aurum/10 text-aurum shadow-gold">
            ₿
          </span>
          <span className="truncate text-base font-black sm:text-lg">Blockride <span className="text-gradient">Realty</span></span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex" />

        <div className="hidden items-center gap-3 lg:flex">
          {account ? (
            <>
              <Link href="/dashboard" className="inline-flex min-h-12 items-center gap-3 rounded-full border border-white/10 bg-white/5 py-2 pl-2 pr-4 text-sm text-white/80">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-aurum/15 text-xs font-black text-aurum">{account.avatar}</span>
                {account.name}
              </Link>
              <button onClick={logout} className="inline-flex min-h-12 items-center gap-2 rounded-full px-4 py-2 text-sm text-white/60 hover:bg-white/10 hover:text-white">
                <LogOut size={16} /> Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/signup" className="button-secondary inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold">
                <UserPlus size={17} /> Sign up
              </Link>
              <Link href="/login" className="button-primary inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold">
                <Wallet2 size={17} /> Login
              </Link>
            </>
          )}
        </div>

        <button
          className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/10 bg-white/5 transition active:scale-95 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="scroll-touch border-t border-white/10 bg-obsidian/95 px-4 py-4 shadow-2xl lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-3">
            {account ? (
              <>
                <Link href="/dashboard" onClick={() => setOpen(false)} className="mobile-safe rounded-xl border border-white/10 bg-white/5 px-4 py-4 font-bold text-champagne">
                  <span className="mr-2 inline-grid h-7 w-7 place-items-center rounded-full bg-aurum/15 text-xs text-aurum">{account.avatar}</span>
                  {account.name}
                </Link>
                <button onClick={logout} className="min-h-12 rounded-xl px-4 py-4 text-left text-white/75 hover:bg-white/10">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/signup" onClick={() => setOpen(false)} className="button-secondary mt-2 rounded-xl px-4 py-4 text-center font-bold">Sign up</Link>
                <Link href="/login" onClick={() => setOpen(false)} className="button-primary rounded-xl px-4 py-4 text-center font-bold">Login</Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
