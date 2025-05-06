"use client";

import { useRouter } from "next/navigation";
import Button from "./Button";

function BackButton() {
  const router = useRouter();

  return <Button onClick={() => router.push('/')}>&larr; Back to posts</Button>;
}

export default BackButton;
