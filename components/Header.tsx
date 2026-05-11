"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import Logo from "../assets/logo-principal.svg";
import Container from "./Container";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
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
        if (typeof document !== "undefined") {
            document.body.style.overflow = menuOpen ? "hidden" : "unset";
        }
    }, [menuOpen]);

    return (
        <header className="fixed top-0 left-0 w-full z-[60] bg-white/80 backdrop-blur-md border-b border-slate-100 antialiased">
            <Container>
                <div className="flex items-center justify-between h-20">

                    {/* LOGO */}
                    <Link href={`/${locale}`} className="z-[70] transition-transform hover:scale-105 flex-shrink-0">
                        <Image
                            src={Logo}
                            alt="Logo Débora"
                            width={160}
                            height={50}
                            className="w-36 md:w-44 h-auto"
                            priority
                        />
                    </Link>

                    {/* DESKTOP NAV */}
                    <nav className="hidden md:flex items-center gap-8 font-zilla text-lg text-primary">
                        {NAV_LINKS.map(({ href, label }) => {
                            const isActive = pathname === href;
                            return (
                                <Link
                                    key={href}
                                    href={href}
                                    className={`relative group transition-colors ${isActive ? "text-secondary" : "hover:text-secondary"}`}
                                >
                                    {label}
                                    <span
                                        className={`absolute -bottom-1 left-0 h-0.5 bg-secondary transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                                    />
                                </Link>
                            );
                        })}

                        {/* Language toggle */}
                        <button
                            onClick={toggleLocale}
                            className="text-sm font-bold text-primary hover:text-secondary transition-colors border border-slate-200 rounded-full px-3 py-1"
                        >
                            {locale === "pt" ? "EN" : "PT"}
                        </button>

                        <Link
                            href={`/${locale}/contact`}
                            className="ml-2 px-6 py-2.5 bg-primary text-white rounded-full font-sans text-sm font-bold hover:bg-secondary hover:shadow-lg hover:shadow-secondary/20 transition-all active:scale-95"
                        >
                            {t("contact")}
                        </Link>
                    </nav>

                    {/* MOBILE BURGER */}
                    <button
                        className="md:hidden z-[90] p-2 text-primary focus:outline-none"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle Menu"
                    >
                        <div className="w-7 h-5 relative flex flex-col justify-between">
                            <span className={`w-full h-0.5 bg-current transition-all duration-300 origin-left ${menuOpen ? "rotate-45 translate-x-1" : ""}`} />
                            <span className={`w-full h-0.5 bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                            <span className={`w-full h-0.5 bg-current transition-all duration-300 origin-left ${menuOpen ? "-rotate-45 translate-x-1" : ""}`} />
                        </div>
                    </button>
                </div>
            </Container>

            {/* OVERLAY */}
            <div
                className={`fixed inset-0 bg-primary/20 backdrop-blur-sm z-[75] md:hidden transition-opacity duration-300 ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
                onClick={() => setMenuOpen(false)}
            />

            {/* SIDEBAR MOBILE */}
            <aside className={`
                fixed top-0 right-0 h-screen w-[85%] max-w-sm bg-white z-[80] p-10 pt-32
                transition-transform duration-500 ease-in-out md:hidden shadow-2xl
                ${menuOpen ? "translate-x-0" : "translate-x-full"}
            `}>
                <nav className="flex flex-col gap-8 font-zilla text-3xl text-primary">
                    {NAV_LINKS.map(({ href, label }) => {
                        const isActive = pathname === href;
                        return (
                            <Link
                                key={href}
                                href={href}
                                onClick={() => setMenuOpen(false)}
                                className={`transition-colors ${isActive ? "text-secondary font-bold" : "hover:text-secondary"}`}
                            >
                                {label}
                            </Link>
                        );
                    })}

                    <Link
                        href={`/${locale}/contact`}
                        onClick={() => setMenuOpen(false)}
                        className="mt-6 px-6 py-4 bg-primary text-white rounded-xl font-sans text-xl font-bold text-center active:scale-95 transition-transform"
                    >
                        {t("getInTouch")}
                    </Link>

                    {/* Language toggle mobile */}
                    <button
                        onClick={() => { toggleLocale(); setMenuOpen(false); }}
                        className="text-base font-bold text-primary hover:text-secondary transition-colors border border-slate-200 rounded-full px-4 py-2 w-fit"
                    >
                        {locale === "pt" ? "🇺🇸 English" : "🇧🇷 Português"}
                    </button>
                </nav>

                <p className="absolute bottom-12 left-10 text-xs text-slate-400 tracking-widest uppercase font-sans">
                    © 2025 Débora
                </p>
            </aside>
        </header>
    );
}