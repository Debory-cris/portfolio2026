"use client";

import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Container from "./Container";
import { Download, ArrowUpRight } from "lucide-react";

type StudyProject = {
    id: string;
    titleKey: string;
    tags: string[];
    image: string;
    url: string;
};

export default function Hero() {
    const locale = useLocale();
    const t = useTranslations("hero");
    const tJourney = useTranslations("journey");

    const heroRef = useRef<HTMLDivElement>(null);
    const butterflyRef = useRef<HTMLDivElement>(null);

    const studyProjects: StudyProject[] = [
        {
            id: "TotiPet",
            titleKey: "totiTitle",
            tags: ["Next.js", "Tailwind CSS", "Lottie Animations", "Vercel"],
            image: "/projects/toti.png",
            url: "https://toti-pet-health.vercel.app/"
        },
        {
            id: "Conversor",
            titleKey: "conversorTitle",
            tags: ["React Native", "Expo", "TypeScript", "API"],
            image: "/projects/conversor.png",
            url: "https://appetize.io/embed/b_clf3yzcnyyg5af25nlkyh7d7ty?device=pixel9pro&launchUrl=exp%3A%2F%2Fu.expo.dev%2F933fd9c0-1666-11e7-afca-d980795c5824%3Fruntime-version%3Dexposdk%253A54.0.0%26channel-name%3Dproduction%26snack%3D%2540deboracrism%252Fconversor_app%26snack-channel%3D7m0byyVGqY&params=%7B%22EXDevMenuDisableAutoLaunch%22%3Atrue%2C%22EXKernelDisableNuxDefaultsKey%22%3Atrue%7D&appearance=light&deviceColor=black&scale=auto&orientation=portrait&centered=both"
        },
        {
            id: "game",
            titleKey: "gameTitle",
            tags: ["HTML5", "Mobile Touch"],
            image: "/projects/game.png",
            url: "https://game-love-teal.vercel.app/"
        }
    ];

    useEffect(() => {
        const hero = heroRef.current;
        const butterfly = butterflyRef.current;
        if (!hero || !butterfly) return;

        let mouseX = 0;
        let mouseY = 0;
        let bX = 0;
        let bY = 0;
        let isInside = false;

        const onMouseMove = (e: MouseEvent) => {
            const rect = hero.getBoundingClientRect();
            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;
        };

        const onMouseEnter = () => {
            isInside = true;
            butterfly.style.opacity = "0.75";
            butterfly.style.transform = "translate(-50%, -50%) scale(1)";
            hero.style.cursor = "none";
        };

        const onMouseLeave = () => {
            isInside = false;
            butterfly.style.opacity = "0";
            butterfly.style.transform = "translate(-50%, -50%) scale(0.4)";
            hero.style.cursor = "auto";
        };

        const tick = () => {
            if (isInside) {
                bX += (mouseX - bX) * 0.08;
                bY += (mouseY - bY) * 0.08;

                const deltaX = mouseX - bX;
                const angle = Math.atan2(mouseY - bY, deltaX) * (180 / Math.PI);

                butterfly.style.left = `${bX}px`;
                butterfly.style.top = `${bY}px`;
                butterfly.style.transform = `translate(-50%, -50%) rotate(${angle + 90}deg)`;
            }
            requestAnimationFrame(tick);
        };

        hero.addEventListener("mousemove", onMouseMove);
        hero.addEventListener("mouseenter", onMouseEnter);
        hero.addEventListener("mouseleave", onMouseLeave);

        const animId = requestAnimationFrame(tick);

        return () => {
            hero.removeEventListener("mousemove", onMouseMove);
            hero.removeEventListener("mouseenter", onMouseEnter);
            hero.removeEventListener("mouseleave", onMouseLeave);
            cancelAnimationFrame(animId);
        };
    }, []);

    return (
        <>
            {/* ── Hero Banner Editorial ─────────────────────────────────────────────── */}
            <section
                ref={heroRef}
                className="relative w-full min-h-screen flex items-center overflow-hidden bg-[var(--background)]"
            >
                <div
                    ref={butterflyRef}
                    aria-hidden="true"
                    className="absolute pointer-events-none z-50 opacity-0 transition-opacity duration-500 will-change-transform mix-blend-multiply"
                    style={{
                        left: 0,
                        top: 0,
                        transform: "translate(-50%, -50%) scale(0.5)",
                    }}
                >
                    <svg
                        width="34"
                        height="34"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="var(--color-secondary)"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="butterfly-wings"
                    >
                        <path d="M12 2v20" />
                        <path d="M12 4c-1.5-2.5-5.5-2.5-7 0-1.5 2.5-1.5 6 0 8.5 1.5 2.5 5.5 2.5 7 0" />
                        <path d="M12 12c-1.5-1.5-5.5-1.5-7 0s-1.5 4 0 5.5c1.5 1.5 5.5 1.5 7 0" />
                        <path d="M12 4c1.5-2.5 5.5-2.5 7 0 1.5 2.5 1.5 6 0 8.5-1.5 2.5-5.5 2.5-7 0" />
                        <path d="M12 12c1.5-1.5 5.5-1.5 7 0s1.5 4 0 5.5c-1.5 1.5-5.5 1.5-7 0" />
                    </svg>
                </div>

                <Container className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16">

                    {/* Pequeno marcador superior */}
                    <div className="absolute top-0 left-6 md:left-12 lg:left-16">
                        <span className="text-[9px] font-bold tracking-[0.35em] uppercase text-[var(--color-secondary)]">
                            ✦ Portfolio — 2026
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-[minmax(0,38%)_minmax(240px,1fr)_minmax(160px,23%)] md:items-center gap-12 md:gap-8 lg:gap-12 py-16 md:py-24">

                        {/* COLUNA ESQUERDA */}
                        <div className="relative z-20 w-full pt-8 md:pt-0">

                            <div className="overflow-hidden mb-8">
                                <span className="inline-flex items-center gap-3 text-[10px] font-bold tracking-[0.3em] uppercase text-[var(--color-primary)] dynamic-reveal">
                                    <span className="block w-8 h-px bg-[var(--color-secondary)]" />
                                    {t("roleLabel")}
                                </span>
                            </div>

                            <div className="dynamic-reveal-delayed">
                                <h1 className="font-custom font-normal text-[clamp(2.75rem,6vw,5.375rem)] leading-[0.92] tracking-[-0.03em] text-[var(--color-primary)]">
                                    {t("titleLine1")} {t("titleLine2")}
                                </h1>

                                <h2 className="font-custom font-normal text-[clamp(2.75rem,6vw,5.375rem)] leading-[0.95] tracking-[-0.03em] text-[var(--color-secondary)]">
                                    {t("titleHighlight")}
                                </h2>
                            </div>

                            <div className="mt-8 max-w-xs dynamic-reveal-delayed-more">
                                <p className="text-xs md:text-sm leading-relaxed text-[var(--color-primary)]/60">
                                    {t("bio")}
                                </p>
                            </div>

                            <div className="mt-10 flex items-center gap-6 dynamic-reveal-delayed-more">

                                <a
                                    href="/curriculo-debora-meireles.pdf"
                                    download
                                    className="group inline-flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--color-primary)]"
                                >
                                    <span className="flex items-center justify-center w-9 h-9 rounded-full border border-[var(--color-primary)]/20 group-hover:bg-[var(--color-primary)] group-hover:text-[var(--background)] transition-all duration-300">
                                        <Download size={14} />
                                    </span>

                                    {t("downloadCV")}
                                </a>

                                <Link
                                    href={`/${locale}/projects`}
                                    className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--color-secondary)] hover:text-[var(--color-primary)] transition-colors"
                                >
                                    {t("viewIndex")} ↗
                                </Link>

                            </div>
                        </div>


                        <div className="relative justify-self-center z-10">

                            <div className="relative w-[280px] h-[360px] sm:w-[320px] sm:h-[410px] lg:w-[360px] lg:h-[460px] rounded-[2rem] overflow-hidden border border-[var(--color-secondary)]/15">

                                <Image
                                    src="/retrato.png"
                                    alt={t("portraitAlt")}
                                    fill
                                    priority
                                    className="object-cover grayscale"
                                    sizes="(max-width: 768px) 320px, 360px"
                                />

                            </div>
                        </div>


                        {/* COLUNA DIREITA — MÉTRICAS */}
                        <div className="hidden md:flex flex-col gap-12 text-right dynamic-reveal-delayed-more">

                            <div>
                                <div className="font-custom text-4xl lg:text-5xl text-[var(--color-secondary)]">
                                    +3
                                </div>

                                <div className="mt-2 text-[9px] font-bold tracking-[0.22em] uppercase text-[var(--color-primary)]/60">
                                    {t("metricYearsLabel")}
                                </div>
                            </div>

                            <div>
                                <div className="font-custom text-4xl lg:text-5xl text-[var(--color-secondary)]">
                                    UI
                                </div>

                                <div className="mt-2 text-[9px] font-bold tracking-[0.22em] uppercase text-[var(--color-primary)]/60">
                                    {t("metricUILabel")}
                                </div>
                            </div>

                            <div>
                                <div className="font-custom text-4xl lg:text-5xl text-[var(--color-secondary)]">
                                    CODE
                                </div>

                                <div className="mt-2 text-[9px] font-bold tracking-[0.22em] uppercase text-[var(--color-primary)]/60">
                                    {t("metricCodeLabel")}
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="relative flex justify-between items-end border-t border-[var(--color-primary)]/10 pt-5 pb-8 md:pb-0">

                        <span className="text-[9px] tracking-[0.25em] uppercase text-[var(--color-primary)]/40">
                            {t("location")}
                        </span>

                        <span className="text-[9px] tracking-[0.25em] uppercase text-[var(--color-primary)]/40">
                            {t("tagline")}
                        </span>

                    </div>

                </Container>

                <style>{`
        @keyframes revealUp {
            from {
                transform: translateY(25px);
                opacity: 0;
            }

            to {
                transform: translateY(0);
                opacity: 1;
            }
        }

        @keyframes flapWings {
            0%, 100% {
                transform: scaleX(1);
            }

            50% {
                transform: scaleX(0.2);
            }
        }

        .butterfly-wings {
            animation: flapWings 0.35s infinite ease-in-out;
            transform-origin: center center;
        }

        .dynamic-reveal {
            animation: revealUp 1s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .dynamic-reveal-delayed {
            animation: revealUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both;
        }

        .dynamic-reveal-delayed-more {
            animation: revealUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both;
        }
    `}
                </style>

            </section>
            {/* ── Seção A Jornada ────────────────────────────────────────────────── */}
            <section className="w-full bg-[var(--color-primary)] pt-24 pb-12 border-t border-[var(--color-quaternary)]/10 relative z-10">
                <div className="max-w-7xl mx-auto px-6 md:px-16">

                    <div className="border-b border-[var(--color-quaternary)]/10 pb-6 mb-12">
                        <h2 className="text-[10px] font-bold tracking-[0.25em] uppercase text-[var(--color-quaternary)]">
                            // {tJourney("title")}
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_2fr] gap-1 items-start">
                        <div className="w-full aspect-[4/4] sm:max-w-[280px] rounded-2xl overflow-hidden bg-[var(--color-quaternary)]/5 border border-[var(--color-tertiary)]/10 shadow-[0_20px_40px_rgba(0,0,0,0.15)] mx-auto md:mx-0">
                            <img
                                src="/perfil2.png"
                                alt="Débora Cristina Meireles"
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                            />
                        </div>

                        <div className="max-w-3xl pt-1 md:pt-0">
                            <p className="text-xl font-light text-gray-100 leading-relaxed tracking-tight">
                                {tJourney("p1")}
                            </p>
                            <p className="text-xl font-light text-gray-100 opacity-90 leading-relaxed tracking-tight mt-6">
                                {tJourney("p2")}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Seção: Projetos de Estudo ────────────────────────────────────────────────── */}
            <section className="w-full bg-[var(--background)] pb-32 relative z-10">
                <div className="max-w-7xl mx-auto px-6 md:px-16">

                    <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 items-baseline border-t border-[var(--color-quaternary)]/10 pt-16 mb-16">
                        <div>
                            <h2 className="text-[10px] font-bold tracking-[0.25em] uppercase text-[var(--color-secondary)]">
                                // {t("practiceEyebrow")}
                            </h2>
                        </div>
                        <div>
                            <h3 className="font-custom font-normal text-3xl md:text-4xl text-[var(--color-secondary)] tracking-tight">
                                {t("practiceTitle")}
                            </h3>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-6">
                        {studyProjects.map((project) => (
                            <a
                                key={project.id}
                                href={project.url}
                                target={project.url !== "#" ? "_blank" : undefined}
                                rel="noopener noreferrer"
                                className="group relative block w-full aspect-[16/10] bg-[var(--color-quaternary)]/5 rounded-2xl overflow-hidden border border-[var(--color-quaternary)]/5"
                            >
                                <div className="w-full h-full overflow-hidden relative">
                                    <img
                                        src={project.image}
                                        alt={t(project.titleKey)}
                                        className="w-full h-full object-cover transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/80 via-[var(--color-primary)]/10 to-transparent opacity-40 group-hover:opacity-80 transition-opacity duration-500" />
                                </div>

                                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end text-[var(--background)] z-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-[9px] font-bold tracking-widest uppercase border border-[var(--background)]/30 bg-[var(--color-primary)]/30 backdrop-blur-sm px-2.5 py-1 rounded-full"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex items-center justify-between gap-4">
                                        <h4 className="font-custom text-xl md:text-2xl font-light text-[var(--background)] tracking-tight">
                                            {t(project.titleKey)}
                                        </h4>
                                        <ArrowUpRight size={20} className="text-[var(--color-tertiary)] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>

                    <div className="border-b border-[var(--color-quaternary)]/5 pt-20" />
                </div>
            </section>
        </>
    );
}