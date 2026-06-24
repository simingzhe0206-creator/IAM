import { List, X } from '@phosphor-icons/react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { assets, services } from '../content/site';
import { ButtonLink } from './ButtonLink';

const nav = [
  ['Home', '/'],
  ['About IAM', '/about'],
  ['Services', '/services'],
  ['Projects', '/projects'],
  ['Contact', '/contact']
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="sticky top-0 z-50 bg-[#4b4a48]/96 py-3 backdrop-blur-xl">
        <div className="section-shell flex h-14 items-center justify-between gap-6 rounded-2xl border border-[#cdcdcd] bg-[#f0eedc]/96 px-4 shadow-[0_12px_30px_rgba(75,74,72,0.18)] md:px-5">
          <Link to="/" className="flex items-center gap-3" aria-label="IAM Surveyors home">
            <img className="h-10 w-auto rounded-sm bg-white" src={assets.logo} alt="IAM Surveyors" />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
            {nav.map(([label, path]) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-2 text-sm font-semibold transition ${
                    isActive ? 'bg-[#f4e00c] text-[#4b4a48]' : 'text-[#4b4a48] hover:bg-[#cdcdcd] hover:text-[#4b4a48]'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <ButtonLink to="/quote">Get a Free Quote</ButtonLink>
          </div>

          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#cdcdcd] bg-white text-[#4b4a48] lg:hidden"
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={22} /> : <List size={22} />}
          </button>
        </div>

        {open && (
          <div className="section-shell pb-3 lg:hidden">
            <div className="mt-2 rounded-2xl border border-[#cdcdcd] bg-[#f0eedc] p-4 shadow-[0_14px_32px_rgba(75,74,72,0.18)]">
              <nav className="grid gap-2" aria-label="Mobile navigation">
                {nav.map(([label, path]) => (
                  <NavLink
                    key={path}
                    to={path}
                    onClick={() => setOpen(false)}
                    className="rounded-xl border border-[#cdcdcd] px-4 py-3 text-sm font-semibold text-[#4b4a48]"
                  >
                    {label}
                  </NavLink>
                ))}
                <Link
                  to="/quote"
                  onClick={() => setOpen(false)}
                  className="rounded-xl bg-[#f4e00c] px-4 py-3 text-center text-sm font-bold text-[#4b4a48] transition hover:brightness-95"
                >
                  Get a Free Quote
                </Link>
              </nav>
              <div className="mt-5 grid gap-2 border-t border-[#cdcdcd] pt-5">
                {services.slice(0, 5).map((service) => (
                  <Link
                    key={service.slug}
                    className="text-sm text-[#a9a9a7]"
                    to={`/services/${service.slug}`}
                    onClick={() => setOpen(false)}
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
