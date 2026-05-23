import { cn } from "@/lib/utils";
import { GradientItalic, SectionHeading } from "@/components/home/gradient-italic";

const virginTraits = [
  "Casts to `any` to ship faster",
  "REST.put for every command, manually",
  "47 event listeners, all wired by hand",
  "3.8 GB RAM for 50k guilds",
  "Documentation last updated in 2018",
  "Shard 0 sneezes, the bot dies",
  "Discord ships a feature → time to fork",
  "Cope.",
];

const chadTraits = [
  "End-to-end inference. Period.",
  "Decorators register everything for you",
  "AutoLoad scans your command tree",
  "600 MB RAM for the same 50k guilds",
  "Docs with runnable examples on every page",
  "Sharding & uWS adapter ship in-house",
  "Day-1 support for every Discord update",
  "Pure W.",
];

export function VirginVsChad() {
  return (
    <section className="relative flex w-full min-w-0 flex-col gap-8 py-12">
      {/* Section header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 border border-white/15 bg-white/5">
          <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-zinc-300 font-mono">
            The Receipts
          </span>
        </div>
        <SectionHeading>
          Virgin Framework <span className="text-zinc-600">vs</span>{" "}
          <GradientItalic variant="sky">Chad Seyfert</GradientItalic>
        </SectionHeading>
        <p className="mt-4 text-zinc-500 max-w-xl mx-auto">
          Side by side. Pick your fighter.
        </p>
      </div>

      {/* Comparison grid */}
      <div className="grid md:grid-cols-2 gap-0 relative">
        {/* VS badge — desktop center */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center w-16 h-16 rotate-12 border-2 border-white bg-black shadow-[0_0_40px_rgba(255,255,255,0.25)]">
          <span className="font-black text-xl tracking-tighter italic">VS</span>
        </div>

        {/* VIRGIN side */}
        <VirginCard />

        {/* Mobile VS divider — only shows between cards on small screens */}
        <div className="md:hidden relative flex items-center justify-center py-4">
          <div className="absolute left-0 right-0 top-1/2 h-px border-t border-dashed border-white/20" />
          <div className="relative z-10 flex items-center justify-center w-14 h-14 rotate-12 border-2 border-white bg-black shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            <span className="font-black text-lg tracking-tighter italic">VS</span>
          </div>
        </div>

        {/* CHAD side */}
        <ChadCard />
      </div>

      {/* Bottom tape — no -mx on mobile (main overflow-x-hidden clips it) */}
      <div className="relative mt-4 border-y border-white/15 bg-white/[0.02] py-3 sm:-mx-6">
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 px-1 text-center font-mono text-[10px] uppercase tracking-[0.15em] text-zinc-500 sm:tracking-[0.3em]">
          <span className="whitespace-nowrap">SOURCE: TRUST ME BRO</span>
          <span className="text-white/30" aria-hidden>
            ★
          </span>
          <span className="whitespace-nowrap">METHODOLOGY: VIBES</span>
          <span className="text-white/30" aria-hidden>
            ★
          </span>
          <span className="whitespace-nowrap">RESULT: SEYFERT WINS</span>
        </div>
      </div>
    </section>
  );
}

function VirginCard() {
  return (
    <div
      className={cn(
        "relative border-2 border-zinc-800 bg-zinc-950/60 p-6 md:p-8",
        "md:rounded-none md:border-r-0",
        "before:absolute before:inset-0 before:bg-[repeating-linear-gradient(135deg,transparent,transparent_8px,rgba(255,255,255,0.015)_8px,rgba(255,255,255,0.015)_16px)] before:pointer-events-none"
      )}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl grayscale opacity-60">😬</span>
        <div>
          <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-red-500/80 font-mono">
            // The Virgin
          </div>
          <h3 className="text-2xl md:text-3xl font-black uppercase italic text-zinc-500 leading-none mt-1">
            that-library.js
          </h3>
        </div>
      </div>

      {/* Subtitle */}
      <p className="text-xs text-zinc-600 italic mb-6 max-w-xs">
        Slouched. Anxious. Mid. Apologizes for every npm warning.
      </p>

      {/* Traits list */}
      <ul className="space-y-2.5">
        {virginTraits.map((t) => (
          <li
            key={t}
            className="flex items-start gap-2.5 text-sm text-zinc-500"
          >
            <span className="mt-[3px] inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-red-900/60 text-red-500/70 text-[10px] font-bold">
              ×
            </span>
            <span className="line-through decoration-zinc-700 decoration-1">
              {t}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ChadCard() {
  return (
    <div
      className={cn(
        "relative border-2 border-white bg-white/[0.04] p-6 md:p-8",
        "md:rounded-none",
        "shadow-[0_0_60px_-10px_rgba(255,255,255,0.15)]"
      )}
    >
      {/* Approved corner badge */}
      <div className="absolute -top-3 right-4 px-2 py-0.5 bg-white text-black text-[9px] font-black uppercase tracking-[0.2em]">
        Approved
      </div>

      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl">💪</span>
        <div>
          <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-white/90 font-mono">
            // The Chad
          </div>
          <h3 className="text-2xl md:text-3xl font-black uppercase italic text-white leading-none mt-1">
            seyfert
          </h3>
        </div>
      </div>

      {/* Subtitle */}
      <p className="text-xs text-zinc-400 italic mb-6 max-w-xs">
        Square jaw. End-to-end type safety. Doesn&apos;t lose sleep over WebSocket reconnects.
      </p>

      {/* Traits list */}
      <ul className="space-y-2.5">
        {chadTraits.map((t) => (
          <li
            key={t}
            className="flex items-start gap-2.5 text-sm text-zinc-100"
          >
            <span className="mt-[3px] inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-white bg-white text-black text-[10px] font-black">
              ✓
            </span>
            <span className="font-medium">{t}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
