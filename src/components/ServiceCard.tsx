import { ArrowUpRight } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import type { Service } from '../content/site';

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;

  return (
    <Link
      to={`/services/${service.slug}`}
      className={`group surface-card relative grid min-h-[320px] overflow-hidden p-5 transition duration-300 hover:-translate-y-1 hover:border-[#bd8b36]/45 ${
        index % 3 === 1 ? 'lg:translate-y-8' : ''
      }`}
    >
      <div className="relative z-10 flex h-full flex-col">
        <div className="relative mb-6 h-36 overflow-hidden rounded-xl bg-[#f2e6cf]">
          <img
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105 image-treatment"
            src={service.image}
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#fbf6ec]/6 to-[#242321]/14" />
        </div>
        <div className="flex items-center justify-between">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#fbf6ec] text-[#7a5520]">
            <Icon size={25} weight="duotone" />
          </span>
          <ArrowUpRight className="text-slate-400 transition group-hover:text-[#7a5520]" size={22} />
        </div>
        <h2 className="mt-6 text-balance text-2xl font-black tracking-normal text-[#242321]">
          {service.title}
        </h2>
        <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-600">{service.intro}</p>
      </div>
    </Link>
  );
}
