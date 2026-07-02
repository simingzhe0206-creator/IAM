import { ArrowUpRight } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import type { Service } from '../content/site';

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;

  return (
    <Link
      to={`/services/${service.slug}`}
      className={`group surface-card relative min-h-[300px] overflow-hidden p-5 transition duration-500 hover:-translate-y-1 hover:border-[#f4e00c]/75 ${
        index % 3 === 1 ? 'lg:translate-y-8' : ''
      }`}
    >
      <img
        className="absolute inset-0 h-full w-full object-cover opacity-42 transition duration-700 group-hover:scale-105 group-hover:opacity-62 image-treatment"
        src={service.image}
        alt=""
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#252422]/72 via-[#252422]/52 to-[#252422]/24" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#11100f]/72 to-transparent" />
      <div className="relative z-10 flex h-full min-h-[260px] flex-col justify-between">
        <div className="flex items-start justify-between gap-4">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#f4e00c] text-[#242321] shadow-[0_14px_34px_rgba(244,224,12,0.16)]">
            <Icon size={25} weight="duotone" />
          </span>
          <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#f4e00c]">
            Service {String(index + 1).padStart(2, '0')}
          </span>
        </div>
        <div>
          <div className="mb-5 flex items-center justify-between gap-4">
            <h2 className="max-w-[18rem] text-balance text-2xl font-extrabold tracking-normal text-[#fffdf0]">
              {service.title}
            </h2>
            <ArrowUpRight className="shrink-0 text-[#fffdf0]/70 transition group-hover:text-[#f4e00c]" size={24} />
          </div>
          <p className="line-clamp-3 text-sm leading-6 text-[#e6e2d2]">{service.intro}</p>
          <div className="mt-5 text-sm font-bold text-[#f4e00c]">View service details</div>
        </div>
      </div>
    </Link>
  );
}
