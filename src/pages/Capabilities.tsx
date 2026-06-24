import { Buildings, CheckCircle, FileText, MapTrifold, Ruler, UsersThree } from '@phosphor-icons/react';
import { ButtonLink } from '../components/ButtonLink';
import { PageHero } from '../components/PageHero';
import { assets, services, stats } from '../content/site';

const capabilityGroups = [
  {
    title: 'Survey and Site Intelligence',
    text: 'Measured site information for design, approvals, construction and compliance workflows.',
    Icon: Ruler
  },
  {
    title: 'Subdivision and Title Support',
    text: 'Plans, title coordination and registration support for Torrens, strata and community title projects.',
    Icon: Buildings
  },
  {
    title: 'Construction Documentation',
    text: 'Setout, work-as-executed and as-built survey support for builders, certifiers and project teams.',
    Icon: MapTrifold
  },
  {
    title: 'Consultant Coordination',
    text: 'Practical survey input for architects, engineers, solicitors, certifiers, councils and developers.',
    Icon: UsersThree
  }
];

const deliveryStandards = [
  'Clear scope confirmation before survey work begins',
  'Survey information prepared for practical project use',
  'PDF and CAD deliverables where required by the service',
  'Support for council, certifier and registration related documentation',
  'Responsive coordination with the wider project consultant team'
];

export function Capabilities() {
  return (
    <>
      <PageHero title="Capabilities" image={assets.equipment}>
        IAM Surveyors supports property, design and development teams with survey information, title documentation and
        practical project coordination across Sydney and NSW.
      </PageHero>

      <section className="section-band py-20 md:py-28">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="sticky top-28">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#f4e00c]">About IAM</p>
            <h2 className="mt-5 text-balance text-4xl font-extrabold leading-tight text-[#fffdf0] md:text-6xl">
              Built for technical survey delivery and development support.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#e6e2d2]">
              This page summarises IAM's working capability areas without inventing individual case studies or client
              names.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {capabilityGroups.map(({ title, text, Icon }) => (
              <article key={title} className="surface-card p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f4e00c] text-[#242321]">
                  <Icon size={24} weight="duotone" />
                </div>
                <h3 className="mt-6 text-2xl font-extrabold text-[#fffdf0]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#e6e2d2]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band section-band-muted py-20 md:py-28">
        <div className="section-shell grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="glass-panel rounded-2xl p-7 md:p-9">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f4e00c] text-[#242321]">
              <FileText size={24} weight="duotone" />
            </div>
            <h2 className="mt-6 text-3xl font-extrabold text-[#fffdf0]">Delivery standards</h2>
            <div className="mt-6 grid gap-4">
              {deliveryStandards.map((item) => (
                <div key={item} className="flex gap-3 text-sm leading-6 text-[#e6e2d2]">
                  <CheckCircle className="mt-0.5 shrink-0 text-[#f4e00c]" size={18} weight="fill" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {stats.slice(0, 4).map(([value, label]) => (
              <div key={label} className="surface-card p-6">
                <div className="text-4xl font-extrabold text-[#fffdf0]">{value}</div>
                <div className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#e6e2d2]">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band py-20 md:py-28">
        <div className="section-shell">
          <div className="grid gap-6 border-y border-[#fffdf0]/12 py-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-[#fffdf0]">Need a capability matched to your project?</h2>
              <p className="mt-3 max-w-2xl text-[#e6e2d2]">
                Send the address, project stage and required survey outcome. IAM can recommend the right service path.
              </p>
            </div>
            <ButtonLink to="/quote">Request a Quote</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
