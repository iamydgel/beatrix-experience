import { LoaderHost } from "@/components/loader";

export default function HomePage() {
  return (
    <LoaderHost>
      <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-8">
        <h1 className="font-display text-5xl font-bold tracking-tight text-bx-text sm:text-6xl">
          Beatrix
        </h1>
        <p className="text-base text-bx-text-muted sm:text-lg">
          Lot 2 — Loader opérationnel. La page d&apos;accueil arrive au Lot 5.
        </p>
        <div
          className="size-20 rounded-full"
          style={{
            background:
              "linear-gradient(180deg, var(--color-bx-green) 0%, var(--color-bx-green-deep) 100%)",
          }}
          aria-hidden="true"
        />
      </main>
    </LoaderHost>
  );
}