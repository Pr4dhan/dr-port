"use client"; 

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";
import { Button } from "@/components/ui/Button";

export default function ThemeSwitchBtn() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; 

  return (
    <Button
      aria-label="theme-switch"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      variant="toggle"
      size="icon"
    >
      {resolvedTheme === "dark" ? <FiSun /> : <FiMoon />}
    </Button>
  );
}
