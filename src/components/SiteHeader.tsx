import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const navigation = [
  { key: "navigation.home", href: "/" },
  { key: "navigation.about", href: "/about" },
  { key: "navigation.events", href: "/events" },
  { key: "navigation.projects", href: "/projects" },
  { key: "navigation.contact", href: "/donate#contact" },
  { key: "navigation.donation", href: "/donate" },
];

type LanguageToggleProps = {
  isUrdu: boolean;
  onToggle: () => void;
  tabIndex?: number;
  className: string;
};

function LanguageToggle({
  isUrdu,
  onToggle,
  tabIndex,
  className,
}: LanguageToggleProps) {
  const { t } = useTranslation();

  return (
    <button
      className={`relative cursor-pointer items-center rounded-full bg-silver-100 p-px font-body text-xs font-medium transition-all duration-300 ease-out hover:scale-[1.02] active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 ${className}`}
      type="button"
      onClick={onToggle}
      aria-label={t(isUrdu ? "common.switchToEnglish" : "common.switchToUrdu")}
      aria-pressed={isUrdu}
      title={t(isUrdu ? "common.switchToEnglish" : "common.switchToUrdu")}
      dir="ltr"
      tabIndex={tabIndex}
    >
      <span
        className={`pointer-events-none absolute inset-y-px left-px w-[calc(50%-0.0625rem)] rounded-full bg-navy-900 transition-transform duration-300 ease-in-out motion-reduce:transition-none ${isUrdu ? "translate-x-full" : "translate-x-0"}`}
        aria-hidden="true"
      />
      <span
        className={`relative z-10 px-2 py-0.5 transition-colors ${isUrdu ? "text-navy-900" : "text-surface"}`}
      >
        EN
      </span>
      <span
        className={`relative z-10 px-1.5 py-0.5 transition-colors ${isUrdu ? "text-surface" : "text-navy-900"}`}
      >
        UR
      </span>
    </button>
  );
}

