import { useState } from "react"
import InfoCard from "../InfoCard/InfoCard.tsx"
import ArrivalIcon from "../../assets/images/icon-key.svg"
import WifiIcon from "../../assets/images/icon-wifi.svg"
import BreakfastIcon from "../../assets/images/icon-breakfast.svg"

function WifiDetails({ network, password }: { network: string; password: string }) {
    const [copied, setCopied] = useState(false)

    async function handleCopy() {
        try {
            await navigator.clipboard.writeText(password)
            setCopied(true)
            setTimeout(() => setCopied(false), 1500)
        } catch {
            // clipboard indisponível, ignora silenciosamente
        }
    }

    return (
        <div className="flex flex-col gap-1 text-xs">
            <div className="flex items-center justify-between rounded-lg bg-[var(--Neutral-200)] py-2 px-3">
                <span className="uppercase tracking-widest text-[var(--Neutral-600)]">Network</span>
                <span className="text-[var(--Neutral-900)]">{network}</span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-[var(--Neutral-200)] py-2 px-3">
                <span className="uppercase tracking-widest text-[var(--Neutral-600)]">Password</span>
                <span className="flex items-center gap-2 text-[var(--Neutral-900)]">
                    {password}
                    <button type="button" onClick={handleCopy}
                        className="flex uppercase items-center gap-1 px-2 tracking-wide py-0.5 rounded-full border border-[var(--Neutral-400)] text-[var(--Neutral-600)] cursor-pointer hover:bg-[var(--Neutral-0)]">
                        {copied ? "Copied" : "Copy"}
                    </button>
                </span>
            </div>
        </div>
    )
}

export default function GuestInfo() {
    return (
        <div className="flex flex-col gap-5 w-full max-w-90 mt-10 flex-wrap">
            <InfoCard
                icon={ArrivalIcon}
                iconBg="bg-[var(--Terracotta-600)]"
                label="Arrival"
                labelColor="text-[var(--Terracotta-600)]"
                number="01"
                title="Check-in from 15:00"
                subtitle="Sat, 25 April"
                description="Ring the brass bell by the blue door. If we're at the market, the key is in the terracotta pot by the olive tree."
            />

            <InfoCard
                icon={WifiIcon}
                iconBg="bg-[var(--Blue-500)]"
                label="Wifi"
                labelColor="text-[var(--Blue-500)]"
                number="02"
                title="Le Soleil · Guest"
                subtitle="Password below"
            >
                <WifiDetails network="Le Soleil · Guest" password="soleil-2026" />
            </InfoCard>

            <InfoCard
                icon={BreakfastIcon}
                iconBg="bg-[var(--Rose-500)]"
                label="Breakfast"
                labelColor="text-[var(--Rose-500)]"
                number="03"
                title="Served 8 – 10:30"
                subtitle="On the terrace"
                description="Fresh figs, Marseille honey, pain au levain, and espresso. Gluten-free option? Leave a note the night before."
            />
        </div>
    )
}