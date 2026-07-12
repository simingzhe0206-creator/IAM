import { ArrowLeft, CheckCircle } from '@phosphor-icons/react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ButtonLink } from '../components/ButtonLink';
import { PageHero } from '../components/PageHero';
import { Reveal } from '../components/Reveal';
import { serviceCategories, services, type Service } from '../content/site';

export function ServiceCategoryDetail() {
  const { categorySlug } = useParams();
  const category = serviceCategories.find((item) => item.slug === categorySlug);

  if (!category) {
    return <Navigate to="/services" replace />;
  }

  const detailedServices = Array.from(new Set(category.services.flatMap((item) => item.slug ?? [])))
    .map((slug) => services.find((service) => service.slug === slug))
    .filter((service): service is Service => Boolean(service));
  const additionalCapabilities = category.services.filter((item) => !item.slug);

  return (
    <>
      <PageHero title={category.title} image={category.image}>
        {category.description}
      </PageHero>

      <section className="py-20 md:py-28">
        <div className="section-shell">
          <div>
            <Link className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-[#fffdf0]" to="/services">
              <ArrowLeft size={18} />
              Back to services
            </Link>
            <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
              <Reveal className="glass-panel rounded-2xl p-7 md:p-9 lg:sticky lg:top-28">
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#f4e00c]">Service category</p>
                <h2 className="mt-5 text-balance text-4xl font-extrabold leading-tight text-[#fffdf0]">
                  One coordinated path for the full scope.
                </h2>
                <p className="mt-5 text-lg leading-8 text-[#e6e2d2]">{category.description}</p>
                <div className="mt-7 grid gap-2">
                  {category.services.map((item) => (
                    <a
                      key={item.label}
                      href={item.slug ? `#${item.slug}` : '#additional-capabilities'}
                      className="border-b border-[#fffdf0]/12 py-3 text-sm font-bold text-[#e6e2d2] transition last:border-b-0 hover:text-[#f4e00c]"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
                <div className="mt-8">
                  <ButtonLink to="/quote">Request a Quote</ButtonLink>
                </div>
              </Reveal>

              <div className="grid gap-8">
                {detailedServices.map((service, index) => (
                  <ServiceSection key={service.slug} service={service} index={index} />
                ))}

                {additionalCapabilities.length > 0 && (
                  <Reveal delay={0.08}>
                    <section id="additional-capabilities" className="surface-card scroll-mt-28 p-6 md:p-8">
                      <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#f4e00c]">
                        Additional capabilities
                      </p>
                      <h2 className="mt-3 text-3xl font-extrabold text-[#fffdf0]">Supporting survey services</h2>
                      <div className="mt-6 grid gap-3 sm:grid-cols-2">
                        {additionalCapabilities.map((item) => (
                          <div
                            key={item.label}
                            className="flex min-h-16 items-center gap-3 rounded-xl border border-[#fffdf0]/12 bg-[#fffdf0]/6 px-4 py-3 text-sm font-bold text-[#e6e2d2]"
                          >
                            <CheckCircle className="shrink-0 text-[#f4e00c]" size={18} weight="fill" />
                            {item.label}
                          </div>
                        ))}
                      </div>
                    </section>
                  </Reveal>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ServiceSection({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;

  return (
    <Reveal delay={Math.min(index * 0.04, 0.16)}>
      <article id={service.slug} className="surface-card scroll-mt-28 overflow-hidden">
        <div className="grid md:grid-cols-[0.38fr_0.62fr]">
          <div className="relative min-h-64 overflow-hidden">
            <img className="absolute inset-0 h-full w-full object-cover image-treatment" src={service.image} alt="" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#11100f]/72 via-[#11100f]/22 to-transparent" />
            <div className="absolute bottom-5 left-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#f4e00c] text-[#242321]">
              <Icon size={25} weight="duotone" />
            </div>
          </div>
          <div className="p-6 md:p-8">
            <h2 className="text-3xl font-extrabold text-[#fffdf0]">{service.title}</h2>
            <p className="mt-4 text-base leading-7 text-[#e6e2d2]">{service.intro}</p>
            <h3 className="mt-7 text-lg font-extrabold text-[#fffdf0]">When it is needed</h3>
            <p className="mt-2 text-sm leading-6 text-[#e6e2d2]">{service.when}</p>
          </div>
        </div>
        <div className="grid gap-6 border-t border-[#fffdf0]/12 p-6 md:grid-cols-3 md:p-8">
          <InfoList title="Included" items={service.includes} />
          <InfoList title="Deliverables" items={service.deliverables} />
          <InfoList title="Typical clients" items={service.clients} />
        </div>
        <div className="border-t border-[#fffdf0]/12 p-6 md:p-8">
          <h3 className="text-xl font-extrabold text-[#fffdf0]">Frequently asked questions</h3>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {service.faq.map((item) => (
              <div key={item.question} className="rounded-xl border border-[#fffdf0]/12 bg-[#fffdf0]/6 p-5">
                <h4 className="font-bold text-[#fffdf0]">{item.question}</h4>
                <p className="mt-2 text-sm leading-6 text-[#e6e2d2]">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function InfoList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-lg font-extrabold text-[#fffdf0]">{title}</h3>
      <div className="mt-4 grid gap-3">
        {items.map((item) => (
          <div key={item} className="flex gap-2 text-sm leading-6 text-[#e6e2d2]">
            <CheckCircle className="mt-1 shrink-0 text-[#f4e00c]" size={16} weight="fill" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
