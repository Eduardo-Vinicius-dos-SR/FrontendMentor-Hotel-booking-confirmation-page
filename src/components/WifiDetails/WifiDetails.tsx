import { useState } from "react"

type WifiDetailsProps = { network: string; password: string }

export default function WifiDetails({ network, password }: WifiDetailsProps) {
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
        <div className="flex flex-col gap-1 text-xs lg:text-[11px] 2xl:text-xs">
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