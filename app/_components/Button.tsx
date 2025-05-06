"use client";

import { useTheme } from "../_contexts/ThemeProvider";

function Button({
  children,
  onClick,
  disabled,
}: {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}) {
  const { theme } = useTheme();

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`cursor-pointer text-sm sm:text-base border rounded px-2 py-1 text-slate-50 ${theme === 'light' ? 'bg-blue-500 hover:bg-blue-400 border-slate-950' : 'bg-blue-700 hover:bg-blue-600 border-slate-50'} disabled:bg-slate-400 disabled:cursor-default`}
    >
      {children}
    </button>
  );
}

export default Button;
