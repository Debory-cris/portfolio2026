import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("contact");
    return {
        title: t("metaTitle"),
        description: t("metaDescription"),
    };
}

export default function ContactPage() {
    const t = useTranslations("contact");

    const CONTACTS = [
        {
            label: "WhatsApp",
            description: t("whatsapp"),
            href: "https://wa.me/5511949786008",
            display: "+55 (11) 94978-6008",
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.528 5.845L.057 23.571a.75.75 0 0 0 .93.903l5.87-1.894A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.89 0-3.66-.523-5.17-1.432l-.37-.22-3.835 1.238 1.175-3.72-.242-.383A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
            ),
            color: "hover:border-green-400 hover:text-green-600 group-hover:bg-green-50",
            iconColor: "text-green-500",
        },
        {
            label: "LinkedIn",
            description: t("linkedin"),
            href: "https://www.linkedin.com/in/deborameireles-dev/",
            display: "deborameireles-dev",
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            ),
            color: "hover:border-blue-500 hover:text-blue-600 group-hover:bg-blue-50",
            iconColor: "text-blue-500",
        },
        {
            label: "Email",
            description: t("email"),
            href: "mailto:crisdebory@gmail.com",
            display: "crisdebory@gmail.com",
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
                    <rect x="2" y="4" width="20" height="16" rx="3" />
                    <path d="m2 7 10 7 10-7" />
                </svg>
            ),
            color: "hover:border-rose-400 hover:text-rose-600 group-hover:bg-rose-50",
            iconColor: "text-rose-500",
        },
        {
            label: "GitHub",
            description: t("github"),
            href: "https://github.com/Debory-cris",
            display: "Debory-cris",
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
            ),
            color: "hover:border-slate-700 hover:text-slate-900 group-hover:bg-slate-50",
            iconColor: "text-slate-700",
        },
    ];

    return (
        <main className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-24">

            {/* Header */}
            <div className="text-center mb-16">
                <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[var(--secondary)] mb-4">
                    {t("eyebrow")}
                </p>
                <h1 className="text-5xl md:text-6xl font-bold text-[var(--primary)] font-zilla tracking-tight mb-6">
                    {t("title")}
                </h1>
                <p className="text-slate-500 text-base md:text-lg max-w-md mx-auto leading-relaxed">
                    {t("subtitle")}
                </p>
            </div>

            {/* Contact cards */}
            <div className="w-full max-w-lg flex flex-col gap-3">
                {CONTACTS.map(({ label, description, href, display, icon, color, iconColor }) => (
                    <a
                        key={label}
                        href={href}
                        target={href.startsWith("mailto") ? "_self" : "_blank"}
                        rel="noopener noreferrer"
                        className={`group flex items-center gap-5 px-6 py-5 rounded-2xl border border-slate-200 bg-white transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 ${color}`}
                    >
                        <div className={`flex-shrink-0 ${iconColor} transition-colors`}>
                            {icon}
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-0.5">
                                {label}
                            </p>
                            <p className="text-sm font-semibold text-slate-700 truncate">
                                {display}
                            </p>
                        </div>
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            className="w-4 h-4 text-slate-300 group-hover:text-current group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0"
                        >
                            <path d="M7 17L17 7M17 7H7M17 7v10" />
                        </svg>
                    </a>
                ))}
            </div>
        </main>
    );
}