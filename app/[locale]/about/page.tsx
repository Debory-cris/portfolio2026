"use client";
import { IoMdSchool, IoMdBriefcase, IoMdCodeWorking, IoMdGlobe } from "react-icons/io";
import { useTranslations } from "next-intl";

export default function AboutMe() {
    const t = useTranslations("about");

    return (
        <section
            id="about"
            className="max-w-6xl mx-auto py-24 px-6 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start scroll-mt-20 font-sans"
        >
            {/* Coluna da Foto e Perfil */}
            <div className="md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left md:sticky md:top-28 w-full mb-10 md:mb-0">
                <div className="w-56 h-64 md:w-60 md:h-72 rounded-2xl overflow-hidden mb-6 shadow-xl border-2 border-blue-500/10 transition-transform hover:scale-105 duration-300 mx-auto md:mx-0">
                    <img
                        src="/perfil.png"
                        alt="Débora Cristina Meireles"
                        className="w-full h-full object-cover"
                    />
                </div>
                <h1 className="text-3xl font-bold mb-2 text-[var(--primary)] font-zilla">Débora Cristina Meireles</h1>
                <p className="text-[var(--secondary)] font-semibold mb-4 tracking-wide uppercase text-sm">
                    Frontend Developer & Art Director
                </p>
                <p className="text-slate-600 text-base leading-relaxed mb-6">
                    {t("tagline")}
                </p>

                {/* Idioma */}
                <div className="flex items-center gap-2 text-[var(--primary)] bg-[var(--tertiary)]/25 px-4 py-2 rounded-lg border border-[var(--tertiary)]">
                    <IoMdGlobe className="text-[var(--tertiary)]" />
                    <span className="text-sm font-medium">{t("english")}: <strong>{t("englishLevel")}</strong></span>
                </div>

                {/* Botão CV */}
                <a
                    href="/curriculo-debora-meireles.pdf"
                    download
                    className="flex items-center gap-2 mt-3 px-4 py-2 rounded-lg border border-slate-200 text-sm font-semibold text-slate-600 hover:border-[var(--secondary)] hover:text-[var(--secondary)] transition-all group"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
                    </svg>
                    {t("downloadCV")}
                </a>
            </div>

            {/* Coluna do "Currículo" */}
            <div className="md:col-span-2 space-y-12">

                {/* Formação Acadêmica */}
                <div>
                    <h2 className="text-xl font-bold mb-6 border-b pb-2 flex items-center gap-2 text-[var(--primary)]">
                        <IoMdSchool className="text-[var(--secondary)]" size={24} /> {t("education")}
                    </h2>
                    <div className="flex flex-col gap-4">

                        <div className="p-5 rounded-xl bg-slate-50 border border-slate-100 relative overflow-hidden group">
                            <div className="absolute left-0 top-0 w-1 h-full bg-[var(--secondary)]"></div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="font-bold text-slate-800">{t("cs.title")}</h3>
                                    <p className="text-sm text-[var(--secondary)] font-medium">{t("cs.school")}</p>
                                </div>
                                <span className="text-[10px] font-bold bg-blue-100 text-[var(--secondary)] px-2 py-1 rounded">{t("inProgress")}</span>
                            </div>
                            <p className="text-xs text-slate-500 mt-2 font-medium">{t("cs.period")}</p>
                        </div>

                        <div className="p-5 rounded-xl bg-slate-50 border border-slate-100 hover:bg-blue-50/30 transition-colors">
                            <h3 className="font-bold text-slate-800">{t("uxui.title")}</h3>
                            <p className="text-sm text-[var(--secondary)] font-medium">{t("uxui.school")}</p>
                            <p className="text-xs text-slate-500 mt-2 font-medium">{t("uxui.period")}</p>
                        </div>

                        <div className="p-5 rounded-xl bg-slate-50 border border-slate-100 hover:bg-blue-50/30 transition-colors">
                            <h3 className="font-bold text-slate-800">{t("design.title")}</h3>
                            <p className="text-sm text-[var(--secondary)] font-medium">{t("design.school")}</p>
                            <p className="text-xs text-slate-500 mt-2 font-medium">{t("design.period")}</p>
                        </div>
                    </div>
                </div>

                {/* Experiência Profissional */}
                <div>
                    <h2 className="text-xl font-bold mb-6 border-b pb-2 flex items-center gap-2 text-[var(--primary)]">
                        <IoMdBriefcase className="text-[var(--secondary)]" /> {t("experience")}
                    </h2>
                    <div className="space-y-8 border-l-2 border-slate-100 pl-6">
                        <div className="relative">
                            <div className="absolute -left-[25px] top-1 w-4 h-4 rounded-full bg-[var(--secondary)] border-4 border-white" />
                            <h3 className="font-bold text-lg text-slate-800">{t("artDir.title")}</h3>
                            <p className="text-sm text-[var(--secondary)] font-medium">{t("artDir.years")}</p>
                            <p className="mt-2 text-slate-600 leading-relaxed text-sm">
                                {t("artDir.description")}
                            </p>
                            <p className="mt-2 text-[10px] uppercase tracking-wider text-slate-400 font-bold">
                                {t("brands")}: <span className="text-slate-500">Natura • Avon • Unilever • Heliar</span>
                            </p>
                        </div>
                        <div className="relative">
                            <div className="absolute -left-[25px] top-1 w-4 h-4 rounded-full bg-slate-300 border-4 border-white" />
                            <h3 className="font-bold text-lg text-slate-800">{t("frontend.title")}</h3>
                            <p className="text-sm text-slate-500 italic font-medium">{t("frontend.period")}</p>
                            <p className="mt-2 text-slate-600 leading-relaxed text-sm">
                                {t("frontend.description")}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Stack Técnica */}
                <div>
                    <h2 className="text-xl font-bold mb-6 border-b pb-2 flex items-center gap-2 text-[var(--primary)]">
                        <IoMdCodeWorking className="text-[var(--secondary)]" /> {t("stack")}
                    </h2>
                    <div className="flex flex-wrap gap-2">
                        {['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'HTML', 'CSS', 'Figma', 'Adobe Pack', 'Lottie'].map((skill) => (
                            <span
                                key={skill}
                                className="bg-white border border-slate-200 px-4 py-1.5 rounded-lg text-xs font-bold text-slate-600 shadow-sm hover:border-blue-400 hover:text-blue-600 transition-all cursor-default"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}