"use client";

import { Area, AreaChart, Bar, BarChart, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { allocationData, performanceData } from "@/lib/data";

const colors = ["#f6c453", "#9d4edd", "#51f7ff"];

export function PerformanceChart() {
  return (
    <div className="h-64 w-full min-w-0 sm:h-80">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={performanceData} margin={{ left: -18, right: 4, top: 10, bottom: 0 }}>
          <defs>
            <linearGradient id="portfolio" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f6c453" stopOpacity={0.7} />
              <stop offset="100%" stopColor="#9d4edd" stopOpacity={0.05} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" stroke="rgba(255,255,255,.38)" tickLine={false} axisLine={false} tick={{ fontSize: 12 }} interval="preserveStartEnd" />
          <YAxis width={48} stroke="rgba(255,255,255,.3)" tickLine={false} axisLine={false} tick={{ fontSize: 12 }} tickFormatter={(value) => `$${value / 1000}k`} />
          <Tooltip contentStyle={{ background: "#10101d", border: "1px solid rgba(255,255,255,.14)", borderRadius: 14 }} />
          <Area type="monotone" dataKey="portfolio" stroke="#f6c453" strokeWidth={3} fill="url(#portfolio)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export function AllocationChart() {
  return (
    <div className="h-56 w-full min-w-0 sm:h-64">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={allocationData} innerRadius="48%" outerRadius="72%" paddingAngle={5} dataKey="value">
            {allocationData.map((entry, index) => <Cell key={entry.name} fill={colors[index % colors.length]} />)}
          </Pie>
          <Tooltip contentStyle={{ background: "#10101d", border: "1px solid rgba(255,255,255,.14)", borderRadius: 14 }} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export function YieldChart() {
  return (
    <div className="h-56 w-full min-w-0 sm:h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={performanceData.slice(-6)} margin={{ left: 0, right: 0, top: 10, bottom: 0 }}>
          <XAxis dataKey="month" stroke="rgba(255,255,255,.38)" tickLine={false} axisLine={false} tick={{ fontSize: 12 }} />
          <YAxis hide />
          <Tooltip contentStyle={{ background: "#10101d", border: "1px solid rgba(255,255,255,.14)", borderRadius: 14 }} />
          <Bar dataKey="pnl" radius={[8, 8, 0, 0]} fill="#9d4edd" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
