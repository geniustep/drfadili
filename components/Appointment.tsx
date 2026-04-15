"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
  Send,
  CalendarDays,
} from "lucide-react";
import { clsx } from "clsx";

export default function Appointment() {
  const t = useTranslations("appointment");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: t("info_address"),
    },
    {
      icon: Phone,
      label: t("info_phone"),
    },
    {
      icon: Mail,
      label: t("info_email"),
    },
    {
      icon: Clock,
      label: t("info_hours"),
    },
  ];

  const inputClass = clsx(
    "w-full px-4 py-3.5 rounded-xl border text-sm text-charcoal placeholder-slate-300 transition-all duration-200 outline-none",
    "border-rose-100 bg-white/80 focus:border-rose-400 focus:ring-2 focus:ring-rose-100",
    isRTL && "text-right"
  );

  return (
    <section
      id="appointment"
      dir={isRTL ? "rtl" : "ltr"}
      className="relative py-28 overflow-hidden bg-white"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 80% 50%, rgba(245,214,229,0.25) 0%, transparent 60%)",
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
            <CalendarDays size={14} />
            {t("title")}
          </span>
          <h2 className="section-title mt-5">{t("subtitle")}</h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={clsx(
              "lg:col-span-2 space-y-6",
              isRTL ? "lg:order-2 text-right" : "lg:order-1"
            )}
          >
            {/* Decorative header */}
            <div
              className="rounded-3xl overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, #C4729A 0%, #8E4A64 100%)",
              }}
            >
              <div className="p-8 text-white">
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
                  <CalendarDays size={28} className="text-white" />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-2">
                  {isRTL ? "تواصلي معنا" : "Nous contacter"}
                </h3>
                <p className="text-rose-100 text-sm leading-relaxed">
                  {isRTL
                    ? "نحن هنا للإجابة على أسئلتك ومرافقتك بعناية."
                    : "Nous sommes là pour répondre à vos questions et vous accompagner."}
                </p>
              </div>
            </div>

            {/* Contact items */}
            <div className="space-y-4">
              {contactInfo.map((info, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  className={clsx(
                    "flex items-center gap-4 p-4 rounded-2xl bg-rose-50/50 border border-rose-100 hover:bg-rose-50 transition-colors duration-200",
                    isRTL && "flex-row-reverse"
                  )}
                >
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-rose-sm flex-shrink-0">
                    <info.icon size={18} className="text-rose-500" />
                  </div>
                  <p className="text-sm text-slate-700 font-medium">
                    {info.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Social */}
            <div
              className={clsx(
                "flex items-center gap-3",
                isRTL && "flex-row-reverse justify-end"
              )}
            >
              {["instagram", "facebook", "whatsapp"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-400 hover:bg-rose-500 hover:text-white hover:border-rose-500 transition-all duration-200"
                >
                  <span className="text-xs font-bold capitalize">
                    {social.charAt(0).toUpperCase()}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={clsx(
              "lg:col-span-3",
              isRTL ? "lg:order-1" : "lg:order-2"
            )}
          >
            <div
              className="rounded-3xl p-8 md:p-10 shadow-rose-md"
              style={{
                background: "linear-gradient(160deg, #FFFFFF 0%, #FDF2F7 100%)",
                border: "1px solid rgba(196,114,154,0.15)",
              }}
            >
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label
                      className={clsx(
                        "block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2",
                        isRTL && "text-right"
                      )}
                    >
                      {t("form_name")}
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder={t("form_name")}
                      className={inputClass}
                    />
                  </div>

                  {/* Email + Phone */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        className={clsx(
                          "block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2",
                          isRTL && "text-right"
                        )}
                      >
                        {t("form_email")}
                      </label>
                      <input
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder={t("form_email")}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label
                        className={clsx(
                          "block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2",
                          isRTL && "text-right"
                        )}
                      >
                        {t("form_phone")}
                      </label>
                      <input
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder={t("form_phone")}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Service */}
                  <div>
                    <label
                      className={clsx(
                        "block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2",
                        isRTL && "text-right"
                      )}
                    >
                      {t("form_service")}
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      required
                      className={clsx(inputClass, "cursor-pointer")}
                    >
                      <option value="">{t("form_service")}</option>
                      <option value="gyneco">{t("option_gyno")}</option>
                      <option value="aesthetic">{t("option_aesthetic")}</option>
                      <option value="other">{t("option_other")}</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      className={clsx(
                        "block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2",
                        isRTL && "text-right"
                      )}
                    >
                      {t("form_message")}
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder={t("form_message")}
                      className={clsx(inputClass, "resize-none")}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className={clsx(
                      "btn-primary w-full justify-center py-4 text-base",
                      loading && "opacity-80 cursor-not-allowed"
                    )}
                  >
                    {loading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        {isRTL ? "جارٍ الإرسال..." : "Envoi en cours..."}
                      </div>
                    ) : (
                      <>
                        {t("form_submit")}
                        <Send
                          size={18}
                          className={clsx(isRTL && "rotate-180")}
                        />
                      </>
                    )}
                  </button>

                  <p
                    className={clsx(
                      "text-xs text-slate-400 text-center",
                      isRTL && "text-right"
                    )}
                  >
                    {isRTL
                      ? "سنتواصل معك خلال 24 ساعة لتأكيد موعدك."
                      : "Nous vous contacterons dans les 24h pour confirmer votre rendez-vous."}
                  </p>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 gap-6 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    className="w-20 h-20 rounded-full bg-gradient-to-br from-rose-400 to-rose-600 flex items-center justify-center shadow-rose-lg"
                  >
                    <CheckCircle2 size={40} className="text-white" />
                  </motion.div>
                  <h3 className="font-serif text-2xl font-bold text-charcoal">
                    {t("form_success")}
                  </h3>
                  <p className="text-slate-500 max-w-xs">
                    {isRTL
                      ? "سنتواصل معكِ قريباً لتأكيد موعدكِ."
                      : "Nous vous contacterons rapidement pour confirmer votre rendez-vous."}
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        name: "",
                        email: "",
                        phone: "",
                        service: "",
                        message: "",
                      });
                    }}
                    className="btn-secondary"
                  >
                    {isRTL ? "حجز موعد آخر" : "Nouveau rendez-vous"}
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
