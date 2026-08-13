import GuestInfo from "../GuestInfo/GuestInfo"
import ReceiptCard from "../ReceiptCard/ReceiptCard"
import WelcomeCard from "../WelcomeCard/WelcomeCard"

export default function Hero() {
    const userName = "Lucia"

    return (
        <main className="mt-18 p-4 h-full w-full flex flex-col justify-start gap-12 lg:gap-16">
            <header className="flex flex-col justify-between items-start gap-6 lg:gap-8">
                <div className="flex flex-col gap-3 text-left">
                    <p className="text-xs uppercase font-semibold text-[var(--Neutral-600)]"><span className="mr-2">Booking</span> · <span className="ml-2">Confirmed</span></p>
                    <h1 className="text-4xl font-bold text-[var(--Neutral-800)] font-fraunces font-normal">&nbsp; Bienvenue, <span className="text-[var(--Terracotta-700)] font-base italic">{userName}.</span></h1>
                </div>
                <div className="flex w-full justify-center gap-4 lg:gap-5 text-sm">
                    <button className="px-7 py-2 border border-[var(--Neutral-600)] text-[var(--Neutral-900)] font-bold rounded-4xl hover:bg-[var(--Neutral-700)] hover:text-[var(--Neutral-100)]">Print receipt</button>
                    <button className="px-7 py-2 border border-[var(--Neutral-900)] text-[var(--Neutral-100)] rounded-4xl bg-[var(--Neutral-900)] hover:bg-[var(--Neutral-100)] hover:text-[var(--Neutral-900)]">Add to calendar</button>
                </div>
            </header>

            <section className="flex flex-col items-center gap-3">
                <WelcomeCard
                    hostName="Margaux"
                    roomName="La Garrigue"
                    message="We're so glad you're coming. The shutters will be open, the lemonade cold, and the cat - Poivre - pretending not to notice you."
                />

                <div className="relative z-0">
                    <ReceiptCard
                        receiptNumber="MS-2026"
                        receiptCode = "0421-AH"
                        checkIn={{ date: "25 Apr", day: "Saturday", time: "15:00" }}
                        checkOut={{ date: "29 Apr", day: "Wednesday", time: "11:00" }}
                        items={[
                            { label: "Room · La Garrigue × 4 nights", value: "€ 620.00" },
                            { label: "Breakfast × 2 guests", value: "€ 96.00" },
                            { label: "Tourist tax", value: "€ 14.40" },
                        ]}
                        total="€ 730.40"
                        paymentMethod="Paid · Wise · GBP"
                    />
                </div>

                <GuestInfo />
            </section>
        </main>

    )
}