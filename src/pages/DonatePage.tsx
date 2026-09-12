import { useTranslation } from "react-i18next";
import { PageHero } from "../components/PageHero";

const bankRowIndexes = [0, 1, 2, 3, 4];

export function DonatePage() {
  const { t } = useTranslation();

  return (
    <>
      <PageHero
        eyebrow={t("donate.hero.eyebrow")}
        title={t("donate.hero.title")}
        subtitle={t("donate.hero.subtitle")}
        urduTitle={t("donate.hero.urduTitle")}
        image="/assets/images/Construction1.jpeg"
        imageAlt={t("donate.hero.imageAlt")}
        centered
      />

      <section
        id="bank-details"
        className="scroll-mt-8 bg-surface px-5 py-16 sm:px-8 lg:px-12 lg:py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <p className="text-xs font-semibold tracking-widest text-[#C5A059] uppercase">
              {t("donate.bank.eyebrow")}
            </p>
            <h2 className="mt-4 font-display text-5xl leading-[0.98] text-navy-900 sm:text-6xl">
              {t("donate.bank.title")}
            </h2>
            <p className="mt-6 max-w-sm text-base leading-8 text-ink-muted">
              {t("donate.bank.receipt")}
            </p>
            <div className="mt-8 flex flex-col gap-3">
              <a
                className="inline-flex min-h-12 items-center justify-center bg-navy-700 px-6 text-sm font-bold text-surface transition-all duration-300 ease-out hover:scale-[1.02] hover:bg-blue-500 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
                href="https://wa.me/923402439670"
                target="_blank"
                rel="noreferrer"
              >
                {t("donate.bank.sendReceipt")}
              </a>
              <a
                className="inline-flex min-h-12 items-center justify-center border border-silver-400 px-6 text-sm font-bold text-navy-700 transition-all duration-300 ease-out hover:scale-[1.02] hover:border-blue-500 hover:text-blue-500 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
                href="tel:+923402439670"
                dir="ltr"
              >
                {t("donate.bank.call")}
              </a>
            </div>
          </div>
          <div className="border-t-4 border-[#C5A059] bg-bg p-6 sm:p-9">
            <div className="flex items-center justify-between border-b border-silver-400 pb-5">
              <p className="text-xs font-semibold tracking-widest text-[#C5A059] uppercase">
                {t("donate.bank.eyebrow")}
              </p>
              <p className="font-display text-xl text-navy-900">
                {t("donate.bank.ledgerName")}
              </p>
            </div>
            <dl className="divide-y divide-silver-100" dir="ltr" lang="en">
              {bankRowIndexes.map((index) => (
                <div
                  key={index}
                  className="grid gap-2 py-5 sm:grid-cols-[0.35fr_0.65fr]"
                >
                  <dt className="text-xs font-bold tracking-[0.14em] text-ink-muted uppercase">
                    {t(`donate.bank.rows.${index}.0`)}
                  </dt>
                  <dd className="break-all font-display text-xl leading-tight text-navy-900 sm:text-2xl">
                    {t(`donate.bank.rows.${index}.1`)}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="border-t border-silver-400 pt-5 text-sm leading-7 text-ink-muted">
              {t("donate.bank.receipt")}
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy-900 px-5 py-16 text-surface sm:px-8 lg:px-12 lg:py-24">
        <div
          className="geometric-motif absolute right-8 top-6 h-40 w-40 opacity-30"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-5xl text-center">
          <blockquote
            className="font-display text-3xl leading-tight sm:text-5xl"
            dir="ltr"
            lang="en"
          >
            {t("donate.hadith.quote")}
          </blockquote>
          <cite
            className="mt-7 block text-sm font-bold not-italic text-silver-100"
            dir="ltr"
            lang="en"
          >
            {t("donate.hadith.attribution")}
          </cite>
        </div>
      </section>

      <section className="bg-bg px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-display text-3xl leading-tight text-navy-900 sm:text-4xl">
            {t("donate.campaign.statement")}
          </p>
          <p className="mt-6 text-base leading-8 text-ink-muted sm:text-lg">
            {t("donate.campaign.description")}
          </p>
        </div>
      </section>

      <section className="bg-surface px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold tracking-widest text-[#C5A059] uppercase">
            {t("donate.how.eyebrow")}
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-navy-900 sm:text-5xl">
            {t("donate.how.title")}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-ink-muted">
            {t("donate.how.description")}
          </p>
          <div className="mt-12 grid gap-px border border-silver-100 bg-silver-100 lg:grid-cols-3">
            <article className="bg-surface p-7 sm:p-9">
              <p className="text-xs font-semibold tracking-widest text-[#C5A059] uppercase">
                {t("donate.how.campaignEyebrow")}
              </p>
              <p className="mt-5 text-base leading-8 text-ink-muted">
                {t("donate.how.campaignDescription")}
              </p>
            </article>
            <article className="bg-bg p-7 sm:p-9">
              <p className="text-xs font-semibold tracking-widest text-[#C5A059] uppercase">
                {t("donate.how.unitEyebrow")}
              </p>
              <p className="mt-5 font-display text-3xl leading-tight text-[#C5A059]">
                {t("donate.how.unit")}
              </p>
              <p className="mt-3 text-sm leading-7 text-ink-muted">
                {t("donate.how.unitDetail")}
              </p>
            </article>
            <article className="bg-surface p-7 sm:p-9">
              <p className="text-xs font-semibold tracking-widest text-[#C5A059] uppercase">
                {t("donate.how.bankEyebrow")}
              </p>
              <p className="mt-5 text-base leading-8 text-ink-muted">
                {t("donate.how.bankDescription")}
              </p>
              <a
                className="mt-6 inline-flex border-b border-[#C5A059] pb-1 text-sm font-bold text-blue-500 hover:border-navy-700 hover:text-navy-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
                href="#bank-details"
              >
                {t("donate.how.viewBank")}
              </a>
            </article>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex min-h-12 items-center justify-center bg-navy-700 px-6 text-sm font-bold text-surface transition-all duration-300 ease-out hover:scale-[1.02] hover:bg-blue-500 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
              href="https://wa.me/923402439670"
              target="_blank"
              rel="noreferrer"
              dir="ltr"
            >
              {t("donate.how.whatsappPhone")}
            </a>
            <a
              className="inline-flex min-h-12 items-center justify-center border border-silver-400 px-6 text-sm font-bold text-navy-700 transition-all duration-300 ease-out hover:scale-[1.02] hover:border-blue-500 hover:text-blue-500 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
              href="tel:+923402439670"
              dir="ltr"
            >
              {t("donate.how.callPhone")}
            </a>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="scroll-mt-8 bg-bg px-5 py-16 sm:px-8 lg:px-12 lg:py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-xs font-semibold tracking-widest text-[#C5A059] uppercase">
              {t("donate.contact.eyebrow")}
            </p>
            <h2 className="mt-4 font-display text-5xl leading-[0.98] text-navy-900 sm:text-6xl">
              {t("donate.contact.title")}
            </h2>
            <p className="mt-6 max-w-md text-base leading-8 text-ink-muted">
              {t("donate.contact.description")}
            </p>
          </div>
          <address className="not-italic">
            <div className="grid divide-y divide-silver-100 border-y border-silver-100">
              <div className="grid gap-3 py-6 sm:grid-cols-[0.35fr_0.65fr]">
                <p className="text-xs font-bold tracking-[0.16em] text-ink-muted uppercase">
                  {t("donate.contact.address")}
                </p>
                <p
                  className="font-urdu text-lg leading-[2] text-navy-900"
                  dir="rtl"
                  lang="ur"
                >
                  {t("common.addressUrdu")}
                </p>
              </div>
              <div className="grid gap-3 py-6 sm:grid-cols-[0.35fr_0.65fr]">
                <p className="text-xs font-bold tracking-[0.16em] text-ink-muted uppercase">
                  {t("donate.contact.phone")}
                </p>
                <a
                  className="font-display text-2xl text-navy-900 hover:text-blue-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
                  href="tel:+923402439670"
                >
                  <bdi dir="ltr">{t("common.phone")}</bdi>
                </a>
              </div>
              <div className="grid gap-3 py-6 sm:grid-cols-[0.35fr_0.65fr]">
                <p className="text-xs font-bold tracking-[0.16em] text-ink-muted uppercase">
                  {t("donate.contact.managerRole")}
                </p>
                <p className="font-display text-2xl leading-tight text-navy-900">
                  {t("common.managerName")} —{" "}
                  <a
                    className="hover:text-blue-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
                    href="tel:03453073557"
                  >
                    <bdi dir="ltr">{t("common.managerPhone")}</bdi>
                  </a>
                </p>
              </div>
            </div>
          </address>
        </div>
      </section>

      <section className="bg-surface px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 border-l-4 border-[#C5A059] pl-7 sm:pl-10 lg:grid-cols-[0.45fr_0.55fr]">
          <div>
            <p className="text-xs font-semibold tracking-widest text-[#C5A059] uppercase">
              {t("donate.governance.eyebrow")}
            </p>
            <h2 className="mt-4 font-display text-3xl leading-tight text-navy-900">
              {t("donate.governance.title")}
            </h2>
          </div>
          <div>
            <p className="text-base leading-8 text-ink-muted">
              {t("donate.governance.description")}
            </p>
            <p className="mt-6 text-xs font-semibold tracking-widest text-[#C5A059] uppercase">
              {t("donate.governance.managerRole")}
            </p>
            <p className="mt-2 font-display text-2xl text-navy-900">
              {t("common.managerName")}
            </p>
            <div className="mt-3 flex flex-wrap gap-4">
              <a
                className="text-sm font-bold text-blue-500 hover:text-navy-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
                href="tel:03453073557"
              >
                <bdi dir="ltr">{t("common.managerPhone")}</bdi>
              </a>
              <a
                className="text-sm font-bold text-blue-500 hover:text-navy-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
                href="https://wa.me/923453073557"
                target="_blank"
                rel="noreferrer"
              >
                {t("common.whatsapp")}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
