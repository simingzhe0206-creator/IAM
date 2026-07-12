import { ButtonLink } from '../components/ButtonLink';
import { Reveal } from '../components/Reveal';

export function NotFound() {
  return (
    <section className="section-band grid min-h-[70dvh] place-items-center py-20 text-center">
      <div className="section-shell">
        <Reveal className="mx-auto max-w-4xl border-y border-[#fffdf0]/12 py-10 md:py-12">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#f4e00c]">Page not found</p>
          <h1 className="mt-5 text-balance text-5xl font-extrabold tracking-normal text-[#fffdf0] md:text-7xl">
            This survey mark is not on the plan.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-[#e6e2d2]">
            The page may have moved in the prototype. Return to the service overview or start a quote request.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <ButtonLink to="/services" variant="secondary">
              View Services
            </ButtonLink>
            <ButtonLink to="/quote">Get a Quote</ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
