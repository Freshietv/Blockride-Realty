"use client";

import { useEffect, useState } from "react";
import { defaultAccount, demoAccounts } from "@/lib/data";
import { activeAccountKey, findStoredAccount, getAllAccounts } from "@/lib/accountStorage";

export function useDemoAccount() {
  const [account, setAccount] = useState(defaultAccount);
  const [loaded, setLoaded] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    try {
      const savedId = window.localStorage.getItem(activeAccountKey);
      const saved = findStoredAccount(savedId);
      setAccount(saved ?? defaultAccount);
      setIsAuthenticated(Boolean(saved));
    } catch {
      setAccount(defaultAccount);
      setIsAuthenticated(false);
    } finally {
      setLoaded(true);
    }
  }, []);

  function selectAccount(accountId) {
    const next = findStoredAccount(accountId) ?? defaultAccount;
    window.localStorage.setItem(activeAccountKey, next.id);
    setAccount(next);
    setIsAuthenticated(true);
    return next;
  }

  return { account, selectAccount, accounts: getAllAccounts(), isAuthenticated, loaded };
}
