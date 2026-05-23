import type { CSSProperties } from "react";

const TAPE =
  "NO COPE  ★  SIGMA DX  ★  TYPESCRIPT MAXXING  ★  AUTOLOAD COMMANDS  ★  ";

export function ChadDivider({
  label = "CHAD CHECKPOINT",
}: {
  label?: string;
}) {
  return (
    <div className="flex flex-col gap-0 py-2" aria-hidden>
      <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.35em] text-zinc-600">
        <div className="h-px min-w-0 flex-1 bg-white/10" />
        <span className="shrink-0 text-zinc-500">★ {label} ★</span>
        <div className="h-px min-w-0 flex-1 bg-white/10" />
      </div>
      <div className="relative mt-3 overflow-hidden border-y-2 border-black bg-white text-black sm:-mx-6">
        <div
          className="flex animate-marquee whitespace-nowrap py-1 font-mono text-[10px] font-black tracking-[0.22em]"
          style={
            {
              "--duration": "28s",
              "--gap": "0px",
            } as CSSProperties
          }
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="px-4">
              {TAPE}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
