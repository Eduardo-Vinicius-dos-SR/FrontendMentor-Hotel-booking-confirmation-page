import PageLayout from "../PageLayout/PageLayout.tsx"
import PageHeader from "../PageHeader/PageHeader.tsx"

type Place = {
    name: string
    category: string
    distance: string
    description: string
}

const places: Place[] = [
    {
        name: "Marché de Cassis",
        category: "Market",
        distance: "5 min walk",
        description: "Every morning on Place Baragnon — local cheese, ripe figs, and the best socca in town.",
    },
    {
        name: "Calanque de Port-Miou",
        category: "Nature",
        distance: "12 min walk",
        description: "The closest calanque to the house — turquoise water, easy trail, worth an early start.",
    },
    {
        name: "La Villa Madie",
        category: "Restaurant",
        distance: "8 min drive",
        description: "Michelin-starred, perched over the water. Book a table well ahead for sunset.",
    },
    {
        name: "Plage du Bestouan",
        category: "Beach",
        distance: "10 min walk",
        description: "A small pebble beach, quieter than the main port — good for a swim before breakfast.",
    },
    {
        name: "Café de la Marine",
        category: "Café",
        distance: "6 min walk",
        description: "Right on the port. Come for the espresso, stay for watching the fishing boats come in.",
    },
    {
        name: "Route des Crêtes",
        category: "Scenic drive",
        distance: "15 min drive",
        description: "Cliffside road toward La Ciotat — dramatic views, a few lookout points worth stopping for.",
    },
]

export default function Town() {
    return (
        <PageLayout>
            <PageHeader eyebrow="Cassis, France" title="Around" highlight="town." />

            <section className="grid gap-4 lg:gap-3 2xl:gap-4 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
                {places.map((place) => (
                    <article key={place.name}
                        className="w-full flex flex-col gap-2 text-left bg-[var(--Neutral-0)] rounded-2xl border border-[var(--Neutral-400)] shadow-[var(--shadow)] p-5 lg:p-4 2xl:p-5">
                        <div className="flex items-center justify-between">
                            <span className="text-[10px] 2xl:text-xs uppercase tracking-widest font-mono text-[var(--Terracotta-600)]">{place.category}</span>
                            <span className="text-[10px] 2xl:text-xs uppercase tracking-widest text-[var(--Neutral-600)]">{place.distance}</span>
                        </div>
                        <h3 className="font-fraunces text-2xl lg:text-xl 2xl:text-2xl text-[var(--Neutral-900)]">{place.name}</h3>
                        <p className="text-sm lg:text-xs 2xl:text-sm text-[var(--Neutral-700)] leading-relaxed">{place.description}</p>
                    </article>
                ))}
            </section>
        </PageLayout>
    )
}