"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, ExternalLink, GitBranch, ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";

// ─── Types ───────────────────────────────────────────────────────────────────

type FrontendProject = {
    id: string;
    titleKey: string;
    subtitleKey: string;
    descriptionKey: string;
    image: string;
    tags: string[];
    liveUrl?: string;
    githubUrl: string;
};

type ArtProject = {
    id: string;
    title: string;
    categoryKey: string;
    conceptKey: string;
    directionKey: string;
    image: string;
    behanceUrl?: string;
};

// ─── Modal Editorial ──────────────────────────────────────────────────────────

function ProjectModal({
    project,
    onClose,
}: {
    project: FrontendProject;
    onClose: () => void;
}) {
    const t = useTranslations("projects");

    // Fecha com Esc e trava o scroll do body enquanto o modal está aberto
    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", onKeyDown);

        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", onKeyDown);
            document.body.style.overflow = originalOverflow;
        };
    }, [onClose]);

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-[var(--color-primary)]/60 backdrop-blur-md"
            onClick={onClose}
        >
            <div
                className="relative bg-[var(--background)] rounded-2xl overflow-hidden max-w-2xl w-full border border-[var(--color-quaternary)]/20 shadow-2xl max-h-[90vh] flex flex-col text-[var(--color-primary)]"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    autoFocus
                    className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-[var(--background)]/80 text-[var(--color-primary)] hover:text-[var(--color-secondary)] border border-[var(--color-quaternary)]/10 transition-all cursor-pointer"
                    aria-label={t("closeModal")}
                >
                    <X size={18} />
                </button>

                <div className="relative w-full aspect-video bg-[var(--color-quaternary)]/5 flex-shrink-0">
                    <Image
                        src={project.image}
                        alt={t(project.titleKey)}
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="p-6 md:p-8 overflow-y-auto">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                        <div>
                            <h3 className="text-2xl font-semibold tracking-tight text-[var(--color-s)]">
                                {t(project.titleKey)}
                            </h3>
                            <p className="text-xs font-bold text-[var(--color-secondary)] uppercase tracking-wider mt-1">
                                {t(project.subtitleKey)}
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border border-[var(--color-quaternary)]/15 text-[var(--color-quaternary)] opacity-80"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <p className="text-[var(--color-quaternary)] opacity-80 text-sm leading-relaxed font-light mb-8">
                        {t(project.descriptionKey)}
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4 border-t border-[var(--color-quaternary)]/10">
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-2.5 bg-[var(--color-primary)] text-[var(--background)] rounded-full text-xs font-bold tracking-wider uppercase hover:bg-[var(--color-secondary)] transition-colors"
                            >
                                <ExternalLink size={14} />
                                {t("liveDemo")}
                            </a>
                        )}
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-2.5 border border-[var(--color-quaternary)]/20 text-[var(--color-primary)] rounded-full text-xs font-bold tracking-wider uppercase hover:border-[var(--color-secondary)] hover:text-[var(--color-secondary)] transition-colors"
                        >
                            <GitBranch size={14} />
                            {t("sourceCode")}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ─── Frontend Card ────────────────────────────────────────────────────────────

function FrontendCard({
    project,
    onClick,
}: {
    project: FrontendProject;
    onClick: () => void;
}) {
    const t = useTranslations("projects");

    return (
        <button
            onClick={onClick}
            className="group relative block w-full text-left bg-transparent rounded-2xl overflow-hidden border border-[var(--color-quaternary)]/10 hover:border-[var(--color-secondary)]/30 transition-all duration-500 cursor-pointer"
        >
            <div className="relative aspect-[16/10] overflow-hidden bg-[var(--color-quaternary)]/5">
                <Image
                    src={project.image}
                    alt={t(project.titleKey)}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-[0.16,1,0.3,1]"
                />
                {!project.liveUrl && (
                    <span className="absolute top-3 left-3 text-[9px] font-bold uppercase tracking-widest bg-[var(--color-primary)]/80 text-[var(--background)] px-2.5 py-1 rounded-full backdrop-blur-sm">
                        {t("noDeploy")}
                    </span>
                )}
            </div>

            <div className="p-6 flex items-start justify-between gap-4">
                <div>
                    <h3 className="font-sans font-semibold text-lg text-[var(--color-primary)] group-hover:text-[var(--color-secondary)] transition-colors">
                        {t(project.titleKey)}
                    </h3>
                    <p className="text-[10px] font-bold text-[var(--color-secondary)] uppercase tracking-widest mt-1">
                        {t(project.subtitleKey)}
                    </p>
                </div>
                <ArrowUpRight
                    size={18}
                    className="text-[var(--color-quaternary)] opacity-40 group-hover:opacity-100 group-hover:text-[var(--color-secondary)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0 mt-1"
                />
            </div>
        </button>
    );
}

