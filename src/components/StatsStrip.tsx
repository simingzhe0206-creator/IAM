import { stats } from '../content/site';

export function StatsStrip() {
  return (
    <section className="py-8">
      <div className="section-shell">
        <div className="page-canvas grid grid-cols-2 gap-4 p-5 md:grid-cols-3 md:p-6 lg:grid-cols-6">
          {stats.map(([value, label]) => (
            <div key={label} className="rounded-2xl bg-[#fbf6ec] p-5">
              <div className="text-3xl font-black tracking-normal text-[#242321]">{value}</div>
              <div className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
