import InfoCard from "../InfoCard/InfoCard.tsx"
import ArrivalIcon from "../../assets/images/icon-key.svg"
import WifiIcon from "../../assets/images/icon-wifi.svg"
import BreakfastIcon from "../../assets/images/icon-breakfast.svg"
import WifiDetails from "../WifiDetails/WifiDetails.tsx"

export default function GuestInfo() {
    return (
        <div className="grid w-full gap-5 lg:gap-6 2xl:gap-7 grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
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