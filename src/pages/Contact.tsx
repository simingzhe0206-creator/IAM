import { ArrowRight, EnvelopeSimple, MapPin, Phone } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { QuoteForm } from '../components/QuoteForm';
import { Reveal } from '../components/Reveal';
import { assets, contact } from '../content/site';

const channels = [
  { label: 'Address', value: contact.address, href: contact.mapsHref, Icon: MapPin },
  { label: 'Phone', value: contact.phone, href: contact.phoneHref, Icon: Phone },
  { label: 'Email', value: contact.email, href: contact.emailHref, Icon: EnvelopeSimple }
];

const enquiryPaths = [
  { title: 'Start a Project', text: 'Survey, setout or geospatial services', to: '#contact-form' },
  { title: 'Request a Quote', text: 'A personalised quotation for your scope', to: '#contact-form' },
  { title: 'General Enquiry', text: 'Property, title or survey questions', to: '#contact-form' },
  { title: 'Existing Project', text: 'Follow up with the IAM project team', to: '#contact-details' }
];

export function Contact() {
  return (
    <div className="editorial-page">
      <PageHero title="Contact IAM Surveyors" image={assets.contactBg}>
        Tell us about your site, project stage and the surveying support you need. We will review the information and
        respond with a clear next step.
      </PageHero>

      <section className="editorial-section py-20 md:py-28">
        <div className="section-shell">
          <Reveal className="grid gap-10 lg:grid-cols-[0.74fr_1.26fr] lg:items-end">
            <div>
              <p className="editorial-kicker">Get in touch</p>
              <h2 className="mt-5 text-balance text-4xl font-normal leading-tight md:text-6xl">Let us know what your project needs.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[#d8d5ca]">
              No two jobs are the same. Select the relevant enquiry path, then send your details and supporting files
              through the secure form.
            </p>
          </Reveal>

          <div className="mt-14 grid border-t border-l border-[#fffdf0]/16 md:grid-cols-2">
            {enquiryPaths.map((item, index) => (
              <a
                key={item.title}
                href={item.to}
                className={`group flex min-h-36 items-center justify-between gap-5 border-b border-r border-[#fffdf0]/16 p-6 transition hover:bg-[#f4e00c] hover:text-[#242321] ${index === 0 ? 'bg-[#24282b]' : ''}`}
              >
                <span>
                  <strong className="block text-xl font-normal">{item.title}</strong>
                  <span className="mt-2 block text-sm text-[#b8b5aa] transition group-hover:text-[#242321]/75">{item.text}</span>
                </span>
                <ArrowRight className="shrink-0" size={22} weight="bold" />
              </a>
            ))}
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <Reveal>
              <div id="contact-form" className="scroll-mt-28 border-t border-[#fffdf0]/16 pt-8">
                <h2 className="mb-7 text-3xl font-normal">Project enquiry</h2>
                <QuoteForm />
              </div>
            </Reveal>

            <aside id="contact-details" className="scroll-mt-28 border-t border-[#fffdf0]/16 lg:sticky lg:top-28">
              <Reveal className="py-6">
                <h2 className="text-3xl font-normal">Direct contact</h2>
                <p className="mt-3 text-sm leading-6 text-[#b8b5aa]">Business hours: {contact.hours}</p>
              </Reveal>
              {channels.map(({ label, value, href, Icon }, index) => (
                <Reveal key={label} delay={index * 0.04}>
                  <a className="flex gap-4 border-t border-[#fffdf0]/14 py-6" href={href} target={label === 'Address' ? '_blank' : undefined} rel={label === 'Address' ? 'noreferrer' : undefined}>
                    <Icon className="mt-0.5 shrink-0 text-[#f4e00c]" size={22} weight="light" />
                    <div>
                      <h3 className="text-xs font-extrabold uppercase tracking-[0.1em] text-[#fffdf0]">{label}</h3>
                      <p className="mt-2 text-sm leading-6 text-[#d8d5ca]">{value}</p>
                    </div>
                  </a>
                </Reveal>
              ))}
              <div className="border-t border-[#fffdf0]/14 py-6 text-sm leading-6 text-[#b8b5aa]">
                WhatsApp, WeChat and Xiaohongshu contact details will be added after the official accounts are confirmed.
              </div>
              <Link className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#f4e00c]" to="/quote">
                Open the dedicated quote page <ArrowRight size={18} weight="bold" />
              </Link>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
