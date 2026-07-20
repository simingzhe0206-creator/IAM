import { ArrowRight } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import { ButtonLink } from '../components/ButtonLink';
import { ProjectTimeline } from '../components/ProjectTimeline';
import { Reveal } from '../components/Reveal';
import { assets, projects, serviceCategories } from '../content/site';

const audience = ['Architects', 'Builders', 'Developers', 'Government Agencies', 'Consultants'];

export function Home() {
  return (
    <>
      <section className="relative min-h-[100dvh] overflow-hidden bg-[#262522]">
        <video
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          tabIndex={-1}
        >
          <source media="(max-width: 767px)" src={assets.heroVideoMobile} type="video/mp4" />
          <source src={assets.heroVideoDesktop} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#11100f]/58 via-[#11100f]/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#11100f]/64 via-transparent to-[#11100f]/14" />
        <div className="section-shell relative z-10 flex min-h-[100dvh] items-end pb-36 pt-28 md:pb-44">
          <Reveal className="max-w-4xl">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.14em] text-white/80">
              Sydney and NSW land surveying
            </p>
            <h1 className="text-balance text-3xl font-extrabold leading-[1.04] tracking-normal text-white sm:text-5xl md:text-7xl">
              Professional Land Surveying Services
            </h1>
            <p className="mt-6 max-w-3xl text-lg font-semibold leading-8 text-white/86 md:text-2xl md:leading-9">
              Professional Land Surveying and Development Support Across Sydney and NSW.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-band section-band-hero py-16 md:py-20">
        <div className="section-shell">
          <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
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
          </Reveal>

          <div className="mt-10 grid gap-5 lg:grid-cols-5">
            {serviceCategories.map((category, index) => (
              <Link
                key={category.title}
                to={`/services/category/${category.slug}`}
                className={`group surface-card relative min-h-[360px] overflow-hidden p-5 transition duration-500 hover:-translate-y-1 hover:border-[#f4e00c]/75 ${
                  index === 0 || index === 2 || index === 4 ? 'lg:translate-y-6' : ''
                }`}
              >
                <img
                  className="absolute inset-0 h-full w-full object-cover opacity-44 image-treatment"
                  src={category.catalogueImage ?? category.image}
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
          <Reveal className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#f4e00c]">About IAM</p>
            <h2 className="mt-5 text-balance text-4xl font-extrabold tracking-normal text-[#fffdf0] md:text-6xl">
              Reliable survey data for every stage of your project.
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#f0eedc] md:text-xl">
              From detail surveys and boundary identification to subdivision and construction support, we deliver
              accurate information that keeps your project moving.
            </p>
            <p className="mt-10 text-sm font-semibold text-[#f0eedc]">We Support</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {audience.map((item) => (
                <div
                  key={item}
                  className="flex min-h-14 items-center justify-center rounded-full border border-white/25 bg-gradient-to-b from-white/20 to-white/8 px-5 py-3 text-center text-sm font-semibold text-[#fffdf0] shadow-[inset_0_1px_0_rgba(255,255,255,0.34),0_12px_28px_rgba(0,0,0,0.18)] backdrop-blur-xl transition hover:border-white/40 hover:from-white/26 hover:to-white/12"
                >
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section id="how-we-work" className="scroll-mt-20 border-y border-[#242321]/12 bg-[#f7f5e9] py-16 text-[#242321] md:py-24">
        <div className="section-shell">
          <div className="grid gap-10 overflow-hidden">
            <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#77736b]">Our process</p>
              <h2 className="mt-4 text-balance text-4xl font-extrabold tracking-normal text-[#242321] md:text-5xl">
                How we work.
              </h2>
              <p className="mt-4 max-w-xl text-lg leading-8 text-[#56534e]">
                A simple workflow for moving from project information to a clear surveying scope and deliverables.
              </p>
              </div>
              <ButtonLink to="/quote">Start a Project</ButtonLink>
            </Reveal>

            <ProjectTimeline images={assets.howWork} />
          </div>
        </div>
      </section>

      <section id="featured-projects" className="section-band scroll-mt-20 py-12 md:py-16">
        <div className="section-shell">
          <div className="grid gap-10 lg:grid-cols-[0.62fr_1.38fr] lg:items-start">
            <Reveal>
              <h2 className="text-balance text-4xl font-extrabold tracking-normal text-[#fffdf0] md:text-5xl">
                Project types IAM supports.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-[#e6e2d2]">
                Selected IAM project experience across strata, digital modelling, construction and land development.
              </p>
              <div className="mt-8">
                <ButtonLink to="/projects">View Project Types</ButtonLink>
              </div>
            </Reveal>

            <div className="flex snap-x snap-mandatory gap-px overflow-x-auto border-y border-[#fffdf0]/16 bg-[#fffdf0]/14 lg:grid lg:grid-cols-4 lg:overflow-visible">
              {projects.map((project) => (
                <Link
                  key={project.title}
                  to={`/projects/${project.slug}`}
                  className="group relative min-h-[480px] min-w-[78vw] snap-start overflow-hidden bg-[#181817] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-[#f4e00c] sm:min-w-[46vw] lg:min-w-0"
                  aria-label={`${project.number}. ${project.title}`}
                >
                  <img
                    className="absolute inset-0 h-full w-full object-cover brightness-[0.42] saturate-[0.72] transition-[filter] duration-500 group-hover:brightness-[0.84] group-hover:saturate-100 group-focus-visible:brightness-[0.84] group-focus-visible:saturate-100"
                    src={project.image}
                    alt=""
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#11100f]/88 via-[#11100f]/20 to-[#11100f]/24 transition group-hover:from-[#11100f]/68 group-focus-visible:from-[#11100f]/68" />
                  <div className="absolute inset-x-0 bottom-0 z-10 flex min-h-64 items-end justify-between gap-5 p-5">
                    <div className="text-5xl font-extrabold text-white/88">{project.number}</div>
                    <h3 className="project-vertical-title text-sm font-extrabold uppercase leading-tight text-white">
                      {project.shortTitle}
                      <span className="mt-3 block text-xs font-semibold normal-case text-white/72">{project.location}</span>
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-band section-band-muted py-12 md:py-16">
        <div className="section-shell">
          <Reveal className="border-y border-[#fffdf0]/12 py-10 text-[#fffdf0] md:py-12">
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
          </Reveal>
        </div>
      </section>
    </>
  );
}
