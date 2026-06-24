import { stats } from '../content/site';

export function StatsStrip() {
  return (
    <section className="section-band section-band-muted py-10">
      <div className="section-shell">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {stats.map(([value, label]) => (
            <div key={label} className="rounded-2xl border border-[#fffdf0]/12 bg-[#fffdf0]/8 p-5">
              <div className="text-3xl font-extrabold tracking-normal text-[#fffdf0]">{value}</div>
              <div className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#cdcdcd]">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
