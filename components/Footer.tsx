"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Me" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
];

export default function Footer() {
    const pathname = usePathname();

    return (
        <footer className="w-full border-t border-slate-100 bg-[var(--primary)]">
            <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">

                {/* Copyright */}
                <p className="text-xs text-slate-100 tracking-widest uppercase font-sans">
                    © {new Date().getFullYear()} Débora Cristina Meireles
                </p>

                {/* Nav links */}
                <nav className="flex items-center gap-6 font-sans">
                    {NAV_LINKS.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className={`text-xs tracking-widest uppercase transition-colors ${pathname === href
                                ? "text-[var(--secondary)] font-bold"
                                : "text-slate-100 hover:text-[var(--secondary)]"
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