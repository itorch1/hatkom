"use client";

import { useTheme } from "../_contexts/ThemeProvider";
import Button from "./Button";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme}>
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </Button>
  );
}
