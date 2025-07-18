export const fetchData = async () => {
  const url = "https://dummyjson.com/posts";
  return await fetch(url).then((r) => r.json());
};
