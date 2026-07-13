import { ArrowSquareOut, CheckCircle, MagnifyingGlass } from '@phosphor-icons/react';
import { PageHero } from '../components/PageHero';
import { Reveal } from '../components/Reveal';
import { assets } from '../content/site';

const googleSearchUrl =
  'https://www.google.com/search?q=ISA+Surveyors+47%2F8+Avenue+of+the+Americas+Newington+NSW+reviews';

const verificationItems = [
  'Australian business identity matched to ISA Surveyors Pty Ltd',
  'Former Newington website, address and phone matched',
  'No overseas or similarly named company reviews used',
  'Review text withheld until the exact Google Business Profile is confirmed'
];

export function Reviews() {
  return (
    <div className="editorial-page">
      <PageHero title="Customer Reviews" image={assets.reviewsBg}>
        Independent feedback should remain connected to its original source. IAM only republishes reviews when the
        business identity and Google listing can be confirmed.
      </PageHero>

      <section className="editorial-section py-20 md:py-28">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <Reveal>
            <p className="editorial-kicker">Source verification</p>
            <h2 className="mt-5 text-balance text-4xl font-normal leading-tight md:text-6xl">No borrowed reviews. No invented testimonials.</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#d8d5ca]">
              The exact Google Business Profile could not be independently verified from public search results on 13
              July 2026. Until the updated IAM listing is confirmed, this page does not publish names, ratings or
              review excerpts.
            </p>
          </Reveal>

          <div className="border-t border-[#fffdf0]/16">
            {verificationItems.map((item, index) => (
              <Reveal key={item} className="grid gap-4 border-b border-[#fffdf0]/16 py-6 sm:grid-cols-[3rem_1fr]" delay={index * 0.04}>
                <CheckCircle className="text-[#f4e00c]" size={21} weight="fill" />
                <p className="text-lg leading-8 text-[#ece9df]">{item}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="editorial-section-light py-20 md:py-28">
        <div className="section-shell">
          <Reveal className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end">
            <div>
              <MagnifyingGlass size={38} weight="light" />
              <h2 className="mt-6 text-balance text-4xl font-normal leading-tight md:text-6xl">Find the original ISA listing on Google.</h2>
            </div>
            <div>
              <p className="max-w-xl text-lg leading-8 text-[#4b4a48]">
                The business is moving from its former ISA/Newington identity to IAM Surveyors in West Ryde. Use this
                search link to view any Google information currently available at the source.
              </p>
              <a
                className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-sm bg-[#181817] px-5 text-sm font-extrabold text-[#f7f5ed]"
                href={googleSearchUrl}
                target="_blank"
                rel="noreferrer"
              >
                Search on Google <ArrowSquareOut size={18} weight="bold" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