export function SiteHeader() {
  const { i18n, t } = useTranslation();
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(window.scrollY);
  const currentPath = window.location.pathname.replace(/\/$/, "") || "/";
  const isUrdu = i18n.resolvedLanguage === "ur";

  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;

      setIsVisible(currentScrollY <= lastScrollY.current || currentScrollY < 8);
      lastScrollY.current = currentScrollY;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMobileMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const desktopBreakpoint = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = () => {
      if (desktopBreakpoint.matches) setIsMobileMenuOpen(false);
    };

    closeOnDesktop();
    desktopBreakpoint.addEventListener("change", closeOnDesktop);
    return () =>
      desktopBreakpoint.removeEventListener("change", closeOnDesktop);
  }, []);

  function toggleLanguage() {
    void i18n.changeLanguage(isUrdu ? "en" : "ur");
  }

  return (
    <>
      <header
        className={`fixed top-0 w-full transition-transform duration-300 motion-reduce:transition-none ${isMobileMenuOpen ? "z-30" : "z-50"} ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="bg-navy-900 py-2.5 text-xs text-silver-100">
          <div className="mx-auto grid max-w-7xl grid-cols-2 items-center gap-x-4 gap-y-1 px-4 sm:flex sm:justify-between">
            <a
              className="justify-self-start font-body font-bold hover:text-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 sm:shrink-0"
              href="tel:+923402439670"
            >
              <bdi dir="ltr">{t("common.phone")}</bdi>
            </a>
            <p className="order-last col-span-2 text-center sm:order-none sm:flex-1">
              Markaz Alburhan, Taiser Town, Karachi
            </p>
            <a
              className="justify-self-end font-body font-bold hover:text-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 sm:shrink-0"
              href="https://wa.me/923402439670"
              target="_blank"
              rel="noreferrer"
            >
              {t("common.whatsapp")}
            </a>
          </div>
        </div>
        <div className="border-b border-silver-100 bg-surface text-navy-900 shadow-sm">
          <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 sm:gap-6 sm:py-2.5">
            <a
              className="flex shrink-0 items-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
              href="/"
              aria-label={t("common.homeAria")}
            >
              <span className="relative block h-14 w-14">
                <img
                  className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 object-contain md:h-20 md:w-20"
                  src="/assets/images/markaz-al-burhan-logo.svg"
                  alt={t("common.orgName")}
                />
              </span>
            </a>
            <nav
              className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex"
              aria-label={t("common.primaryNavigation")}
            >
              {navigation.map(({ key, href }) => (
                <a
                  key={key}
                  className="group relative font-body text-sm font-semibold text-ink-muted transition-colors hover:text-navy-900 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#C5A059] after:content-[''] after:transition-transform after:duration-300 hover:after:scale-x-100 group-hover:after:scale-x-100 motion-reduce:after:transition-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
                  href={href}
                  aria-current={
                    href.split("#")[0] === currentPath ? "page" : undefined
                  }
                >
                  {t(key)}
                </a>
              ))}
            </nav>
            <div className="flex shrink-0 items-center gap-4">
              <LanguageToggle
                className="flex"
                isUrdu={isUrdu}
                onToggle={toggleLanguage}
              />
              <a
                className="hidden min-h-9 items-center justify-center bg-navy-700 px-3 font-body text-[0.7rem] font-bold text-surface transition-all duration-300 ease-out hover:scale-[1.02] hover:bg-blue-500 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 md:inline-flex sm:min-h-10 sm:px-4 sm:text-sm"
                href="/donate"
              >
                {t("common.donateNow")}
              </a>
              <button
                className={`flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center text-navy-900 transition-all duration-300 ease-out hover:scale-[1.02] hover:text-[#C5A059] active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 lg:hidden ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`}
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label={t("common.menu")}
                title={t("common.menu")}
              >
                <span
                  className="relative flex h-5 w-5 items-center justify-center"
                  aria-hidden="true"
                >
                  <span className="absolute h-px w-5 -translate-y-1.5 bg-current transition-transform duration-300" />
                  <span className="absolute h-px w-5 bg-current transition-transform duration-300" />
                  <span className="absolute h-px w-5 translate-y-1.5 bg-current transition-transform duration-300" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-50 flex h-[100dvh] w-full flex-col overflow-hidden bg-[url('/assets/images/markazpic.png')] bg-cover bg-center transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] lg:hidden ${isMobileMenuOpen ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div
          className="pointer-events-none absolute inset-0 z-0 bg-[#0A1050]/95 backdrop-blur-xl"
          aria-hidden="true"
        />
        <div
          className="relative z-10 flex w-full shrink-0 items-center justify-between border-b border-white/10 px-6 py-4"
          dir="ltr"
        >
          <a
            className="flex shrink-0 items-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C5A059]"
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            tabIndex={isMobileMenuOpen ? undefined : -1}
            aria-label={t("common.homeAria")}
          >
            <img
              className="h-16 w-16 object-contain md:h-20 md:w-20"
              src="/assets/images/markaz-al-burhan-logo.svg"
              alt={t("common.orgName")}
            />
          </a>
          <div className="flex shrink-0 items-center gap-4">
            <LanguageToggle
              className="flex"
              isUrdu={isUrdu}
              onToggle={toggleLanguage}
              tabIndex={isMobileMenuOpen ? undefined : -1}
            />
            <button
              className="flex h-11 w-11 items-center justify-center text-[#F6F8FB] transition-all duration-300 ease-out hover:scale-[1.02] hover:text-[#C5A059] active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C5A059]"
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label={t("common.menu")}
              tabIndex={isMobileMenuOpen ? undefined : -1}
            >
              <span
                className="relative flex h-5 w-5 items-center justify-center"
                aria-hidden="true"
              >
                <span className="absolute h-px w-5 rotate-45 bg-current transition-transform duration-300" />
                <span className="absolute h-px w-5 opacity-0 transition-opacity duration-300" />
                <span className="absolute h-px w-5 -rotate-45 bg-current transition-transform duration-300" />
              </span>
            </button>
          </div>
        </div>
        <div className="relative z-10 flex min-h-0 flex-1 flex-col overflow-y-auto">
          <nav
            className="flex min-h-fit w-full flex-1 flex-col justify-center py-8"
            aria-label={t("common.mobileNavigation")}
          >
            {navigation.map(({ key, href }) => (
              <a
                key={key}
                className="relative flex min-h-[4.75rem] w-full shrink-0 items-center justify-center overflow-hidden py-5 text-center font-body text-3xl font-medium text-white transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#25489E] after:content-[''] after:transition-transform after:duration-300 hover:after:scale-x-100 focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#C5A059] focus-visible:after:scale-x-100 motion-reduce:after:transition-none"
                href={href}
                onClick={() => setIsMobileMenuOpen(false)}
                tabIndex={isMobileMenuOpen ? undefined : -1}
                aria-current={
                  href.split("#")[0] === currentPath ? "page" : undefined
                }
              >
                {t(key)}
              </a>
            ))}
          </nav>
          <div className="mt-auto w-full shrink-0 px-6 pb-10">
            <a
              className="inline-flex w-full items-center justify-center rounded-lg bg-[#C5A059] py-4 font-body font-semibold text-white transition-all duration-300 ease-out hover:scale-[1.02] hover:bg-[#152E7E] active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C5A059]"
              href="/donate"
              onClick={() => setIsMobileMenuOpen(false)}
              tabIndex={isMobileMenuOpen ? undefined : -1}
            >
              {t("common.donateNow")}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
