import { CaretDown, List, X } from '@phosphor-icons/react';
import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { assets, serviceCategories } from '../content/site';
import { ButtonLink } from './ButtonLink';

const nav = [
  ['Home', '/'],
  ['Projects', '/projects'],
  ['Reviews', '/reviews'],
  ['Contact', '/contact']
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const servicesActive = location.pathname === '/services' || location.pathname.startsWith('/services/');

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#fffdf0]/14 bg-[#181817]/96 backdrop-blur-md">
        <div className="section-shell flex h-20 items-center justify-between gap-5 px-4 md:px-5">
          <Link to="/" className="flex items-center gap-3" aria-label="IAM Surveyors home">
            <img className="h-12 w-auto object-contain" src={assets.logo} alt="IAM Surveyors" />
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
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `border-b-2 px-3 py-2 text-sm font-semibold transition xl:px-4 ${
                  isActive ? 'border-[#f4e00c] text-[#f4e00c]' : 'border-transparent text-[#e6e2d2] hover:text-[#fffdf0]'
                }`
              }
            >
              About
            </NavLink>
            <div className="group relative">
              <NavLink
                to="/services"
                className={`inline-flex items-center gap-1 border-b-2 px-3 py-2 text-sm font-semibold transition xl:px-4 ${
                  servicesActive ? 'border-[#f4e00c] text-[#f4e00c]' : 'border-transparent text-[#e6e2d2] hover:text-[#fffdf0]'
                }`}
              >
                Services
                <CaretDown size={14} weight="bold" />
              </NavLink>
              <div className="invisible absolute left-1/2 top-full z-50 w-[min(28rem,calc(100vw-2rem))] -translate-x-1/2 translate-y-1 pt-3 opacity-0 transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                <div
                  className="rounded-sm border border-[#fffdf0]/14 bg-[#181817] p-2 shadow-[0_18px_44px_rgba(18,17,16,0.34)]"
                  data-testid="desktop-service-menu"
                >
                  <div className="grid gap-2">
                    {serviceCategories.map((category) => (
                      <Link
                        key={category.slug}
                        to={`/services#${category.slug}`}
                        className="border-b border-[#fffdf0]/10 px-4 py-3 text-sm font-bold leading-5 text-[#fffdf0] transition last:border-b-0 hover:bg-[#fffdf0]/5 hover:text-[#f4e00c]"
                      >
                        {category.title}
                      </Link>
                    ))}
                  </div>
                </div>
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
            className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-[#fffdf0]/16 text-[#fffdf0] lg:hidden"
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={22} /> : <List size={22} />}
          </button>
        </div>

        {open && (
          <div className="section-shell pb-3 lg:hidden">
            <div className="mt-2 rounded-sm border border-[#fffdf0]/16 bg-[#181817] p-4 shadow-[0_18px_44px_rgba(26,25,23,0.30)]">
              <nav className="grid gap-2" aria-label="Mobile navigation">
                {nav.slice(0, 1).map(([label, path]) => (
                  <NavLink
                    key={path}
                    to={path}
                    onClick={() => setOpen(false)}
                    className="border-b border-[#fffdf0]/14 px-4 py-3 text-sm font-semibold text-[#fffdf0]"
                  >
                    {label}
                  </NavLink>
                ))}
                <NavLink
                  to="/about"
                  onClick={() => setOpen(false)}
                  className="border-b border-[#fffdf0]/14 px-4 py-3 text-sm font-semibold text-[#fffdf0]"
                >
                  About
                </NavLink>
                <NavLink
                  to="/services"
                  onClick={() => setOpen(false)}
                  className="border-b border-[#fffdf0]/14 px-4 py-3 text-sm font-semibold text-[#fffdf0]"
                >
                  Services
                </NavLink>
                {nav.slice(1).map(([label, path]) => (
                  <NavLink
                    key={path}
                    to={path}
                    onClick={() => setOpen(false)}
                    className="border-b border-[#fffdf0]/14 px-4 py-3 text-sm font-semibold text-[#fffdf0]"
                  >
                    {label}
                  </NavLink>
                ))}
                <Link
                  to="/quote"
                  onClick={() => setOpen(false)}
                  className="rounded-sm bg-[#f4e00c] px-4 py-3 text-center text-sm font-bold text-[#242321] transition hover:brightness-105"
                >
                  Get a Free Quote
                </Link>
              </nav>
              <div className="mt-5 grid gap-2 border-t border-[#fffdf0]/14 pt-5">
                {serviceCategories.map((category) => (
                  <Link
                    key={category.slug}
                    className="border-b border-[#fffdf0]/10 px-4 py-3 text-sm font-bold leading-5 text-[#fffdf0] last:border-b-0"
                    to={`/services#${category.slug}`}
                    onClick={() => setOpen(false)}
                  >
                    {category.title}
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
