import { EnvelopeSimple, MapPin, Phone, WechatLogo, WhatsappLogo } from '@phosphor-icons/react';
import { ButtonLink } from '../components/ButtonLink';
import { PageHero } from '../components/PageHero';
import { assets, contact } from '../content/site';

const channels = [
  { label: 'Address', value: contact.address, Icon: MapPin },
  { label: 'Phone', value: contact.phone, Icon: Phone },
  { label: 'Email', value: contact.email, Icon: EnvelopeSimple },
  { label: 'WhatsApp', value: contact.whatsapp, Icon: WhatsappLogo },
  { label: 'WeChat', value: contact.wechat, Icon: WechatLogo }
];

export function Contact() {
  return (
    <>
      <PageHero title="Contact IAM Surveyors" image={assets.field}>
        Keep the company contact details in one reliable place. Final email, WhatsApp, WeChat and Xiaohongshu links can
        be filled when available.
      </PageHero>

      <section className="py-20 md:py-28">
        <div className="section-shell grid gap-8 lg:grid-cols-[1fr_0.85fr]">
          <div className="grid gap-4 md:grid-cols-2">
            {channels.map(({ label, value, Icon }) => (
              <div key={label} className="surface-card p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f4e00c] text-[#4b4a48]">
                  <Icon size={24} weight="duotone" />
                </div>
              <h2 className="mt-6 text-xl font-black text-[#f0eedc]">{label}</h2>
                <p className="mt-3 text-sm leading-6 text-[#cdcdcd]">{value}</p>
              </div>
            ))}
          </div>
          <div className="glass-panel rounded-2xl p-8">
            <h2 className="text-4xl font-black tracking-normal text-[#f0eedc]">Ready to send project details?</h2>
            <p className="mt-5 text-lg leading-8 text-[#cdcdcd]">
              The Quote page is the preferred path because it captures project type, stage, required service and file
              uploads in one submission.
            </p>
            <div className="mt-8">
              <ButtonLink to="/quote">Open Quote Form</ButtonLink>
            </div>
            <div className="mt-8 border-t border-[#f0eedc]/14 pt-6 text-sm leading-7 text-[#a9a9a7]">
              Business hours: {contact.hours}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
