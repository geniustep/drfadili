"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { Star, Quote, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { clsx } from "clsx";

export default function Testimonials() {
  const t = useTranslations("testimonials");
  const locale = useLocale();
  const isRTL = locale === "ar";
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  const items = [0, 1, 2, 3].map((i) => ({
    name: t(`items.${i}.name` as Parameters<typeof t>[0]),
    role: t(`items.${i}.role` as Parameters<typeof t>[0]),
    text: t(`items.${i}.text` as Parameters<typeof t>[0]),
    rating: 5,
  }));

  const go = (dir: number) => {
    setDirection(dir);
    setActive((prev) => (prev + dir + items.length) % items.length);
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 60 : -60,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.45, ease: "easeOut" },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -60 : 60,
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.35, ease: "easeIn" },
    }),
  };

  return (
    <section
      id="testimonials"
      dir={isRTL ? "rtl" : "ltr"}
      className="relative py-28 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #FFFFFF 0%, #FDF2F7 30%, #F5D6E5 60%, #FDF2F7 80%, #FFFFFF 100%)",
      }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ x: [-20, 20, -20], y: [-10, 10, -10] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-10 w-64 h-64 rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(196,114,154,0.4) 0%, transparent 70%)",
          }}
        />
        <motion.div
          animate={{ x: [20, -20, 20], y: [10, -10, 10] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 right-10 w-80 h-80 rounded-full opacity-15"
          style={{
            background:
              "radial-gradient(circle, rgba(245,214,229,0.5) 0%, transparent 70%)",
          }}
        />

        {/* Large quote decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[300px] font-serif text-rose-100/40 select-none pointer-events-none leading-none">
          "
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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

        {/* Main testimonial carousel */}
        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={active}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="relative max-w-3xl mx-auto"
            >
              <div
                className="relative rounded-3xl p-8 md:p-12 shadow-rose-lg"
                style={{
                  background: "linear-gradient(160deg, #FFFFFF 0%, #FDF2F7 100%)",
                  border: "1px solid rgba(196,114,154,0.15)",
                }}
              >
                {/* Quote icon */}
                <div
                  className={clsx(
                    "absolute top-8 w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-400 to-rose-600 flex items-center justify-center shadow-rose-md",
                    isRTL ? "left-8" : "right-8"
                  )}
                >
                  <Quote size={24} className="text-white" />
                </div>

                {/* Stars */}
                <div
                  className={clsx(
                    "flex gap-1 mb-6",
                    isRTL ? "flex-row-reverse justify-end" : ""
                  )}
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="fill-rose-400 text-rose-400"
                    />
                  ))}
                </div>

                {/* Text */}
                <p
                  className={clsx(
                    "text-xl md:text-2xl font-serif italic text-charcoal leading-relaxed",
                    isRTL ? "text-right" : ""
                  )}
                >
                  &ldquo;{items[active].text}&rdquo;
                </p>

                {/* Author */}
                <div
                  className={clsx(
                    "flex items-center gap-4 mt-8 pt-6 border-t border-rose-100",
                    isRTL ? "flex-row-reverse text-right" : ""
                  )}
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-rose-200 to-rose-400 flex items-center justify-center shadow-rose-sm flex-shrink-0">
                    <span className="text-white font-serif font-bold text-xl">
                      {items[active].name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal">
                      {items[active].name}
                    </p>
                    <p className="text-rose-400 text-sm font-medium">
                      {items[active].role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={() => go(isRTL ? 1 : -1)}
              className="w-12 h-12 rounded-full border border-rose-200 bg-white hover:bg-rose-50 hover:border-rose-400 flex items-center justify-center text-rose-500 transition-all duration-200 shadow-rose-sm hover:shadow-rose-md"
            >
              {isRTL ? (
                <ChevronRight size={20} />
              ) : (
                <ChevronLeft size={20} />
              )}
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > active ? 1 : -1);
                    setActive(i);
                  }}
                  className={clsx(
                    "rounded-full transition-all duration-300",
                    i === active
                      ? "w-8 h-2.5 bg-rose-400"
                      : "w-2.5 h-2.5 bg-rose-200 hover:bg-rose-300"
                  )}
                />
              ))}
            </div>

            <button
              onClick={() => go(isRTL ? -1 : 1)}
              className="w-12 h-12 rounded-full border border-rose-200 bg-white hover:bg-rose-50 hover:border-rose-400 flex items-center justify-center text-rose-500 transition-all duration-200 shadow-rose-sm hover:shadow-rose-md"
            >
              {isRTL ? (
                <ChevronLeft size={20} />
              ) : (
                <ChevronRight size={20} />
              )}
            </button>
          </div>
        </div>

        {/* Mini testimonials grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {items.map((item, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => {
                setDirection(i > active ? 1 : -1);
                setActive(i);
              }}
              className={clsx(
                "relative rounded-2xl p-5 text-left border transition-all duration-300",
                isRTL && "text-right",
                i === active
                  ? "border-rose-300 bg-rose-50 shadow-rose-md"
                  : "border-rose-100 bg-white/60 hover:border-rose-200 hover:shadow-rose-sm"
              )}
            >
              {i === active && (
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-rose-300 to-rose-500 rounded-t-2xl" />
              )}
              <div className="flex gap-0.5 mb-2">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    size={10}
                    className="fill-rose-400 text-rose-400"
                  />
                ))}
              </div>
              <p className="text-xs text-slate-700 leading-relaxed line-clamp-3 mb-2">
                {item.text}
              </p>
              <p className="text-xs font-semibold text-rose-500">{item.name}</p>
              <p className="text-[10px] text-slate-400">{item.role}</p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
