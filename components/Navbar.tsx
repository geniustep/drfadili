"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { clsx } from "clsx";

const locales = [
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "ar", label: "العربية", flag: "🇲🇦" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "es", label: "Español", flag: "🇪🇸" },
];

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const isRTL = locale === "ar";

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split("/").filter(Boolean);
    const localeList = ["fr", "ar", "en", "es"];
    if (localeList.includes(segments[0])) segments.shift();
    const newPath = `/${newLocale}${segments.length ? "/" + segments.join("/") : ""}`;
    router.push(newPath);
    setLangOpen(false);
    setMobileOpen(false);
  };

  const navLinks = [
    { href: "#hero", label: t("home") },
    { href: "#services", label: t("services") },
    { href: "#about", label: t("about") },
    { href: "#testimonials", label: t("testimonials") },
    { href: "#appointment", label: t("contact") },
  ];

  const currentLocale = locales.find((l) => l.code === locale);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-rose-sm py-3"
          : "bg-transparent py-5"
      )}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href={`/${locale}`}
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-300 to-rose-500 flex items-center justify-center shadow-rose-sm group-hover:shadow-rose-md transition-all duration-300">
                <span className="text-white font-serif font-bold text-lg">F</span>
              </div>
              <div className="absolute -inset-1 rounded-full bg-rose-300/20 scale-0 group-hover:scale-100 transition-transform duration-300" />
            </div>
            <div className={clsx("leading-tight", isRTL && "text-right")}>
              <p className="font-serif font-semibold text-charcoal text-sm">
                Dr. Fadili Lamiaa
              </p>
              <p className="text-xs text-rose-500 font-medium">
                {isRTL ? "طب النساء & الجماليات" : "Gynécologie & Esthétique"}
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-rose-500 transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-rose-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-medium text-slate-600 hover:text-rose-500 hover:bg-rose-50 transition-all duration-200"
              >
                <Globe size={16} />
                <span>{currentLocale?.flag} {currentLocale?.code.toUpperCase()}</span>
                <ChevronDown
                  size={14}
                  className={clsx("transition-transform duration-200", langOpen && "rotate-180")}
                />
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className={clsx(
                      "absolute top-full mt-2 w-44 bg-white rounded-2xl shadow-rose-md border border-rose-100 overflow-hidden z-50",
                      isRTL ? "left-0" : "right-0"
                    )}
                  >
                    {locales.map((loc) => (
                      <button
                        key={loc.code}
                        onClick={() => switchLocale(loc.code)}
                        className={clsx(
                          "w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors duration-150",
                          locale === loc.code
                            ? "bg-rose-50 text-rose-600 font-semibold"
                            : "text-slate-600 hover:bg-rose-50 hover:text-rose-500"
                        )}
                      >
                        <span className="text-lg">{loc.flag}</span>
                        <span>{loc.label}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA */}
            <a href="#appointment" className="btn-primary text-sm py-2.5 px-6">
              {t("appointment")}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="p-2 text-slate-500 hover:text-rose-500 transition-colors"
            >
              <Globe size={18} />
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-slate-600 hover:text-rose-500 transition-colors"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-t border-rose-100"
          >
            <div className="max-w-7xl mx-auto px-4 py-6 space-y-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 rounded-xl text-slate-700 hover:bg-rose-50 hover:text-rose-500 font-medium transition-all duration-200"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="pt-4 border-t border-rose-100">
                <p className="text-xs text-slate-400 px-4 mb-2 font-medium uppercase tracking-wider">
                  {isRTL ? "اختر اللغة" : "Langue / Language"}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {locales.map((loc) => (
                    <button
                      key={loc.code}
                      onClick={() => switchLocale(loc.code)}
                      className={clsx(
                        "flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all",
                        locale === loc.code
                          ? "bg-rose-100 text-rose-600"
                          : "text-slate-600 hover:bg-rose-50"
                      )}
                    >
                      <span>{loc.flag}</span>
                      <span>{loc.label}</span>
                    </button>
                  ))}
                </div>
              </div>
              <div className="pt-4">
                <a
                  href="#appointment"
                  className="btn-primary w-full justify-center text-sm py-3"
                  onClick={() => setMobileOpen(false)}
                >
                  {t("appointment")}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Close lang dropdown when clicking outside */}
      {langOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setLangOpen(false)}
        />
      )}
    </motion.header>
  );
}
