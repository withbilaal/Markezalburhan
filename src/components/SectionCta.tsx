import type { ReactNode } from "react";
import { useTranslation } from "react-i18next";

type SectionCtaProps = {
  title: string;
  children: ReactNode;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function SectionCta({
  title,
  children,
  secondaryLabel,
  secondaryHref,
}: SectionCtaProps) {
  const { t } = useTranslation();

  return (
    <section className="bg-navy-700 px-5 py-16 text-surface sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl leading-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-8 text-silver-100">{children}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            className="inline-flex min-h-12 items-center justify-center border border-transparent bg-white px-6 text-sm font-bold text-[#152E7E] transition-all duration-300 ease-out hover:scale-[1.02] hover:border-white hover:bg-[#152E7E] hover:text-white active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
            href="/donate"
          >
            {t("common.donateNow")}
          </a>
          {secondaryLabel && secondaryHref ? (
            <a
              className="inline-flex min-h-12 items-center justify-center border border-silver-400 px-6 text-sm font-bold text-surface transition-all duration-300 ease-out hover:scale-[1.02] hover:border-[#25D366] hover:bg-[#25D366] hover:text-white active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
              href={secondaryHref}
              target={secondaryHref.startsWith("http") ? "_blank" : undefined}
              rel={secondaryHref.startsWith("http") ? "noreferrer" : undefined}
            >
              {secondaryLabel}
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
