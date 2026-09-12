import { useTranslation } from "react-i18next";
import { PageHero } from "../components/PageHero";
import { SectionCta } from "../components/SectionCta";

const clusters = [
  {
    key: "worship",
    items: [
      "prayerHall",
      "basement",
      "wudu",
      "women",
      "rooftop",
      "mezzanine",
      "capacity",
    ],
  },
  { key: "learning", items: ["madrasa"] },
  { key: "welfare", items: ["kitchen", "medical"] },
];

export function AboutPage() {
  const { t } = useTranslation();

  return (
    <>
      <PageHero
        eyebrow={t("about.hero.eyebrow")}
        title={t("about.hero.title")}
        subtitle={t("about.hero.subtitle")}
        image="/assets/images/markaz%20demo%20pic.png"
        imageAlt={t("about.hero.imageAlt")}
      />

      <section className="bg-surface px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <aside className="border-t-4 border-[#C5A059] bg-bg p-7 sm:p-9">
            <p className="text-xs font-semibold tracking-widest text-[#C5A059] uppercase">
              {t("about.governance.eyebrow")}
            </p>
            <h2 className="mt-5 font-display text-3xl leading-tight text-navy-900">
              {t("about.governance.title")}
            </h2>
            <p className="mt-5 text-sm leading-7 text-ink-muted">
              {t("about.governance.description")}
            </p>
            <div className="mt-7 border-t border-silver-100 pt-6">
              <p className="text-xs font-semibold tracking-widest text-[#C5A059] uppercase">
                {t("about.governance.managerRole")}
              </p>
              <p className="mt-3 font-display text-2xl text-navy-900">
                {t("common.managerName")}
              </p>
              <a
                className="mt-3 inline-block text-sm font-bold text-blue-500 hover:text-navy-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
                href="tel:03453073557"
              >
                <bdi dir="ltr">{t("common.managerPhone")}</bdi>
              </a>
              <a
                className="mt-3 block text-sm font-bold text-blue-500 hover:text-navy-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
                href="https://wa.me/923453073557"
                target="_blank"
                rel="noreferrer"
              >
                {t("common.whatsapp")}
              </a>
            </div>
          </aside>
          <div>
            <p className="text-xs font-semibold tracking-widest text-[#C5A059] uppercase">
              {t("about.intro.eyebrow")}
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-navy-900 sm:text-5xl">
              {t("about.intro.title")}
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-ink-muted sm:text-lg">
              {t("about.intro.description")}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex min-h-12 items-center justify-center bg-navy-700 px-6 text-sm font-bold text-surface transition-all duration-300 ease-out hover:scale-[1.02] hover:bg-blue-500 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
                href="#facilities"
              >
                {t("about.intro.readMore")}
              </a>
              <a
                className="inline-flex min-h-12 items-center justify-center border border-silver-400 px-6 text-sm font-bold text-navy-700 transition-all duration-300 ease-out hover:scale-[1.02] hover:border-blue-500 hover:text-blue-500 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
                href="/donate"
              >
                {t("common.donateNow")}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div className="space-y-6 text-base leading-8 text-ink-muted sm:text-lg">
            <p>{t("about.description.first")}</p>
            <p>{t("about.description.second")}</p>
          </div>
          <div className="grid gap-px border border-silver-100 bg-silver-100 sm:grid-cols-3 lg:grid-cols-1">
            <div className="bg-surface p-7">
              <p className="font-display text-5xl text-[#C5A059]">
                {t("about.stats.kitchenNumber")}
              </p>
              <p className="mt-3 text-sm font-bold leading-6 text-ink-muted">
                {t("about.stats.kitchen")}
              </p>
            </div>
            <div className="bg-surface p-7">
              <p className="font-display text-5xl text-[#C5A059]">
                {t("about.stats.worshippersNumber")}
              </p>
              <p className="mt-3 text-sm font-bold leading-6 text-ink-muted">
                {t("about.stats.worshippers")}
              </p>
            </div>
            <div className="bg-surface p-7">
              <p className="font-display text-5xl text-[#C5A059]">
                {t("about.stats.rooftopNumber")}
              </p>
              <p className="mt-3 text-sm font-bold leading-6 text-ink-muted">
                {t("about.stats.rooftop")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="facilities"
        className="scroll-mt-8 bg-surface px-5 py-16 sm:px-8 lg:px-12 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold tracking-widest text-[#C5A059] uppercase">
            {t("about.facilities.eyebrow")}
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-navy-900 sm:text-5xl">
            {t("about.facilities.title")}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-ink-muted">
            {t("about.facilities.description")}
          </p>
          <div className="mt-12 space-y-12">
            {clusters.map((cluster, clusterIndex) => (
              <section
                key={cluster.key}
                className="grid gap-6 lg:grid-cols-[0.3fr_0.7fr]"
              >
                <div>
                  <p className="font-display text-5xl text-[#C5A059]">
                    0{clusterIndex + 1}
                  </p>
                  <h3 className="mt-3 font-display text-3xl leading-tight text-navy-900">
                    {t(`about.facilities.clusters.${cluster.key}.title`)}
                  </h3>
                </div>
                <ol className="border-t border-silver-100">
                  {cluster.items.map((item, index) => (
                    <li
                      key={item}
                      className="grid gap-4 border-b border-silver-100 py-6 sm:grid-cols-[3rem_1fr]"
                    >
                      <span className="font-display text-2xl text-[#C5A059]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h4 className="font-display text-2xl leading-tight text-navy-900">
                          {t(
                            `about.facilities.clusters.${cluster.key}.items.${item}.title`,
                          )}
                        </h4>
                        <p className="mt-3 text-sm leading-7 text-ink-muted">
                          {t(
                            `about.facilities.clusters.${cluster.key}.items.${item}.description`,
                          )}
                        </p>
                        {item === "medical" ? (
                          <p className="mt-4 border-l-2 border-[#C5A059] pl-3 text-xs font-bold text-ink-muted">
                            {t(
                              "about.facilities.clusters.welfare.items.medical.status",
                            )}
                          </p>
                        ) : null}
                      </div>
                    </li>
                  ))}
                </ol>
              </section>
            ))}
          </div>
        </div>
      </section>

      <SectionCta
        title={t("about.cta.title")}
        secondaryLabel={t("common.contactOnWhatsapp")}
        secondaryHref="https://wa.me/923402439670"
      >
        {t("about.cta.description")}
      </SectionCta>
    </>
  );
}
