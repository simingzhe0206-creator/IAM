import { ButtonLink } from '../components/ButtonLink';
import { PageHero } from '../components/PageHero';
import { Reveal } from '../components/Reveal';
import { assets, projectExperience, projectTypes, services } from '../content/site';

export function Projects() {
  return (
    <div className="editorial-page">
      <PageHero title="Project Types" image={assets.projectMap}>
        IAM supports residential, subdivision, strata, commercial and construction related work. These are capability
        categories, not invented case studies.
      </PageHero>

      <section className="border-t border-[#4b4a48]/25 bg-[#a9a9a7] py-20 text-[#181817] md:py-28">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <Reveal>
            <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#242321]">Project experience</p>
            <h2 className="mt-5 text-balance text-4xl font-normal leading-tight md:text-6xl">Survey support across the development lifecycle.</h2>
          </Reveal>
          <div className="border-t border-[#181817]/20">
            {projectExperience.map(([title, text], index) => (
              <Reveal key={title} className="grid gap-4 border-b border-[#181817]/20 py-6 sm:grid-cols-[4rem_1fr]" delay={index * 0.04}>
                <span className="text-sm font-extrabold text-[#242321]">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="text-2xl font-normal">{title}</h3>
                  <p className="mt-3 leading-7 text-[#4b4a48]">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="editorial-section py-20 md:py-28">
        <div className="section-shell border-t border-[#fffdf0]/16">
          {projectTypes.map((project, index) => (
            <article key={project.title} className="border-b border-[#fffdf0]/16 py-10 md:py-14">
              <div className={`grid gap-8 lg:grid-cols-2 lg:items-stretch ${index % 2 ? 'lg:[&>div:first-child]:order-2' : ''}`}>
                <div className="min-h-80 overflow-hidden lg:min-h-[460px]">
                  <img className="editorial-image image-treatment" src={project.image} alt="" />
                </div>
                <Reveal className="flex flex-col justify-between py-2 lg:px-8">
                  <div>
                    <p className="editorial-kicker">Project category {String(index + 1).padStart(2, '0')}</p>
                    <h2 className="mt-5 text-balance text-4xl font-normal leading-tight md:text-5xl">{project.title}</h2>
                    <p className="mt-6 text-lg leading-8 text-[#d8d5ca]">{project.description}</p>
                  </div>
                  <div className="mt-10 border-t border-[#fffdf0]/14">
                    {services.slice(index, index + 3).map((service) => (
                      <div key={service.slug} className="border-b border-[#fffdf0]/14 py-4 text-sm text-[#ece9df]">
                        {service.title}
                      </div>
                    ))}
                  </div>
                </Reveal>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="editorial-section-soft py-16 md:py-20">
        <div className="section-shell">
          <Reveal className="grid gap-8 border-y border-[#fffdf0]/16 py-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-3xl font-normal md:text-4xl">Have project documents ready?</h2>
              <p className="mt-3 max-w-2xl leading-7 text-[#d8d5ca]">
                Upload plans, approvals, title information or previous survey documents with your quote request.
              </p>
            </div>
            <ButtonLink to="/quote">Start Quote Request</ButtonLink>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
