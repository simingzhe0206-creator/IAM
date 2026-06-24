import { ArrowUpRight } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import type { Service } from '../content/site';

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;

  return (
    <Link
      to={`/services/${service.slug}`}
      className={`group surface-card relative grid min-h-[320px] overflow-hidden p-5 transition duration-300 hover:-translate-y-1 hover:border-[#f4e00c]/75 ${
        index % 3 === 1 ? 'lg:translate-y-8' : ''
      }`}
    >
      <div className="relative z-10 flex h-full flex-col">
        <div className="relative mb-6 h-36 overflow-hidden rounded-xl bg-[#252422]">
          <img
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105 image-treatment"
            src={service.image}
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#252422]/6 to-[#252422]/24" />
        </div>
        <div className="flex items-center justify-between">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#f4e00c] text-[#242321]">
            <Icon size={25} weight="duotone" />
          </span>
          <ArrowUpRight className="text-[#cdcdcd] transition group-hover:text-[#f4e00c]" size={22} />
        </div>
        <h2 className="mt-6 text-balance text-2xl font-black tracking-normal text-[#fffdf0]">
          {service.title}
        </h2>
        <p className="mt-4 line-clamp-3 text-sm leading-6 text-[#e6e2d2]">{service.intro}</p>
      </div>
    </Link>
  );
}
