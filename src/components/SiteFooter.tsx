import { useTranslation } from "react-i18next";

export function SiteFooter() {
  const { t } = useTranslation();

  return (
    <footer className="overflow-hidden border-t border-[#C5A059]/40 bg-[#0A1050] text-silver-100">
      <div className="mx-auto max-w-7xl px-5 pt-8 pb-12 sm:px-8 sm:pt-10 sm:pb-14 lg:px-12 lg:pt-10 lg:pb-16">
        <div className="grid gap-8 border-b border-white/10 pb-10 lg:grid-cols-2 lg:gap-12 lg:pb-12">
          <div>
            <a
              className="inline-flex items-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C5A059]"
              href="/"
              aria-label={t("common.homeAria")}
            >
              <img
                className="h-16 w-16 object-contain md:h-20 md:w-20"
                src="/assets/images/markaz-al-burhan-logo.svg"
                alt={t("common.orgName")}
              />
            </a>
            <div className="mt-7 h-px w-14 bg-[#C5A059]" aria-hidden="true" />
            <p className="mt-6 max-w-md text-sm leading-7 text-silver-100 sm:text-base">
              {t("footer.summary")}
            </p>
            <p className="mt-7 max-w-md border-l-2 border-[#C5A059] pl-4 text-sm font-semibold leading-6 text-white rtl:border-r-2 rtl:border-l-0 rtl:pr-4 rtl:pl-0">
              {t("footer.trust")}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-widest text-[#C5A059] uppercase">
              {t("footer.contact")}
            </p>
            <address className="mt-6 not-italic text-sm leading-7">
              <p
                className="max-w-xl font-urdu text-base leading-[2] text-silver-100 sm:text-lg"
                dir="rtl"
                lang="ur"
              >
                {t("common.addressUrdu")}
              </p>
              <div className="mt-5 grid gap-4 border-t border-white/10 pt-5 sm:grid-cols-2 sm:gap-6">
                <a
                  className="inline-flex w-fit font-bold text-white transition-colors duration-300 hover:text-[#C5A059] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C5A059]"
                  href="tel:+923402439670"
                >
                  <bdi dir="ltr">{t("common.phone")}</bdi>
                </a>
                <p className="max-w-lg text-silver-100">
                  {t("common.managerRole")}: {t("common.managerName")} —{" "}
                  <a
                    className="font-bold text-white transition-colors duration-300 hover:text-[#C5A059] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C5A059]"
                    href="tel:03453073557"
                  >
                    <bdi dir="ltr">{t("common.managerPhone")}</bdi>
                  </a>
                </p>
              </div>
            </address>
          </div>
        </div>

        <div className="flex flex-col gap-6 pt-6 text-xs sm:flex-row sm:items-end sm:justify-between sm:gap-10">
          <p className="text-silver-700">{t("footer.copyright")}</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 sm:justify-end">
            <span className="font-semibold tracking-widest text-[#C5A059] uppercase">
              {t("footer.follow")}
            </span>
            {/* TODO: client must supply destinations before these placeholder social links can be activated. */}
            <span className="font-medium text-silver-700" aria-disabled="true">
              {t("footer.facebook")}
            </span>
            <span className="font-medium text-silver-700" aria-disabled="true">
              {t("footer.instagram")}
            </span>
            <span className="font-medium text-silver-700" aria-disabled="true">
              {t("footer.youtube")}
            </span>
            <a
              className="font-semibold text-white transition-colors duration-300 hover:text-[#C5A059] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C5A059]"
              href="https://wa.me/923402439670"
              target="_blank"
              rel="noreferrer"
            >
              {t("common.whatsapp")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
