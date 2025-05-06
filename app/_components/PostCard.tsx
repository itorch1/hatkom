import Link from "next/link";
import { Post } from "../_types/post";
import AuthorTag from "./AuthorTag";
import { Suspense } from "react";

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="border p-4 rounded-md shadow w-full bg-[#0000002a]">
      <h2 className="text-xl font-semibold">{post.title}</h2>
      <p className="text-sm sm:text-base">{post.body.slice(0, 100)}...</p>
      <div className="flex justify-between items-center mt-3">
        <Link
          href={`/posts/${post.id}`}
          className="text-blue-500 hover:text-blue-400 text-sm sm:text-base"
        >
          Read more
        </Link>
        <Suspense fallback={<span className="text-sm text-slate-500 italic">Loading....</span>}>
          <AuthorTag userId={post.userId} />
        </Suspense>
      </div>
    </article>
  );
}
