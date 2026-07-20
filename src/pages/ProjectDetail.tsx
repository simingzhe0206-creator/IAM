import { ArrowLeft } from '@phosphor-icons/react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ButtonLink } from '../components/ButtonLink';
import { Reveal } from '../components/Reveal';
import { getProjectBySlug } from '../content/site';

export function ProjectDetail() {
  const { projectSlug } = useParams();
  const project = getProjectBySlug(projectSlug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="editorial-page">
      <section className="relative min-h-[72vh] overflow-hidden border-b border-[#fffdf0]/14 bg-[#181817] pt-20">
        <img className="absolute inset-0 h-full w-full object-cover" src={project.image} alt={project.imageAlt} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#11100f]/88 via-[#11100f]/22 to-[#11100f]/8" />
        <div className="section-shell relative z-10 flex min-h-[calc(72vh-5rem)] items-end pb-14 pt-24 md:pb-20">
          <Reveal className="max-w-5xl">
            <p className="editorial-kicker">Project {project.number}</p>
            <h1 className="mt-5 text-balance text-4xl font-extrabold leading-[1.06] text-[#fffdf0] md:text-7xl">
              {project.title}
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="editorial-section py-16 md:py-24">
        <div className="section-shell">
          <Link className="inline-flex items-center gap-2 text-sm font-bold text-[#ece9df]" to="/projects">
            <ArrowLeft size={18} weight="bold" /> Back to Projects
          </Link>

          <div className="mt-12 grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
            <Reveal>
              <p className="editorial-kicker">Project overview</p>
              <h2 className="mt-5 text-balance text-4xl font-extrabold leading-tight md:text-5xl">
                {project.shortTitle}
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#d8d5ca]">{project.location}</p>
              <p className="mt-7 max-w-xl leading-8 text-[#b8b5aa]">
                Detailed project scope, deliverables and completion information will be added after the approved
                project material is supplied.
              </p>
            </Reveal>

            <div className="border-t border-[#fffdf0]/16">
              {project.details.map((detail, index) => (
                <Reveal
                  key={detail.label}
                  className="grid gap-3 border-b border-[#fffdf0]/16 py-6 sm:grid-cols-[3rem_0.7fr_1.3fr]"
                  delay={index * 0.04}
                >
                  <span className="text-xs font-extrabold text-[#f4e00c]">{String(index + 1).padStart(2, '0')}</span>
                  <h3 className="text-base font-extrabold text-[#fffdf0]">{detail.label}</h3>
                  <p className="text-sm leading-7 text-[#b8b5aa]">{detail.value}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal className="mt-16 flex flex-col justify-between gap-6 border-y border-[#fffdf0]/14 py-9 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-2xl font-extrabold text-[#fffdf0]">Discuss a similar project with IAM.</h2>
              <p className="mt-2 text-sm leading-6 text-[#b8b5aa]">Send your site address, plans and survey requirements.</p>
            </div>
            <ButtonLink to="/quote">Request a Quote</ButtonLink>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
