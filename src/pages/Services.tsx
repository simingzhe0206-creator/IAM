import { ButtonLink } from '../components/ButtonLink';
import { PageHero } from '../components/PageHero';
import { ServiceCard } from '../components/ServiceCard';
import { assets, services } from '../content/site';

export function Services() {
  return (
    <>
    <PageHero title="Our Surveying Services" image={assets.field}>
        IAM Surveyors provides a comprehensive range of land surveying services for architects, builders, developers,
        homeowners, certifiers, solicitors and government related projects.
      </PageHero>

      <section className="py-20 md:py-28">
        <div className="section-shell">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="section-shell page-canvas p-8 md:p-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
            <h2 className="text-3xl font-black tracking-normal text-[#f0eedc]">
                Not sure which survey you need?
              </h2>
              <p className="mt-3 max-w-2xl text-[#cdcdcd]">
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
