import { CheckCircle, UserCircle } from '@phosphor-icons/react';
import { ButtonLink } from '../components/ButtonLink';
import { PageHero } from '../components/PageHero';
import { StatsStrip } from '../components/StatsStrip';
import { assets } from '../content/site';

const values = ['Accuracy', 'Professionalism', 'Clear Communication', 'Efficiency', 'Practical Problem Solving', 'Long-Term Client Relationships'];

const peopleSlots = ['Team member placeholder', 'Team member placeholder', 'Team member placeholder'];

export function About() {
  return (
    <>
      <PageHero title="About IAM Surveyors" image={assets.field}>
        IAM Surveyors is a Sydney-based surveying company providing professional land surveying and land development
        support services across Sydney and New South Wales.
      </PageHero>

      <section className="py-20 md:py-28">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="sticky top-28">
          <h2 className="text-balance text-4xl font-extrabold tracking-normal text-[#fffdf0] md:text-6xl">
              Accurate survey information with clear development support.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#e6e2d2]">
              IAM does not only provide survey plans. The team supports clients through the full development
              documentation process.
            </p>
          </div>
          <div className="grid gap-5">
            {[
              'Experienced land surveyors and development support professionals.',
              'Residential, commercial, infrastructure and land development project experience.',
              'Detail survey, boundary survey, setout survey, WAE, subdivision, strata, 88E and title related matters.',
              'Collaboration with architects, engineers, builders, certifiers, councils and solicitors.'
            ].map((item) => (
              <div key={item} className="glass-panel flex gap-4 rounded-2xl p-6">
            <CheckCircle className="mt-1 shrink-0 text-[#f4e00c]" size={24} weight="fill" />
                <p className="text-lg leading-8 text-[#e6e2d2]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StatsStrip />

      <section className="py-20 md:py-28">
        <div className="section-shell grid gap-8 lg:grid-cols-2">
        <div className="overflow-hidden rounded-2xl border border-[#f4e00c]/25 shadow-[0_18px_60px_rgba(26,25,23,0.30)]">
            <img className="h-full min-h-[440px] w-full object-cover image-treatment" src={assets.equipment} alt="IAM surveying equipment" />
          </div>
          <div className="glass-panel rounded-2xl p-8 md:p-10">
          <h2 className="text-4xl font-extrabold tracking-normal text-[#fffdf0]">Mission and values</h2>
            <p className="mt-5 text-lg leading-8 text-[#e6e2d2]">
              To deliver accurate survey information, clear documentation and reliable support throughout every stage
              of the development process.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {values.map((value) => (
                <div key={value} className="rounded-xl border border-[#fffdf0]/14 bg-[#fffdf0]/8 px-4 py-3 text-sm font-bold text-[#fffdf0]">
                  {value}
                </div>
              ))}
            </div>
            <div className="mt-8">
              <ButtonLink to="/quote">Talk to IAM</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section-band section-band-muted py-20 md:py-28">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#f4e00c]">People</p>
            <h2 className="mt-5 text-balance text-4xl font-extrabold leading-tight text-[#fffdf0] md:text-6xl">
              The team behind IAM Surveyors.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#e6e2d2]">
              Staff photos and team profiles can be added here once approved images and role details are ready.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {peopleSlots.map((label, index) => (
              <article key={`${label}-${index}`} className="surface-card overflow-hidden">
                <div className="grid aspect-[4/5] place-items-center border-b border-[#fffdf0]/12 bg-[#fffdf0]/7">
                  <UserCircle className="text-[#fffdf0]/48" size={92} weight="thin" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-extrabold text-[#fffdf0]">{label}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#e6e2d2]">Role and profile details pending.</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band py-16 md:py-20">
        <div className="section-shell">
          <div className="grid gap-6 border-y border-[#fffdf0]/12 py-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-[#fffdf0]">View IAM capabilities</h2>
              <p className="mt-3 max-w-2xl text-[#e6e2d2]">
                See the technical delivery areas IAM supports across survey, title, construction and documentation.
              </p>
            </div>
            <ButtonLink to="/about/capabilities">Open Capabilities</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
