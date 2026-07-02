import { CaretDown, List, X } from '@phosphor-icons/react';
import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { assets, services } from '../content/site';
import { ButtonLink } from './ButtonLink';

const nav = [
  ['Home', '/'],
  ['Services', '/services'],
  ['Projects', '/projects'],
  ['Reviews', '/reviews'],
  ['Contact', '/contact']
] as const;

const aboutNav = [
  ['About IAM', '/about'],
  ['Capabilities', '/about/capabilities']
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const aboutActive = location.pathname === '/about' || location.pathname.startsWith('/about/');

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="fixed inset-x-0 top-0 z-50 bg-[#22211f]/92 py-3 backdrop-blur-xl">
        <div className="section-shell flex h-14 items-center justify-between gap-5 border-b border-[#fffdf0]/14 bg-[#22211f]/72 px-4 shadow-[0_16px_38px_rgba(18,17,16,0.28)] md:px-5">
          <Link to="/" className="flex items-center gap-3" aria-label="IAM Surveyors home">
            <img className="h-10 w-auto rounded-sm bg-white" src={assets.logo} alt="IAM Surveyors" />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
            {nav.slice(0, 1).map(([label, path]) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `border-b-2 px-3 py-2 text-sm font-semibold transition xl:px-4 ${
                    isActive ? 'border-[#f4e00c] text-[#f4e00c]' : 'border-transparent text-[#e6e2d2] hover:text-[#fffdf0]'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <div className="group relative">
              <Link
                to="/about"
                className={`inline-flex items-center gap-1 border-b-2 px-3 py-2 text-sm font-semibold transition xl:px-4 ${
                  aboutActive ? 'border-[#f4e00c] text-[#f4e00c]' : 'border-transparent text-[#e6e2d2] hover:text-[#fffdf0]'
                }`}
              >
                About
                <CaretDown size={14} weight="bold" />
              </Link>
              <div className="invisible absolute left-0 top-full z-50 min-w-48 translate-y-2 rounded-2xl border border-[#fffdf0]/14 bg-[#262522] p-2 opacity-0 shadow-[0_18px_44px_rgba(18,17,16,0.34)] transition group-hover:visible group-hover:translate-y-3 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-3 group-focus-within:opacity-100">
                {aboutNav.map(([label, path]) => (
                  <NavLink
                    key={path}
                    to={path}
                    className={({ isActive }) =>
                      `block border-l-2 px-4 py-3 text-sm font-semibold transition ${
                        isActive ? 'border-[#f4e00c] text-[#f4e00c]' : 'border-transparent text-[#e6e2d2] hover:text-[#fffdf0]'
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                ))}
              </div>
            </div>
            {nav.slice(1).map(([label, path]) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `border-b-2 px-3 py-2 text-sm font-semibold transition xl:px-4 ${
                    isActive ? 'border-[#f4e00c] text-[#f4e00c]' : 'border-transparent text-[#e6e2d2] hover:text-[#fffdf0]'
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
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#fffdf0]/16 bg-[#fffdf0]/8 text-[#fffdf0] lg:hidden"
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={22} /> : <List size={22} />}
          </button>
        </div>

        {open && (
          <div className="section-shell pb-3 lg:hidden">
            <div className="mt-2 rounded-2xl border border-[#fffdf0]/16 bg-[#262522] p-4 shadow-[0_18px_44px_rgba(26,25,23,0.30)]">
              <nav className="grid gap-2" aria-label="Mobile navigation">
                {nav.slice(0, 1).map(([label, path]) => (
                  <NavLink
                    key={path}
                    to={path}
                    onClick={() => setOpen(false)}
                    className="rounded-xl border border-[#fffdf0]/14 px-4 py-3 text-sm font-semibold text-[#fffdf0]"
                  >
                    {label}
                  </NavLink>
                ))}
                {aboutNav.map(([label, path]) => (
                  <NavLink
                    key={path}
                    to={path}
                    onClick={() => setOpen(false)}
                    className="rounded-xl border border-[#fffdf0]/14 px-4 py-3 text-sm font-semibold text-[#fffdf0]"
                  >
                    {label}
                  </NavLink>
                ))}
                {nav.slice(1).map(([label, path]) => (
                  <NavLink
                    key={path}
                    to={path}
                    onClick={() => setOpen(false)}
                    className="rounded-xl border border-[#fffdf0]/14 px-4 py-3 text-sm font-semibold text-[#fffdf0]"
                  >
                    {label}
                  </NavLink>
                ))}
                <Link
                  to="/quote"
                  onClick={() => setOpen(false)}
                  className="rounded-xl bg-[#f4e00c] px-4 py-3 text-center text-sm font-bold text-[#242321] transition hover:brightness-105"
                >
                  Get a Free Quote
                </Link>
              </nav>
              <div className="mt-5 grid gap-2 border-t border-[#fffdf0]/14 pt-5">
                {services.slice(0, 5).map((service) => (
                  <Link
                    key={service.slug}
                    className="text-sm text-[#e6e2d2]"
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
