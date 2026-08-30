"use client";

import { useTranslations } from "next-intl";
import { ArrowUpRight, Mail } from "lucide-react";

export default function Contact() {
    const t = useTranslations("contact");

    return (
        <section
            id="contact"
            className="w-full bg-[var(--background)] py-32 border-t border-[var(--color-quaternary)]/10 text-[var(--color-primary)] font-sans antialiased relative overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16 items-start">

                {/* COLUNA DA ESQUERDA */}
                <div>
                    <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[var(--color-secondary)] block mb-2">
                        // 05 / {t("eyebrow")}
                    </span>
                </div>

                {/* COLUNA DA DIREITA */}
                <div className="w-full max-w-4xl">
                    <div className="overflow-hidden mb-6">
                        <h2 className="font-custom text-5xl sm:text-7xl md:text-8xl font-normal tracking-tight text-[var(--color-primary)] contact-title-reveal">
                            {t("title")}
                        </h2>
                    </div>

                    <p className="text-xl font-light text-[var(--color-quaternary)] opacity-80 leading-relaxed tracking-tight max-w-2xl mb-16">
                        {t("subtitle")}
                    </p>

                    <div className="flex flex-col w-full border-t border-[var(--color-quaternary)]/10">

                        {/* Canal: Email */}
                        <a
                            href="mailto:deborameireles.dev@gmail.com"
                            className="group grid grid-cols-[auto_1fr_auto] items-center py-8 border-b border-[var(--color-quaternary)]/10 transition-colors duration-300 hover:border-[var(--color-secondary)]/30 text-left w-full"
                        >
                            <Mail size={18} className="text-[var(--color-secondary)] mr-6 opacity-60 group-hover:opacity-100 transition-opacity" />
                            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2">
                                <span className="font-sans text-lg font-medium text-[var(--color-primary)] group-hover:translate-x-2 transition-transform duration-500 ease-[0.16,1,0.3,1]">
                                    {t("email")}
                                </span>
                                <span className="text-xs font-mono text-[var(--color-quaternary)] opacity-40 group-hover:opacity-80 transition-opacity">
                                    deborameireles.dev@gmail.com
                                </span>
                            </div>
                            <ArrowUpRight size={20} className="text-[var(--color-tertiary)] opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-[0.16,1,0.3,1] ml-6" />
                        </a>

                        {/* Canal: LinkedIn (Nativo) */}
                        <a
                            href="https://linkedin.com/in/deborameireles"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group grid grid-cols-[auto_1fr_auto] items-center py-8 border-b border-[var(--color-quaternary)]/10 transition-colors duration-300 hover:border-[var(--color-secondary)]/30 text-left w-full"
                        >
                            <svg
                                width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                className="mr-6 opacity-60 group-hover:opacity-100 transition-opacity"
                            >
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                <rect x="2" y="9" width="4" height="12" />
                                <circle cx="4" cy="4" r="2" />
                            </svg>
                            <span className="font-sans text-lg font-medium text-[var(--color-primary)] group-hover:translate-x-2 transition-transform duration-500 ease-[0.16,1,0.3,1]">
                                {t("linkedin")}
                            </span>
                            <ArrowUpRight size={20} className="text-[var(--color-tertiary)] opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-[0.16,1,0.3,1]" />
                        </a>

                        {/* Canal: WhatsApp (Nativo) — TODO: troque "seu-numero" pelo número real, formato 55DDDNÚMERO (só dígitos, sem +) */}
                        <a
                            href="https://wa.me/seu-numero"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group grid grid-cols-[auto_1fr_auto] items-center py-8 border-b border-[var(--color-quaternary)]/10 transition-colors duration-300 hover:border-[var(--color-secondary)]/30 text-left w-full"
                        >
                            <svg
                                width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                className="mr-6 opacity-60 group-hover:opacity-100 transition-opacity"
                            >
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                            <span className="font-sans text-lg font-medium text-[var(--color-primary)] group-hover:translate-x-2 transition-transform duration-500 ease-[0.16,1,0.3,1]">
                                {t("whatsapp")}
                            </span>
                            <ArrowUpRight size={20} className="text-[var(--color-tertiary)] opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-[0.16,1,0.3,1]" />
                        </a>

                        {/* Canal: GitHub (Nativo) */}
                        <a
                            href="https://github.com/Debory-cris"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group grid grid-cols-[auto_1fr_auto] items-center py-8 border-b border-[var(--color-quaternary)]/10 transition-colors duration-300 hover:border-[var(--color-secondary)]/30 text-left w-full"
                        >
                            <svg
                                width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                className="mr-6 opacity-60 group-hover:opacity-100 transition-opacity"
                            >
                                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                <path d="M9 18c-4.51 2-5-2-7-2" />
                            </svg>
                            <span className="font-sans text-lg font-medium text-[var(--color-primary)] group-hover:translate-x-2 transition-transform duration-500 ease-[0.16,1,0.3,1]">
                                {t("github")}
                            </span>
                            <ArrowUpRight size={20} className="text-[var(--color-tertiary)] opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-[0.16,1,0.3,1]" />
                        </a>
                    </div>

                    <div className="mt-32 flex flex-col sm:flex-row justify-between items-center text-[10px] font-bold tracking-widest uppercase text-[var(--color-quaternary)] opacity-40 gap-4">
                        <span>{t("footerCopyright")}</span>
                        <span>{t("footerLocation")}</span>
                        <span>{t("footerCredit")}</span>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes contactReveal {
                    from { transform: translateY(100%); opacity: 0; }
                    to   { transform: translateY(0); opacity: 1; }
                }
                .contact-title-reveal { animation: contactReveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) both; }
            `}</style>
        </section>
    );
}