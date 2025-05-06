'use client'

import { useTheme } from "../_contexts/ThemeProvider";
import ThemeButton from "./ThemeButton";

function Header() {
  const { theme } = useTheme();

  return (
    <header className={`${theme === 'light' ? 'bg-blue-900' : 'bg-blue-950'} px-3 sm:px-6 py-3 text-right`}>
      <ThemeButton />
    </header>
  );
}

export default Header;
