import { ArrowLeft, ArrowRight, CheckCircle } from '@phosphor-icons/react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ButtonLink } from '../components/ButtonLink';
import { PageHero } from '../components/PageHero';
import { serviceCategories } from '../content/site';

export function ServiceCategoryDetail() {
  const { categorySlug } = useParams();
  const category = serviceCategories.find((item) => item.slug === categorySlug);

  if (!category) {
    return <Navigate to="/services" replace />;
  }

  const linkedServices = category.services.filter((item) => item.slug);

  return (
    <>
      <PageHero title={category.title} image={category.image}>
        {category.description}
      </PageHero>

      <section className="py-20 md:py-28">
        <div className="section-shell">
          <Link className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-[#fffdf0]" to="/services">
            <ArrowLeft size={18} />
            Back to services
          </Link>

          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <aside className="glass-panel rounded-2xl p-7 md:p-9">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#f4e00c]">Service category</p>
              <h2 className="mt-5 text-balance text-4xl font-extrabold leading-tight text-[#fffdf0]">
                A coordinated service path for this project type.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#e6e2d2]">
                Use this page as the starting point for the related survey tasks. Each linked service opens a more
                detailed page with scope, deliverables and typical use cases.
              </p>
              <div className="mt-8">
                <ButtonLink to="/quote">Request a Quote</ButtonLink>
              </div>
            </aside>

            <div className="grid gap-5">
              <div className="surface-card p-6 md:p-7">
                <h2 className="text-3xl font-extrabold text-[#fffdf0]">Included service areas</h2>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {category.services.map((item) =>
                    item.slug ? (
                      <Link
                        key={item.label}
                        to={`/services/${item.slug}`}
                        className="group flex min-h-20 items-center justify-between gap-4 rounded-xl border border-[#fffdf0]/14 bg-[#fffdf0]/8 px-4 py-3 text-sm font-bold text-[#fffdf0] transition hover:border-[#f4e00c]/70 hover:bg-[#fffdf0]/12"
                      >
                        <span>{item.label}</span>
                        <ArrowRight
                          className="shrink-0 text-[#f4e00c] transition group-hover:translate-x-0.5"
                          size={18}
                          weight="bold"
                        />
                      </Link>
                    ) : (
                      <div
                        key={item.label}
                        className="flex min-h-20 items-center gap-3 rounded-xl border border-[#fffdf0]/10 bg-[#fffdf0]/6 px-4 py-3 text-sm font-bold text-[#e6e2d2]"
                      >
                        <CheckCircle className="shrink-0 text-[#f4e00c]" size={18} weight="fill" />
                        {item.label}
                      </div>
                    )
                  )}
                </div>
              </div>

              {linkedServices.length > 0 && (
                <div className="surface-card p-6 md:p-7">
                  <h2 className="text-2xl font-extrabold text-[#fffdf0]">Detailed pages</h2>
                  <div className="mt-5 grid gap-3">
                    {linkedServices.map((item) => (
                      <Link
                        key={`${item.label}-${item.slug}`}
                        to={`/services/${item.slug}`}
                        className="flex items-center justify-between gap-4 border-b border-[#fffdf0]/12 py-3 text-sm font-semibold text-[#e6e2d2] transition last:border-b-0 hover:text-[#fffdf0]"
                      >
                        {item.label}
                        <ArrowRight className="shrink-0 text-[#f4e00c]" size={17} weight="bold" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
