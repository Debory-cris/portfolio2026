"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../assets/logo-principal.svg";
import Container from "./Container";

const NAV_LINKS = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Me" },
    { href: "/projects", label: "Projects" },
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

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
                    <Link href="/" className="z-[70] transition-transform hover:scale-105 flex-shrink-0">
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

                        <Link
                            href="/contact"
                            className="ml-2 px-6 py-2.5 bg-primary text-white rounded-full font-sans text-sm font-bold hover:bg-secondary hover:shadow-lg hover:shadow-secondary/20 transition-all active:scale-95"
                        >
                            Contact
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
                        href="/contact"
                        onClick={() => setMenuOpen(false)}
                        className="mt-6 px-6 py-4 bg-primary text-white rounded-xl font-sans text-xl font-bold text-center active:scale-95 transition-transform"
                    >
                        Get in Touch
                    </Link>
                </nav>

                <p className="absolute bottom-12 left-10 text-xs text-slate-400 tracking-widest uppercase font-sans">
                    © 2025 Débora
                </p>
            </aside>
        </header>
    );
}