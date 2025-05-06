"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { POSTS_PER_PAGE } from "../_utils/constants";
import Button from "./Button";
import { useTheme } from "../_contexts/ThemeProvider";

function Pagination({
  page,
  postsAmount,
}: {
  page: number;
  postsAmount: number;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const {theme} = useTheme();

  const totalPages = Math.ceil(postsAmount / POSTS_PER_PAGE);

  function handleIncrement() {
    if (page + 1 > totalPages) return;
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", `${page + 1}`);
    router.push(`/?${params.toString()}`);
  }
  function handleDecrement() {
    if (page - 1 === 0) return;
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", `${page - 1}`);
    router.push(`/?${params.toString()}`);
  }
  return (
    <div className={`mt-4 ${theme === 'light' ? 'bg-blue-900' : 'bg-blue-950'} text-slate-50 py-2 px-2 sm:px-6 rounded flex justify-between items-center self-stretch`}>
      {postsAmount ? (
        <p className="text-sm sm:text-base">
          Showing {(page - 1) * POSTS_PER_PAGE + 1} to{" "}
          {Math.min(page * POSTS_PER_PAGE, postsAmount)} of {postsAmount}{" "}
          results
        </p>
      ) : (
        <p>No posts found</p>
      )}
      <div className="space-x-1 sm:space-x-2">
        <Button onClick={handleDecrement} disabled={page === 1}>
          <span className="font-semibold">&lt;</span> Prev
        </Button>
        <Button onClick={handleIncrement} disabled={page >= totalPages}>
          Next <span className="font-semibold">&gt;</span>
        </Button>
      </div>
    </div>
  );
}

export default Pagination;
