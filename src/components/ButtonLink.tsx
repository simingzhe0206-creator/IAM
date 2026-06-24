import { ArrowRight } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

type ButtonLinkProps = {
  to: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
};

const variants = {
  primary:
    'bg-[#f4e00c] text-[#4b4a48] shadow-[0_14px_34px_rgba(26,25,23,0.28)] hover:brightness-95',
  secondary:
    'border border-[#f0eedc]/18 bg-[#f0eedc]/8 text-[#f0eedc] shadow-[0_12px_30px_rgba(26,25,23,0.22)] hover:border-[#f4e00c] hover:bg-[#f0eedc]/14',
  ghost: 'text-[#f0eedc] hover:text-[#f4e00c]'
};

export function ButtonLink({ to, children, variant = 'primary' }: ButtonLinkProps) {
  return (
    <Link
      to={to}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 text-sm font-semibold transition duration-200 active:translate-y-px ${variants[variant]}`}
    >
      {children}
      <ArrowRight size={17} weight="bold" />
    </Link>
  );
}
