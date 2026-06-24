import { ArrowRight, CheckCircle, ClipboardText, EnvelopeSimple, MapTrifold } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import { ButtonLink } from '../components/ButtonLink';
import { ServiceCard } from '../components/ServiceCard';
import { assets, projectTypes, services, stats } from '../content/site';

const steps = [
  {
    title: 'Tell Us About Your Project',
    text: 'Send the site address, project type and required survey service.',
    Icon: ClipboardText
  },
  {
    title: 'Receive a Clear Fee Proposal',
    text: 'IAM reviews the requirements and provides a clear scope of work and quotation.',
    Icon: EnvelopeSimple
  },
  {
    title: 'Site Survey and Plan Preparation',
    text: 'The survey team attends site and prepares professional survey plans and documents.',
    Icon: MapTrifold
  },
  {
    title: 'Ongoing Development Support',
    text: 'IAM can assist with council, certifier, solicitor and registration related documentation.',
    Icon: CheckCircle
  }
];

const audience = ['Architects', 'Builders', 'Developers', 'Certifiers', 'Solicitors'];

export function Home() {
  return (
    <>
      <section className="py-8 md:py-12">
        <div className="section-shell">
          <div className="page-canvas overflow-hidden p-5 md:p-8">
            <div className="relative min-h-[520px] overflow-hidden rounded-2xl bg-[#cdcdcd]">
              <img className="absolute inset-0 h-full w-full object-cover image-treatment" src={assets.hero} alt="" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#4b4a48]/82 via-[#4b4a48]/48 to-[#f4e00c]/18" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4b4a48]/20 via-transparent to-white/6" />
              <div className="relative z-10 flex min-h-[520px] max-w-3xl flex-col justify-center px-6 py-10 md:px-10">
                <p className="mb-5 text-sm font-bold uppercase tracking-[0.14em] text-white/80">
                  Sydney and NSW land surveying
                </p>
                <h1 className="text-balance text-3xl font-black leading-[1.04] tracking-normal text-white sm:text-5xl md:text-7xl">
                  Professional Land Surveying Services
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-white/90 sm:text-lg">
                  IAM Surveyors provides accurate, reliable and efficient surveying solutions for residential,
                  commercial and land development projects.
                </p>
                <div className="mt-8 flex max-w-[21rem] flex-col gap-3 sm:max-w-none sm:flex-row">
                  <ButtonLink to="/quote">Get a Free Quote</ButtonLink>
                  <ButtonLink to="/services" variant="secondary">
                    View Our Services
                  </ButtonLink>
                </div>
              </div>
            </div>

            <div className="grid gap-10 py-14 md:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <h2 className="text-balance text-4xl font-black tracking-normal text-[#4b4a48] md:text-5xl">
                  About IAM
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-[#4b4a48]">
                  IAM Surveyors supports property owners, architects, builders and development teams with survey plans,
                  title documentation and practical project coordination.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {stats.slice(0, 4).map(([value, label]) => (
                  <div key={label} className="min-w-0 rounded-2xl bg-[#f0eedc] p-5">
                    <div className="text-3xl font-black tracking-normal text-[#4b4a48]">{value}</div>
                    <div className="mt-2 break-words text-xs font-semibold uppercase tracking-[0.12em] text-[#a9a9a7]">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-3 border-y border-[#cdcdcd] py-5 md:grid-cols-5">
              {audience.map((item) => (
                <div key={item} className="rounded-xl bg-white px-4 py-3 text-center text-sm font-bold text-[#a9a9a7]">
                  {item}
                </div>
              ))}
            </div>

            <section className="py-14 md:py-16">
              <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                <div>
                  <h2 className="text-balance text-4xl font-black tracking-normal text-[#4b4a48] md:text-5xl">
                    Service catalogue.
                  </h2>
                  <p className="mt-4 max-w-2xl text-lg leading-8 text-[#4b4a48]">
                    A practical service structure for architects, builders, developers, homeowners, certifiers and
                    solicitors.
                  </p>
                </div>
                <ButtonLink to="/services" variant="secondary">
                  Explore all services
                </ButtonLink>
              </div>

              <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {services.slice(0, 6).map((service, index) => (
                  <ServiceCard key={service.slug} service={service} index={index} />
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="section-shell">
          <div className="page-canvas grid gap-8 overflow-hidden p-5 md:p-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative min-h-[520px] overflow-hidden rounded-2xl bg-[#cdcdcd]">
              <img className="absolute inset-0 h-full w-full object-cover image-treatment" src={assets.field} alt="" />
              <div className="absolute inset-0 bg-gradient-to-t from-white/8 to-transparent" />
              <div className="absolute right-6 top-6 flex h-32 w-32 items-center justify-center rounded-full bg-[#f4e00c] text-center text-sm font-black leading-5 text-[#4b4a48] shadow-[0_18px_42px_rgba(75,74,72,0.24)]">
                Clear quote
                <br />
                process
              </div>
            </div>

            <div className="flex flex-col justify-center py-4">
              <h2 className="text-balance text-4xl font-black tracking-normal text-[#4b4a48] md:text-5xl">
                How we work.
              </h2>
              <p className="mt-4 max-w-xl text-lg leading-8 text-[#4b4a48]">
                A simple workflow for moving from project information to a clear surveying scope and deliverables.
              </p>
              <div className="mt-8 grid gap-4">
                {steps.map(({ title, text, Icon }, index) => (
                  <div key={title} className="grid grid-cols-[3rem_1fr] gap-4 rounded-2xl border border-[#cdcdcd] bg-white p-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#4b4a48] text-[#f4e00c]">
                      <Icon size={22} weight="duotone" />
                    </div>
                    <div>
                      <div className="text-xs font-black uppercase tracking-[0.12em] text-[#a9a9a7]">Step {index + 1}</div>
                      <h3 className="mt-1 text-lg font-black text-[#4b4a48]">{title}</h3>
                      <p className="mt-2 text-sm leading-6 text-[#4b4a48]">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="section-shell">
          <div className="page-canvas grid gap-8 p-5 md:p-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div>
              <h2 className="text-balance text-4xl font-black tracking-normal text-[#4b4a48] md:text-5xl">
                Project types IAM supports.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-[#4b4a48]">
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
                    className="absolute inset-0 h-full w-full object-cover opacity-25 transition duration-700 group-hover:scale-105 group-hover:opacity-40 image-treatment"
                    src={project.image}
                    alt=""
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/94 via-[#f0eedc]/76 to-[#cdcdcd]/56" />
                  <div className="relative z-10 flex h-full flex-col justify-end">
                    <h3 className="max-w-xl text-2xl font-black tracking-normal text-[#4b4a48]">{project.title}</h3>
                    <p className="mt-3 max-w-xl text-sm leading-6 text-[#4b4a48]">{project.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 pb-14 md:py-12 md:pb-20">
        <div className="section-shell">
          <div className="rounded-2xl bg-[#4b4a48] p-8 text-white shadow-[0_24px_70px_rgba(75,74,72,0.30)] md:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="text-balance text-4xl font-black tracking-normal md:text-5xl">
                  Need a survey for your next project?
                </h2>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-[#cdcdcd]">
                  Send IAM your site address and project requirements. The team will review your request and get back
                  with a clear quotation.
                </p>
              </div>
              <Link
                to="/quote"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#f4e00c] px-6 text-sm font-black text-[#4b4a48] transition hover:brightness-95"
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
