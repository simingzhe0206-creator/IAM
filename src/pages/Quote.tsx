import { QuoteForm } from '../components/QuoteForm';
import { PageHero } from '../components/PageHero';
import { assets } from '../content/site';

export function Quote() {
  return (
    <>
      <PageHero title="Get a Quote" image={assets.equipment}>
        Send IAM your project information and supporting documents. The team will review the request and respond with
        a clear quotation.
      </PageHero>

      <section className="py-20 md:py-28">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="text-balance text-3xl font-black tracking-normal text-[#fffdfa] md:text-4xl">
              A better quote starts with better context.
            </h2>
            <p className="mt-5 text-lg leading-8 text-stone-300">
              Useful uploads include architectural plans, DA approval, CDC approval, council correspondence, title
              search, deposited plan, stormwater plan and previous survey documents.
            </p>
            <div className="mt-8 rounded-2xl border border-[#d8be91] bg-[#fbf6ec] p-5 text-sm leading-6 text-[#5f3f16]">
              SMTP settings are read from `.env`. Without SMTP credentials, the form will still validate locally but
              sending will show a configuration error.
            </div>
          </aside>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
