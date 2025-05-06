import { getUser } from "../_lib/api";

async function AuthorTag({ userId }: { userId: number }) {
  const user = await getUser(userId);

  return <p className="text-sm text-slate-500 italic">By {user.name}</p>;
}

export default AuthorTag;
