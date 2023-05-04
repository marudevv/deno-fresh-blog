import { Head } from "$fresh/runtime.ts";

import { Handlers, PageProps } from "https://deno.land/x/fresh@1.1.5/server.ts";
import { listPosts } from "../utils/posts.ts";
import { Post } from "../types.d.ts";

export const handler: Handlers = {
  async GET(req, context) {
    const posts = await listPosts();
    return context.render({ posts });
  },
};

export default function Home(props: PageProps) {
  const { data } = props;
  const { posts } = data;
  return (
    <main class="p-4">
      <h1 class="text-4xl font-bold">Mi blog</h1>
      {posts.map((post: Post) => (
        <article>
          <h2 class="text-4xl font-bold">
            <a class="hover:text-blue-600" href={`/blog/${post.id}`}>
              {post.title}
            </a>
          </h2>
          <time>{Intl.DateTimeFormat("es").format(post.date)}</time>
        </article>
      ))}
    </main>
  );
}
