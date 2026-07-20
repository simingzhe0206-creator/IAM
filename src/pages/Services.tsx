import { ArrowRight } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import { ButtonLink } from '../components/ButtonLink';
import { PageHero } from '../components/PageHero';
import { Reveal } from '../components/Reveal';
import { assets, serviceCategories } from '../content/site';

export function Services() {
  return (
    <div className="editorial-page">
      <PageHero title="Our Surveying Services" image={assets.servicesBg}>
        Professional land surveying for architects, builders, developers, homeowners, certifiers, solicitors and
        government related projects.
      </PageHero>

      <section className="editorial-section py-20 md:py-28">
        <div className="section-shell">
          <div className="border-t border-[#fffdf0]/16">
            {serviceCategories.map((category, index) => (
              <article id={category.slug} key={category.title} className="scroll-mt-24 border-b border-[#fffdf0]/16 py-10 md:py-14">
                <div className={`grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-stretch ${index % 2 ? 'lg:[&>div:first-child]:order-2' : ''}`}>
                  <div className="min-h-72 overflow-hidden lg:min-h-[420px]">
                    <img className="editorial-image image-treatment" src={category.image} alt="" />
                  </div>
                  <Reveal className="flex flex-col justify-between py-1 lg:px-6">
                    <div>
                      <div className="text-sm font-extrabold text-[#f4e00c]">{String(index + 1).padStart(2, '0')}</div>
                      <h2 className="mt-5 text-balance text-4xl font-normal leading-tight md:text-5xl">{category.title}</h2>
                      <p className="mt-6 text-base leading-8 text-[#d8d5ca]">{category.description}</p>
                    </div>
                    <div className="mt-9">
                      <div className="border-t border-[#fffdf0]/16">
                        {category.services.map((item) => (
                          <div key={item.label} className="border-b border-[#fffdf0]/12 py-3 text-sm font-semibold text-[#ece9df]">
                            {item.label}
                          </div>
                        ))}
                      </div>
                      <Link className="mt-7 inline-flex items-center gap-3 text-sm font-extrabold text-[#f4e00c]" to={`/services/category/${category.slug}`}>
                        View service details <ArrowRight size={18} weight="bold" />
                      </Link>
                    </div>
                  </Reveal>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="editorial-section-soft py-16 md:py-20">
        <div className="section-shell">
          <Reveal className="grid gap-8 border-y border-[#fffdf0]/16 py-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-3xl font-normal text-[#fffdf0] md:text-4xl">Not sure which survey you need?</h2>
              <p className="mt-4 max-w-2xl leading-7 text-[#d8d5ca]">
                Send the site address, project stage and documents you already have. IAM will help define the next step.
              </p>
            </div>
            <ButtonLink to="/quote">Get a Quote</ButtonLink>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
