import { defaultAccount, demoAccounts } from "@/lib/data";

export const activeAccountKey = "blockrealty-demo-account";
const createdAccountsKey = "blockrealty-created-accounts";

function getInitials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export function getCreatedAccounts() {
  try {
    return JSON.parse(window.localStorage.getItem(createdAccountsKey) ?? "[]");
  } catch {
    return [];
  }
}

export function getAllAccounts() {
  return [...demoAccounts, ...getCreatedAccounts()];
}

export function findStoredAccount(accountId) {
  return getAllAccounts().find((account) => account.id === accountId) ?? null;
}

export function createStoredAccount({ name, email, password, profile }) {
  const account = {
    ...defaultAccount,
    id: `user-${Date.now()}`,
    name,
    email,
    password,
    plan: profile || "New Investor",
    avatar: getInitials(name) || "NI",
    riskProfile: profile || "Custom profile",
    accountAge: "New account",
    accent: "#51f7ff",
    glow: "rgba(81, 247, 255, .2)",
    interfaceName: "Custom Investor"
  };
  const accounts = [...getCreatedAccounts(), account];
  window.localStorage.setItem(createdAccountsKey, JSON.stringify(accounts));
  window.localStorage.setItem(activeAccountKey, account.id);
  return account;
}
