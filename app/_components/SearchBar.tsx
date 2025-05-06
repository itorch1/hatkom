"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function SearchBar({ initialValue }: { initialValue: string | undefined }) {
  const router = useRouter();
  const [query, setQuery] = useState(() => initialValue || "");

  useEffect(() => {
    const debounce = setTimeout(() => {
      console.log(`/?query=${query}`)
      if (query) router.replace(`/?query=${query}`);
      else router.replace("/");
    }, 400);

    return () => clearTimeout(debounce);
  }, [query, router]);

  return (
    <div className="self-stretch mb-4 text-right">
      <input
        type="text"
        placeholder="Search posts..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="bg-white px-2 py-1 border text-slate-950 rounded placeholder:text-slate-400 ml-auto w-full sm:w-[360px]"
      />
    </div>
  );
}

export default SearchBar;
