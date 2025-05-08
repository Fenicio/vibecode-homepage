"use client";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

export function ToggleTheme() {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      aria-label="Toggle theme"
      size="sm"
      variant="ghost"
      className="w-full justify-start"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? "🌙" : "☀️"}
    </Button>
  );
}
export default ToggleTheme;
