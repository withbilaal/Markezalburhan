import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { AboutPage } from "./pages/AboutPage";
import { DonatePage } from "./pages/DonatePage";
import { EventsPage } from "./pages/EventsPage";
import { ProjectsPage } from "./pages/ProjectsPage";

const facilityAssets = [
  { key: "masjid", image: "/assets/images/mazrkaz%20alburhan.jfif" },
  { key: "kitchen", image: "/assets/images/matbakh.jpeg" },
  { key: "education", image: "/assets/images/talaba.jpeg" },
  { key: "medical", image: "/assets/images/shifa%20khana.jpeg" },
];

const galleryAssets = [
  { key: "facade", image: "/assets/images/tameerat1.png" },
  { key: "arches", image: "/assets/images/tameera2.png" },
  { key: "hall", image: "/assets/images/markazi%20hall.png" },
  { key: "progressOne", image: "/assets/images/construction.jpeg" },
  { key: "progressTwo", image: "/assets/images/constructiv.jpeg" },
  { key: "progressThree", image: "/assets/images/Construction%207.jfif" },
  { key: "progressFour", image: "/assets/images/Construction6.jfif" },
];

type HorizontalImageProps = { src: string; alt: string; className?: string };

function HorizontalImage({ src, alt, className = "" }: HorizontalImageProps) {
  // TEMPORARY: original live-site portrait imagery is center-cropped into horizontal media containers.
  // Swap these source files when approved horizontal photography is supplied.
  return (
    <img
      className={`h-full w-full object-cover object-center ${className}`}
      src={src}
      alt={alt}
    />
  );
}

