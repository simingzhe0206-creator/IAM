import { EnvelopeSimple, MapPin, Phone } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import { assets, contact } from '../content/site';

const quickLinks = [
  ['Home', '/'],
  ['About IAM', '/about'],
  ['Services', '/services'],
  ['Projects', '/projects'],
  ['Customer Reviews', '/reviews'],
  ['Get a Quote', '/quote'],
  ['Contact', '/contact']
] as const;

export function Footer() {
  return (
    <footer className="border-t border-[#fffdf0]/14 bg-[#111110] py-14 text-[#f7f5ed]">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.65fr_0.9fr]">
          <div>
            <img className="h-12 w-auto object-contain" src={assets.logoFooter} alt="IAM Surveyors" />
            <h2 className="mt-8 max-w-xl text-3xl font-normal leading-tight md:text-4xl">Professional surveying and development support across Sydney and NSW.</h2>
          </div>

          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#f4e00c]">Navigate</p>
            <div className="mt-5 border-t border-[#fffdf0]/14">
              {quickLinks.map(([label, path]) => (
                <Link key={path} className="block border-b border-[#fffdf0]/12 py-3 text-sm text-[#d8d5ca] transition hover:text-[#f4e00c]" to={path}>
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-[#f4e00c]">Get in touch</p>
            <div className="mt-5 border-t border-[#fffdf0]/14">
              <a className="flex gap-3 border-b border-[#fffdf0]/12 py-4 text-sm leading-6 text-[#d8d5ca]" href={contact.mapsHref} target="_blank" rel="noreferrer">
                <MapPin className="mt-1 shrink-0 text-[#f4e00c]" size={18} /> {contact.address}
              </a>
              <a className="flex gap-3 border-b border-[#fffdf0]/12 py-4 text-sm text-[#d8d5ca]" href={contact.phoneHref}>
                <Phone className="shrink-0 text-[#f4e00c]" size={18} /> {contact.phone}
              </a>
              <a className="flex gap-3 border-b border-[#fffdf0]/12 py-4 text-sm text-[#d8d5ca]" href={contact.emailHref}>
                <EnvelopeSimple className="shrink-0 text-[#f4e00c]" size={18} /> {contact.email}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-[#fffdf0]/14 pt-6 text-xs text-[#8f8c82] sm:flex-row sm:items-center sm:justify-between">
          <span>Copyright 2026 IAM Surveyors.</span>
          <span>Website enquiries are sent securely to {contact.email}.</span>
        </div>
      </div>
    </footer>
  );
}
