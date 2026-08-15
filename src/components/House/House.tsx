import PageLayout from "../../components/PageLayout/PageLayout"
import PageHeader from "../../components/PageHeader/PageHeader"

function WifiGlyph() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M4 8.5a13 13 0 0 1 16 0M7 12a8.5 8.5 0 0 1 10 0M10 15.5a4 4 0 0 1 4 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            <circle cx="12" cy="19" r="1.2" fill="currentColor" />
        </svg>
    )
}

function SnowflakeGlyph() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
            <path d="M12 3v18M5 7l14 10M19 7L5 17" />
        </svg>
    )
}

function KitchenGlyph() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <path d="M4 10h16M9 4v6" strokeLinecap="round" />
        </svg>
    )
}

function ParkingGlyph() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <rect x="4" y="4" width="16" height="16" rx="3" />
            <path d="M10 16V8h3a2.5 2.5 0 0 1 0 5h-3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

function WasherGlyph() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <rect x="4" y="3" width="16" height="18" rx="2" />
            <circle cx="12" cy="13" r="5" />
            <path d="M8 6h1" strokeLinecap="round" />
        </svg>
    )
}

function PoolGlyph() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
            <path d="M3 17c1.5 1.3 3 1.3 4.5 0s3-1.3 4.5 0 3 1.3 4.5 0 3-1.3 4.5 0" />
            <path d="M3 12c1.5 1.3 3 1.3 4.5 0s3-1.3 4.5 0 3 1.3 4.5 0 3-1.3 4.5 0" />
        </svg>
    )
}

function PawGlyph() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="7" cy="9" r="2" /><circle cx="12" cy="6.5" r="2" /><circle cx="17" cy="9" r="2" />
            <path d="M12 12c-3.5 0-6 2.3-6 5a2.5 2.5 0 0 0 4 2c1-.8 1.3-.8 2 0a2.5 2.5 0 0 0 4-2c0-2.7-2.5-5-6-5Z" />
        </svg>
    )
}

function TowelGlyph() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 3v18M6 3h12l-4 4 4 4H6" />
        </svg>
    )
}

const amenities = [
    { icon: <WifiGlyph />, label: "Fiber wifi throughout" },
    { icon: <SnowflakeGlyph />, label: "Air conditioning" },
    { icon: <KitchenGlyph />, label: "Full kitchen" },
    { icon: <ParkingGlyph />, label: "Private parking" },
    { icon: <WasherGlyph />, label: "Washer & dryer" },
    { icon: <PoolGlyph />, label: "Shared pool access" },
    { icon: <PawGlyph />, label: "Pets welcome" },
    { icon: <TowelGlyph />, label: "Beach towels provided" },
]

const houseRules = [
    "Check-out by 11:00 — just pull the door shut, it locks automatically.",
    "Quiet hours from 22:00, out of respect for the neighbours on Rue des Oliviers.",
    "No smoking indoors — the terrace and garden are both fine.",
    "Please leave the key in the terracotta pot if you're heading out early.",
]

export default function House() {
    return (
        <PageLayout>
            <PageHeader eyebrow="Maison Soleil · La Garrigue" title="The" highlight="house." />

            <section className="flex flex-col gap-4 lg:gap-3 2xl:gap-4">
                <h2 className="font-fraunces text-2xl lg:text-xl 2xl:text-2xl text-[var(--Neutral-900)] text-left">Amenities</h2>
                <div className="grid gap-4 lg:gap-3 2xl:gap-4 grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
                    {amenities.map((amenity) => (
                        <div key={amenity.label}
                            className="flex items-center gap-3 lg:gap-2 2xl:gap-3 bg-[var(--Neutral-0)] rounded-2xl border border-[var(--Neutral-400)] shadow-[var(--shadow)] p-4 lg:p-3 2xl:p-4">
                            <span className="flex items-center justify-center w-10 h-10 lg:w-9 lg:h-9 2xl:w-10 2xl:h-10 rounded-lg bg-[var(--Neutral-200)] text-[var(--Terracotta-600)] shrink-0">
                                {amenity.icon}
                            </span>
                            <span className="text-sm lg:text-xs 2xl:text-sm font-semibold text-[var(--Neutral-800)] text-left">{amenity.label}</span>
                        </div>
                    ))}
                </div>
            </section>

            <section className="flex flex-col gap-4 lg:gap-3 2xl:gap-4">
                <h2 className="font-fraunces text-2xl lg:text-xl 2xl:text-2xl text-[var(--Neutral-900)] text-left">House rules</h2>
                <ul className="flex flex-col bg-[var(--Neutral-0)] rounded-2xl border border-[var(--Neutral-400)] shadow-[var(--shadow)] divide-y divide-dashed divide-[var(--Neutral-400)]">
                    {houseRules.map((rule) => (
                        <li key={rule} className="text-left text-sm lg:text-xs 2xl:text-sm text-[var(--Neutral-700)] leading-relaxed p-4 lg:p-3 2xl:p-4">
                            {rule}
                        </li>
                    ))}
                </ul>
            </section>
        </PageLayout>
    )
}