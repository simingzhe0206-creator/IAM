import { ChatCenteredText, Star } from '@phosphor-icons/react';
import { ButtonLink } from '../components/ButtonLink';
import { PageHero } from '../components/PageHero';
import { assets } from '../content/site';

const reviewPlaceholders = [
  {
    type: 'Architect / Designer',
    project: 'Residential design support',
    note: 'Client review placeholder. Replace with an approved testimonial when available.'
  },
  {
    type: 'Builder',
    project: 'Construction and setout support',
    note: 'Client review placeholder. Replace with an approved testimonial when available.'
  },
  {
    type: 'Developer',
    project: 'Subdivision and title workflow',
    note: 'Client review placeholder. Replace with an approved testimonial when available.'
  },
  {
    type: 'Homeowner',
    project: 'Boundary and detail survey',
    note: 'Client review placeholder. Replace with an approved testimonial when available.'
  }
];

const signals = ['Accuracy', 'Clear communication', 'Reliable documentation', 'Practical project support'];

export function Reviews() {
  return (
    <>
      <PageHero title="Customer Reviews" image={assets.reviewsBg}>
        A dedicated place for approved client feedback, project experience notes and review links once final customer
        testimonials are supplied.
      </PageHero>

      <section className="section-band py-20 md:py-28">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div className="sticky top-28">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#f4e00c]">Client confidence</p>
            <h2 className="mt-5 text-balance text-4xl font-extrabold leading-tight text-[#fffdf0] md:text-6xl">
              Review slots ready for approved client feedback.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#e6e2d2]">
              The prototype keeps review content honest by using placeholders until the business provides approved
              testimonials, names or platform links.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {reviewPlaceholders.map((review, index) => (
              <article key={review.type} className="surface-card p-6">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f4e00c] text-[#242321]">
                    <ChatCenteredText size={24} weight="duotone" />
                  </div>
                  <div className="flex gap-1 text-[#f4e00c]" aria-label="Review rating placeholder">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star key={`${review.type}-${starIndex}`} size={16} weight="fill" />
                    ))}
                  </div>
                </div>
                <div className="mt-6 text-xs font-semibold uppercase tracking-[0.12em] text-[#e6e2d2]">
                  Review {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="mt-3 text-2xl font-extrabold text-[#fffdf0]">{review.type}</h3>
                <p className="mt-2 text-sm font-bold text-[#f4e00c]">{review.project}</p>
                <p className="mt-4 text-sm leading-6 text-[#e6e2d2]">{review.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band section-band-muted py-16 md:py-20">
        <div className="section-shell">
          <div className="grid gap-4 border-y border-[#fffdf0]/12 py-8 md:grid-cols-4">
            {signals.map((signal) => (
              <div key={signal} className="text-sm font-bold text-[#fffdf0]">
                {signal}
              </div>
            ))}
          </div>
          <div className="mt-10">
            <ButtonLink to="/quote">Discuss a Project</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
