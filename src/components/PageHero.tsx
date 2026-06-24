type PageHeroProps = {
  title: string;
  children: React.ReactNode;
  image?: string;
};

export function PageHero({ title, children, image }: PageHeroProps) {
  return (
    <section className="section-band section-band-hero py-12 md:py-16">
      <div className="section-shell">
        <div className="grid gap-8 py-4 md:py-8 lg:grid-cols-[1fr_0.82fr] lg:items-stretch">
          <div className="flex flex-col justify-center py-6 md:py-12">
            <h1 className="max-w-4xl text-balance text-3xl font-extrabold leading-[1.06] tracking-normal text-[#fffdf0] sm:text-4xl md:text-6xl md:leading-[0.98]">
              {title}
            </h1>
            <div className="mt-6 max-w-2xl text-base leading-8 text-[#e6e2d2] sm:text-lg">{children}</div>
          </div>
          {image && (
            <div className="relative min-h-72 overflow-hidden rounded-2xl border border-[#fffdf0]/12 bg-[#262522] shadow-[0_28px_70px_rgba(18,17,16,0.32)]">
              <img className="absolute inset-0 h-full w-full object-cover image-treatment" src={image} alt="" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#252422]/4 via-transparent to-[#252422]/12" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
