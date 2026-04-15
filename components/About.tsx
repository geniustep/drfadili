"use client";

import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { CheckCircle2, GraduationCap, Sparkles } from "lucide-react";
import { clsx } from "clsx";

export default function About() {
  const t = useTranslations("about");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const stats = [
    { value: t("stat1_value"), label: t("stat1_label") },
    { value: t("stat2_value"), label: t("stat2_label") },
    { value: t("stat3_value"), label: t("stat3_label") },
    { value: t("stat4_value"), label: t("stat4_label") },
  ];

  const credentials = [
    t("credentials.0"),
    t("credentials.1"),
    t("credentials.2"),
    t("credentials.3"),
  ];

  return (
    <section
      id="about"
      dir={isRTL ? "rtl" : "ltr"}
      className="relative py-28 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #FAFAFA 0%, #FDF2F7 50%, #FAFAFA 100%)",
      }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full border border-rose-100 opacity-40"
        />
        <motion.div
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-48 -right-48 w-[600px] h-[600px] rounded-full border border-rose-100 opacity-30"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left — Visual */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 60 : -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className={clsx(
              "relative",
              isRTL ? "lg:order-2" : "lg:order-1"
            )}
          >
            {/* Main portrait block */}
            <div className="relative mx-auto max-w-sm">
              {/* Decorative background shapes */}
              <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-br from-rose-100 to-rose-200/50 -z-10 rotate-3 opacity-70" />
              <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-tl from-rose-50 to-rose-100/50 -z-10 -rotate-2 opacity-50" />

              {/* Portrait card */}
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-rose-xl aspect-[4/5]">
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(160deg, #FDF2F7 0%, #F5D6E5 40%, #EBB4CB 100%)",
                  }}
                />
                {/* Decorative elements inside the card */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-8 p-8">
                  {/* Abstract doctor icon */}
                  <div className="relative">
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="w-32 h-32 rounded-full bg-white/60 backdrop-blur-sm flex items-center justify-center shadow-rose-md"
                    >
                      <span className="font-serif text-7xl text-rose-400 font-bold">
                        F
                      </span>
                    </motion.div>
                    <motion.div
                      animate={{ scale: [1, 1.15, 1] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                      className="absolute -inset-4 rounded-full border-2 border-rose-200/50"
                    />
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                      className="absolute -inset-8 rounded-full border border-rose-100/40"
                    />
                  </div>

                  {/* Doctor info */}
                  <div className="text-center bg-white/70 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-rose-sm w-full">
                    <p className="font-serif text-xl font-bold text-charcoal">
                      Dr. Fadili Lamiaa
                    </p>
                    <p className="text-rose-500 text-sm font-medium mt-1">
                      {isRTL
                        ? "أخصائية طب النساء والتجميل"
                        : "Gynécologue & Médecin Esthéticienne"}
                    </p>
                    <div className="mt-3 flex items-center justify-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      <p className="text-xs text-slate-500">
                        {isRTL ? "متاحة للمواعيد" : "Disponible pour RDV"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats grid overlay */}
            <div className="grid grid-cols-2 gap-3 mt-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="card-glass rounded-2xl p-4 text-center shadow-rose-sm hover:shadow-rose-md transition-all duration-300 hover:-translate-y-1"
                >
                  <p className="text-gradient-rose font-serif text-3xl font-bold">
                    {stat.value}
                  </p>
                  <p className="text-slate-500 text-xs mt-1 font-medium">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className={clsx(
              isRTL ? "lg:order-1 text-right" : "lg:order-2"
            )}
          >
            <span className="section-badge inline-flex">
              <Sparkles size={14} />
              {t("title")}
            </span>

            <h2 className="section-title mt-5 mb-6">
              {t("subtitle")}
            </h2>

            <div className="space-y-5 text-slate-600 leading-relaxed">
              <p>{t("paragraph1")}</p>
              <p>{t("paragraph2")}</p>
              <p>{t("paragraph3")}</p>
            </div>

            {/* Credentials */}
            <div className="mt-8 space-y-3">
              <div
                className={clsx(
                  "flex items-center gap-2 mb-4",
                  isRTL && "flex-row-reverse"
                )}
              >
                <GraduationCap size={18} className="text-rose-500" />
                <p className="font-semibold text-charcoal text-sm uppercase tracking-wider">
                  {isRTL ? "المؤهلات والشهادات" : "Diplômes & Certifications"}
                </p>
              </div>
              {credentials.map((cred, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  className={clsx(
                    "flex items-start gap-3",
                    isRTL && "flex-row-reverse text-right"
                  )}
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center mt-0.5">
                    <CheckCircle2 size={12} className="text-rose-500" />
                  </div>
                  <p className="text-sm text-slate-700 font-medium">{cred}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className={clsx("mt-10 flex gap-4", isRTL && "flex-row-reverse")}
            >
              <a href="#appointment" className="btn-primary">
                {isRTL ? "احجزي موعداً" : "Prendre RDV"}
              </a>
              <a href="#services" className="btn-secondary">
                {isRTL ? "خدماتنا" : "Nos services"}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
