type PageHeaderProps = {
    eyebrow: string
    title: string
    highlight?: string
}

export default function PageHeader({ eyebrow, title, highlight }: PageHeaderProps) {
    return (
        <header className="flex flex-col gap-3 lg:gap-1 2xl:gap-2 text-left">
            <p className="text-[11px] 2xl:text-xs uppercase font-semibold text-[var(--Neutral-600)]">{eyebrow}</p>
            <h1 className="text-4xl lg:text-3xl 2xl:text-4xl font-bold text-[var(--Neutral-800)] font-fraunces font-normal">
                {title} {highlight && <span className="text-[var(--Terracotta-700)] font-base italic">{highlight}</span>}
            </h1>
        </header>
    )
}