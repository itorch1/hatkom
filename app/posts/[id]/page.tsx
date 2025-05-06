import BackButton from "@/app/_components/BackButton";
import { getPost, getUser } from "@/app/_lib/api";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata(
  { params }: { params: { id: string } }
): Promise<Metadata> {
  const post = await getPost(params.id);

  return {
    title: `Post #${post.id}`,
    description: post.body.slice(0, 100),
  };
}

async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;
  const post = await getPost(id);
  if (!Object.keys(post).length) notFound();
  const author = await getUser(post.userId);

  return (
    <div className="pt-[50px]">
      <div className="py-6 px-8 border rounded mb-4 bg-[#0000002a]">
        <h1 className="text-2xl font-bold mb-2">{post.title}</h1> 
        <p className="mb-4 text-sm sm:text-base">{post.body}</p>
        <p className="text-slate-500 italic sm:text-right text-sm sm:text-base">
          by {author.name} ({author.email})
        </p>
      </div>
      <BackButton />
    </div>
  );
}

export default Page;
