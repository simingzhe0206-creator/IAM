import { ArrowRight, CheckCircle, ClipboardText, EnvelopeSimple, MapTrifold } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import { ButtonLink } from '../components/ButtonLink';
import { assets, projectTypes, serviceCategories } from '../content/site';

const steps = [
  {
    title: 'Project introduction',
    text: 'Send the site address, project type and required survey service.',
    Icon: ClipboardText
  },
  {
    title: 'Review and quotation',
    text: 'IAM reviews the requirements and provides a clear scope of work and quotation.',
    Icon: EnvelopeSimple
  },
  {
    title: 'Survey and preparation',
    text: 'The survey team attends site and prepares professional survey plans and documents.',
    Icon: MapTrifold
  },
  {
    title: 'Documentation support',
    text: 'IAM can assist with council, certifier, solicitor and registration related documentation.',
    Icon: CheckCircle
  }
];

const audience = ['Architects', 'Builders', 'Developers', 'Government Agencies', 'Consultants'];

export function Home() {
  return (
    <>
      <section className="relative min-h-[100dvh] overflow-hidden bg-[#262522]">
        <video
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          src={assets.heroVideo}
          autoPlay
          muted
          loop
          playsInline
          poster={assets.homePoster}
          preload="metadata"
          aria-hidden="true"
          tabIndex={-1}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#11100f]/58 via-[#11100f]/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#11100f]/64 via-transparent to-[#11100f]/14" />
        <div className="section-shell relative z-10 flex min-h-[100dvh] items-end pb-36 pt-28 md:pb-44">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.14em] text-white/80">
              Sydney and NSW land surveying
            </p>
            <h1 className="text-balance text-3xl font-extrabold leading-[1.04] tracking-normal text-white sm:text-5xl md:text-7xl">
              Professional Land Surveying Services
            </h1>
            <p className="mt-6 max-w-3xl text-lg font-semibold leading-8 text-white/86 md:text-2xl md:leading-9">
              Professional Land Surveying and Development Support Across Sydney and NSW.
            </p>
          </div>
        </div>
      </section>

      <section className="section-band section-band-hero py-16 md:py-20">
        <div className="section-shell">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="text-balance text-4xl font-extrabold tracking-normal text-[#fffdf0] md:text-5xl">
                Service catalogue.
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-[#e6e2d2]">
                A practical service structure for architects, builders, developers, homeowners, certifiers and
                solicitors.
              </p>
            </div>
            <ButtonLink to="/services" variant="secondary">
              Explore all services
            </ButtonLink>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-5">
            {serviceCategories.map((category, index) => (
              <Link
                key={category.title}
                to={`/services/category/${category.slug}`}
                className={`group surface-card relative min-h-[360px] overflow-hidden p-5 transition duration-500 hover:-translate-y-1 hover:border-[#f4e00c]/75 ${
                  index === 0 || index === 2 ? 'lg:translate-y-6' : ''
                }`}
              >
                <img
                  className="absolute inset-0 h-full w-full object-cover opacity-38 transition duration-700 group-hover:scale-105 group-hover:opacity-58 image-treatment"
                  src={category.image}
                  alt=""
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#11100f]/86 via-[#252422]/52 to-[#252422]/16" />
                <div className="relative z-10 flex h-full flex-col justify-end">
                  <div className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#f4e00c]">
                    Catalogue {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="mt-4 text-2xl font-extrabold leading-tight text-[#fffdf0]">{category.title}</h3>
                  <div className="mt-5 grid gap-2">
                    {category.services.slice(0, 4).map((item) => (
                      <span key={item.label} className="text-sm font-semibold leading-5 text-[#e6e2d2]">
                        {item.label}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative min-h-[76vh] overflow-hidden bg-[#1c1b19]">
        <img className="absolute inset-0 h-full w-full object-cover image-treatment" src={assets.aboutBg} alt="" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#11100f]/82 via-[#11100f]/42 to-[#11100f]/12" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#11100f]/70 via-transparent to-[#11100f]/16" />
        <div className="section-shell relative z-10 flex min-h-[76vh] items-end pb-16 pt-24 md:pb-20 md:pt-32">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#f4e00c]">About IAM</p>
            <h2 className="mt-5 text-balance text-4xl font-extrabold tracking-normal text-[#fffdf0] md:text-6xl">
              Survey plans, title documentation and practical project coordination.
            </h2>
            <p className="mt-5 max-w-3xl text-lg font-semibold leading-8 text-[#f0eedc]">
              IAM Surveyors supports property owners, architects, builders and development teams with accurate survey
              information across Sydney and NSW.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {audience.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-[#fffdf0]/18 bg-[#11100f]/42 px-4 py-3 text-center text-sm font-bold text-[#fffdf0] backdrop-blur-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-band section-band-muted py-12 md:py-16">
        <div className="section-shell">
          <div className="grid gap-10 overflow-hidden">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
              <h2 className="text-balance text-4xl font-extrabold tracking-normal text-[#fffdf0] md:text-5xl">
                How we work.
              </h2>
              <p className="mt-4 max-w-xl text-lg leading-8 text-[#e6e2d2]">
                A simple workflow for moving from project information to a clear surveying scope and deliverables.
              </p>
              </div>
              <ButtonLink to="/quote" variant="secondary">Start a Project</ButtonLink>
            </div>

            <div className="grid gap-4 lg:grid-cols-4">
              {steps.map(({ title, text, Icon }, index) => (
                <article key={title} className="surface-card overflow-hidden">
                  <div className="relative h-48 overflow-hidden border-b border-[#fffdf0]/12">
                    <img className="h-full w-full object-cover transition duration-700 hover:scale-105 image-treatment" src={assets.howWork[index]} alt="" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#11100f]/62 to-transparent" />
                    <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#f4e00c] text-sm font-extrabold text-[#242321]">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#fffdf0]/8 text-[#f4e00c]">
                      <Icon size={22} weight="duotone" />
                    </div>
                    <h3 className="text-xl font-extrabold text-[#fffdf0]">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-[#e6e2d2]">{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-band py-12 md:py-16">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div>
              <h2 className="text-balance text-4xl font-extrabold tracking-normal text-[#fffdf0] md:text-5xl">
                Project types IAM supports.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-[#e6e2d2]">
                The prototype avoids invented case studies and presents the project categories supplied in the brief.
              </p>
              <div className="mt-8">
                <ButtonLink to="/projects">View Project Types</ButtonLink>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {projectTypes.map((project, index) => (
                <Link
                  key={project.title}
                  to="/projects"
                  className={`group surface-card relative min-h-56 overflow-hidden p-5 ${
                    index === 0 ? 'md:col-span-2' : ''
                  }`}
                >
                  <img
                    className="absolute inset-0 h-full w-full object-cover opacity-35 transition duration-700 group-hover:scale-105 group-hover:opacity-55 image-treatment"
                    src={project.image}
                    alt=""
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#252422]/58 via-[#252422]/42 to-[#252422]/22" />
                  <div className="relative z-10 flex h-full flex-col justify-end">
                    <h3 className="max-w-xl text-2xl font-extrabold tracking-normal text-[#fffdf0]">{project.title}</h3>
                    <p className="mt-3 max-w-xl text-sm leading-6 text-[#e6e2d2]">{project.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-band section-band-muted py-12 md:py-16">
        <div className="section-shell">
          <div className="border-y border-[#fffdf0]/12 py-10 text-[#fffdf0] md:py-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="text-balance text-4xl font-extrabold tracking-normal md:text-5xl">
                  Need a survey for your next project?
                </h2>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-[#e6e2d2]">
                  Send IAM your site address and project requirements. The team will review your request and get back
                  with a clear quotation.
                </p>
              </div>
              <Link
                to="/quote"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#f4e00c] px-6 text-sm font-extrabold text-[#242321] shadow-[0_16px_42px_rgba(244,224,12,0.18)] transition hover:brightness-105"
              >
                Request a Quote
                <ArrowRight size={18} weight="bold" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
