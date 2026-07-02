import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-7xl flex-col items-center justify-center px-4 pt-24 text-center sm:px-6 lg:px-8">
      <p className="font-display text-7xl font-bold text-white/10">404</p>
      <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-white">
        This page skipped its session
      </h1>
      <p className="mx-auto mt-3 max-w-md text-slate-400">
        The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get you back
        on track.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button href="/">Back to Home</Button>
        <Button href="/programs" variant="secondary">
          Explore Programs
        </Button>
      </div>
    </section>
  );
}
