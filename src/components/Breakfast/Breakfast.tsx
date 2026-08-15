import PageLayout from "../PageLayout/PageLayout"
import PageHeader from "../PageHeader/PageHeader"

type MenuItem = {
    name: string
    description: string
    tag?: string
}

const menu: MenuItem[] = [
    { name: "Pain au levain", description: "Baked that morning by the bakery on Rue Séverin Icard.", tag: "Daily" },
    { name: "Marseille honey & fresh figs", description: "From the hives just outside town, in season.", tag: "Seasonal" },
    { name: "Espresso or café au lait", description: "Locally roasted beans, brewed to order." },
    { name: "Orange & lemon juice", description: "Pressed from the garden's citrus trees." },
    { name: "Gluten-free bread", description: "Available on request — just leave a note the night before.", tag: "On request" },
]

export default function Breakfast() {
    return (
        <PageLayout>
            <PageHeader eyebrow="Served daily" title="Breakfast" highlight="on the terrace." />

            <section className="flex flex-col lg:flex-row gap-4 lg:gap-6 2xl:gap-8">
                <article className="w-full lg:max-w-70 flex flex-col gap-2 text-left bg-[var(--Sun-200)] text-[var(--Neutral-800)] rounded-2xl p-5 lg:p-4 2xl:p-5">
                    <span className="text-[10px] 2xl:text-xs uppercase tracking-widest">Hours</span>
                    <span className="font-fraunces text-3xl lg:text-2xl 2xl:text-3xl">8:00 – 10:30</span>
                    <span className="text-xs lg:text-[11px] 2xl:text-xs">On the terrace, weather permitting — otherwise in the kitchen.</span>
                </article>

                <ul className="flex-1 flex flex-col bg-[var(--Neutral-0)] rounded-2xl border border-[var(--Neutral-400)] shadow-[var(--shadow)] divide-y divide-dashed divide-[var(--Neutral-400)] p-2 lg:p-1 2xl:p-2">
                    {menu.map((item) => (
                        <li key={item.name} className="flex flex-col gap-1 text-left p-4 lg:p-3 2xl:p-4">
                            <div className="flex items-center justify-between gap-3">
                                <span className="font-fraunces text-xl lg:text-lg 2xl:text-xl text-[var(--Neutral-900)]">{item.name}</span>
                                {item.tag && (
                                    <span className="shrink-0 text-[9px] 2xl:text-[10px] uppercase tracking-widest text-[var(--Terracotta-600)] font-mono">{item.tag}</span>
                                )}
                            </div>
                            <p className="text-sm lg:text-xs 2xl:text-sm text-[var(--Neutral-600)]">{item.description}</p>
                        </li>
                    ))}
                </ul>
            </section>
        </PageLayout>
    )
}