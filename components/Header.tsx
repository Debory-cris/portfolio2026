"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import Container from "./Container";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const router = useRouter();
    const locale = useLocale();
    const t = useTranslations("nav");

    const NAV_LINKS = [
        { href: `/${locale}`, label: t("home") },
        { href: `/${locale}/about`, label: t("about") },
        { href: `/${locale}/projects`, label: t("projects") },
    ];

    const toggleLocale = () => {
        const newLocale = locale === "pt" ? "en" : "pt";
        const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
        router.push(newPath);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 30) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (typeof document !== "undefined") {
            document.body.style.overflow = menuOpen ? "hidden" : "unset";
        }
    }, [menuOpen]);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-[60] transition-all duration-500 antialiased ${scrolled
                ? "bg-[var(--color-primary)]/90 backdrop-blur-md text-[var(--color-tertiary)] border-b border-[var(--color-tertiary)]/20 shadow-lg py-1"
                : "bg-[var(--background)]/70 backdrop-blur-sm text-[var(--color-primary)] border-b border-[var(--color-quaternary)]/10 py-0"
                }`}
        >
            <Container className="max-w-7xl mx-auto px-6 md:px-16">
                <div className="flex items-center justify-between h-20">

                    <Link href={`/${locale}`} className="z-[70] transition-transform flex-shrink-0">
                        <span
                            className={`font-custom text-xl md:text-2xl tracking-tight transition-colors duration-500 ${scrolled ? "text-[var(--color-tertiary)]" : "text-[var(--color-primary)]"
                                }`}
                        >
                            Débora{" "}
                            <span className={scrolled ? "text-[var(--color-tertiary)]" : "text-[var(--color-secondary)]"}>
                                Meireles
                            </span>
                        </span>
                    </Link>

                    {/* DESKTOP NAV */}
                    <nav className="hidden md:flex items-center gap-8 text-[11px] font-bold tracking-[0.2em] uppercase transition-colors duration-500">
                        {NAV_LINKS.map(({ href, label }) => {
                            const isActive = pathname === href;
                            return (
                                <Link
                                    key={href}
                                    href={href}
                                    className={`relative transition-colors duration-300 ${isActive
                                        ? scrolled ? "text-[var(--background)]" : "text-[var(--color-secondary)]"
                                        : scrolled ? "text-[var(--color-tertiary)]/80 hover:text-[var(--background)]" : "text-[var(--color-primary)] hover:text-[var(--color-secondary)]"
                                        }`}
                                >
                                    {label}
                                    <span
                                        className={`absolute -bottom-1 left-0 h-[1px] transition-all duration-300 ${scrolled ? "bg-[var(--background)]" : "bg-[var(--color-secondary)]"
                                            } ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                                    />
                                </Link>
                            );
                        })}

                        {/* Seletor de Idioma */}
                        <button
                            onClick={toggleLocale}
                            className={`text-[10px] font-bold tracking-widest transition-all cursor-pointer border rounded-full px-2.5 py-0.5 ${scrolled
                                ? "text-[var(--color-tertiary)] border-[var(--color-tertiary)]/30 hover:border-[var(--background)] hover:text-[var(--background)]"
                                : "text-[var(--color-quaternary)] opacity-60 hover:opacity-100 hover:text-[var(--color-secondary)] border-[var(--color-quaternary)]/20"
                                }`}
                        >
                            {locale === "pt" ? "EN" : "PT"}
                        </button>

                        {/* Link de Contato */}
                        <Link
                            href={`/${locale}/contact`}
                            className={`ml-2 px-5 py-2 border rounded-full text-[10px] font-bold tracking-[0.15em] uppercase transition-all duration-300 active:scale-97 ${scrolled
                                ? "border-[var(--background)] text-[var(--background)] hover:bg-[var(--background)] hover:text-[var(--color-primary)]"
                                : "border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-secondary)] hover:text-[var(--background)]"
                                }`}
                        >
                            {t("contact")}
                        </Link>
                    </nav>

                    {/* MOBILE BURGER */}
                    <button
                        className={`md:hidden z-[90] p-2 focus:outline-none transition-colors duration-300 ${scrolled ? "text-[var(--color-tertiary)]" : "text-[var(--color-primary)]"
                            }`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label={t("toggleMenu")}
                    >
                        <div className="w-6 h-4 relative flex flex-col justify-between">
                            <span className={`w-full h-[1.5px] bg-current transition-all duration-300 origin-left ${menuOpen ? "rotate-45 translate-x-0.5" : ""}`} />
                            <span className={`w-full h-[1.5px] bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                            <span className={`w-full h-[1.5px] bg-current transition-all duration-300 origin-left ${menuOpen ? "-rotate-45 translate-x-0.5" : ""}`} />
                        </div>
                    </button>
                </div>
            </Container>

            {/* OVERLAY MOBILE */}
            <div
                className={`fixed inset-0 bg-[var(--color-primary)]/10 backdrop-blur-sm z-[75] md:hidden transition-opacity duration-300 ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
                onClick={() => setMenuOpen(false)}
            />

            {/* SIDEBAR MOBILE */}
            <aside className={`
                fixed top-0 right-0 h-screen w-[85%] max-w-sm bg-[var(--background)] border-l border-[var(--color-quaternary)]/10 z-[80] p-10 pt-32
                transition-transform duration-500 ease-in-out md:hidden shadow-xl
                ${menuOpen ? "translate-x-0" : "translate-x-full"}
            `}>
                <nav className="flex flex-col gap-6 text-xl font-light tracking-tight text-[var(--color-primary)]">
                    {NAV_LINKS.map(({ href, label }) => {
                        const isActive = pathname === href;
                        return (
                            <Link
                                key={href}
                                href={href}
                                onClick={() => setMenuOpen(false)}
                                className={`transition-colors border-b border-[var(--color-quaternary)]/5 pb-2 ${isActive ? "text-[var(--color-secondary)] font-medium" : "hover:text-[var(--color-secondary)]"}`}
                            >
                                {label}
                            </Link>
                        );
                    })}

                    <Link
                        href={`/${locale}/contact`}
                        onClick={() => setMenuOpen(false)}
                        className="mt-4 px-6 py-3 bg-[var(--color-primary)] text-[var(--background)] rounded-xl text-sm font-bold tracking-wider text-center uppercase active:scale-95 transition-transform"
                    >
                        {t("contact")}
                    </Link>

                    {/* Selector de idioma mobile */}
                    <button
                        onClick={() => { toggleLocale(); setMenuOpen(false); }}
                        className="mt-4 text-xs font-bold tracking-widest uppercase text-[var(--color-quaternary)] border border-[var(--color-quaternary)]/20 rounded-full px-4 py-2 w-fit"
                    >
                        {locale === "pt" ? "🇺🇸 Switch to English" : "🇧🇷 Mudar para Português"}
                    </button>
                </nav>

                <p className="absolute bottom-12 left-10 text-[9px] font-bold tracking-widest text-[var(--color-quaternary)] opacity-40 uppercase">
                    © 2026 Débora
                </p>
            </aside>
        </header>
    );
}