// ─── Art Direction Row ────────────────────────────────────────────────────────

function ArtRow({ project, index }: { project: ArtProject; index: number }) {
    const t = useTranslations("projects");
    const isEven = index % 2 === 0;

    return (
        <div
            className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} items-stretch border-b border-[var(--color-quaternary)]/10 last:border-b-0`}
        >
            <div className="relative w-full md:w-1/2 aspect-[4/3] overflow-hidden bg-[var(--color-quaternary)]/5">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700 ease-[0.16,1,0.3,1]"
                />
            </div>

            <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-12 bg-[var(--background)]">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[var(--color-secondary)] mb-2">
                    {t(project.categoryKey)}
                </p>
                <h3 className="text-2xl md:text-3xl font-normal text-[var(--color-primary)] font-serif mb-6 leading-tight">
                    {project.title}
                </h3>

                <div className="space-y-4">
                    <div>
                        <p className="text-[9px] font-bold uppercase tracking-widest text-[var(--color-quaternary)] opacity-50 mb-1">
                            {t("concept")}
                        </p>
                        <p className="text-[var(--color-quaternary)] opacity-80 text-xs md:text-sm leading-relaxed font-light">
                            {t(project.conceptKey)}
                        </p>
                    </div>
                    <div>
                        <p className="text-[9px] font-bold uppercase tracking-widest text-[var(--color-quaternary)] opacity-50 mb-1">
                            {t("artDirection")}
                        </p>
                        <p className="text-[var(--color-quaternary)] opacity-80 text-xs md:text-sm leading-relaxed font-light">
                            {t(project.directionKey)}
                        </p>
                    </div>
                </div>

                {project.behanceUrl && (
                    <a
                        href={project.behanceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-8 text-[var(--color-primary)] font-bold hover:text-[var(--color-secondary)] transition-colors group text-[10px] uppercase tracking-widest"
                    >
                        <span className="border-b border-[var(--color-primary)] group-hover:border-[var(--color-secondary)] pb-0.5">
                            {t("viewFullProject")}
                        </span>
                        <ArrowUpRight
                            size={14}
                            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                        />
                    </a>
                )}
            </div>
        </div>
    );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<FrontendProject | null>(null);
    const t = useTranslations("projects");

    const frontendProjects: FrontendProject[] = [
        {
            id: "toti",
            titleKey: "toti.title",
            subtitleKey: "toti.subtitle",
            descriptionKey: "toti.description",
            image: "/projects/toti.png",
            tags: ["Next.js", "Tailwind CSS", "Lottie", "Vercel"],
            liveUrl: "https://toti-pet-health.vercel.app/",
            githubUrl: "https://github.com/Debory-cris/toti-pet-health.git",
        },
        {
            id: "conversor",
            titleKey: "conversor.title",
            subtitleKey: "conversor.subtitle",
            descriptionKey: "conversor.description",
            image: "/projects/conversor.png",
            tags: ["React Native", "Expo", "TypeScript", "API"],
            liveUrl: "disthttps://conversor-moedas-app.vercel.app/",
            githubUrl: "https://github.com/Debory-cris/Conversor_Moedas_APP.git",
        },
        {
            id: "verdant",
            titleKey: "verdant.title",
            subtitleKey: "verdant.subtitle",
            descriptionKey: "verdant.description",
            image: "/projects/verdant.png",
            tags: ["Next.js", "Tailwind CSS", "Vercel"],
            liveUrl: "https://verdante-landing.vercel.app/",
            githubUrl: "https://github.com/Debory-cris/verdante-landing.git",
        },
        {
            id: "game",
            titleKey: "game.title",
            subtitleKey: "game.subtitle",
            descriptionKey: "game.description",
            image: "/projects/game.png",
            tags: ["HTML5", "JavaScript"],
            liveUrl: "https://game-love-teal.vercel.app/",
            githubUrl: "https://github.com/Debory-cris/game-love.git",
        },
        {
            id: "starbucks",
            titleKey: "starbucks.title",
            subtitleKey: "starbucks.subtitle",
            descriptionKey: "starbucks.description",
            image: "/projects/starbucks.png",
            tags: ["React", "CSS", "Responsive"],
            githubUrl: "https://github.com/Debory-cris/starbucks-react.git",
        },
    ];

    const artProjects: ArtProject[] = [
        {
            id: "natura",
            title: "Natura — TodaNoite",
            categoryKey: "natura.category",
            conceptKey: "natura.concept",
            directionKey: "natura.direction",
            image: "/projects/natura.png",
            behanceUrl: "https://www.behance.net/gallery/181548721/NATURA-TODODIA-TODANOITE-Lancamento-imprensa",
        },
        {
            id: "avon",
            title: "Avon — Giro Pela Vida",
            categoryKey: "avon.category",
            conceptKey: "avon.concept",
            directionKey: "avon.direction",
            image: "/projects/avon.png",
            behanceUrl: "https://www.behance.net/gallery/249030319/Avon-Giro-pela-Vida-11-Edicao",
        },
    ];

    return (
        <section id="projects" className="py-24 border-t border-[var(--color-quaternary)]/10 text-[var(--color-primary)] font-sans antialiased">

            {/* 01 // Frontend Projects */}
            <div className="max-w-7xl mx-auto px-6 md:px-16 mb-28">
                <div className="flex items-baseline gap-4 border-b border-[var(--color-quaternary)]/10 pb-4 mb-12 reveal-up">
                    <span className="font-mono text-xs text-[var(--color-secondary)]">01 //</span>
                    <h2 className="font-custom text-3xl md:text-4xl font-normal text-[var(--color-secondary)]">
                        {t("frontendTitle")}
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {frontendProjects.map((project) => (
                        <FrontendCard
                            key={project.id}
                            project={project}
                            onClick={() => setSelectedProject(project)}
                        />
                    ))}
                </div>
            </div>

            {/* 02 // Art Direction Section */}
            <div className="max-w-7xl mx-auto px-6 md:px-16 mb-28">
                <div className="flex items-baseline gap-4 border-b border-[var(--color-quaternary)]/10 pb-4 mb-12 reveal-up">
                    <span className="font-mono text-xs text-[var(--color-secondary)]">02 //</span>
                    <h2 className="font-custom text-3xl md:text-4xl font-normal text-[var(--color-secondary)]">
                        {t("artDirectionTitle")}
                    </h2>
                </div>

                <div className="border border-[var(--color-quaternary)]/10 rounded-2xl overflow-hidden">
                    {artProjects.map((project, index) => (
                        <ArtRow key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}

            {/* Behance CTA */}
            <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col items-center text-center gap-4">
                <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--color-quaternary)] opacity-50 font-bold">
                    {t("wantMore")}
                </p>
                <a
                    href="https://www.behance.net/deborameirele/projects"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border border-[var(--color-quaternary)]/20 text-[var(--color-primary)] font-bold text-xs uppercase tracking-widest hover:border-[var(--color-secondary)] hover:text-[var(--color-secondary)] transition-all duration-300"
                >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0">
                        <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h2.352zm-7.726-2.22c.122-1.994-.547-3.278-2.178-3.278-1.678 0-2.349 1.313-2.35 3.278h4.528zm-8.983-5.38c1.16.147 2.338.57 2.338 2.21 0 1.195-.745 2.066-1.938 2.336v.03c1.403.17 2.488.934 2.488 2.538 0 2.104-1.695 2.886-3.877 2.886H2V9.4h5.017zM4.124 13.5h2.42c1.017 0 1.76-.392 1.76-1.39 0-.929-.686-1.33-1.79-1.33H4.124v2.72zm0 4.022h2.618c1.124 0 1.95-.434 1.95-1.545 0-1.05-.797-1.527-1.95-1.527H4.124v3.072z" />
                    </svg>
                    {t("behanceCta")}
                    <ArrowUpRight
                        size={15}
                        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                </a>
            </div>
        </section>
    );
}