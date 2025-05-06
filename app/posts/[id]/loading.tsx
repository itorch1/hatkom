import PostSkeleton from "@/app/_components/PostSkeleton";

// app/posts/[id]/loading.tsx
export default function Loading() {
  return (
    <div className="pt-[50px]">
      <PostSkeleton />
    </div>
  );
}
