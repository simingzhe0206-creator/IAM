import { ArrowRight, Star } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import { ButtonLink } from '../components/ButtonLink';
import { PageHero } from '../components/PageHero';
import { Reveal } from '../components/Reveal';
import { assets, googleReviewProfile, projects } from '../content/site';

export function Projects() {
  return (
    <div className="editorial-page">
      <PageHero title="Projects" image={assets.projectHero}>
        Selected project experience across strata, digital modelling, construction and land development.
      </PageHero>

      <section className="relative overflow-hidden border-t border-[#d8d4c3] bg-[#f7f5e9] py-20 text-[#181817] md:py-28">
        <img className="absolute inset-0 h-full w-full object-cover opacity-[0.13]" src={assets.projectHero} alt="" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f7f5e9] via-[#f7f5e9]/94 to-[#f7f5e9]/74" />
        <div className="section-shell relative grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <Reveal>
            <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#242321]">Project experience</p>
            <h2 className="mt-5 text-balance text-4xl font-extrabold leading-tight md:text-6xl">
              Survey support across the development lifecycle.
            </h2>
          </Reveal>
          <Reveal className="border-t border-[#181817]/22 pt-7" delay={0.08}>
            <p className="text-lg leading-8 text-[#4b4a48]">
              From residential developments and commercial buildings to subdivision, infrastructure and construction
              projects, IAM Surveyors provides accurate surveying services that support planning, design, approvals and
              construction across Sydney and NSW.
            </p>
            <p className="mt-6 text-lg leading-8 text-[#4b4a48]">
              With experience across projects of every scale, we work closely with architects, builders, developers,
              consultants and government authorities to deliver reliable survey information, practical solutions and
              successful project outcomes.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="editorial-section py-20 md:py-28">
        <div className="section-shell">
          <Reveal className="flex flex-col justify-between gap-6 pb-10 md:flex-row md:items-end">
            <div>
              <p className="editorial-kicker">Selected work</p>
              <h2 className="mt-5 text-balance text-4xl font-extrabold md:text-6xl">Four IAM projects.</h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-[#b8b5aa]">
              Select a cover to open the dedicated project page. Detailed project information will be added as approved.
            </p>
          </Reveal>

          <div className="grid gap-px border-y border-[#fffdf0]/16 bg-[#fffdf0]/14 md:grid-cols-2 lg:grid-cols-4">
            {projects.map((project) => (
              <Link
                key={project.slug}
                to={`/projects/${project.slug}`}
                className="group relative min-h-[520px] overflow-hidden bg-[#181817] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-3px] focus-visible:outline-[#f4e00c] lg:min-h-[620px]"
                aria-label={`${project.number}. ${project.title}`}
              >
                <img
                  className="absolute inset-0 h-full w-full object-cover brightness-[0.42] saturate-[0.72] transition-[filter] duration-500 group-hover:brightness-[0.9] group-hover:saturate-100 group-focus-visible:brightness-[0.9] group-focus-visible:saturate-100"
                  src={project.image}
                  alt=""
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#11100f]/88 via-transparent to-[#11100f]/24 transition group-hover:from-[#11100f]/62 group-focus-visible:from-[#11100f]/62" />
                <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-5 p-6">
                  <span className="text-6xl font-extrabold text-white/90">{project.number}</span>
                  <h3 className="project-vertical-title text-base font-extrabold uppercase leading-tight text-white">
                    {project.shortTitle}
                    <span className="mt-3 block text-xs font-semibold normal-case text-white/76">{project.location}</span>
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="scroll-mt-24 border-t border-[#d8d4c3] bg-[#f7f5e9] py-16 text-[#181817] md:py-20">
        <div className="section-shell">
          <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#77736b]">Client feedback</p>
              <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">Google Reviews</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-[#656159]">
              Public rating matched to IAM Surveyors Pty Ltd using the business name and phone number. Verified {googleReviewProfile.verifiedOn}.
            </p>
          </Reveal>

          <div className="mt-10 flex snap-x snap-mandatory gap-px overflow-x-auto border-y border-[#181817]/18 bg-[#181817]/16">
            <div className="flex min-h-72 min-w-[82vw] shrink-0 snap-start flex-col justify-between bg-[#efede2] p-7 sm:min-w-[340px]">
              <div>
                <div className="text-7xl font-extrabold leading-none">{googleReviewProfile.rating}</div>
                <div className="mt-4 flex gap-1 text-[#d0bc00]" aria-label="4.7 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, index) => <Star key={index} size={20} weight="fill" />)}
                </div>
              </div>
              <div>
                <p className="text-sm font-extrabold">{googleReviewProfile.businessName}</p>
                <p className="mt-2 text-sm text-[#656159]">{googleReviewProfile.reviewCount} public Google reviews</p>
              </div>
            </div>

            {googleReviewProfile.excerpts.map((review) => (
              <article key={review.text} className="flex min-h-72 min-w-[82vw] shrink-0 snap-start flex-col justify-between bg-[#f7f5e9] p-7 sm:min-w-[400px]">
                <div className="flex gap-1 text-[#d0bc00]" aria-label={`${review.rating} out of 5 stars`}>
                  {Array.from({ length: review.rating }).map((_, index) => <Star key={index} size={17} weight="fill" />)}
                </div>
                <blockquote className="my-8 text-2xl font-extrabold leading-snug">“{review.text}”</blockquote>
                <p className="text-xs font-extrabold uppercase tracking-[0.1em] text-[#77736b]">{review.attribution}</p>
              </article>
            ))}

            <a
              className="group flex min-h-72 min-w-[82vw] shrink-0 snap-start flex-col justify-between bg-[#242321] p-7 text-[#fffdf0] sm:min-w-[340px]"
              href={googleReviewProfile.href}
              target="_blank"
              rel="noreferrer"
              aria-label="Read all reviews on Google"
            >
              <span className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#f4e00c]">Google Maps</span>
              <span className="flex items-end justify-between gap-5 text-3xl font-extrabold">
                Read all reviews
                <ArrowRight className="shrink-0 transition group-hover:translate-x-1" size={28} weight="bold" />
              </span>
            </a>
          </div>
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
