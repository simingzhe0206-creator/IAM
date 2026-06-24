import { ArrowLeft, CheckCircle } from '@phosphor-icons/react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ButtonLink } from '../components/ButtonLink';
import { PageHero } from '../components/PageHero';
import { services } from '../content/site';

export function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const Icon = service.icon;

  return (
    <>
      <PageHero title={service.title} image={service.image}>
        {service.intro}
      </PageHero>

      <section className="py-20 md:py-28">
        <div className="section-shell">
        <Link className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-[#f0eedc]" to="/services">
            <ArrowLeft size={18} />
            Back to services
          </Link>

          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <aside className="glass-panel rounded-2xl p-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#f4e00c] text-[#4b4a48]">
                <Icon size={30} weight="duotone" />
              </div>
              <h2 className="mt-8 text-3xl font-black tracking-normal text-[#f0eedc]">When do you need it?</h2>
              <p className="mt-4 text-lg leading-8 text-[#cdcdcd]">{service.when}</p>
              <div className="mt-8">
                <ButtonLink to="/quote">Get a Quote</ButtonLink>
              </div>
            </aside>

            <div className="grid gap-5">
              <InfoPanel title="What is included?" items={service.includes} />
              <InfoPanel title="Typical deliverables" items={service.deliverables} />
              <InfoPanel title="Who usually requests this service?" items={service.clients} />
              <div className="surface-card p-6">
                <h2 className="text-2xl font-black tracking-normal text-[#f0eedc]">FAQ</h2>
                <div className="mt-5 grid gap-4">
                  {service.faq.map((item) => (
                    <div key={item.question} className="rounded-xl border border-[#f0eedc]/14 bg-[#f0eedc]/8 p-5">
                      <h3 className="font-bold text-[#f0eedc]">{item.question}</h3>
                      <p className="mt-2 text-sm leading-6 text-[#cdcdcd]">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function InfoPanel({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="surface-card p-6">
      <h2 className="text-2xl font-black tracking-normal text-[#f0eedc]">{title}</h2>
      <div className="mt-5 grid gap-3">
        {items.map((item) => (
          <div key={item} className="flex gap-3 text-sm leading-6 text-[#cdcdcd]">
                  <CheckCircle className="mt-0.5 shrink-0 text-[#f4e00c]" size={18} weight="fill" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
