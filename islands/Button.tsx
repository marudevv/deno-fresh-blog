import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { useState } from "preact/hooks";

export default function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  const [like, setLike] = useState(false);
  return (
    <button
      onClick={() => setLike(!like)}
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      class="px-2 py-1 border(gray-100 2) hover:bg-gray-200"
    >
      {like ? "🤍 Dislike" : "🖤 like"}
    </button>
  );
}
