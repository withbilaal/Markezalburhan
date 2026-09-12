import { useTranslation } from "react-i18next";
import { PageHero } from "../components/PageHero";
import { ParallaxImage } from "../components/ParallaxImage";
import { SectionCta } from "../components/SectionCta";

const events = [
  {
    key: "ghiza",
    images: [
      "/assets/images/ghiza%20ur%20rooh%201.jpg",
      "/assets/images/ghiza%20ur%20rooh.jpg",
      "/assets/images/ghiza%20ur%20rooh%204.jpg",
    ],
  },
  {
    key: "aitekaaf",
    images: [
      "/assets/images/itekaf.jpeg",
      "/assets/images/etekaf.jpeg",
      "/assets/images/itekaf.jpeg",
    ],
  },
  {
    key: "seerat",
    images: [
      "/assets/images/seerat-camp-1.jpg",
      "/assets/images/seerat-camp-2.jpg",
      "/assets/images/seerat-camp-3.jpg",
    ],
  },
  {
    key: "dopamine",
    images: ["/assets/images/dopaminedetox.jpg"],
    videoPending: true,
  },
  {
    key: "closing",
    images: ["/assets/images/closing.jfif", "/assets/images/closing12.jfif"],
  },
];

export function EventsPage() {
  const { t } = useTranslation();

  return (
    <>
      <PageHero
        eyebrow={t("events.hero.eyebrow")}
        title={t("events.hero.title")}
        subtitle={t("events.hero.subtitle")}
        image="/assets/images/ghiza%20ur%20rooh%201.jpg"
        imageAlt={t("events.hero.imageAlt")}
      />

      <section className="bg-navy-900 px-5 py-14 text-surface sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div className="grid grid-cols-2 gap-6 border-b border-[#C5A059]/60 pb-8 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-12">
            <div>
              <p className="font-display text-6xl leading-none text-[#C5A059] sm:text-8xl">
                {t("events.stats.eventNumber")}
              </p>
              <p className="mt-3 text-xs font-semibold tracking-widest text-[#C5A059] uppercase">
                {t("events.stats.events")}
              </p>
            </div>
            <div>
              <p className="font-display text-6xl leading-none text-[#C5A059] sm:text-8xl">
                {t("events.stats.peopleNumber")}
              </p>
              <p className="mt-3 text-xs font-semibold tracking-widest text-[#C5A059] uppercase">
                {t("events.stats.people")}
              </p>
            </div>
          </div>
          <div>
            <div className="flex flex-wrap gap-2">
              <span className="border border-[#C5A059]/60 px-3 py-2 text-xs font-bold text-silver-100">
                {t("events.stats.programs")}
              </span>
              <span className="border border-[#C5A059]/60 px-3 py-2 text-xs font-bold text-silver-100">
                {t("events.stats.engagement")}
              </span>
            </div>
            {/* Client source reports six events but names five entries; preserve both without inventing a sixth event. */}
            <p className="mt-6 max-w-2xl text-base leading-8 text-silver-100 sm:text-lg">
              {t("events.stats.description")}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-bg px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold tracking-widest text-[#C5A059] uppercase">
            {t("events.timelineEyebrow")}
          </p>
          <div className="mt-10 space-y-16 lg:space-y-24">
            {events.map((event, index) => (
              <article
                key={event.key}
                className="grid gap-8 border-t border-silver-100 pt-8 lg:grid-cols-12 lg:items-center lg:gap-12"
              >
                <div
                  className={`lg:col-span-5 ${index % 2 === 1 ? "lg:order-2 lg:col-start-8" : ""}`}
                >
                  <p className="text-xs font-semibold tracking-widest text-[#C5A059] uppercase">
                    {t(`events.items.${event.key}.label`)}
                  </p>
                  <h2 className="mt-4 font-display text-4xl leading-tight text-navy-900 sm:text-5xl">
                    {t(`events.items.${event.key}.title`)}
                  </h2>
                  {event.key === "ghiza" || event.key === "seerat" ? (
                    <p
                      className="mt-2 font-urdu text-2xl leading-[1.9] text-ink-muted"
                      dir="rtl"
                      lang="ur"
                    >
                      {t(`events.items.${event.key}.urdu`)}
                    </p>
                  ) : null}
                  <p className="mt-5 text-base leading-8 text-ink-muted">
                    {t(`events.items.${event.key}.description`)}
                  </p>
                </div>
                <div
                  className={`lg:col-span-7 ${index % 2 === 1 ? "lg:order-1 lg:col-start-1" : "lg:col-start-6"}`}
                >
                  <div
                    className={`grid gap-3 ${event.images.length === 1 ? "" : "sm:grid-cols-2"}`}
                  >
                    <figure
                      className={`overflow-hidden border border-silver-100 bg-surface p-2 ${event.images.length > 1 ? "sm:col-span-2" : ""}`}
                    >
                      <div className="aspect-[3/2] overflow-hidden">
                        <ParallaxImage
                          src={event.images[0]}
                          alt={t(`events.items.${event.key}.images.0`)}
                        />
                      </div>
                    </figure>
                    {event.images.slice(1).map((src, imageIndex) => (
                      <figure
                        key={src}
                        className="overflow-hidden border border-silver-100 bg-surface p-2"
                      >
                        <div className="aspect-[3/2] overflow-hidden">
                          <ParallaxImage
                            src={src}
                            alt={t(
                              `events.items.${event.key}.images.${imageIndex + 1}`,
                            )}
                          />
                        </div>
                      </figure>
                    ))}
                  </div>
                  {event.videoPending ? (
                    <p className="mt-3 text-xs font-bold text-ink-muted">
                      {t("events.items.dopamine.videoPending")}
                    </p>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SectionCta
        title={t("events.cta.title")}
        secondaryLabel={t("common.contactOnWhatsapp")}
        secondaryHref="https://wa.me/923402439670"
      >
        {t("events.cta.description")}
      </SectionCta>
    </>
  );
}
