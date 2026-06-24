type PageHeroProps = {
  title: string;
  children: React.ReactNode;
  image?: string;
};

export function PageHero({ title, children, image }: PageHeroProps) {
  return (
    <section className="py-8 md:py-12">
      <div className="section-shell">
        <div className="page-canvas grid gap-8 overflow-hidden p-5 md:p-8 lg:grid-cols-[1fr_0.82fr] lg:items-stretch">
          <div className="flex flex-col justify-center py-6 md:py-10">
            <h1 className="max-w-4xl text-balance text-3xl font-black leading-[1.06] tracking-normal text-[#4b4a48] sm:text-4xl md:text-6xl md:leading-[0.98]">
              {title}
            </h1>
            <div className="mt-6 max-w-2xl text-base leading-8 text-[#4b4a48] sm:text-lg">{children}</div>
          </div>
          {image && (
            <div className="relative min-h-72 overflow-hidden rounded-2xl bg-[#cdcdcd]">
              <img className="absolute inset-0 h-full w-full object-cover image-treatment" src={image} alt="" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#f0eedc]/12 via-transparent to-[#4b4a48]/18" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
