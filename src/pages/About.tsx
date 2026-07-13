import { Buildings, CheckCircle, MapTrifold, Ruler, UserCircle, UsersThree } from '@phosphor-icons/react';
import { ButtonLink } from '../components/ButtonLink';
import { PageHero } from '../components/PageHero';
import { Reveal } from '../components/Reveal';
import { assets, stats } from '../content/site';

const values = [
  'Accuracy',
  'Professionalism',
  'Clear Communication',
  'Efficiency',
  'Practical Problem Solving',
  'Long-Term Client Relationships'
];

const peopleSlots = ['Team member placeholder', 'Team member placeholder', 'Team member placeholder'];

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

const companyStrengths = [
  'Experienced land surveyors and development support professionals.',
  'Residential, commercial, infrastructure and land development project experience.',
  'Detail survey, boundary survey, setout survey, WAE, subdivision, strata, 88E and title related matters.',
  'Collaboration with architects, engineers, builders, certifiers, councils and solicitors.'
];

export function About() {
  return (
    <div className="editorial-page">
      <PageHero title="About IAM Surveyors" image={assets.aboutBg}>
        IAM Surveyors is a Sydney-based surveying company providing professional land surveying and land development
        support services across Sydney and New South Wales.
      </PageHero>

      <section className="editorial-section py-20 md:py-28">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.88fr_1.12fr]">
          <Reveal>
            <p className="editorial-kicker">Who we are</p>
            <h2 className="mt-5 text-balance text-4xl font-normal leading-tight md:text-6xl">
              Accurate survey information with clear development support.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#d8d5ca]">
              IAM does not only provide survey plans. The team supports clients through the full development
              documentation process.
            </p>
          </Reveal>
          <div className="border-t border-[#fffdf0]/16">
            {companyStrengths.map((item, index) => (
              <Reveal key={item} className="grid gap-4 border-b border-[#fffdf0]/16 py-6 sm:grid-cols-[3rem_1fr]" delay={index * 0.04}>
                <span className="text-sm font-bold text-[#f4e00c]">{String(index + 1).padStart(2, '0')}</span>
                <p className="text-lg leading-8 text-[#ece9df]">{item}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#a9a9a7] bg-[#cdcdcd] py-20 text-[#181817] md:py-28">
        <div className="section-shell">
          <Reveal className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#4b4a48]">Capabilities</p>
              <h2 className="mt-5 text-balance text-4xl font-normal leading-tight md:text-6xl">
                Technical delivery for every stage of development.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[#4b4a48]">
              Survey information, title documentation and practical coordination for property, design and development
              teams across Sydney and NSW.
            </p>
          </Reveal>

          <div className="mt-14 grid border-t border-[#181817]/20 md:grid-cols-2">
            {capabilityGroups.map(({ title, text, Icon }, index) => (
              <Reveal
                key={title}
                className={`grid gap-5 border-b border-[#181817]/20 py-8 md:grid-cols-[3rem_1fr] ${index % 2 === 0 ? 'md:border-r md:pr-8' : 'md:pl-8'}`}
                delay={index * 0.04}
              >
                <Icon className="text-[#4b4a48]" size={30} weight="light" />
                <div>
                  <h3 className="text-2xl font-normal">{title}</h3>
                  <p className="mt-3 leading-7 text-[#4b4a48]">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="editorial-section-soft py-16 md:py-20">
        <div className="section-shell grid border-t border-[#fffdf0]/16 sm:grid-cols-2 lg:grid-cols-4">
          {stats.slice(0, 4).map(([value, label], index) => (
            <Reveal key={label} className={`border-b border-[#fffdf0]/16 py-8 ${index < 3 ? 'lg:border-r lg:px-7' : 'lg:pl-7'}`}>
              <div className="text-4xl font-normal text-[#fffdf0] md:text-5xl">{value}</div>
              <div className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#b8b5aa]">{label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="grid bg-[#181817] lg:grid-cols-2">
        <div className="min-h-[520px] overflow-hidden">
          <img className="editorial-image image-treatment" src={assets.projectField} alt="IAM surveying team in the field" />
        </div>
        <div className="flex items-center px-6 py-16 sm:px-10 lg:px-16 xl:px-24">
          <Reveal className="max-w-2xl">
            <p className="editorial-kicker">Mission and values</p>
            <h2 className="mt-5 text-4xl font-normal leading-tight md:text-6xl">Reliable information. Practical support.</h2>
            <p className="mt-6 text-lg leading-8 text-[#d8d5ca]">
              To deliver accurate survey information, clear documentation and reliable support throughout every stage
              of the development process.
            </p>
            <div className="mt-10 grid border-t border-[#fffdf0]/16 sm:grid-cols-2">
              {values.map((value) => (
                <div key={value} className="border-b border-[#fffdf0]/16 py-4 text-sm font-bold sm:pr-4">
                  {value}
                </div>
              ))}
            </div>
            <div className="mt-9"><ButtonLink to="/quote">Talk to IAM</ButtonLink></div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-[#a9a9a7] bg-[#cdcdcd] py-20 text-[#181817] md:py-28">
        <div className="section-shell">
          <Reveal className="grid gap-8 lg:grid-cols-[0.68fr_1.32fr]">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#4b4a48]">People</p>
              <h2 className="mt-5 text-balance text-4xl font-normal leading-tight md:text-6xl">The team behind IAM.</h2>
              <p className="mt-5 max-w-lg text-lg leading-8 text-[#4b4a48]">
                Staff photos and profiles can be added once approved images and role details are ready.
              </p>
            </div>
            <div className="grid border-t border-[#181817]/20 sm:grid-cols-3">
              {peopleSlots.map((label, index) => (
                <div key={`${label}-${index}`} className="border-b border-[#181817]/20 p-5 sm:border-r last:sm:border-r-0">
                  <div className="flex aspect-[4/5] items-center justify-center bg-[#d3d1ca] text-[#706e68]">
                    <UserCircle size={64} weight="thin" />
                  </div>
                  <p className="mt-4 text-sm font-bold">{label}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.1em] text-[#6b6964]">Role to be confirmed</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="editorial-section py-16 md:py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <Reveal>
            <p className="editorial-kicker">Delivery standards</p>
            <h2 className="mt-5 text-4xl font-normal leading-tight md:text-5xl">Clear scope. Useful deliverables.</h2>
          </Reveal>
          <div className="border-t border-[#fffdf0]/16">
            {deliveryStandards.map((item, index) => (
              <Reveal key={item} className="flex gap-4 border-b border-[#fffdf0]/16 py-5" delay={index * 0.03}>
                <CheckCircle className="mt-1 shrink-0 text-[#f4e00c]" size={19} weight="fill" />
                <p className="leading-7 text-[#d8d5ca]">{item}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
