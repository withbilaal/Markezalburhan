import { ParallaxImage } from "./ParallaxImage";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  urduTitle?: string;
  centered?: boolean;
};

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt,
  urduTitle,
  centered = false,
}: PageHeroProps) {
  return (
    <section
      className={`relative isolate flex overflow-hidden bg-navy-900 px-5 text-surface sm:px-8 lg:px-12 ${centered ? "min-h-[calc(100dvh-7.5rem)] flex-col justify-center py-12 md:py-16" : "min-h-[34rem] py-20 lg:min-h-[calc(100svh-7rem)]"}`}
    >
      <div className="absolute inset-0 opacity-45">
        <ParallaxImage src={image} alt={imageAlt} priority />
      </div>
      <div className="absolute inset-0 bg-navy-900/85" aria-hidden="true" />
      <div
        className="geometric-motif absolute -right-10 bottom-2 h-64 w-64 opacity-30"
        aria-hidden="true"
      />
      <div className="relative mx-auto flex w-full max-w-7xl flex-col justify-end">
        <p className="text-xs font-semibold tracking-widest text-[#C5A059] uppercase">
          {eyebrow}
        </p>
        <h1
          className={`mt-5 max-w-4xl font-display leading-[0.98] ${centered ? "text-4xl sm:text-5xl lg:text-6xl" : "text-5xl sm:text-6xl lg:text-8xl"}`}
        >
          {title}
        </h1>
        {urduTitle ? (
          <p
            className={`mt-5 font-urdu leading-[1.9] text-silver-100 ${centered ? "text-xl sm:text-2xl" : "text-2xl sm:text-3xl"}`}
            dir="rtl"
            lang="ur"
          >
            {urduTitle}
          </p>
        ) : null}
        <p
          className={`mt-6 text-base leading-8 text-silver-100 sm:text-lg ${centered ? "max-w-xl" : "max-w-2xl"}`}
        >
          {subtitle}
        </p>
      </div>
    </section>
  );
}
