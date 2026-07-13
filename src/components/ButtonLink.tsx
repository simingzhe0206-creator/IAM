import { ArrowRight } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

type ButtonLinkProps = {
  to: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
};

const variants = {
  primary:
    'bg-[#f4e00c] text-[#242321] shadow-[0_14px_34px_rgba(244,224,12,0.18)] hover:brightness-105',
  secondary:
    'border border-[#fffdf0]/22 bg-[#fffdf0]/9 text-[#fffdf0] shadow-[0_12px_30px_rgba(18,17,16,0.22)] hover:border-[#f4e00c] hover:bg-[#fffdf0]/16',
  ghost: 'text-[#fffdf0] hover:text-[#f4e00c]'
};

export function ButtonLink({ to, children, variant = 'primary' }: ButtonLinkProps) {
  return (
    <Link
      to={to}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-sm px-5 text-sm font-semibold transition duration-200 active:translate-y-px ${variants[variant]}`}
    >
      {children}
      <ArrowRight size={17} weight="bold" />
    </Link>
  );
}
