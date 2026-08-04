"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

export default function Footer() {
    const pathname = usePathname();
    const locale = useLocale();
    const t = useTranslations("nav");

    const NAV_LINKS = [
        { href: `/${locale}`, label: t("home") },
        { href: `/${locale}/about`, label: t("about") },
        { href: `/${locale}/projects`, label: t("projects") },
        { href: `/${locale}/contact`, label: t("contact") },
    ];

    return (
        <footer className="w-full border-t border-slate-100 bg-[var(--primary)]">
            <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">

                {/* Copyright */}
                <p className="text-xs text-[var(--tertiary)] tracking-widest uppercase font-sans">
                    © {new Date().getFullYear()} Débora Cristina Meireles
                </p>

                <Image src="/iconfooter.png" alt="Logo" width={60} height={20} />

                {/* Nav links */}
                <nav className="flex items-center gap-6 font-sans">
                    {NAV_LINKS.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className={`text-xs tracking-widest uppercase transition-colors ${pathname === href
                                ? "text-[var(--secondary)] font-bold"
                                : "text-[var(--tertiary)] hover:text-[var(--secondary)]"
                                }`}
                        >
                            {label}
                        </Link>
                    ))}
                </nav>

            </div>
        </footer>
    );
}