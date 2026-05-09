"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ExternalLink, GitBranch, ArrowUpRight } from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────────────

type FrontendProject = {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    tags: string[];
    liveUrl?: string;
    githubUrl: string;
};

type ArtProject = {
    id: string;
    title: string;
    category: string;
    concept: string;
    direction: string;
    image: string;
    behanceUrl?: string; // Campo opcional para o link externo
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const frontendProjects: FrontendProject[] = [
    {
        id: "toti",
        title: "Toti",
        subtitle: "Plano de Saúde Pet",
        description:
            "Uma landing page acolhedora e focada em conversão para uma marca de plano de saúde pet. Construída em torno da confiança e da conexão emocional — porque tutores não querem apenas cobertura, querem tranquilidade. Projetada e desenvolvida com uma identidade visual suave e um fluxo de navegação claro e intuitivo.",
        image: "/projects/toti.png",
        tags: ["Next.js", "Tailwind CSS", "Lottie", "Vercel"],
        liveUrl: "https://toti-pet-health.vercel.app/",
        githubUrl: "https://github.com/Debory-cris/toti-pet-health.git",
    },
    {
        id: "verdant",
        title: "Verdant",
        subtitle: "Loja de Plantas de Interior",
        description:
            "Uma landing page de e-commerce minimalista para uma marca de plantas de interior. Ancorada no espaço negativo e na tipografia editorial, a Verdant comunica calma, qualidade e um estilo de vida intencional. Cada detalhe — da paleta de cores às micro-interações — foi pensado para refletir a essência orgânica da marca.",
        image: "/projects/verdant.png",
        tags: ["Next.js", "Tailwind CSS", "Vercel"],
        liveUrl: "https://verdante-landing.vercel.app/",
        githubUrl: "https://github.com/Debory-cris/verdante-landing.git",
    },
    {
        id: "starbucks",
        title: "Starbucks Clone",
        subtitle: "Prática de Desenvolvimento Frontend",
        description:
            "Uma recreação fiel ao pixel da página inicial da Starbucks, construída como um estudo de desenvolvimento frontend. Focado em precisão de layout, comportamento responsivo e estrutura de componentes — traduzindo um design polido e do mundo real em código limpo e maintainable.",
        image: "/projects/starbucks.png",
        tags: ["React", "CSS", "Responsive"],
        githubUrl: "https://github.com/Debory-cris/starbucks-react.git",
    },
];

const artProjects: ArtProject[] = [
    {
        id: "natura",
        title: "Natura — TodaNoite",
        category: "Art Direction / Branding",
        concept:
            "Lançamento e Experiência de Marca para a linha de cuidados noturnos da Natura. O conceito criativo girou em torno da ideia de 'ritual de beleza noturno' — uma pausa consciente para cuidar de si mesmo. A identidade visual combinou elementos orgânicos e texturas suaves com uma paleta de cores que evocava calma e luxo acessível.",
        direction:
            "Para o lançamento da linha Tododia Todanoite, o desafio foi materializar o conceito do 'ritual do sono' em um ambiente físico. Como Diretora de Arte, liderei a criação de uma jornada visual baseada em ciclos, utilizando uma paleta de azuis profundos e iluminação circular para guiar a percepção do convidado.",
        image: "/projects/natura.png",
        behanceUrl: "https://www.behance.net/gallery/181548721/NATURA-TODODIA-TODANOITE-Lancamento-imprensa",
    },
    {
        id: "avon",
        title: "Avon — Giro Pela Vida",
        category: "Art Direction / Brand Strategy",
        concept:
            "Campanha anual da Avon voltada ao combate e conscientização sobre o câncer de mama. O conceito visual busca humanizar a causa através de uma estética acolhedora e informativa, utilizando o símbolo do laço rosa integrado a composições fotográficas que celebram o cuidado e a vida.",
        direction:
            "Como Diretora de Arte, liderei a concepção visual da 11ª edição do projeto. O desafio foi equilibrar a seriedade do tema com uma linguagem visual vibrante e empoderada. Desenvolvi o Key Visual (KV) focado na conexão real, utilizando tipografia sólida e elementos gráficos que guiam o público para o engajamento direto via QR Code.",
        image: "/projects/avon.png",
        behanceUrl: "https://www.behance.net/gallery/249030319/Avon-Giro-pela-Vida-11-Edicao"
    },
];

// ─── Modal ────────────────────────────────────────────────────────────────────

function ProjectModal({
    project,
    onClose,
}: {
    project: FrontendProject;
    onClose: () => void;
}) {
    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="relative bg-white rounded-2xl overflow-hidden max-w-2xl w-full shadow-2xl max-h-[90vh] flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white/90 text-slate-500 hover:text-slate-900 hover:bg-white shadow-sm transition-all"
                    aria-label="Close modal"
                >
                    <X size={18} />
                </button>

                <div className="relative w-full aspect-video bg-slate-100 flex-shrink-0">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="p-6 md:p-8 overflow-y-auto">
                    <div className="flex items-start justify-between gap-4 mb-3">
                        <div>
                            <h3 className="text-2xl font-bold text-[var(--primary)] font-zilla">
                                {project.title}
                            </h3>
                            <p className="text-sm text-[var(--secondary)] font-semibold tracking-wide uppercase mt-0.5">
                                {project.subtitle}
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-1.5 justify-end">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-500"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-3">
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-5 py-2.5 bg-[var(--primary)] text-white rounded-full text-sm font-bold hover:bg-[var(--secondary)] transition-colors"
                            >
                                <ExternalLink size={15} />
                                Live Demo
                            </a>
                        )}
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-5 py-2.5 border border-slate-200 text-slate-700 rounded-full text-sm font-bold hover:border-slate-400 transition-colors"
                        >
                            <GitBranch size={15} />
                            Source Code
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
    return (
        <button
            onClick={onClick}
            className="group relative bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left w-full"
        >
            <div className="relative aspect-video overflow-hidden bg-slate-100">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {!project.liveUrl && (
                    <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider bg-slate-800/80 text-white px-2.5 py-1 rounded-full backdrop-blur-sm">
                        No deploy yet
                    </span>
                )}
            </div>

            <div className="p-5 flex items-start justify-between gap-2">
                <div>
                    <h3 className="font-bold text-lg text-[var(--primary)] font-zilla leading-tight">
                        {project.title}
                    </h3>
                    <p className="text-xs text-[var(--secondary)] font-semibold uppercase tracking-wide mt-0.5">
                        {project.subtitle}
                    </p>
                </div>
                <ArrowUpRight
                    size={20}
                    className="text-slate-300 group-hover:text-[var(--secondary)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0 mt-1"
                />
            </div>
        </button>
    );
}

