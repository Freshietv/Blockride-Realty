import Link from "next/link";
import { ArrowRight, Building2, ShieldCheck, Wallet2 } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { MotionShell } from "@/components/MotionShell";

export default function Home() {
  return (
    <PageShell>
      <main className="mx-auto grid min-h-[calc(100svh-72px)] max-w-7xl items-center gap-8 px-4 py-8 sm:px-6 sm:py-12 lg:grid-cols-[1fr_.9fr] lg:gap-10 lg:px-8">
        <MotionShell>
          <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-aurum/25 bg-aurum/10 px-4 py-2 text-sm text-champagne">
            <ShieldCheck size={16} /> Private realty intelligence
          </div>
          <h1 className="mt-6 max-w-4xl text-[clamp(2.55rem,13vw,4.5rem)] font-black leading-[1.02] sm:mt-7 lg:text-7xl">
            Blockride Realty
          </h1>
          <p className="mt-5 max-w-xl text-lg font-semibold leading-7 text-champagne/85 sm:text-xl">
            Classical property confidence with a modern portfolio command center.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/60 sm:mt-6 sm:text-lg sm:leading-8">
            Explore holdings, capital movement, and investor snapshots through a polished realty dashboard built for private portfolio review.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/login" className="button-primary inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 font-black sm:w-auto">
              Login  <ArrowRight size={18} />
            </Link>
            <Link href="/dashboard" className="button-secondary inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 font-black sm:w-auto">
              Snapshot <Wallet2 size={18} />
            </Link>
          </div>
        </MotionShell>

        <MotionShell delay={0.12}>
          <div className="luxury-border rounded-[2rem]">
            <div className="glass relative overflow-hidden rounded-[1.5rem] p-4 sm:rounded-[2rem] sm:p-6">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div className="mobile-safe">
                  <p className="text-sm uppercase text-white/45">Realty snapshot</p>
                  <p className="mt-3 text-[clamp(2.25rem,11vw,3rem)] font-black">$214,620</p>
                  <p className="mt-3 text-emerald-300">+$38,620 portfolio lift</p>
                </div>
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-aurum/40 bg-aurum/15 text-aurum shadow-gold sm:h-16 sm:w-16">
                  <Building2 size={32} />
                </div>
              </div>
              <div className="mt-8 h-44 rounded-2xl border border-white/10 bg-gradient-to-t from-aurum/20 via-white/10 to-white/5 p-4 sm:mt-10 sm:h-52 sm:rounded-3xl sm:p-5">
                <div className="flex h-full items-end gap-2 sm:gap-3">
                  {[42, 58, 49, 72, 81, 68, 95, 108, 126, 142].map((height, index) => (
                    <div key={index} className="w-full rounded-t-xl bg-gradient-to-t from-graphite via-aurum to-champagne shadow-gold" style={{ height }} />
                  ))}
                </div>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {["Equity review", "Yield profile", "Capital flow"].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center text-sm font-black sm:text-base">{item}</div>
                ))}
              </div>
            </div>
          </div>
        </MotionShell>
      </main>
    </PageShell>
  );
}
