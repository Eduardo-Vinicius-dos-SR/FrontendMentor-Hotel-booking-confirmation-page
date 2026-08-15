import { useRef, useState } from "react"
import { toBlob } from "html-to-image"
import GuestInfo from "../GuestInfo/GuestInfo"
import ReceiptCard from "../ReceiptCard/ReceiptCard"
import WelcomeCard from "../WelcomeCard/WelcomeCard"
import { buildGoogleCalendarUrl } from "../../utils/calendar"
import { shareOrDownloadFile } from "../../utils/fileActions"
import Button from "../Button/Button"

export default function Hero() {
    const userName = "Lucia"
    const receiptRef = useRef<HTMLDivElement>(null)
    const [feedback, setFeedback] = useState<string | null>(null)

    const booking = {
        roomName: "La Garrigue",
        checkIn: { date: "25 Apr", day: "Saturday", time: "15:00", iso: new Date("2026-04-25T15:00:00") },
        checkOut: { date: "29 Apr", day: "Wednesday", time: "11:00", iso: new Date("2026-04-29T11:00:00") },
        items: [
            { label: "Room · La Garrigue × 4 nights", value: "€ 620.00" },
            { label: "Breakfast × 2 guests", value: "€ 96.00" },
            { label: "Tourist tax", value: "€ 14.40" },
        ],
        total: "€ 730.40",
        paymentMethod: "Paid · Wise · GBP",
        arrivalNote: "Ring the brass bell by the blue door. If we're at the market, the key is in the terracotta pot by the olive tree.",
    }

    async function handlePrintReceipt() {
        if (!receiptRef.current) return
        setFeedback(null)

        try {
            const blob = await toBlob(receiptRef.current, {
                pixelRatio: 2,
                backgroundColor: "#ffffff",
            })

            if (!blob) {
                setFeedback("Não foi possível gerar a imagem do recibo neste aparelho.")
                return
            }

            const file = new File([blob], "maison-soleil-receipt.png", { type: "image/png" })
            const result = await shareOrDownloadFile(file, "maison-soleil-receipt.png")

            if (result.status === "unsupported") {
                setFeedback("Salvar imagem não é suportado neste navegador ou aparelho.")
            }
        } catch (error) {
            console.error("Erro ao gerar imagem do receipt:", error)
            setFeedback("Ocorreu um erro ao salvar o recibo. Tente novamente.")
        }
    }

    function handleAddToCalendar() {
        setFeedback(null)

        const url = buildGoogleCalendarUrl({
            title: "Maison Soleil · La Garrigue",
            description: "Check-in from 15:00. Ring the brass bell by the blue door.",
            location: "12 Rue des Oliviers, Cassis",
            start: new Date("2026-04-25T15:00:00"),
            end: new Date("2026-04-29T11:00:00"),
        })

        const opened = window.open(url, "_blank", "noopener,noreferrer")

        if (!opened) {
            setFeedback("Não foi possível abrir o Google Calendar. Verifique o bloqueador de pop-ups.")
        }
    }

    return (
        <main className="mt-18 lg:mt-0 p-4 lg:p-8 2xl:p-10 lg:pl-[calc(240px+3rem)] 2xl:pl-[calc(300px+3rem)] h-full w-full flex flex-col justify-start gap-12 lg:gap-10 2xl:gap-12">
            <header className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6">
                <div className="flex flex-col gap-3 lg:gap-1 2xl:gap-2 text-left">
                    <p className="text-[11px] 2xl:text-xs uppercase font-semibold text-[var(--Neutral-600)]"><span className="mr-2">Booking</span> · <span className="ml-2">Confirmed</span></p>
                    <h1 className="text-4xl lg:text-3xl 2xl:text-4xl font-bold text-[var(--Neutral-800)] font-fraunces font-normal">Bienvenue, <span className="text-[var(--Terracotta-700)] font-base italic">{userName}.</span></h1>
                </div>

                <div className="flex flex-col items-center lg:items-end gap-2 w-full lg:w-auto">
                    <div className="flex w-full lg:w-auto justify-center lg:justify-end gap-4 lg:gap-3 2xl:gap-4 text-sm">
                        <Button variant="outline" onClick={handlePrintReceipt}>Print receipt</Button>
                        <Button variant="solid" onClick={handleAddToCalendar}>Add to calendar</Button>
                    </div>

                    {feedback && (
                        <p role="status" aria-live="polite" className="text-xs text-[var(--Terracotta-700)] text-center lg:text-right">
                            {feedback}
                        </p>
                    )}
                </div>
            </header>

            <section className="flex 2xl:my-4 flex-col items-center lg:items-start gap-8 lg:gap-1 2xl:gap-3">
                <div className="group w-full flex flex-col items-center lg:flex-row lg:justify-center lg:items-start gap-3 lg:gap-0">
                    <div className="w-full max-w-90 order-2 lg:order-1 relative z-0 transition-transform duration-300 ease-out lg:group-hover:-translate-x-6 lg:group-hover:-translate-y-1">
                        <ReceiptCard ref={receiptRef} receiptNumber="MS-2026" receiptCode="0421-AH" checkIn={booking.checkIn} checkOut={booking.checkOut} items={booking.items} total={booking.total} paymentMethod={booking.paymentMethod} />
                    </div>

                    <div className="w-full max-w-90 order-1 lg:order-2 relative transition-transform duration-300 ease-out lg:group-hover:translate-x-6 lg:group-hover:translate-y-1">
                        <WelcomeCard hostName="Margaux" roomName={booking.roomName} message="We're so glad you're coming. The shutters will be open, the lemonade cold, and the cat - Poivre - pretending not to notice you." />
                    </div>
                </div>

                <p className="hidden w-full lg:block text-[10px] 2xl:text-[12px] text-center uppercase tracking-[0.2em] text-[var(--Neutral-600)] mb-10">
                    <span className="text-[var(--Terracotta-700)]">✦</span> Hover to fan <span className="text-[var(--Terracotta-700)]">✦</span>
                </p>

                <GuestInfo />
            </section>
        </main>
    )
}