import { ArrowUpRight } from "lucide-react";

export function StatCard({ label, value, detail, tone = "gold" }) {
  const toneClass = tone === "purple" ? "text-amethyst" : tone === "cyan" ? "text-cyanline" : "text-aurum";
  return (
    <div className="glass rounded-2xl p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-white/55">{label}</p>
          <p className="mt-2 text-2xl font-black sm:text-3xl">{value}</p>
        </div>
        <span className={`grid h-10 w-10 place-items-center rounded-xl bg-white/10 ${toneClass}`}>
          <ArrowUpRight size={19} />
        </span>
      </div>
      {detail && <p className="mt-4 text-sm text-white/50">{detail}</p>}
    </div>
  );
}
