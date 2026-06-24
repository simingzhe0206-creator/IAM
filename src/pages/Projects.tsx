import { ButtonLink } from '../components/ButtonLink';
import { PageHero } from '../components/PageHero';
import { assets, projectTypes, services } from '../content/site';

export function Projects() {
  return (
    <>
      <PageHero title="Project Types" image={assets.hero}>
        IAM supports residential, subdivision, strata, commercial and construction related projects. This prototype
        presents categories rather than invented case studies.
      </PageHero>

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
                <div className="text-sm font-black text-[#f4e00c]">Project category {index + 1}</div>
                <h2 className="mt-5 text-balance text-4xl font-black tracking-normal text-[#fffdf0]">{project.title}</h2>
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
              <h2 className="text-3xl font-black tracking-normal text-[#fffdf0]">Have project documents ready?</h2>
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