function HomePage() {
  const { i18n, t } = useTranslation();
  const activeLanguage = i18n.resolvedLanguage === "ur" ? "ur" : "en";
  const [displayLanguage, setDisplayLanguage] = useState(activeLanguage);
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const isHeroTextVisible = activeLanguage === displayLanguage;
  const isUrduHero = displayLanguage === "ur";
  const isUrduDonation = activeLanguage === "ur";
  const heroT = (key: string) => t(key, { lng: displayLanguage });
  const campaignText = t("home.donation.campaign");
  const campaignSeparator = campaignText.indexOf(":");
  const campaignLabel =
    campaignSeparator === -1
      ? campaignText
      : campaignText.slice(0, campaignSeparator + 1);
  const campaignDetail =
    campaignSeparator === -1 ? "" : campaignText.slice(campaignSeparator + 1);

  useEffect(() => {
    if (activeLanguage === displayLanguage) return undefined;

    const languageTimeout = window.setTimeout(() => {
      setDisplayLanguage(activeLanguage);
    }, 250);

    return () => window.clearTimeout(languageTimeout);
  }, [activeLanguage, displayLanguage]);

  useEffect(() => {
    const video = heroVideoRef.current;
    if (!video) return undefined;

    const playMutedVideo = () => {
      video.muted = true;
      video.defaultMuted = true;
      void video.play().catch(() => undefined);
    };

    const resumeWhenVisible = () => {
      if (!document.hidden) playMutedVideo();
    };

    playMutedVideo();
    video.addEventListener("canplay", playMutedVideo);
    document.addEventListener("visibilitychange", resumeWhenVisible);

    return () => {
      video.removeEventListener("canplay", playMutedVideo);
      document.removeEventListener("visibilitychange", resumeWhenVisible);
    };
  }, []);

  return (
    <main>
      <section
        id="home-hero"
        className="relative isolate flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-navy-900 px-5 pb-10 pt-28 text-surface sm:px-8 sm:pb-14 sm:pt-32 lg:px-12 lg:pb-16 lg:pt-32"
      >
        <video
          ref={heroVideoRef}
          className="absolute inset-0 z-0 h-full w-full object-cover object-center"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/assets/images/markazpic.png"
          aria-hidden="true"
        >
          <source src="/assets/videos/mosque.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0 z-[1] bg-navy-900/65 sm:bg-navy-900/55"
          aria-hidden="true"
        />
        <div
          className="geometric-motif !absolute -left-16 bottom-0 z-[2] h-48 w-48 opacity-35"
          aria-hidden="true"
        />
        <div
          className={`relative z-10 mx-auto flex w-full max-w-4xl flex-none flex-col items-center justify-center gap-10 text-center transition-opacity duration-500 ease-in-out ${isHeroTextVisible ? "opacity-100" : "opacity-0"}`}
        >
          <p className="text-sm font-semibold tracking-widest text-[#C5A059] uppercase">
            {heroT("home.hero.eyebrow")}
          </p>
          <h1
            className={`${isUrduHero ? "font-urdu leading-[2.5]" : "font-fraunces leading-tight"} text-5xl text-surface drop-shadow-lg md:text-7xl`}
            dir={isUrduHero ? "rtl" : "ltr"}
            lang={isUrduHero ? "ur" : "en"}
          >
            {heroT("home.hero.title")}
          </h1>
          <p
            className={`${isUrduHero ? "font-urdu leading-[2.5]" : "font-body leading-tight"} text-xl text-surface drop-shadow-lg md:text-2xl`}
            dir={isUrduHero ? "rtl" : "ltr"}
            lang={isUrduHero ? "ur" : "en"}
          >
            {heroT("home.hero.subtitle")}
          </p>
          <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              className="inline-flex items-center justify-center border border-white/80 border-surface/80 px-8 py-3 font-medium text-white text-surface transition-all duration-300 ease-out hover:scale-[1.02] hover:bg-white hover:bg-surface hover:text-navy-900 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
              href="tel:+923402439670"
            >
              <bdi dir="ltr">{heroT("common.phone")}</bdi>
            </a>
            <a
              className="inline-flex items-center justify-center bg-blue-500 px-8 py-3 font-medium text-surface transition-all duration-300 ease-out hover:scale-[1.02] hover:bg-navy-700 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
              href="/donate"
            >
              {heroT("common.donateNow")}
            </a>
          </div>
        </div>
      </section>

      <section
        className="bg-bg"
        aria-labelledby="donate-heading"
        dir={isUrduDonation ? "rtl" : "ltr"}
        lang={isUrduDonation ? "ur" : "en"}
      >
        <div className="max-w-5xl mx-auto px-6 py-24">
          <div
            className={`bg-surface border border-navy-900/10 rounded-3xl p-10 md:p-16 shadow-xl flex flex-col gap-12 ${isUrduDonation ? "font-urdu" : ""}`}
          >
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-3 text-xs font-semibold tracking-widest text-[#C5A059] uppercase">
                {t("home.donation.eyebrow")}
              </p>
              <h2
                id="donate-heading"
                className={`${isUrduDonation ? "font-urdu leading-[2.15]" : "font-fraunces leading-tight"} text-3xl md:text-5xl text-navy-900`}
              >
                {t("home.donation.title")}
              </h2>
              <p
                className={`mx-auto mt-5 max-w-2xl text-base text-ink-muted sm:text-lg ${isUrduDonation ? "leading-[2.15]" : "leading-8"}`}
              >
                {t("home.donation.description")}
              </p>
            </div>

            <div className="border-t border-navy-900/10 pt-8">
              <p
                className={`mx-auto inline-flex max-w-full flex-wrap items-center justify-center gap-3 rounded-full border border-silver-400 bg-[#F6F8FB] px-6 py-2.5 text-center text-sm text-[#152E7E] shadow-sm ${isUrduDonation ? "font-urdu leading-[2.15]" : "font-body"}`}
                dir={isUrduDonation ? "rtl" : "ltr"}
                lang={isUrduDonation ? "ur" : "en"}
              >
                <svg
                  className="size-4 shrink-0 text-[#152E7E]"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 11.5v1a2 2 0 0 0 2 2h2l2 4h2l-1-4 8-3V5.5l-8 3H5a2 2 0 0 0-2 2v1Z"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18 8.5a4 4 0 0 1 0 6"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="font-semibold">{campaignLabel}</span>
                <span className="font-medium">{campaignDetail}</span>
              </p>
              <div className="mt-8 grid grid-cols-1 items-center gap-8 md:grid-cols-2">
                <div className="text-start">
                  <p
                    className={`${isUrduDonation ? "font-urdu leading-[2.15]" : "font-fraunces leading-tight"} whitespace-pre-line text-4xl font-semibold text-navy-700 md:text-6xl`}
                  >
                    {t("home.donation.unit")}
                  </p>
                </div>
                <div className="text-start">
                  <ul className={isUrduDonation ? "leading-[2.15]" : ""}>
                    {[0, 1, 2].map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-navy-900/80 font-medium py-2 border-b border-navy-900/5 last:border-none"
                      >
                        <span
                          className="size-2 shrink-0 rounded-full bg-navy-700"
                          aria-hidden="true"
                        />
                        <span>{t(`home.donation.benefits.${item}`)}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-4 mt-6">
                    <a
                      className="inline-flex min-h-12 flex-1 items-center justify-center bg-navy-700 px-6 text-sm font-bold text-surface transition-all duration-300 ease-out hover:scale-[1.02] hover:bg-blue-500 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
                      href="/donate"
                    >
                      {t("common.donateNow")}
                    </a>
                    <a
                      className="inline-flex min-h-12 flex-1 items-center justify-center border border-navy-900/20 px-6 text-sm font-bold text-navy-900 transition-all duration-300 ease-out hover:scale-[1.02] hover:border-[#25D366] hover:bg-[#25D366] hover:text-white hover:text-surface active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
                      href="https://wa.me/923402439670"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t("home.donation.whatsappUs")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative flex min-h-screen w-full items-center overflow-hidden"
        aria-labelledby="vision-heading"
      >
        <img
          className="absolute inset-0 z-0 h-full w-full object-cover"
          src="/assets/images/markaz-alburhan-complete-model.png"
          alt={t("home.vision.imageAlt")}
        />
        <div
          className="absolute inset-0 z-10 bg-gradient-to-r from-[#0A1050]/80 via-[#0A1050]/20 to-transparent rtl:bg-gradient-to-l"
          aria-hidden="true"
        />
        <div className="relative z-20 max-w-xl px-6 py-12 text-left rtl:text-right md:px-16">
          <p
            className={`${isUrduDonation ? "font-urdu leading-[2.1]" : "font-body"} text-xs font-semibold tracking-widest text-[#C5A059] uppercase`}
            dir={isUrduDonation ? "rtl" : "ltr"}
            lang={isUrduDonation ? "ur" : "en"}
          >
            {t("home.vision.eyebrow")}
          </p>
          <h2
            id="vision-heading"
            className={`${isUrduDonation ? "font-urdu text-[#F6F8FB]" : "font-fraunces text-[#F6F8FB]"} mt-5 text-4xl leading-tight md:text-5xl`}
            dir={isUrduDonation ? "rtl" : "ltr"}
            lang={isUrduDonation ? "ur" : "en"}
          >
            {t("home.vision.title")}
          </h2>
          <p
            className={`${isUrduDonation ? "font-urdu leading-[2.15]" : "font-manrope font-body leading-8"} mt-6 max-w-lg text-base text-[#F6F8FB] md:text-lg`}
            dir={isUrduDonation ? "rtl" : "ltr"}
            lang={isUrduDonation ? "ur" : "en"}
          >
            {t("home.vision.description")}
          </p>
        </div>
      </section>

      <section
        className="bg-surface px-5 py-24 sm:px-8 lg:px-12"
        aria-labelledby="facilities-heading"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-widest text-[#C5A059] uppercase">
              {t("home.facilities.eyebrow")}
            </p>
            <h2
              id="facilities-heading"
              className="mt-4 font-fraunces text-4xl leading-tight text-navy-900 sm:text-5xl"
            >
              {t("home.facilities.title")}
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6">
            {facilityAssets.map((facility) => (
              <article
                key={facility.key}
                className="group overflow-hidden rounded-xl bg-[#F6F8FB] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="aspect-video overflow-hidden">
                  <HorizontalImage
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    src={facility.image}
                    alt={t(`home.facilities.items.${facility.key}.alt`)}
                  />
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="font-body text-xl font-semibold text-[#152E7E]">
                    {t(`home.facilities.items.${facility.key}.title`)}
                  </h3>
                  <p className="mt-2 font-body text-sm leading-6 text-ink-muted">
                    {t(`home.facilities.items.${facility.key}.description`)}
                  </p>
                  {facility.key === "medical" ? (
                    <span className="mt-4 inline-flex rounded-full border border-silver-100 bg-[#F6F8FB] px-3 py-1 text-xs font-medium text-[#152E7E]">
                      {t("home.facilities.items.medical.status")}
                    </span>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="bg-bg px-5 py-24 sm:px-8 lg:px-12"
        aria-labelledby="progress-heading"
      >
        <div className="mx-auto max-w-7xl">
          <div>
            <p className="text-xs font-semibold tracking-widest text-[#C5A059] uppercase">
              {t("home.gallery.eyebrow")}
            </p>
            <h2
              id="progress-heading"
              className="mt-4 font-fraunces text-4xl leading-tight text-navy-900 sm:text-5xl"
            >
              {t("home.gallery.title")}
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {galleryAssets.map((item) => (
              <figure
                key={item.key}
                className="aspect-square overflow-hidden rounded-xl bg-surface"
              >
                <img
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                  src={item.image}
                  alt={t(`home.gallery.items.${item.key}`)}
                />
              </figure>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <a
              className="font-body group relative inline-flex items-center gap-1.5 text-sm font-bold text-[#25489E] transition-colors duration-300 hover:text-[#0A1050] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#C5A059] after:content-[''] after:transition-all after:duration-300 hover:after:w-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
              href="/projects"
            >
              <span>{t("home.gallery.viewAll")}</span>
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M5 12h14m-6-6 6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section
        className="bg-navy-700 px-5 py-16 text-surface sm:px-8 lg:px-12 lg:py-20"
        aria-labelledby="closing-heading"
      >
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-3xl">
            <h2
              id="closing-heading"
              className="font-display text-3xl leading-tight sm:text-4xl"
            >
              {t("home.closing.title")}
            </h2>
            <p className="mt-4 text-base leading-8 text-silver-100">
              {t("home.closing.description")}
            </p>
          </div>
          <a
            className="inline-flex min-h-12 items-center justify-center bg-surface px-6 text-sm font-bold text-navy-900 transition-all duration-300 ease-out hover:scale-[1.02] hover:bg-silver-100 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
            href="/donate"
          >
            {t("common.donateNow")}
          </a>
        </div>
      </section>
    </main>
  );
}

const routeKeys: Record<
  string,
  "home" | "about" | "events" | "projects" | "donate"
> = {
  "/": "home",
  "/about": "about",
  "/events": "events",
  "/projects": "projects",
  "/donate": "donate",
};

function App() {
  const { i18n, t } = useTranslation();
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  const content =
    path === "/about" ? (
      <AboutPage />
    ) : path === "/events" ? (
      <EventsPage />
    ) : path === "/projects" ? (
      <ProjectsPage />
    ) : path === "/donate" ? (
      <DonatePage />
    ) : (
      <HomePage />
    );

  useEffect(() => {
    const language = i18n.resolvedLanguage === "ur" ? "ur" : "en";
    const route = routeKeys[path] ?? "home";
    const root = document.documentElement;

    root.setAttribute("lang", language);
    root.setAttribute("dir", language === "ur" ? "rtl" : "ltr");
    document.title = t(`meta.${route}.title`);
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", t(`meta.${route}.description`));
  }, [i18n.resolvedLanguage, path, t]);

  return (
    <div className="min-h-screen overflow-hidden bg-bg text-ink">
      <SiteHeader />
      <div className="page-enter">{content}</div>
      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
