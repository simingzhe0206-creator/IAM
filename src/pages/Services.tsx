import { ButtonLink } from '../components/ButtonLink';
import { PageHero } from '../components/PageHero';
import { ServiceCard } from '../components/ServiceCard';
import { assets, serviceCategories, services } from '../content/site';

export function Services() {
  return (
    <>
    <PageHero title="Our Surveying Services" image={assets.servicesBg}>
        IAM Surveyors provides a comprehensive range of land surveying services for architects, builders, developers,
        homeowners, certifiers, solicitors and government related projects.
      </PageHero>

      <section className="py-20 md:py-28">
        <div className="section-shell">
          <div className="grid gap-5 lg:grid-cols-5">
            {serviceCategories.map((category, index) => (
              <article
                key={category.title}
                className={`surface-card relative min-h-[420px] overflow-hidden p-5 ${index % 2 ? 'lg:translate-y-8' : ''}`}
              >
                <img className="absolute inset-0 h-full w-full object-cover opacity-38 image-treatment" src={category.image} alt="" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#11100f]/90 via-[#252422]/58 to-[#252422]/18" />
                <div className="relative z-10 flex h-full flex-col justify-end">
                  <div className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#f4e00c]">
                    Service group {String(index + 1).padStart(2, '0')}
                  </div>
                  <h2 className="mt-4 text-2xl font-extrabold leading-tight text-[#fffdf0]">{category.title}</h2>
                  <p className="mt-4 line-clamp-5 text-sm leading-6 text-[#e6e2d2]">{category.description}</p>
                  <div className="mt-5 grid gap-2">
                    {category.services.map((item) => (
                      <div key={item.label} className="rounded-lg border border-[#fffdf0]/12 bg-[#fffdf0]/8 px-3 py-2 text-xs font-bold text-[#e6e2d2]">
                        {item.label}
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band section-band-muted py-20 md:py-28">
        <div className="section-shell">
          <div className="mb-10 max-w-3xl">
            <h2 className="text-balance text-4xl font-extrabold tracking-normal text-[#fffdf0] md:text-5xl">
              Core service detail pages.
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#e6e2d2]">
              These focused pages explain the current detailed service paths and connect directly to quote requests.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-band section-band-muted py-14 md:py-[4.5rem]">
        <div className="section-shell">
          <div className="grid gap-6 border-y border-[#fffdf0]/12 py-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
            <h2 className="text-3xl font-extrabold tracking-normal text-[#fffdf0]">
                Not sure which survey you need?
              </h2>
              <p className="mt-3 max-w-2xl text-[#e6e2d2]">
                Send the address, project stage and documents you already have. IAM can review the information and
                guide the next step.
              </p>
            </div>
            <ButtonLink to="/quote">Get a Quote</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
