"use client";
// ToggleTheme: Accessible, robust theme toggle with SVG icons and system preference awareness
import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

export function ToggleTheme() {
  // next-themes provides theme ("light" | "dark" | "system") and setTheme
  const { theme, setTheme, systemTheme } = useTheme();
  // Determine what is actually active: user or system
  const activeTheme = theme === "system" ? systemTheme : theme;

  // SVG icons for clarity
  const SunIcon = (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
      <path stroke="currentColor" strokeWidth="2" d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 7.07l-1.41-1.41M6.34 6.34 4.93 4.93m12.02 0-1.41 1.41M6.34 17.66l-1.41 1.41" />
    </svg>
  );
  const MoonIcon = (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" aria-hidden="true">
      <path stroke="currentColor" strokeWidth="2" d="M21 12.79A9 9 0 0111.21 3c0 5.25 4.26 9.51 9.51 9.51.09 0 .18 0 .28-.01z" />
    </svg>
  );

  // Accessible toggle handler
  function handleToggle() {
    // Cycle: light -> dark -> system -> light
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  }

  // Label for screen readers
  const label =
    theme === "light"
      ? "Switch to dark mode"
      : theme === "dark"
      ? "Switch to system mode"
      : "Switch to light mode";

  // Icon
  const icon =
    theme === "light" ? SunIcon : theme === "dark" ? MoonIcon : SunIcon;

  return (
    <Button
      aria-label={label}
      aria-pressed={theme === "dark"}
      size="sm"
      variant="ghost"
      className="w-10 h-10 flex items-center justify-center"
      onClick={handleToggle}
      tabIndex={0}
    >
      {icon}
      <span className="sr-only">{label}</span>
    </Button>
  );
}

export default ToggleTheme;
