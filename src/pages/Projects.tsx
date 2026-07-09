import { ButtonLink } from '../components/ButtonLink';
import { PageHero } from '../components/PageHero';
import { assets, projectExperience, projectTypes, services } from '../content/site';

export function Projects() {
  return (
    <>
      <PageHero title="Project Types" image={assets.projectMap}>
        IAM supports residential, subdivision, strata, commercial and construction related projects. This prototype
        presents categories rather than invented case studies.
      </PageHero>

      <section className="section-band py-20 md:py-28">
        <div className="section-shell grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
          <div className="relative min-h-[520px] overflow-hidden rounded-2xl border border-[#fffdf0]/12 bg-[#262522] shadow-[0_24px_68px_rgba(18,17,16,0.30)]">
            <img className="absolute inset-0 h-full w-full object-cover image-treatment" src={assets.projectMap} alt="" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#11100f]/72 via-[#252422]/16 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="max-w-xl text-sm font-bold uppercase tracking-[0.14em] text-[#f4e00c]">Project coverage</div>
              <h2 className="mt-4 max-w-2xl text-balance text-4xl font-extrabold tracking-normal text-[#fffdf0] md:text-5xl">
                Survey experience across residential, civil and development work.
              </h2>
            </div>
          </div>

          <div className="grid gap-4">
            {projectExperience.map(([title, text], index) => (
              <article key={title} className="surface-card p-6">
                <div className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#f4e00c]">
                  Experience {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="mt-4 text-2xl font-extrabold text-[#fffdf0]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#e6e2d2]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="section-shell grid gap-6">
          {projectTypes.map((project, index) => (
            <article
              key={project.title}
              className={`surface-card grid overflow-hidden lg:grid-cols-2 ${
                index % 2 ? 'lg:[&>div:first-child]:order-2' : ''
              }`}
            >
              <div className="min-h-80 overflow-hidden">
                <img className="h-full w-full object-cover transition duration-700 hover:scale-105 image-treatment" src={project.image} alt="" />
              </div>
              <div className="p-7 md:p-10">
                <div className="text-sm font-extrabold text-[#f4e00c]">Project category {index + 1}</div>
                <h2 className="mt-5 text-balance text-4xl font-extrabold tracking-normal text-[#fffdf0]">{project.title}</h2>
                <p className="mt-5 text-lg leading-8 text-[#e6e2d2]">{project.description}</p>
                <div className="mt-8 grid gap-3">
                  {services.slice(index, index + 3).map((service) => (
                    <div key={service.slug} className="rounded-xl border border-[#fffdf0]/14 bg-[#fffdf0]/8 px-4 py-3 text-sm text-[#e6e2d2]">
                      {service.title}
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="section-shell">
          <div className="glass-panel rounded-2xl p-8 md:p-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold tracking-normal text-[#fffdf0]">Have project documents ready?</h2>
              <p className="mt-3 max-w-2xl text-[#e6e2d2]">
                Upload plans, approvals, title information or previous survey documents with your quote request.
              </p>
            </div>
            <ButtonLink to="/quote">Start Quote Request</ButtonLink>
          </div>
          </div>
        </div>
      </section>
    </>
  );
}
