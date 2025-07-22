import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Fail fast, fail often.
      </h1>
      <blockquote className="mb-4 border-l-4 border-gray-300 dark:border-gray-600 pl-4 italic text-gray-700 dark:text-gray-300">
        "Clean code always looks like it was written by someone who cares."
        <cite className="block mt-2 text-sm text-gray-500 dark:text-gray-400 not-italic">
          — Uncle Bob
        </cite>
      </blockquote>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
