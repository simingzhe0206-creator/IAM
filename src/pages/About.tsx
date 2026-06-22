import { CheckCircle } from '@phosphor-icons/react';
import { ButtonLink } from '../components/ButtonLink';
import { PageHero } from '../components/PageHero';
import { StatsStrip } from '../components/StatsStrip';
import { assets } from '../content/site';

const values = ['Accuracy', 'Professionalism', 'Clear Communication', 'Efficiency', 'Practical Problem Solving', 'Long-Term Client Relationships'];

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
          <h2 className="text-balance text-4xl font-black tracking-normal text-[#fffdfa] md:text-6xl">
              Accurate survey information with clear development support.
            </h2>
            <p className="mt-5 text-lg leading-8 text-stone-300">
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
            <CheckCircle className="mt-1 shrink-0 text-[#bd8b36]" size={24} weight="fill" />
                <p className="text-lg leading-8 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StatsStrip />

      <section className="py-20 md:py-28">
        <div className="section-shell grid gap-8 lg:grid-cols-2">
        <div className="overflow-hidden rounded-2xl border border-[#d2a253]/25 shadow-[0_18px_60px_rgba(36,35,33,0.16)]">
            <img className="h-full min-h-[440px] w-full object-cover image-treatment" src={assets.equipment} alt="IAM surveying equipment" />
          </div>
          <div className="glass-panel rounded-2xl p-8 md:p-10">
          <h2 className="text-4xl font-black tracking-normal text-[#242321]">Mission and values</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              To deliver accurate survey information, clear documentation and reliable support throughout every stage
              of the development process.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {values.map((value) => (
                <div key={value} className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700">
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
    </>
  );
}
