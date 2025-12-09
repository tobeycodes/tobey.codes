import Image from "next/image";
import Footer from "./components/footer";

export default function Page() {
  return (
    <section>
      <Image
        src="/avatar.png"
        alt="tobeycodes avatar"
        width={200}
        height={200}
        className="mb-2 rounded-full mx-auto"
      />
      <h1 className="mb-8 text-4xl font-semibold tracking-tighter text-center">
        tobeycodes
      </h1>
      <Footer />
      <div className="prose-lg mb-10 text-neutral-700 dark:text-neutral-300">
        <ul className="list-disc list-inside space-y-1">
          <li>software engineer with 12 years of experience</li>
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
          <li>
            founding engineer on web3 nft metaverse startup ($5mm nft sales at
            launch, $10mm in series a)
          </li>
          <li>
            passionate about open source and contributing to several projects in
            the solana ecosystem
          </li>
          <li>
            interested in crypto/web3 and currently building a software crypto
            wallet
          </li>
          <li>
            open to contract/freelance work or the right full-time role where i
            truly believe in the product and can make real impact
          </li>
        </ul>
      </div>
    </section>
  );
}
