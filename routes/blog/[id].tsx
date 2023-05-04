import { Handlers, PageProps } from "https://deno.land/x/fresh@1.1.5/server.ts";
import { HandlerContext } from "$fresh/server.ts";
import { loadPost } from "../../utils/posts.ts";
import { CSS } from "https://deno.land/x/gfm/mod.ts";
import Button from "../../islands/Button.tsx";

export const handler: Handlers = {
  async GET(request: Request, context: HandlerContext) {
    const { id } = context.params;
    const post = await loadPost(id);

    return context.render({ post });
  },
};

export default function PagesPost(props: PageProps) {
  const { post } = props?.data || {};
  return (
    <article class="p-4">
      <header>
        <h1 class="text-2xl font-bold">{post.title}</h1>
        <time>{Intl.DateTimeFormat("es").format(post.date)}</time>
      </header>
      <Button />
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div
        class="markdown-body"
        dangerouslySetInnerHTML={{ __html: post.body }}
      >
      </div>
      <p>
        {post}
      </p>
    </article>
  );
}
