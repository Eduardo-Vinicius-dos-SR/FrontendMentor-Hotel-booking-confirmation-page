import type { ReactNode } from "react"

type InfoCardProps = {
    icon: any
    iconBg: string
    label: string
    labelColor: string
    number: string
    title: string
    subtitle: string
    description?: string
    children?: ReactNode
}

export default function InfoCard({ icon, iconBg, label, labelColor, number, title, subtitle, description, children }: InfoCardProps) {
    return (
        <article className="w-full flex flex-col gap-4 text-left bg-[var(--Neutral-0)] rounded-2xl p-4 border border-[var(--Neutral-400)] shadow-[var(--shadow)]">
            <header className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className={`flex items-center justify-center w-9 h-9 p-2 rounded-lg shrink-0 ${iconBg}`}>
                        <img src={icon} alt={`Icon ${label}`} className="w-full" />
                    </span>
                    <span className={`text-base font-mono font-semibold uppercase tracking-widest ${labelColor}`}>{label}</span>
                </div>
                <span className={`font-fraunces font-normal text-2xl ${labelColor}`}>{number}</span>
            </header>

            <div className="flex flex-col gap-1">
                <h3 className="font-fraunces text-2xl text-[var(--Neutral-900)]">{title}</h3>
                <p className="text-xs text-[var(--Neutral-600)]">{subtitle}</p>
            </div>

            {description && <p className="text-sm text-[var(--Neutral-700)] leading-relaxed">{description}</p>}

            {children}
        </article>
    )
}