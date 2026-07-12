import { ArrowRight, EnvelopeSimple, MapPin, Phone, WechatLogo, WhatsappLogo } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { QuoteForm } from '../components/QuoteForm';
import { Reveal } from '../components/Reveal';
import { assets, contact } from '../content/site';

const channels = [
  { label: 'Address', value: contact.address, Icon: MapPin },
  { label: 'Phone', value: contact.phone, Icon: Phone },
  { label: 'Email', value: contact.email, Icon: EnvelopeSimple },
  { label: 'WhatsApp', value: contact.whatsapp, Icon: WhatsappLogo },
  { label: 'WeChat', value: contact.wechat, Icon: WechatLogo }
];

const enquiryPaths = [
  { title: 'Start a Project', text: 'Survey, setout or geospatial services', to: '#contact-form' },
  { title: 'Request a Quote', text: 'A personalised quotation for your scope', to: '#contact-form' },
  { title: 'General Enquiry', text: 'Property, title or survey questions', to: '#contact-form' },
  { title: 'Existing Project', text: 'Follow up with the IAM project team', to: '#contact-details' }
];

export function Contact() {
  return (
    <>
      <PageHero title="Contact IAM Surveyors" image={assets.contactBg}>
        Tell us about your site, project stage and the surveying support you need. We will review the information and
        respond with a clear next step.
      </PageHero>

      <section className="bg-[#171614] py-20 md:py-28">
        <div className="section-shell">
          <Reveal className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#f4e00c]">Contact us</p>
              <h2 className="mt-4 text-balance text-4xl font-extrabold text-[#fffdf0] md:text-5xl">
                Let us know what your project needs.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[#e6e2d2]">
              No two projects are the same. Select the most relevant enquiry path, then send your details and any
              supporting files using the form below.
            </p>
          </Reveal>

          <Reveal className="mt-12 grid border border-[#fffdf0]/12 md:grid-cols-2" delay={0.08}>
            {enquiryPaths.map((item, index) => (
              <a
                key={item.title}
                href={item.to}
                className={`group flex min-h-32 items-center justify-between gap-5 border-[#fffdf0]/12 p-6 transition hover:bg-[#f4e00c] hover:text-[#242321] ${
                  index % 2 === 0 ? 'md:border-r' : ''
                } ${index < 3 ? 'border-b' : ''} ${index === 2 ? 'md:border-b-0' : ''}`}
              >
                <span>
                  <strong className="block text-xl font-extrabold">{item.title}</strong>
                  <span className="mt-2 block text-sm text-[#cdcdcd] transition group-hover:text-[#242321]/75">
                    {item.text}
                  </span>
                </span>
                <ArrowRight className="shrink-0" size={22} weight="bold" />
              </a>
            ))}
          </Reveal>

          <div className="mt-14 grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
            <Reveal>
              <div id="contact-form" className="scroll-mt-28">
                <QuoteForm />
              </div>
            </Reveal>
            <Reveal className="grid gap-3 lg:sticky lg:top-28" delay={0.1}>
              <div id="contact-details" className="scroll-mt-28 border-b border-[#fffdf0]/14 pb-5">
                <h2 className="text-2xl font-extrabold text-[#fffdf0]">Direct contact</h2>
                <p className="mt-3 text-sm leading-6 text-[#cdcdcd]">Business hours: {contact.hours}</p>
              </div>
              {channels.map(({ label, value, Icon }) => (
                <div key={label} className="flex gap-4 border-b border-[#fffdf0]/12 py-5">
                  <Icon className="mt-0.5 shrink-0 text-[#f4e00c]" size={22} weight="duotone" />
                  <div>
                    <h3 className="text-sm font-extrabold uppercase tracking-[0.08em] text-[#fffdf0]">{label}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#e6e2d2]">{value}</p>
                  </div>
                </div>
              ))}
              <Link className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#f4e00c]" to="/quote">
                Open the dedicated quote page
                <ArrowRight size={18} weight="bold" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
