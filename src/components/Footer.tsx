import { EnvelopeSimple, MapPin, Phone, WechatLogo, WhatsappLogo } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import { assets, contact, services } from '../content/site';

export function Footer() {
  return (
    <footer className="section-band section-band-muted py-12">
      <div className="section-shell">
        <div className="border-y border-[#fffdf0]/12 py-8 text-[#fffdf0] md:py-10">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
            <div>
              <img className="h-12 w-auto rounded-sm bg-white px-2 py-1 shadow-[0_10px_28px_rgba(26,25,23,0.28)]" src={assets.logo} alt="IAM Surveyors" />
              <p className="mt-5 max-w-sm text-sm leading-7 text-[#e6e2d2]">
                Professional land surveying services for residential, commercial and land development projects across
                Sydney and NSW.
              </p>
              <div className="mt-6 grid gap-3 text-sm text-[#fffdf0]">
                <span className="flex gap-3">
                  <MapPin className="mt-1 text-[#f4e00c]" size={18} />
                  {contact.address}
                </span>
                <span className="flex gap-3">
                  <Phone className="mt-1 text-[#f4e00c]" size={18} />
                  {contact.phone}
                </span>
                <span className="flex gap-3">
                  <EnvelopeSimple className="mt-1 text-[#f4e00c]" size={18} />
                  {contact.email}
                </span>
              </div>
            </div>

            <div>
              <h2 className="text-sm font-bold text-[#fffdf0]">Quick Links</h2>
              <div className="mt-4 grid gap-3 text-sm text-[#e6e2d2]">
                <Link to="/">Home</Link>
                <Link to="/about">About IAM</Link>
                <Link to="/services">Services</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/quote">Get a Quote</Link>
                <Link to="/contact">Contact</Link>
              </div>
            </div>

            <div>
              <h2 className="text-sm font-bold text-[#fffdf0]">Featured Services</h2>
              <div className="mt-4 grid gap-3 text-sm text-[#e6e2d2]">
                {services.slice(0, 7).map((service) => (
                  <Link key={service.slug} to={`/services/${service.slug}`}>
                    {service.shortTitle}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-sm font-bold text-[#fffdf0]">Contact Channels</h2>
              <div className="mt-4 grid gap-3 text-sm text-[#e6e2d2]">
                <span className="flex items-center gap-2">
                  <WhatsappLogo className="text-[#f4e00c]" size={18} />
                  {contact.whatsapp}
                </span>
                <span className="flex items-center gap-2">
                  <WechatLogo className="text-[#f4e00c]" size={18} />
                  {contact.wechat}
                </span>
                <span>{contact.xiaohongshu}</span>
                <Link to="/privacy">Privacy Policy</Link>
                <Link to="/terms">Terms and Conditions</Link>
              </div>
            </div>
          </div>
          <div className="mt-10 border-t border-[#fffdf0]/14 pt-6 text-xs text-[#cdcdcd]">
            Copyright 2026 IAM Surveyors. Prototype for local review.
          </div>
        </div>
      </div>
    </footer>
  );
}
