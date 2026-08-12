export default function Hero() {
    const userName = "Lucia"

    return (
        <main className="mt-18 p-4 h-full w-full flex flex-col justify-start gap-6 lg:gap-8">
            <header className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-8">
                <div className="flex flex-col gap-3 text-left">
                    <p className="text-xs uppercase font-semibold text-[var(--Neutral-600)]"><span className="mr-2">Booking</span> · <span className="ml-2">Confirmed</span></p>
                    <h1 className="text-4xl font-bold text-[var(--Neutral-800)] font-fraunces font-normal">&nbsp; Bienvenue, <span className="text-[var(--Terracotta-700)] font-base italic">{userName}.</span></h1>
                </div>
                <div className="flex w-full justify-center gap-4 lg:gap-5 text-sm">
                    <button className="px-7 py-2 border border-[var(--Neutral-600)] text-[var(--Neutral-900)] font-bold rounded-4xl hover:bg-[var(--Neutral-700)] hover:text-[var(--Neutral-100)]">Print receipt</button>
                    <button className="px-7 py-2 border border-[var(--Neutral-900)] text-[var(--Neutral-100)] rounded-4xl bg-[var(--Neutral-900)] hover:bg-[var(--Neutral-100)] hover:text-[var(--Neutral-900)]">Add to calendar</button>
                </div>
            </header>

            <section>
                <div>
                    <article>
                    </article>
                    <article></article>
                </div>
                <p></p>
            </section>
        </main>

    )
}