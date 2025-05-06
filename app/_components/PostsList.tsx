import { getPosts } from "../_lib/api";
import { POSTS_PER_PAGE } from "../_utils/constants";
import PostCard from "./PostCard";

async function PostsList({query, page}: {query: string, page: number}) {
    const posts = await getPosts();
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(query)
  );

  const currentPagePosts = filteredPosts.slice(
    POSTS_PER_PAGE * (page - 1),
    POSTS_PER_PAGE * page
  );

    return (
        <div className="space-y-4 flex-1 w-full overflow-y-auto relative">
                  {currentPagePosts.map((post) => (
                    <PostCard key={post.id} post={post} />
                  ))}
                </div>
    )
}

export default PostsList
