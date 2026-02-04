import Image from "next/image";

export default function Page() {
  return (
    <section>
      <Image
        src="/avatar.png"
        width={200}
        height={200}
        className="mb-2"
        alt="tobeycodes avatar"
      />
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        tobeycodes
      </h1>
      <ul className="mb-8 space-y-6">
        <li>
          <h2 className="text-lg font-medium mb-2">me</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              software engineer with 13 years of experience building web and
              mobile applications
            </li>
            <li>
              passionate about open source and an{" "}
              <a
                href="https://github.com/search?q=author%3Atobeycodes&type=pullrequests"
                target="_blank"
                rel="noopener noreferrer"
                className="underline transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
              >
                active contributor
              </a>
            </li>
            <li>
              interested in optimizing developer workflows with ai/llms,
              including agent-based systems, feedback loops, and automation
            </li>
            <li>
              care a lot about code quality tools, developer experience, and
              ci/cd pipelines
            </li>
            <li>
              interested in solana, particularly crypto banking, stablecoins,
              rwa and yield bearing products
            </li>
            <li>editing code in ghostty, neovim, tmux, and opencode</li>
            <li>
              building with typescript, react, next.js, react native, expo,
              node, effect
            </li>
            <li>
              using packages such as tailwindcss, base-ui, tanstack, zustand,
              trpc, drizzle, react-hook-form, zod, better-auth, storybook,
              vitest, playwright, framer motion, turborepo, biome
            </li>
          </ul>
        </li>
        <li>
          <h2 className="text-lg font-medium mb-2">current</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              building an open source crypto wallet.{" "}
              <a
                href="https://arena.colosseum.org/projects/explore/samui-wallet"
                target="_blank"
                rel="noopener noreferrer"
                className="underline transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
              >
                winner of the colosseum cypherpunk public goods award
              </a>
            </li>
            <li>
              helping the solana foundation to build and improve typescript
              tooling on solana
            </li>
            <li>
              looking for a full-time role as a staff software engineer at a
              company where i can make real impact
            </li>
          </ul>
        </li>
        <li>
          <h2 className="text-lg font-medium mb-2">past</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              founding engineer on ethereum nft metaverse web3 mmorpg game ($5mm
              nft sales at launch, $10mm in series a)
            </li>
            <li>
              graduate of solana turbine builders / advanced program, ackee
              school of solana, rektoff solana rust security bootcamp
            </li>
            <li>
              worked on projects at scale for companies like uber, microsoft,
              six flags and publix
            </li>
            <li>computer science bsc degree from a russell group university</li>
          </ul>
        </li>
      </ul>
    </section>
  );
}
