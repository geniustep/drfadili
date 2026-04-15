"use client";

import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import {
  Heart,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Stethoscope,
  Zap,
} from "lucide-react";
import { clsx } from "clsx";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

export default function Services() {
  const t = useTranslations("services");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const gynoServices = [
    t("gyno_services.0"),
    t("gyno_services.1"),
    t("gyno_services.2"),
    t("gyno_services.3"),
    t("gyno_services.4"),
    t("gyno_services.5"),
  ];

  const aestheticServices = [
    t("aesthetic_services.0"),
    t("aesthetic_services.1"),
    t("aesthetic_services.2"),
    t("aesthetic_services.3"),
    t("aesthetic_services.4"),
    t("aesthetic_services.5"),
  ];

  const cards = [
    {
      id: "gyno",
      icon: Stethoscope,
      badge: Heart,
      badgeColor: "from-rose-400 to-rose-600",
      bgColor: "from-white to-rose-50/50",
      accentColor: "rose-500",
      title: t("gyno_title"),
      desc: t("gyno_desc"),
      services: gynoServices,
    },
    {
      id: "aesthetic",
      icon: Sparkles,
      badge: Zap,
      badgeColor: "from-blush-400 to-blush-600",
      bgColor: "from-blush-50/30 to-white",
      accentColor: "blush-500",
      title: t("aesthetic_title"),
      desc: t("aesthetic_desc"),
      services: aestheticServices,
    },
  ];

  return (
    <section
      id="services"
      dir={isRTL ? "rtl" : "ltr"}
      className="relative py-28 bg-white overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-0 right-0 h-px opacity-60"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(196,114,154,0.4), transparent)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-px opacity-40"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(196,114,154,0.3), transparent)",
          }}
        />
        <div
          className="absolute top-20 right-20 w-72 h-72 rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(245,214,229,0.6) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-20 left-20 w-96 h-96 rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(196,114,154,0.2) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="section-badge mx-auto inline-flex">
            <Sparkles size={14} />
            {t("title")}
          </span>
          <h2 className="section-title mt-5">
            {t("subtitle")}
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {cards.map((card, cardIdx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: cardIdx * 0.15 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-3xl overflow-hidden border border-rose-100 shadow-rose-sm hover:shadow-rose-lg transition-all duration-500"
            >
              {/* Card background gradient */}
              <div
                className={clsx(
                  "absolute inset-0 bg-gradient-to-br opacity-60",
                  card.bgColor
                )}
              />

              {/* Top accent line */}
              <div
                className={clsx(
                  "absolute top-0 left-0 right-0 h-1 bg-gradient-to-r",
                  card.badgeColor
                )}
              />

              <div className="relative p-8">
                {/* Header */}
                <div
                  className={clsx(
                    "flex items-start gap-5 mb-7",
                    isRTL && "flex-row-reverse text-right"
                  )}
                >
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div
                      className={clsx(
                        "w-14 h-14 rounded-2xl bg-gradient-to-br flex items-center justify-center shadow-rose-sm group-hover:shadow-rose-md transition-shadow duration-300",
                        card.badgeColor
                      )}
                    >
                      <card.icon size={26} className="text-white" />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-serif text-2xl font-bold text-charcoal">
                      {card.title}
                    </h3>
                    <p className="text-slate-500 text-sm mt-1.5 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-rose-200 to-transparent mb-7" />

                {/* Services list */}
                <motion.ul
                  variants={stagger}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="space-y-3"
                >
                  {card.services.map((service, i) => (
                    <motion.li
                      key={i}
                      variants={fadeUp}
                      className={clsx(
                        "flex items-center gap-3 group/item",
                        isRTL && "flex-row-reverse text-right"
                      )}
                    >
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center">
                        <CheckCircle2 size={12} className="text-rose-500" />
                      </div>
                      <span className="text-sm text-slate-700 font-medium group-hover/item:text-rose-600 transition-colors duration-200">
                        {service}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>

                {/* CTA */}
                <div className={clsx("mt-8", isRTL && "text-right")}>
                  <a
                    href="#appointment"
                    className={clsx(
                      "inline-flex items-center gap-2 text-sm font-semibold text-rose-500 hover:text-rose-700 transition-colors duration-200 group/cta",
                      isRTL && "flex-row-reverse"
                    )}
                  >
                    {t("book_now")}
                    <ArrowRight
                      size={16}
                      className={clsx(
                        "transition-transform duration-200 group-hover/cta:translate-x-1",
                        isRTL && "rotate-180 group-hover/cta:-translate-x-1 group-hover/cta:translate-x-0"
                      )}
                    />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 relative rounded-3xl overflow-hidden"
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, #FDF2F7 0%, #F5D6E5 40%, #FDF2F7 100%)",
            }}
          />
          <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6 px-8 py-8">
            <div className={clsx(isRTL && "text-right")}>
              <p className="font-serif text-2xl font-bold text-charcoal">
                {isRTL
                  ? "هل لديكِ سؤال حول علاج ما؟"
                  : "Une question sur un traitement ?"}
              </p>
              <p className="text-slate-500 mt-1 text-sm">
                {isRTL
                  ? "تواصلي معنا، سنرافقكِ بكل سرور."
                  : "Contactez-nous, nous vous guiderons avec plaisir."}
              </p>
            </div>
            <a
              href="#appointment"
              className="btn-primary flex-shrink-0 whitespace-nowrap"
            >
              {isRTL ? "احجزي استشارة" : "Consulter maintenant"}
              <ArrowRight
                size={18}
                className={clsx(isRTL && "rotate-180")}
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