// ─── Art Direction Row ────────────────────────────────────────────────────────

function ArtRow({ project, index }: { project: ArtProject; index: number }) {
    const isEven = index % 2 === 0;

    return (
        <div
            className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-0 items-stretch border-b border-slate-100 last:border-b-0`}
        >
            {/* Image */}
            <div className="relative w-full md:w-1/2 aspect-[4/3] overflow-hidden bg-slate-100">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                />
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2 flex flex-col justify-center px-8 py-10 md:px-12 md:py-14 bg-white">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--secondary)] mb-3">
                    {project.category}
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-[var(--primary)] font-zilla mb-6 leading-tight">
                    {project.title}
                </h3>

                <div className="space-y-4">
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1.5">
                            Concept
                        </p>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            {project.concept}
                        </p>
                    </div>
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1.5">
                            Art Direction
                        </p>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            {project.direction}
                        </p>
                    </div>
                </div>

                {/* Link para Behance */}
                {project.behanceUrl && (
                    <a
                        href={project.behanceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-8 text-slate-900 font-bold hover:text-[var(--secondary)] transition-colors group text-xs uppercase tracking-widest"
                    >
                        <span className="border-b border-slate-900 group-hover:border-[var(--secondary)] pb-0.5">
                            View Full Project
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
    const [selectedProject, setSelectedProject] =
        useState<FrontendProject | null>(null);

    return (
        <section id="projects" className="py-24 scroll-mt-20">
            {/* Frontend Projects */}
            <div className="max-w-6xl mx-auto px-6 mb-28">
                <div className="mb-12">
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--secondary)] mb-2">
                        Selected Work
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-[var(--primary)] font-zilla tracking-tight">
                        Frontend Development
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {frontendProjects.map((project) => (
                        <FrontendCard
                            key={project.id}
                            project={project}
                            onClick={() => setSelectedProject(project)}
                        />
                    ))}
                </div>
            </div>

            {/* Art Direction Section */}
            <div className="max-w-6xl mx-auto px-6 mb-12">
                <div className="mb-12">
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--secondary)] mb-2">
                        Creative Background
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-[var(--primary)] font-zilla tracking-tight">
                        Art Direction
                    </h2>
                </div>
            </div>

            <div className="max-w-6xl mx-auto border border-slate-100 rounded-2xl overflow-hidden">
                {artProjects.map((project, index) => (
                    <ArtRow key={project.id} project={project} index={index} />
                ))}
            </div>

            {/* Modal */}
            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}

            {/* ── Behance CTA ── */}
            <div className="max-w-6xl mx-auto px-6 mt-16 flex flex-col items-center text-center gap-4">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400 font-bold">
                    Quer ver mais?
                </p>
                <a
                    href="https://www.behance.net/deborameirele/projects"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border border-slate-200 text-slate-700 font-bold text-sm hover:border-[var(--secondary)] hover:text-[var(--secondary)] hover:shadow-md transition-all duration-300"
                >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0">
                        <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h2.352zm-7.726-2.22c.122-1.994-.547-3.278-2.178-3.278-1.678 0-2.349 1.313-2.35 3.278h4.528zm-8.983-5.38c1.16.147 2.338.57 2.338 2.21 0 1.195-.745 2.066-1.938 2.336v.03c1.403.17 2.488.934 2.488 2.538 0 2.104-1.695 2.886-3.877 2.886H2V9.4h5.017zM4.124 13.5h2.42c1.017 0 1.76-.392 1.76-1.39 0-.929-.686-1.33-1.79-1.33H4.124v2.72zm0 4.022h2.618c1.124 0 1.95-.434 1.95-1.545 0-1.05-.797-1.527-1.95-1.527H4.124v3.072z" />
                    </svg>
                    Explorar portfólio no Behance
                    <ArrowUpRight
                        size={15}
                        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                </a>
            </div>
        </section >
    );
}