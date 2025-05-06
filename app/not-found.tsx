"use client";

import { useRouter } from "next/navigation";
import Button from "./_components/Button";

function NotFound() {
  const router = useRouter();

  return (
    <div className="h-full flex justify-center items-center">
      <div className="flex flex-col items-center">
        <h1 className="text-semibold text-2xl mb-4">
          Whoops! Looks like the page you&apos;re looking for does not exist :/
        </h1>
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

export default NotFound;
