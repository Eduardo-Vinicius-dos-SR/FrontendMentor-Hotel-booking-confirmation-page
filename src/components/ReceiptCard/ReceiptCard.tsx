import { forwardRef } from "react"
import BarCode from "../../assets/images/icon-barcode.svg"

type LineItem = {
    label: string
    value: string
}

type ReceiptCardProps = {
    receiptNumber: string | number
    receiptCode: string
    checkIn: { date: string; day: string; time: string }
    checkOut: { date: string; day: string; time: string }
    items: LineItem[]
    total: string
    paymentMethod: string
}

const ReceiptCard = forwardRef<HTMLDivElement, ReceiptCardProps>(
    ({ receiptNumber, receiptCode, checkIn, checkOut, items, total, paymentMethod }, ref) => {
        return (
           <article ref={ref} className="w-full order-2 lg:order-1 relative flex flex-col rotate-[-2deg] lg:rotate-[-4deg] gap-3 text-left bg-[var(--Neutral-0)] rounded-2xl p-5 lg:p-4 2xl:p-5 shadow-[var(--shadow)]">
                <header className="w-full flex flex-col items-start justify-between 2xl:gap-1">
                    <span className="text-[10px] 2xl:text-xs uppercase tracking-wide text-[var(--Neutral-600)]">Receipt</span>
                    <div className="absolute top-5 right-5 text-[10px] 2xl:text-[12px] text-right text-[var(--Neutral-600)] font-mono flex flex-col">
                        <span className="max-h-max">№ {receiptNumber}</span>
                        <span className="max-h-max mt-[-3px]">{receiptCode}</span>
                    </div>
                    <h2 className="font-fraunces text-xl 2xl:text-[22px] text-[var(--Neutral-900)]">Your stay</h2>
                </header>

                <div className="flex justify-between lg:justify-around text-center gap-4 py-4 border-b border-[var(--Neutral-400)] border-t border-dashed">
                    <div className="flex flex-col 2xl:gap-1">
                        <span className="text-[10px] 2xl:text-xs uppercase text-[var(--Neutral-600)]">Check in</span>
                        <span className="font-fraunces text-3xl text-[var(--Neutral-900)]">{checkIn.date}</span>
                        <span className="text-xs text-[var(--Neutral-600)]">{checkIn.day} · {checkIn.time}</span>
                    </div>
                    <div className="flex flex-col 2xl:gap-1">
                        <span className="text-[10px] 2xl:text-xs uppercase text-[var(--Neutral-600)]">Check out</span>
                        <span className="font-fraunces font-normal text-3xl text-[var(--Neutral-900)]">{checkOut.date}</span>
                        <span className="text-xs text-[var(--Neutral-600)]">{checkOut.day} · {checkOut.time}</span>
                    </div>
                </div>

                <ul className="flex flex-col gap-1 lg:gap-0 2xl:gap-2 pb-4 border-b border-[var(--Neutral-900)]">
                    {items.map((item, index) => (
                        <li key={item.label} className="flex items-center justify-between text-[var(--Neutral-700)]">
                            <span className={`font-sans text-[13px] 2xl:text-xs ${index < 2 ? 'font-semibold' : ''}`}>{item.label}</span>
                            <span className={`font-mono text-xs ${index < 2 ? 'font-semibold' : ''}`}>{item.value}</span>
                        </li>
                    ))}
                </ul>

                <div className="flex font-mono items-center justify-between">
                    <span className="text-xs lg:text-[12px] 2xl:text-xs uppercase tracking-[0.2em] text-[var(--Neutral-600)]">Total paid</span>
                    <span className="font-fraunces font-normal text-2xl lg:text-xl 2xl:text-[23px] text-[var(--Neutral-900)]">{total}</span>
                </div>

                <footer className="flex items-center justify-between font-mono pt-2">
                    <span className="text-xs lg:text-[11px] 2xl:text-[12px] uppercase tracking-widest text-[var(--Neutral-600)]">{paymentMethod}</span>
                    <img src={BarCode} alt="Bar Code" />
                </footer>
            </article>
        )
    }
)

ReceiptCard.displayName = "ReceiptCard"

export default ReceiptCard