type ButtonProps = {
    variant: "outline" | "solid"
    onClick: () => void
    children: React.ReactNode
}

export default function Button({ variant, onClick, children }: ButtonProps) {
    const base = "px-7 lg:px-5 2xl:px-6 py-2 rounded-4xl cursor-pointer whitespace-nowrap text-sm lg:text-xs 2xl:text-sm transition-colors duration-200 ease-in-out"
    const styles = variant === "outline"
        ? "border border-[var(--Neutral-600)] text-[var(--Neutral-900)] hover:bg-[var(--Neutral-200)] font-bold"
        : "border border-[var(--Neutral-900)] text-[var(--Neutral-100)] bg-[var(--Neutral-900)] font-medium hover:bg-[var(--Neutral-700)]"

    return (
        <button type="button" onClick={onClick} className={`${base} ${styles}`}>
            {children}
        </button>
    )
}