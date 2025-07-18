import { fetchData } from "@/apis/post.api";

export default async function PostPage() {
  console.log(await fetchData());
  return (
    <>
      <p>salam</p>
    </>
  );
}
