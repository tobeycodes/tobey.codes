import { BlogPosts } from "app/components/posts";
import Image from "next/image";

export default function Page() {
  return (
    <section>
      <Image
        src="/logo.png"
        alt="Tobey Codes Logo"
        width={200}
        height={200}
        className="mb-2 rounded-full mx-auto"
      />
      <h1 className="mb-8 text-4xl font-semibold tracking-tighter text-center">
        tobeycodes
      </h1>
      <div className="prose-lg mb-10 text-neutral-700 dark:text-neutral-300">
        <ul className="list-disc list-inside space-y-1">
          <li>12+ years of full stack engineering experience</li>
          <li>i write code with neovim, tmux, ghostty, and opencode</li>
          <li>
            i build with typescript,{" "}
            <strong className="font-bold">effect</strong>, node, nestjs, react,
            next.js, react native, expo, tailwindcss, base-ui, tanstack,
            zustand, trpc, drizzle, react-hook-form, zod, better-auth,
            storybook, vitest, playwright, framer motion, turborepo, biome
          </li>
          <li>
            worked on projects at scale for companies like uber, microsoft and
            publix
          </li>
          <li>passionate about open source</li>
          <li>interested in crypto/web3</li>
          <li>contributing to several projects in the solana ecosystem</li>
          <li>currently building a software crypto wallet</li>
          <li>
            open to contract/freelance work or the right full-time role where i
            truly believe in the product and can make real impact
          </li>
        </ul>
      </div>
    </section>
  );
}
