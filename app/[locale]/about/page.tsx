"use client";

import { useTranslations } from "next-intl";
import { ArrowUpRight, Download, Globe } from "lucide-react";

type PracticeProject = {
    id: string;
    nameKey: string;
    stack: string;
    descKey: string;
    link: string;
};

const projects: PracticeProject[] = [
    {
        id: "toti",
        nameKey: "projects.toti.name",
        stack: "Next.js · TypeScript · Tailwind CSS · Lottie",
        descKey: "projects.toti.desc",
        link: "https://toti-pet-health.vercel.app/",
    },
    {
        id: "verdante",
        nameKey: "projects.verdante.name",
        stack: "React",
        descKey: "projects.verdante.desc",
        link: "https://verdante-landing.vercel.app/",
    },
    {
        id: "conversor",
        nameKey: "projects.conversor.name",
        stack: "React Native · Expo · EAS Build",
        descKey: "projects.conversor.desc",
        link: "https://snack.expo.dev/@deboracrism/conversor_app?platform=android",
    },
    {
        id: "game",
        nameKey: "projects.game.name",
        stack: "HTML5 · JavaScript",
        descKey: "projects.game.desc",
        link: "https://game-love-teal.vercel.app/",
    },
];

export default function AboutMe() {
    const t = useTranslations("about");

    return (
        <section
            id="about"
            className="w-full bg-[var(--background)] py-32 border-t border-[var(--color-quaternary)]/15 text-[var(--color-primary)] font-sans antialiased"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16 items-start">

                {/* ── COLUNA DA ESQUERDA ────────────────── */}
                <div className="relative md:sticky md:top-12 flex flex-col items-start w-full reveal-up">

                    <div className="w-full aspect-[4/5] sm:max-w-[280px] rounded-[2rem] overflow-hidden mb-8 border border-[var(--color-secondary)]/15">
                        <img
                            src="/perfil.png"
                            alt={t("portraitAlt")}
                            className="w-full h-full object-cover grayscale transition-transform duration-700 hover:scale-105"
                        />
                    </div>

                    <h2 className="font-sans text-2xl md:text-3xl font-bold tracking-tight text-[var(--color-primary)] mb-1">
                        Débora Cristina Meireles
                    </h2>

                    <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-[var(--color-secondary)] mb-6">
                        {t("roleLabel")}
                    </p>

                    <p className="text-sm text-[var(--color-primary)] opacity-90 leading-relaxed font-normal mb-8 max-w-sm">
                        {t("tagline")}
                    </p>

                    {/* Metadados e Links */}
                    <div className="flex flex-col gap-4 w-full pt-6 border-t border-[var(--color-quaternary)]/20">
                        <div className="flex items-center gap-2.5 text-[var(--color-primary)]">
                            <Globe size={15} className="text-[var(--color-secondary)] shrink-0" />
                            <span className="text-xs font-normal">
                                {t("english")}: <strong className="font-semibold text-[var(--color-secondary)]">{t("englishLevel")}</strong>
                            </span>
                        </div>

                        <a
                            href="/curriculo-debora-meireles.pdf"
                            download
                            className="inline-flex items-center gap-2 text-[11px] font-bold tracking-wider uppercase text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors group mt-2"
                        >
                            <Download size={15} className="group-hover:translate-y-0.5 transition-transform duration-300 text-[var(--color-secondary)]" />
                            {t("downloadCV")}
                        </a>
                    </div>
                </div>

                {/* ── COLUNA DA DIREITA ────────── */}
                <div className="space-y-20 w-full reveal-up reveal-up-delay-1">

                    {/* 1. Formação Acadêmica */}
                    <div>
                        <div className="flex items-baseline gap-4 border-b border-[var(--color-quaternary)]/20 pb-4 mb-8">
                            <span className="font-mono text-xs font-bold text-[var(--color-secondary)]">01 //</span>
                            <h3 className="font-normal text-2xl md:text-2xl font-normal text-[var(--color-secondary)]">{t("education")}</h3>
                        </div>

                        <div className="flex flex-col gap-5">
                            {/* Card 1 */}
                            <div className="relative p-6 rounded-2xl border border-[var(--color-secondary)]/40 bg-[var(--color-quaternary)]/10 shadow-sm transition-all hover:border-[var(--color-secondary)]">
                                <div className="absolute left-0 top-0 w-1.5 h-full bg-[var(--color-secondary)] rounded-l-2xl" />
                                <div className="flex justify-between items-start gap-4">
                                    <div>
                                        <h4 className="font-sans text-base font-bold tracking-tight text-[var(--color-primary)]">{t("cs.title")}</h4>
                                        <p className="text-xs font-semibold text-[var(--color-secondary)] mt-1">{t("cs.school")}</p>
                                    </div>
                                    <span className="text-[9px] font-bold tracking-widest uppercase bg-[var(--color-secondary)] text-[var(--background)] px-3 py-1 rounded-full shadow-sm shrink-0">
                                        {t("inProgress")}
                                    </span>
                                </div>
                                <p className="text-[11px] font-semibold text-[var(--color-primary)] opacity-70 mt-4 font-mono">{t("cs.period")}</p>
                            </div>

                            {/* Card 2 */}
                            <div className="p-6 rounded-2xl border border-[var(--color-quaternary)]/20 bg-[var(--color-quaternary)]/5 hover:border-[var(--color-quaternary)]/40 hover:bg-[var(--color-quaternary)]/10 transition-all">
                                <h4 className="font-sans text-base font-bold tracking-tight text-[var(--color-primary)]">{t("uxui.title")}</h4>
                                <p className="text-xs font-semibold text-[var(--color-secondary)] mt-1">{t("uxui.school")}</p>
                                <p className="text-[11px] font-semibold text-[var(--color-primary)] opacity-70 mt-3 font-mono">{t("uxui.period")}</p>
                            </div>

                            {/* Card 3 */}
                            <div className="p-6 rounded-2xl border border-[var(--color-quaternary)]/20 bg-[var(--color-quaternary)]/5 hover:border-[var(--color-quaternary)]/40 hover:bg-[var(--color-quaternary)]/10 transition-all">
                                <h4 className="font-sans text-base font-bold tracking-tight text-[var(--color-primary)]">{t("design.title")}</h4>
                                <p className="text-xs font-semibold text-[var(--color-secondary)] mt-1">{t("design.school")}</p>
                                <p className="text-[11px] font-semibold text-[var(--color-primary)] opacity-70 mt-3 font-mono">{t("design.period")}</p>
                            </div>
                        </div>
                    </div>

                    {/* 2. Experiência Profissional */}
                    <div>
                        <div className="flex items-baseline gap-4 border-b border-[var(--color-quaternary)]/20 pb-4 mb-8">
                            <span className="font-mono text-xs font-bold text-[var(--color-secondary)]">02 //</span>
                            <h3 className="font-normal text-2xl md:text-2xl font-normal text-[var(--color-secondary)]">{t("experience")}</h3>
                        </div>

                        <div className="relative pl-6 border-l-2 border-[var(--color-secondary)]">
                            <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-[var(--color-secondary)] shadow-[0_0_10px_rgba(0,0,0,0.15)]" />
                            <h4 className="font-sans text-lg font-bold tracking-tight text-[var(--color-primary)]">{t("artDir.title")}</h4>
                            <p className="text-xs font-bold text-[var(--color-secondary)] tracking-widest uppercase mt-1">{t("artDir.years")}</p>

                            <p className="mt-4 text-sm text-[var(--color-primary)] opacity-90 leading-relaxed font-normal max-w-2xl">
                                {t("artDir.description")}
                            </p>

                            <div className="mt-6 pt-4 border-t border-[var(--color-quaternary)]/15">
                                <p className="text-[10px] uppercase tracking-widest text-[var(--color-secondary)] font-bold mb-2">
                                    {t("brands")}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {["Natura", "Avon", "Unilever", "Heliar"].map((brand) => (
                                        <span key={brand} className="text-xs font-semibold px-3 py-1 rounded-lg bg-[var(--color-quaternary)]/10 border border-[var(--color-quaternary)]/20 text-[var(--color-primary)]">
                                            {brand}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 3. Projetos de Prática */}
                    <div>
                        <div className="flex items-baseline gap-4 border-b border-[var(--color-quaternary)]/20 pb-4 mb-8">
                            <span className="font-mono text-xs font-bold text-[var(--color-secondary)]">03 //</span>
                            <h3 className="font-normal text-2xl md:text-2xl font-normal text-[var(--color-secondary)]">{t("practiceProjects")}</h3>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                            {projects.map((project) => (
                                <a
                                    key={project.id}
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group p-6 rounded-2xl border border-[var(--color-quaternary)]/20 bg-[var(--color-quaternary)]/5 hover:border-[var(--color-secondary)] hover:bg-[var(--color-quaternary)]/10 transition-all duration-300 relative shadow-xs"
                                >
                                    <div className="flex justify-between items-baseline gap-4">
                                        <h4 className="font-sans text-base font-bold tracking-tight text-[var(--color-primary)] group-hover:text-[var(--color-secondary)] transition-colors">
                                            {t(project.nameKey)}
                                        </h4>
                                        <ArrowUpRight size={18} className="text-[var(--color-secondary)] opacity-40 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all shrink-0" />
                                    </div>
                                    <p className="text-[10px] font-bold tracking-widest uppercase text-[var(--color-secondary)] mt-1 mb-3">{project.stack}</p>
                                    <p className="text-xs text-[var(--color-primary)] opacity-85 leading-relaxed font-normal">{t(project.descKey)}</p>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* 4. Tech Stack */}
                    <div>
                        <div className="flex items-baseline gap-4 border-b border-[var(--color-quaternary)]/20 pb-4 mb-8">
                            <span className="font-mono text-xs font-bold text-[var(--color-secondary)]">04 //</span>
                            <h3 className="font-normal text-2xl md:text-2xl font-normal text-[var(--color-secondary)]">{t("stack")}</h3>
                        </div>

                        <div className="flex flex-wrap gap-2.5">
                            {[
                                'React', 'Next.js', 'React Native', 'TypeScript',
                                'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5', 'CSS3',
                                'Figma', 'Adobe Pack', 'Lottie', 'Git / GitHub', 'Vercel'
                            ].map((skill) => (
                                <span
                                    key={skill}
                                    className="bg-[var(--color-quaternary)]/10 border border-[var(--color-quaternary)]/20 hover:border-[var(--color-secondary)] hover:bg-[var(--color-secondary)] hover:text-[var(--background)] px-4 py-2 rounded-xl text-xs font-semibold text-[var(--color-primary)] transition-all cursor-default shadow-xs"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}