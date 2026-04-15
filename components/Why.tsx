"use client";

import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import {
  ShieldCheck,
  Heart,
  Sparkles,
  Clock,
} from "lucide-react";
import { clsx } from "clsx";

const iconMap: Record<string, React.ElementType> = {
  shield: ShieldCheck,
  heart: Heart,
  sparkles: Sparkles,
  clock: Clock,
};

export default function Why() {
  const t = useTranslations("why");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const items = [0, 1, 2, 3].map((i) => ({
    icon: t(`items.${i}.icon` as Parameters<typeof t>[0]),
    title: t(`items.${i}.title` as Parameters<typeof t>[0]),
    desc: t(`items.${i}.description` as Parameters<typeof t>[0]),
  }));

  return (
    <section
      id="why"
      dir={isRTL ? "rtl" : "ltr"}
      className="relative py-28 bg-white overflow-hidden"
    >
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C4729A' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="section-badge mx-auto inline-flex">
            <Heart size={14} />
            {t("title")}
          </span>
          <h2 className="section-title mt-5">
            {t("subtitle")}
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => {
            const Icon = iconMap[item.icon] ?? Sparkles;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                whileHover={{ y: -8 }}
                className={clsx(
                  "group relative rounded-3xl p-7 border border-rose-100 shadow-rose-sm hover:shadow-rose-lg transition-all duration-500 overflow-hidden",
                  isRTL && "text-right"
                )}
                style={{
                  background:
                    "linear-gradient(160deg, #FFFFFF 0%, #FDF2F7 100%)",
                }}
              >
                {/* Corner glow */}
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-rose-100/50 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-6 translate-x-6" />

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.4 }}
                  className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-100 to-rose-200 flex items-center justify-center mb-5 shadow-rose-sm group-hover:shadow-rose-md transition-shadow duration-300"
                >
                  <Icon size={26} className="text-rose-500" />
                </motion.div>

                {/* Content */}
                <h3 className="font-serif text-lg font-bold text-charcoal mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {item.desc}
                </p>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-rose-300 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </motion.div>
            );
          })}
        </div>

        {/* Testimonial strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 relative rounded-3xl overflow-hidden"
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(196,114,154,0.08) 0%, rgba(245,214,229,0.15) 50%, rgba(196,114,154,0.05) 100%)",
            }}
          />
          <div className="absolute inset-0 border border-rose-100 rounded-3xl" />

          <div className={clsx(
            "relative flex flex-col md:flex-row items-center justify-between gap-8 px-10 py-10",
            isRTL && "md:flex-row-reverse"
          )}>
            {/* Left stat */}
            <div className={clsx("text-center md:text-left", isRTL && "md:text-right")}>
              <p className="font-serif text-6xl font-bold text-gradient-rose">
                98%
              </p>
              <p className="text-slate-600 font-medium mt-1">
                {isRTL
                  ? "من مريضاتنا يوصين بنا"
                  : "de nos patientes nous recommandent"}
              </p>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-16 bg-rose-200" />

            {/* Center quote */}
            <div className={clsx("flex-1 max-w-md", isRTL ? "text-right" : "text-center md:text-left")}>
              <p className="text-xl font-serif italic text-charcoal leading-relaxed">
                {isRTL
                  ? "\"تجربة استثنائية من الاحترافية والرعاية الحقيقية\""
                  : '"Une expérience exceptionnelle de professionnalisme et de soin véritable"'}
              </p>
              <p className="text-rose-400 text-sm font-medium mt-2">
                — {isRTL ? "سلمى ب، مريضة" : "Salma B., Patiente"}
              </p>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-16 bg-rose-200" />

            {/* Right CTA */}
            <div className="text-center">
              <a href="#appointment" className="btn-primary">
                {isRTL ? "احجزي الآن" : "Réserver maintenant"}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
