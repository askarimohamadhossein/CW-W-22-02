export const fetchData = async () => {
  const url = "https://dummyjson.com/posts";
  return await fetch(url).then((r) => r.json());
};

export const fetchPost = async (postId: string) => {
  const url = `https://dummyjson.com/posts/${postId}`;
  return await fetch(url).then((r) => r.json());
};
