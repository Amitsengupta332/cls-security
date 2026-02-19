/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";

export function useNetworkStatus() {
  const [online, setOnline] = useState(navigator.onLine);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const updateOnline = () => {
      setOnline(true);
      setChecking(false);
    };
    const updateOffline = () => {
      setOnline(false);
      setChecking(false);
    };

    window.addEventListener("online", updateOnline);
    window.addEventListener("offline", updateOffline);

    // initial
    setChecking(false);

    return () => {
      window.removeEventListener("online", updateOnline);
      window.removeEventListener("offline", updateOffline);
    };
  }, []);

  return { online, checking };
}
