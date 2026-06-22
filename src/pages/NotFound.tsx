import { ButtonLink } from '../components/ButtonLink';

export function NotFound() {
  return (
    <section className="section-shell grid min-h-[70dvh] place-items-center py-20 text-center">
      <div className="page-canvas p-8 md:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#7a5520]">Page not found</p>
          <h1 className="mt-5 text-balance text-5xl font-black tracking-normal text-[#242321] md:text-7xl">
          This survey mark is not on the plan.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-600">
          The page may have moved in the prototype. Return to the service overview or start a quote request.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <ButtonLink to="/services" variant="secondary">
            View Services
          </ButtonLink>
          <ButtonLink to="/quote">Get a Quote</ButtonLink>
        </div>
      </div>
    </section>
  );
}
