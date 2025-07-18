import { fetchData } from "@/apis/post.api";
import PostCard from "@/components/molecules/PostCard";

export default async function PostPage() {
  const data: IPostList = await fetchData();
  return (
    <div className="p-5">
      <p className="font-semibold text-lg">Post List</p>
      {data.posts.map((el) => (
        <PostCard post={el} key={el.id} />
      ))}
    </div>
  );
}
