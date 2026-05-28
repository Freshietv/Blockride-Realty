"use client";

import { motion } from "framer-motion";
import { LockKeyhole, Mail, ShieldCheck, UserRound } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { activeAccountKey, createStoredAccount, getAllAccounts } from "@/lib/accountStorage";

export function AuthForm({ mode = "login" }) {
  const signup = mode === "signup";
  const router = useRouter();
  const [accounts, setAccounts] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const [identity, setIdentity] = useState({ name: "", email: "", profile: "", confirmPassword: "" });
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [approved, setApproved] = useState(false);
  const selectedAccount = accounts.find((account) => account.id === selectedId) ?? accounts[0];

  useEffect(() => {
    const nextAccounts = getAllAccounts();
    setAccounts(nextAccounts);
    setSelectedId(nextAccounts[0]?.id ?? "");
  }, []);

  function handleSubmit(event) {
    event.preventDefault();

    if (signup) {
      if (!identity.name.trim() || !identity.email.trim() || !password || !identity.confirmPassword) {
        setError("Please complete all required information.");
        return;
      }

      if (password !== identity.confirmPassword) {
        setError("Passwords do not match.");
        return;
      }

      createStoredAccount({
        name: identity.name.trim(),
        email: identity.email.trim(),
        password,
        profile: identity.profile.trim()
      });
      setApproved(true);
      router.replace("/dashboard");
      return;
    }

    if (!selectedAccount) {
      setError("Select a user to continue.");
      return;
    }

    if (password !== selectedAccount.password) {
      setError("Password does not match this user.");
      return;
    }

    window.localStorage.setItem(activeAccountKey, selectedAccount.id);
    setApproved(true);
    router.replace("/dashboard");
  }

  return (
    <main className="grid min-h-screen place-items-center bg-radial-lux px-4 py-6 sm:py-10">
      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="luxury-border w-full max-w-md rounded-3xl">
        <div className="glass rounded-3xl p-5 sm:p-8">
          <Link href="/" className="mb-7 flex min-w-0 items-center gap-3 sm:mb-8">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-aurum/40 bg-aurum/10 text-xl font-black text-aurum">
              ₿
            </span>
            <span className="truncate text-lg font-black sm:text-xl">Blockride <span className="text-gradient">Realty</span></span>
          </Link>
          <h1 className="text-2xl font-black sm:text-3xl">{signup ? "Create portfolio" : "Login to dashboard"}</h1>
          <p className="mt-3 text-sm leading-6 text-white/55">
            {signup ? "Create identity information before opening your investor dashboard." : "Select a user account and enter the matching password."}
          </p>
          <form className="mt-8 grid gap-4" onSubmit={handleSubmit}>
            {signup ? (
              <>
                <label className="grid gap-2 text-sm text-white/65">
                  Full name
                  <span className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    <UserRound size={18} className="text-aurum" />
                    <input
                      type="text"
                      className="w-full bg-transparent text-white outline-none"
                      value={identity.name}
                      onChange={(event) => {
                        setIdentity((value) => ({ ...value, name: event.target.value }));
                        setError("");
                      }}
                      placeholder="Enter full name"
                    />
                  </span>
                </label>
                <label className="grid gap-2 text-sm text-white/65">
                  Email
                  <span className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    <Mail size={18} className="text-aurum" />
                    <input
                      type="email"
                      className="w-full bg-transparent text-white outline-none"
                      value={identity.email}
                      onChange={(event) => {
                        setIdentity((value) => ({ ...value, email: event.target.value }));
                        setError("");
                      }}
                      placeholder="Enter email"
                    />
                  </span>
                </label>
                <label className="grid gap-2 text-sm text-white/65">
                  Investor profile
                  <span className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    <ShieldCheck size={18} className="text-aurum" />
                    <input
                      type="text"
                      className="w-full bg-transparent text-white outline-none"
                      value={identity.profile}
                      onChange={(event) => {
                        setIdentity((value) => ({ ...value, profile: event.target.value }));
                        setError("");
                      }}
                      placeholder="Growth, income, balanced..."
                    />
                  </span>
                </label>
              </>
            ) : (
              <>
                <label className="grid gap-2 text-sm text-white/65">
                   user
                  <span className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    <UserRound size={18} className="text-aurum" />
                    <select
                      value={selectedId}
                      onChange={(event) => {
                        setSelectedId(event.target.value);
                        setPassword("");
                        setError("");
                      }}
                      className="w-full bg-transparent text-white outline-none"
                    >
                      {accounts.map((account) => (
                        <option key={account.id} value={account.id}>{account.name} · {account.plan}</option>
                      ))}
                    </select>
                  </span>
                </label>
                <label className="grid gap-2 text-sm text-white/65">
                  Email
                  <span className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    <Mail size={18} className="text-aurum" />
                    <input readOnly type="email" className="w-full bg-transparent text-white outline-none" value={selectedAccount?.email ?? ""} />
                  </span>
                </label>
              </>
            )}
            <label className="grid gap-2 text-sm text-white/65">
              Password
              <span className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <LockKeyhole size={18} className="text-aurum" />
                <input
                  type="password"
                  className="w-full bg-transparent text-white outline-none"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                    setError("");
                  }}
                  placeholder="Enter password"
                />
              </span>
            </label>
            {signup && (
              <label className="grid gap-2 text-sm text-white/65">
                Confirm password
                <span className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <LockKeyhole size={18} className="text-aurum" />
                  <input
                    type="password"
                    className="w-full bg-transparent text-white outline-none"
                    value={identity.confirmPassword}
                    onChange={(event) => {
                      setIdentity((value) => ({ ...value, confirmPassword: event.target.value }));
                      setError("");
                    }}
                    placeholder="Confirm password"
                  />
                </span>
              </label>
            )}
            {error && <p className="rounded-2xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm font-bold text-red-200">{error}</p>}
            <button type="submit" disabled={approved} className="button-primary mt-3 rounded-2xl px-5 py-3.5 text-center font-black disabled:cursor-wait disabled:opacity-80">
              {approved ? "Approved. Opening Dashboard..." : signup ? "Create Account" : "Enter Dashboard"}
            </button>
          </form>
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="flex items-center gap-2 text-sm font-bold text-champagne"><ShieldCheck size={16} /> credentials</p>
            <p className="mt-2 text-sm text-white/50">{signup ? "Complete the identity fields to create a local profile." : "Each user has a unique password. No real wallets, prices, or transactions are connected."}</p>
          </div>
          <p className="mt-6 text-center text-sm text-white/50">
            {signup ? "Already have an account?" : "Want another identity?"}{" "}
            <Link className="font-bold text-aurum" href={signup ? "/login" : "/signup"}>
              {signup ? "Login" : "Sign up"}
            </Link>
          </p>
        </div>
      </motion.div>
    </main>
  );
}
