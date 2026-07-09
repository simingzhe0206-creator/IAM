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
      <header className="fixed inset-x-0 top-0 z-50 bg-[#22211f]/92 py-3 backdrop-blur-xl">
        <div className="section-shell flex h-16 items-center justify-between gap-5 border-b border-[#fffdf0]/14 bg-[#22211f]/72 px-4 shadow-[0_16px_38px_rgba(18,17,16,0.28)] md:px-5">
          <Link to="/" className="flex items-center gap-3" aria-label="IAM Surveyors home">
            <img className="h-12 w-auto rounded-sm bg-white" src={assets.logo} alt="IAM Surveyors" />
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
              <div className="invisible absolute left-1/2 top-full z-50 w-[min(48rem,calc(100vw-2rem))] -translate-x-1/2 translate-y-1 pt-3 opacity-0 transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                <div className="rounded-2xl border border-[#fffdf0]/14 bg-[#262522] p-4 shadow-[0_18px_44px_rgba(18,17,16,0.34)]">
                  <Link
                    to="/services"
                    className="block border-b border-[#fffdf0]/10 px-3 pb-3 pt-1 text-xs font-bold uppercase tracking-[0.12em] text-[#f4e00c]"
                  >
                    All service categories
                  </Link>
                  <div className="mt-3 grid gap-3 md:grid-cols-2">
                    {serviceCategories.map((category) => (
                      <div key={category.title} className="rounded-xl border border-[#fffdf0]/10 bg-[#fffdf0]/6 p-3">
                        <div className="text-sm font-extrabold text-[#fffdf0]">{category.title}</div>
                        <div className="mt-2 grid gap-1.5">
                          {category.services.slice(0, 4).map((item) =>
                            item.slug ? (
                              <NavLink
                                key={`${category.title}-${item.label}`}
                                to={`/services/${item.slug}`}
                                className={({ isActive }) =>
                                  `text-xs font-semibold transition ${
                                    isActive ? 'text-[#f4e00c]' : 'text-[#e6e2d2] hover:text-[#fffdf0]'
                                  }`
                                }
                              >
                                {item.label}
                              </NavLink>
                            ) : (
                              <span key={`${category.title}-${item.label}`} className="text-xs font-semibold text-[#e6e2d2]/70">
                                {item.label}
                              </span>
                            )
                          )}
                        </div>
                      </div>
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
                <NavLink
                  to="/about"
                  onClick={() => setOpen(false)}
                  className="rounded-xl border border-[#fffdf0]/14 px-4 py-3 text-sm font-semibold text-[#fffdf0]"
                >
                  About
                </NavLink>
                <NavLink
                  to="/services"
                  onClick={() => setOpen(false)}
                  className="rounded-xl border border-[#fffdf0]/14 px-4 py-3 text-sm font-semibold text-[#fffdf0]"
                >
                  Services
                </NavLink>
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
                {serviceCategories.map((category) => (
                  <div key={category.title} className="grid gap-2 rounded-xl border border-[#fffdf0]/10 p-3">
                    <div className="text-sm font-bold text-[#fffdf0]">{category.title}</div>
                    {category.services
                      .filter((item) => item.slug)
                      .slice(0, 4)
                      .map((item) => (
                        <Link
                          key={`${category.title}-${item.label}`}
                          className="text-sm text-[#e6e2d2]"
                          to={`/services/${item.slug}`}
                          onClick={() => setOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
