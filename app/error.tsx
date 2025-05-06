"use client";

import { useRouter } from "next/navigation";
import Button from "./_components/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();

  return (
    <div className="h-full flex justify-center items-center">
      <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Something went wrong!</h1>
      <p className="mb-6">{error.message}</p>
        <Button
          onClick={() => {
            router.replace("/");
          }}
        >
          Go home
        </Button>
      </div>
    </div>
  );
}
