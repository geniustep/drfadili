"use client";

import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { ArrowRight, Star, Award, Users, Sparkles } from "lucide-react";
import { clsx } from "clsx";

const floatVariants = {
  initial: { y: 0 },
  animate: {
    y: [-8, 8, -8],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fadeIn = {
  hidden: { opacity: 0, scale: 0.92 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const stats = [
    { icon: Award, value: t("stat1_value"), label: t("stat1_label") },
    { icon: Users, value: t("stat2_value"), label: t("stat2_label") },
    { icon: Star, value: t("stat3_value"), label: t("stat3_label") },
    { icon: Sparkles, value: t("stat4_value"), label: t("stat4_label") },
  ];

  return (
    <section
      id="hero"
      dir={isRTL ? "rtl" : "ltr"}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero"
    >
      {/* Background decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(196,114,154,0.25) 0%, rgba(245,214,229,0.1) 60%, transparent 100%)",
          }}
        />
        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute -bottom-60 -left-40 w-[700px] h-[700px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(245,214,229,0.3) 0%, transparent 70%)",
          }}
        />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, #C4729A 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className={clsx(isRTL ? "lg:order-2 text-right" : "lg:order-1")}
          >
            {/* Badge */}
            <motion.div variants={fadeUp}>
              <span className="section-badge">
                <Sparkles size={14} />
                {t("tagline")}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div variants={fadeUp} className="mt-6">
              <h1 className="font-serif font-bold leading-[1.12] text-charcoal">
                <span className="block text-5xl md:text-6xl lg:text-7xl">
                  {t("headline")}
                </span>
                <span className="block text-5xl md:text-6xl lg:text-7xl text-gradient-rose">
                  {t("headline2")}
                </span>
                <span className="block text-5xl md:text-6xl lg:text-7xl">
                  {t("headline3")}
                </span>
              </h1>
            </motion.div>

            {/* Doctor name badge */}
            <motion.div variants={fadeUp} className="mt-5">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white shadow-rose-sm border border-rose-100">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-rose-300 to-rose-500 flex items-center justify-center shadow-sm">
                  <span className="text-white font-serif font-bold text-sm">F</span>
                </div>
                <span className="font-semibold text-charcoal text-sm">{t("name")}</span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="mt-6 text-lg text-slate-600 leading-relaxed max-w-lg"
            >
              {t("description")}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className={clsx(
                "mt-8 flex flex-wrap gap-4",
                isRTL ? "justify-end" : ""
              )}
            >
              <a href="#appointment" className="btn-primary group">
                {t("cta_primary")}
                <ArrowRight
                  size={18}
                  className={clsx(
                    "transition-transform duration-200 group-hover:translate-x-1",
                    isRTL && "rotate-180"
                  )}
                />
              </a>
              <a href="#services" className="btn-secondary">
                {t("cta_secondary")}
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              variants={fadeUp}
              className={clsx(
                "mt-10 flex flex-wrap gap-3",
                isRTL ? "justify-end" : ""
              )}
            >
              {[t("badge1"), t("badge2"), t("badge3")].map((badge) => (
                <span
                  key={badge}
                  className="flex items-center gap-1.5 text-xs font-medium text-slate-500 bg-white/80 px-3 py-1.5 rounded-full border border-rose-100"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400 inline-block" />
                  {badge}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Visual */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="show"
            className={clsx(
              "relative flex justify-center",
              isRTL ? "lg:order-1" : "lg:order-2"
            )}
          >
            {/* Main card */}
            <motion.div
              variants={floatVariants}
              initial="initial"
              animate="animate"
              className="relative z-10"
            >
              {/* Outer glow ring */}
              <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-rose-200/40 to-rose-400/20 blur-2xl animate-pulse-glow" />

              {/* Main portrait card */}
              <div className="relative w-80 h-[480px] md:w-96 md:h-[560px] rounded-[2.5rem] overflow-hidden shadow-rose-xl border border-rose-100">
                {/* Gradient background simulating a professional photo */}
                <div className="absolute inset-0 bg-gradient-to-b from-rose-50 via-white to-rose-100" />
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    background:
                      "radial-gradient(ellipse at 50% 30%, rgba(196,114,154,0.4) 0%, transparent 70%)",
                  }}
                />

                {/* Decorative silhouette / avatar area */}
                <div className="absolute bottom-0 left-0 right-0 flex justify-center">
                  <div className="w-72 h-96 relative">
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(180deg, transparent 0%, rgba(196,114,154,0.08) 100%)",
                      }}
                    />
                    {/* Large decorative letter */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-[200px] font-serif text-rose-200/50 select-none leading-none">
                        F
                      </div>
                    </div>
                  </div>
                </div>

                {/* Name overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white/95 via-white/80 to-transparent">
                  <p className="font-serif text-xl font-bold text-charcoal">
                    Dr. Fadili Lamiaa
                  </p>
                  <p className="text-rose-500 text-sm font-medium mt-0.5">
                    {isRTL
                      ? "طب النساء والتوليد · الطب التجميلي"
                      : "Gynécologue · Médecine Esthétique"}
                  </p>
                  <div className="flex items-center gap-1 mt-2">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        size={12}
                        className="fill-rose-400 text-rose-400"
                      />
                    ))}
                    <span className="text-xs text-slate-500 ml-1">5.0</span>
                  </div>
                </div>
              </div>

              {/* Floating info cards */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className={clsx(
                  "absolute -top-6 bg-white rounded-2xl px-4 py-3 shadow-rose-md border border-rose-100",
                  isRTL ? "-left-8" : "-right-8"
                )}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center">
                    <Award size={16} className="text-rose-500" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-charcoal">15+</p>
                    <p className="text-[10px] text-slate-500 leading-tight">
                      {isRTL ? "سنة خبرة" : "ans d'exp."}
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [4, -4, 4] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className={clsx(
                  "absolute -bottom-4 bg-white rounded-2xl px-4 py-3 shadow-rose-md border border-rose-100",
                  isRTL ? "-right-6" : "-left-6"
                )}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center">
                    <Users size={16} className="text-rose-500" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-charcoal">5000+</p>
                    <p className="text-[10px] text-slate-500 leading-tight">
                      {isRTL ? "مريضة" : "patientes"}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 + i * 0.1 }}
              className={clsx(
                "card-glass rounded-2xl px-6 py-5 text-center shadow-rose-sm hover:shadow-rose-md transition-all duration-300 hover:-translate-y-1",
                isRTL && "text-right"
              )}
            >
              <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center mx-auto mb-3">
                <stat.icon size={20} className="text-rose-500" />
              </div>
              <p className="font-serif text-3xl font-bold text-gradient-rose">
                {stat.value}
              </p>
              <p className="text-xs text-slate-500 mt-1 font-medium leading-tight">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-rose-300 to-transparent animate-pulse" />
        <div className="w-4 h-4 rounded-full border-2 border-rose-300 flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}
