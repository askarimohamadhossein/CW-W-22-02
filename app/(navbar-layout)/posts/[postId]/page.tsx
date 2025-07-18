import { fetchPost } from "@/apis/post.api";
import PostCard from "@/components/molecules/PostCard";

const SinglePostPage = async ({
  params,
}: {
  params: Promise<{ postId: string }>;
}) => {
  const { postId } = await params;
  const post:IPosts = await fetchPost(postId)
  return (
    <div>
      <PostCard post={post} />
    </div>
  );
};

export default SinglePostPage;
