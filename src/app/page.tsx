export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 text-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Ark
          </h1>
          <p className="text-base text-neutral-400 sm:text-lg">
            Mobile-first PWA, powered by Next.js
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 backdrop-blur">
          <div className="space-y-3 text-sm text-neutral-300">
            <div className="flex items-center justify-between">
              <span>Next.js</span>
              <span className="text-emerald-400">14</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Tailwind CSS</span>
              <span className="text-emerald-400">3.4</span>
            </div>
            <div className="flex items-center justify-between">
              <span>PWA</span>
              <span className="text-emerald-400">Enabled</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Theme</span>
              <span className="text-emerald-400">Dark</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Design</span>
              <span className="text-emerald-400">Mobile-first</span>
            </div>
          </div>
        </div>

        <p className="text-xs text-neutral-600">
          Edit <code className="text-neutral-400">src/app/page.tsx</code> to get started
        </p>
      </div>
    </main>
  );
}
