const PostCard: React.FC<{ post: IPosts }> = ({ post }) => {
  return (
    <div className="border border-slate-300 mx-auto container p-5 rounded-2xl space-y-2 my-2">
      <h1 className="font-semibold text-2xl">{post.title}</h1>
      <p className="text-lg">{post.body}</p>
    </div>
  );
};

export default PostCard;
