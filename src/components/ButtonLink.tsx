import { ArrowRight } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

type ButtonLinkProps = {
  to: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
};

const variants = {
  primary:
    'bg-[#bd8b36] text-white shadow-[0_14px_34px_rgba(140,95,35,0.24)] hover:bg-[#a9782e]',
  secondary:
    'border border-[#d8be91] bg-white text-[#242321] shadow-[0_10px_24px_rgba(36,35,33,0.10)] hover:border-[#bd8b36] hover:bg-[#fbf6ec] hover:text-[#7a5520]',
  ghost: 'text-[#7a5520] hover:text-[#5f3f16]'
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
