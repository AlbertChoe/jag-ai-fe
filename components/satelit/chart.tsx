'use client';

import { useMemo, useState } from 'react';

type Point = { label: string; value: number };

function levelOf(value: number) {
  if (value >= 70) return 'Tinggi';
  if (value >= 40) return 'Sedang';
  return 'Rendah';
}

export default function FertilityChart({
  data = [
    { label: 'Jan', value: 90 },
    { label: 'Feb', value: 90 },
    { label: 'Mar', value: 80 },
    { label: 'Apr', value: 75 },
    { label: 'Mei', value: 63 },
    { label: 'Jun', value: 60 },
  ],
}: {
  data?: Point[];
}) {
  const max = useMemo(() => Math.max(100, ...data.map((d) => d.value)), [data]);
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);

  // height of each bar "track" (must match grid height below)
  const TRACK_PX = 260; // Reduced to make room for labels
  const LABEL_SPACE = 40; // Space for labels above bars

  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-zinc-100">
      <div className="mb-2 flex items-baseline justify-between px-2">
        <h3 className="text-lg font-semibold">Grafik Kondisi Lahan 6 Bulan Terakhir</h3>
        <span className="text-xs text-zinc-400">(Skor Kesuburan)</span>
      </div>

      <div className="relative mt-2 w-full px-2">
        {/* Container with space for labels */}
        <div
          className="relative mx-3"
          style={{ height: TRACK_PX + LABEL_SPACE, paddingTop: LABEL_SPACE }}
        >
          {/* GRID (positioned within the track area) */}
          <div className="absolute inset-0 z-0" style={{ top: LABEL_SPACE, height: TRACK_PX }}>
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="absolute left-0 right-0 border-t border-dashed border-zinc-200"
                style={{ top: `${((i + 1) / 6) * 100}%` }}
              />
            ))}
            <div className="absolute bottom-0 left-0 right-0 border-t border-zinc-200" />
          </div>

          {/* BARS */}
          <div
            className="absolute z-10 flex items-end justify-between px-0"
            style={{ top: LABEL_SPACE, height: TRACK_PX, left: 0, right: 0 }}
          >
            {data.map((d, i) => {
              const pct = Math.max(0, Math.min(100, (d.value / max) * 100));
              const isHover = hoverIdx === i;
              const base =
                i < 2 ? 'from-indigo-600 to-indigo-500' : 'from-indigo-400 to-indigo-300';
              const opacity = i < 2 ? 'opacity-90' : i < 4 ? 'opacity-75' : 'opacity-60';

              return (
                <div key={d.label} className="relative flex w-12 flex-col items-center">
                  {/* value label positioned ABOVE the track area */}
                  <div
                    className="pointer-events-none absolute left-1/2 -translate-x-1/2 text-xs font-semibold text-zinc-500"
                    style={{
                      bottom: `calc(${pct}% + ${TRACK_PX - (pct / 100) * TRACK_PX + 8}px)`,
                      top: 'auto',
                    }}
                  >
                    {d.value}
                  </div>

                  {/* bar track */}
                  <div className="relative flex w-full items-end" style={{ height: TRACK_PX }}>
                    <div
                      className={`w-full rounded-t-md bg-gradient-to-t ${base} ${opacity} transition-transform duration-200 hover:scale-105`}
                      style={{ height: `${pct}%` }}
                      onMouseEnter={() => setHoverIdx(i)}
                      onMouseLeave={() => setHoverIdx(null)}
                    />

                    {/* tooltip */}
                    {isHover && (
                      <div
                        className="absolute left-1/2 -translate-x-1/2 rounded-md bg-zinc-700 px-2 py-1 text-[10px] font-medium text-white shadow-md z-20"
                        style={{ bottom: `calc(100% + 35px)` }}
                      >
                        {levelOf(d.value)}
                        <span className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-zinc-700" />
                      </div>
                    )}
                  </div>

                  {/* month label BELOW the track */}
                  <div className="mt-2 text-[10px] text-zinc-400">{d.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
