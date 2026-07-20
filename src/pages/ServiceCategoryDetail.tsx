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
  return (
    <div className="editorial-page">
      <PageHero title={category.title} image={category.image}>{category.description}</PageHero>

      <section className="editorial-section py-16 md:py-24">
        <div className="section-shell">
          <Link className="mb-10 inline-flex items-center gap-2 text-sm font-bold text-[#ece9df]" to="/services">
            <ArrowLeft size={18} /> Back to services
          </Link>
          <div id="category-top" className="grid scroll-mt-28 gap-12 lg:grid-cols-[0.34fr_0.66fr] lg:items-start">
            <aside className="border-t border-[#fffdf0]/16 lg:sticky lg:top-28" data-testid="service-category-navigation">
              <p className="editorial-kicker py-5">In this category</p>
              {category.services.map((item) => (
                <a
                  key={item.label}
                  href={item.slug ? `#${item.slug}` : '#category-top'}
                  className="block border-t border-[#fffdf0]/12 py-4 text-sm font-bold leading-6 text-[#d8d5ca] transition hover:text-[#f4e00c]"
                >
                  {item.label}
                </a>
              ))}
              <div className="border-t border-[#fffdf0]/16 pt-7"><ButtonLink to="/quote">Request a Quote</ButtonLink></div>
            </aside>

            <div className="border-t border-[#fffdf0]/16">
              {detailedServices.map((service, index) => (
                <ServiceSection key={service.slug} service={service} index={index} />
              ))}

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceSection({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;

  return (
    <article id={service.slug} className="scroll-mt-28 border-b border-[#fffdf0]/16 py-12 md:py-16">
      <div className="grid gap-8 md:grid-cols-[0.42fr_0.58fr] md:items-stretch">
        <div className="relative min-h-72 overflow-hidden">
          <img className="editorial-image image-treatment" src={service.image} alt="" />
          <div className="absolute bottom-0 left-0 flex h-12 w-12 items-center justify-center bg-[#f4e00c] text-[#242321]">
            <Icon size={25} weight="duotone" />
          </div>
        </div>
        <Reveal className="py-1" delay={Math.min(index * 0.03, 0.12)}>
          <p className="editorial-kicker">Service {String(index + 1).padStart(2, '0')}</p>
          <h2 className="mt-4 text-balance text-4xl font-normal leading-tight md:text-5xl">{service.title}</h2>
          <p className="mt-5 text-base leading-8 text-[#d8d5ca]">{service.intro}</p>
          <h3 className="mt-7 text-sm font-extrabold uppercase tracking-[0.1em] text-[#fffdf0]">When it is needed</h3>
          <p className="mt-3 text-sm leading-7 text-[#d8d5ca]">{service.when}</p>
        </Reveal>
      </div>

      <div className="mt-10 grid border-t border-[#fffdf0]/14 md:grid-cols-3">
        <InfoList title="Included" items={service.includes} />
        <InfoList title="Deliverables" items={service.deliverables} />
        <InfoList title="Typical clients" items={service.clients} />
      </div>

      <Reveal className="mt-10 border-t border-[#fffdf0]/14 pt-8">
        <h3 className="text-2xl font-normal">Frequently asked questions</h3>
        <div className="mt-6 grid md:grid-cols-2">
          {service.faq.map((item, faqIndex) => (
            <div key={item.question} className={`border-t border-[#fffdf0]/12 py-5 ${faqIndex % 2 === 0 ? 'md:pr-6' : 'md:border-l md:pl-6'}`}>
              <h4 className="font-bold text-[#fffdf0]">{item.question}</h4>
              <p className="mt-2 text-sm leading-6 text-[#d8d5ca]">{item.answer}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </article>
  );
}

function InfoList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="border-b border-[#fffdf0]/14 py-7 md:border-b-0 md:border-r md:px-6 first:md:pl-0 last:md:border-r-0">
      <h3 className="text-lg font-normal text-[#fffdf0]">{title}</h3>
      <div className="mt-5 grid gap-3">
        {items.map((item) => (
          <div key={item} className="flex gap-2 text-sm leading-6 text-[#d8d5ca]">
            <CheckCircle className="mt-1 shrink-0 text-[#f4e00c]" size={16} weight="fill" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
