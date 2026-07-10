type PageHeroProps = {
  title: string;
  children: React.ReactNode;
  image?: string;
};

export function PageHero({ title, children, image }: PageHeroProps) {
  if (image) {
    return (
      <section className="relative min-h-[64vh] overflow-hidden bg-[#1c1b19]">
        <img className="absolute inset-0 h-full w-full object-cover image-treatment" src={image} alt="" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#11100f]/82 via-[#11100f]/44 to-[#11100f]/12" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#11100f]/64 via-transparent to-[#11100f]/22" />
        <div className="section-shell relative z-10 flex min-h-[64vh] items-end pb-16 pt-32 md:pb-20 md:pt-40">
          <div className="max-w-4xl">
            <h1 className="text-balance text-4xl font-extrabold leading-[1.04] tracking-normal text-[#fffdf0] sm:text-5xl md:text-7xl">
              {title}
            </h1>
            <div className="mt-6 max-w-2xl text-base font-semibold leading-8 text-[#f0eedc] sm:text-lg">{children}</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-band section-band-hero py-12 md:py-16">
      <div className="section-shell">
        <div className="py-4 md:py-8">
          <div className="flex flex-col justify-center py-6 md:py-12">
            <h1 className="max-w-4xl text-balance text-3xl font-extrabold leading-[1.06] tracking-normal text-[#fffdf0] sm:text-4xl md:text-6xl md:leading-[0.98]">
              {title}
            </h1>
            <div className="mt-6 max-w-2xl text-base leading-8 text-[#e6e2d2] sm:text-lg">{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
