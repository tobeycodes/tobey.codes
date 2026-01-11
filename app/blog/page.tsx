import { BlogPosts } from "app/components/posts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "blog",
  description: "blog",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">blog</h1>
      <BlogPosts />
    </section>
  );
}
