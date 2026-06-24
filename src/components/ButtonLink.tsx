import { ArrowRight } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

type ButtonLinkProps = {
  to: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
};

const variants = {
  primary:
    'bg-[#f4e00c] text-[#4b4a48] shadow-[0_14px_30px_rgba(75,74,72,0.18)] hover:brightness-95',
  secondary:
    'border border-[#cdcdcd] bg-white text-[#4b4a48] shadow-[0_10px_24px_rgba(75,74,72,0.08)] hover:border-[#f4e00c] hover:bg-[#f0eedc]',
  ghost: 'text-[#4b4a48] hover:text-[#4b4a48]'
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
