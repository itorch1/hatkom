import { Suspense } from "react";
import Pagination from "./_components/Pagination";
import PostsList from "./_components/PostsList";
import SearchBar from "./_components/SearchBar";
import { getPosts } from "./_lib/api";
import PostSkeleton from "./_components/PostSkeleton";

async function Page({
  searchParams,
}: {
  searchParams: { page?: string | undefined; query?: string | undefined };
}) {
  const page = Number(searchParams.page) || 1;
  const query = searchParams.query?.toLowerCase() || "";

  const posts = await getPosts();
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(query)
  );

  return (
    <div className="h-full flex flex-col items-center">
      <SearchBar initialValue={searchParams.query} />

      <Suspense
        fallback={
          <div className="flex-1 w-full overflow-y-auto">
            {Array.from({ length: 5 }).map((_, i) => (
              <PostSkeleton key={i} />
            ))}
          </div>
        }
        key={`${query}_${page}`}
      >
        <PostsList query={query} page={page} />
      </Suspense>

      <Pagination page={page} postsAmount={filteredPosts.length} />
    </div>
  );
}

export default Page;
