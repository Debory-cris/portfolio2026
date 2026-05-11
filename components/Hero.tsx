"use client";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import Container from "./Container";
import Typewriter from "typewriter-effect";
import { Search, Download } from "lucide-react";

const FLOATING_SKILLS = [
    { label: "React", x: "8%", y: "20%" },
    { label: "Next.js", x: "78%", y: "15%" },
    { label: "Figma", x: "85%", y: "60%" },
    { label: "Tailwind", x: "5%", y: "65%" },
    { label: "TypeScript", x: "70%", y: "80%" },
    { label: "UI/UX", x: "15%", y: "80%" },
    { label: "Branding", x: "88%", y: "38%" },
    { label: "Adobe", x: "3%", y: "42%" },
];

const CAROUSEL_IMAGES = [
    { src: "/projects/toti.png", alt: "Toti" },
    { src: "/projects/verdant.png", alt: "Verdant" },
    { src: "/projects/starbucks.png", alt: "Starbucks Clone" },
    { src: "/projects/natura.png", alt: "Natura" },
    { src: "/projects/avon.png", alt: "Avon" },
    { src: "/projects/toti.png", alt: "Toti" },
    { src: "/projects/verdant.png", alt: "Verdant" },
    { src: "/projects/starbucks.png", alt: "Starbucks Clone" },
    { src: "/projects/natura.png", alt: "Natura" },
    { src: "/projects/avon.png", alt: "Avon" },
];

export default function Hero() {
    const inputRef = useRef<HTMLDivElement>(null);
    const router = useRouter();
    const locale = useLocale();
    const t = useTranslations("hero");

    const goToProjects = () => {
        router.push(`/${locale}/projects`);
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Enter") {
                router.push(`/${locale}/projects`);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [router, locale]);

    return (
        <>
            {/* ── Hero Banner ─────────────────────────────────────────────── */}
            <section className="relative w-full h-[85vh] md:h-screen min-h-[500px] bg-white flex items-center overflow-hidden">

                {/* Floating skill badges */}
                <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
                    {FLOATING_SKILLS.map((skill, i) => (
                        <span
                            key={skill.label}
                            className="absolute text-[11px] font-bold tracking-wide uppercase px-3 py-1.5 rounded-full border border-slate-200 bg-white/70 backdrop-blur-sm text-slate-400 shadow-sm"
                            style={{
                                left: skill.x,
                                top: skill.y,
                                animation: `floatBadge ${4 + (i % 3)}s ease-in-out infinite`,
                                animationDelay: `${i * 0.4}s`,
                            }}
                        >
                            {skill.label}
                        </span>
                    ))}
                </div>

                <style>{`
                    @keyframes floatBadge {
                        0%, 100% { transform: translateY(0px); opacity: 0.5; }
                        50%       { transform: translateY(-10px); opacity: 0.9; }
                    }
                    @keyframes marquee {
                        0%   { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    .carousel-track {
                        display: flex;
                        gap: 16px;
                        width: max-content;
                        animation: marquee 28s linear infinite;
                    }
                    .carousel-track:hover {
                        animation-play-state: paused;
                    }
                `}</style>

                <Container className="relative z-10 w-full">
                    <div className="flex flex-col items-center text-center px-4 max-w-3xl mx-auto">

                        <h1 className="text-4xl md:text-7xl font-semibold text-primary mb-8 tracking-tighter font-zilla">
                            {t("title")}<span className="text-tertiary">{t("name")}</span>
                        </h1>

                        {/* Search bar */}
                        <div className="w-full relative group">
                            <div
                                ref={inputRef}
                                tabIndex={0}
                                onClick={goToProjects}
                                className="flex items-center w-full bg-white/80 backdrop-blur-sm border border-secondary/20 shadow-sm rounded-full px-6 py-4 md:py-5 transition-all duration-300 hover:shadow-md hover:border-tertiary/40 cursor-pointer"
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") goToProjects();
                                }}
                            >
                                <Search className="text-tertiary mr-4 w-5 h-5 flex-shrink-0" />
                                <div className="text-lg md:text-xl text-primary/70 font-light text-left font-sans w-full">
                                    <Typewriter
                                        key={locale}
                                        options={{
                                            strings: [
                                                t("searchPlaceholder1"),
                                                t("searchPlaceholder2"),
                                                t("searchPlaceholder3"),
                                            ],
                                            autoStart: true,
                                            loop: true,
                                            delay: 50,
                                            deleteSpeed: 30,
                                            wrapperClassName: "typewriter-text",
                                        }}
                                    />
                                </div>
                            </div>

                            <button
                                onClick={goToProjects}
                                className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[10px] text-quaternary tracking-[0.3em] uppercase font-bold whitespace-nowrap hover:text-secondary transition-colors"
                            >
                                {t("pressEnter")}
                            </button>
                        </div>

                    </div>
                </Container>
            </section>

            {/* ── Carousel ────────────────────────────────────────────────── */}
            <div className="w-full overflow-hidden bg-white border-y border-slate-100 py-6">
                <div className="carousel-track">
                    {CAROUSEL_IMAGES.map((img, i) => (
                        <div
                            key={i}
                            className="flex-shrink-0 w-[280px] md:w-[340px] h-[180px] md:h-[220px] rounded-2xl overflow-hidden bg-slate-100 shadow-sm"
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover"
                                draggable={false}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Download CV ─────────────────────────────────────────────── */}
            <div className="w-full flex justify-center bg-white py-10">
                <a
                    href="/curriculo-debora-meireles.pdf"
                    download
                    className="flex items-center gap-2.5 px-7 py-3.5 rounded-full border border-slate-200 text-sm font-semibold text-slate-600 hover:border-[var(--secondary)] hover:text-[var(--secondary)] hover:shadow-md transition-all duration-300 group"
                >
                    <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-300" />
                    {t("downloadCV")}
                </a>
            </div>
        </>
    );
}