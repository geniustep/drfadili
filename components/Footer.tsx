"use client";

import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { Heart, MapPin, Phone, Mail, Clock } from "lucide-react";
import { clsx } from "clsx";

export default function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const navLinks = [
    { href: "#hero", label: nav("home") },
    { href: "#services", label: nav("services") },
    { href: "#about", label: nav("about") },
    { href: "#testimonials", label: nav("testimonials") },
    { href: "#appointment", label: nav("contact") },
  ];

  const contactItems = [
    {
      icon: MapPin,
      text:
        locale === "ar"
          ? "123 شارع محمد الخامس، الدار البيضاء"
          : "123 Boulevard Mohammed V, Casablanca",
    },
    { icon: Phone, text: "+212 6 12 34 56 78" },
    { icon: Mail, text: "contact@drfadili.ma" },
    {
      icon: Clock,
      text:
        locale === "ar"
          ? "الإثنين – السبت: 9:00 – 18:00"
          : "Lun – Sam : 9h00 – 18h00",
    },
  ];

  return (
    <footer
      dir={isRTL ? "rtl" : "ltr"}
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #1A1A2E 0%, #2D1A2A 50%, #1A1A2E 100%)",
      }}
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, rgba(196,114,154,1) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Top border glow */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(196,114,154,0.6), transparent)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className={clsx("lg:col-span-1", isRTL && "text-right")}>
            <div
              className={clsx(
                "flex items-center gap-3 mb-5",
                isRTL && "flex-row-reverse"
              )}
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-300 to-rose-500 flex items-center justify-center shadow-rose-md">
                <span className="text-white font-serif font-bold text-lg">F</span>
              </div>
              <div>
                <p className="font-serif font-bold text-white text-sm">
                  Dr. Fadili Lamiaa
                </p>
                <p className="text-rose-300 text-xs">{t("tagline")}</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              {t("description")}
            </p>

            {/* Social icons */}
            <div
              className={clsx(
                "flex gap-3 mt-6",
                isRTL && "flex-row-reverse"
              )}
            >
              {[
                { label: "Inst", title: "Instagram" },
                { label: "Fb", title: "Facebook" },
                { label: "Wa", title: "WhatsApp" },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  title={social.title}
                  className="w-9 h-9 rounded-xl bg-white/10 hover:bg-rose-500 border border-white/10 hover:border-rose-400 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200"
                >
                  <span className="text-xs font-bold">{social.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className={clsx(isRTL && "text-right")}>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-5">
              {t("quick_links")}
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={clsx(
                      "text-slate-400 hover:text-rose-300 text-sm transition-colors duration-200 flex items-center gap-2",
                      isRTL && "flex-row-reverse justify-end"
                    )}
                  >
                    <span className="w-1 h-1 rounded-full bg-rose-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className={clsx(isRTL && "text-right")}>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-5">
              {isRTL ? "خدماتنا" : "Nos Services"}
            </h4>
            <ul className="space-y-3">
              {(isRTL
                ? [
                    "متابعة الحمل",
                    "أمراض النساء",
                    "حقن البوتوكس والفيلر",
                    "علاج الليزر",
                    "تجديد شباب الوجه",
                    "تنظيم الأسرة",
                  ]
                : [
                    "Suivi de grossesse",
                    "Gynécologie générale",
                    "Injections Botox & Fillers",
                    "Traitement laser",
                    "Rajeunissement facial",
                    "Contraception",
                  ]
              ).map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-slate-400 hover:text-rose-300 text-sm transition-colors duration-200"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className={clsx(isRTL && "text-right")}>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-5">
              {t("contact_info")}
            </h4>
            <ul className="space-y-4">
              {contactItems.map((item, i) => (
                <li
                  key={i}
                  className={clsx(
                    "flex items-start gap-3",
                    isRTL && "flex-row-reverse text-right"
                  )}
                >
                  <div className="w-7 h-7 rounded-lg bg-rose-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <item.icon size={13} className="text-rose-400" />
                  </div>
                  <span className="text-slate-400 text-sm">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-slate-500 text-xs">
            © 2024 Dr. Fadili Lamiaa. {t("rights")}
          </p>

          <p
            className={clsx(
              "text-slate-500 text-xs flex items-center gap-1",
              isRTL && "flex-row-reverse"
            )}
          >
            {isRTL ? "صُنع بـ" : "Fait avec"}
            <Heart size={11} className="text-rose-400 fill-rose-400" />
            {isRTL ? "لكل امرأة" : "pour chaque femme"}
          </p>

          <div className="flex items-center gap-4">
            <a href="#" className="text-slate-500 hover:text-rose-300 text-xs transition-colors">
              {t("privacy")}
            </a>
            <span className="text-slate-700">·</span>
            <a href="#" className="text-slate-500 hover:text-rose-300 text-xs transition-colors">
              {t("terms")}
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
