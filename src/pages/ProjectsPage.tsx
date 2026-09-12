import { useTranslation } from "react-i18next";
import { PageHero } from "../components/PageHero";
import { ParallaxImage } from "../components/ParallaxImage";
import { SectionCta } from "../components/SectionCta";

const projects = [
  {
    key: "kitchen",
    images: ["/assets/images/kitchen1.jpeg", "/assets/images/kitchen.jpeg"],
  },
  {
    key: "masjid",
    images: [
      "/assets/images/Construction1.jpeg",
      "/assets/images/Const2.jpeg",
      "/assets/images/Constrction5.jfif",
    ],
  },
  {
    key: "education",
    images: [
      "/assets/images/talaba.jpeg",
      "/assets/images/6%20manzil%20madarsa.jpeg",
      "/assets/images/namazi%20gunjaish.jpeg",
      "/assets/images/1200%20afrad%20wuzu%20khana.jpeg",
    ],
  },
  { key: "medical", images: ["/assets/images/shifa%20khana.jpeg"] },
];

export function ProjectsPage() {
  const { t } = useTranslation();

  return (
    <>
      <PageHero
        eyebrow={t("projects.hero.eyebrow")}
        title={t("projects.hero.title")}
        subtitle={t("projects.hero.subtitle")}
        image="/assets/images/markaz%20demo%20pic.png"
        imageAlt={t("projects.hero.imageAlt")}
      />

      <section className="bg-surface px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <figure className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
          <div className="overflow-hidden border border-silver-400 bg-bg p-3">
            <div className="aspect-[3/2] overflow-hidden">
              <ParallaxImage
                src="/assets/images/alburhan-model.png"
                alt={t("projects.model.alt")}
              />
            </div>
          </div>
          <figcaption>
            <p className="text-xs font-semibold tracking-widest text-[#C5A059] uppercase">
              {t("projects.model.eyebrow")}
            </p>
            <p className="mt-4 max-w-xl font-display text-3xl leading-tight text-navy-900 sm:text-4xl">
              {t("projects.model.description")}
            </p>
          </figcaption>
        </figure>
      </section>

      <section className="bg-bg px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl space-y-20 lg:space-y-28">
          {projects.map((project, index) => (
            <article
              key={project.key}
              className="grid gap-8 border-t border-silver-100 pt-8 lg:grid-cols-12 lg:items-center lg:gap-12"
            >
              <div
                className={`lg:col-span-4 ${index % 2 === 1 ? "lg:order-2 lg:col-start-9" : ""}`}
              >
                <p className="font-display text-5xl leading-none text-[#C5A059]">
                  {t("projects.facility", {
                    number: t(`projects.items.${project.key}.number`),
                  })}
                </p>
                <h2 className="mt-4 font-display text-4xl leading-tight text-navy-900">
                  {t(`projects.items.${project.key}.title`)}
                </h2>
                {project.key === "medical" ? (
                  <p className="mt-4 border-l-2 border-[#C5A059] pl-3 text-xs font-bold leading-5 text-ink-muted">
                    {t("projects.items.medical.status")}
                  </p>
                ) : null}
                <p className="mt-5 text-base leading-8 text-ink-muted">
                  {t(`projects.items.${project.key}.description`)}
                </p>
                <a
                  className="mt-7 inline-flex min-h-12 items-center justify-center bg-navy-700 px-6 text-sm font-bold text-surface transition-all duration-300 ease-out hover:scale-[1.02] hover:bg-blue-500 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
                  href="/donate"
                >
                  {t(`projects.items.${project.key}.button`)}
                </a>
              </div>
              <div
                className={`lg:col-span-8 ${index % 2 === 1 ? "lg:order-1 lg:col-start-1" : "lg:col-start-5"}`}
              >
                <div
                  className={`grid gap-3 ${project.images.length === 1 ? "" : "sm:grid-cols-2"}`}
                >
                  <figure
                    className={`overflow-hidden border border-silver-100 bg-surface p-2 ${project.images.length > 1 ? "sm:col-span-2" : ""}`}
                  >
                    <div className="aspect-[3/2] overflow-hidden">
                      <ParallaxImage
                        src={project.images[0]}
                        alt={t(`projects.items.${project.key}.images.0`)}
                      />
                    </div>
                  </figure>
                  {project.images.slice(1).map((src, imageIndex) => (
                    <figure
                      key={src}
                      className="overflow-hidden border border-silver-100 bg-surface p-2"
                    >
                      <div className="aspect-[3/2] overflow-hidden">
                        <ParallaxImage
                          src={src}
                          alt={t(
                            `projects.items.${project.key}.images.${imageIndex + 1}`,
                          )}
                        />
                      </div>
                    </figure>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <SectionCta
        title={t("projects.cta.title")}
        secondaryLabel={t("common.chatOnWhatsapp")}
        secondaryHref="https://wa.me/923402439670"
      >
        {t("projects.cta.description")}
      </SectionCta>
    </>
  );
}
