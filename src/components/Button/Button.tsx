type ButtonProps = {
    variant: "outline" | "solid"
    onClick: () => void
    children: React.ReactNode
}

export default function Button({ variant, onClick, children }: ButtonProps) {
    const base = "px-6 lg:px-5 2xl:px-4 py-2 rounded-4xl cursor-pointer whitespace-nowrap text-sm lg:text-xs 2xl:text-sm transition-colors duration-200 ease-in-out focus:outline-3 focus:outline-[var(--Terracotta-700)] active:opacity-50 outline-offset-2"
    const styles = variant === "outline"
        ? "border border-[var(--Neutral-600)] text-[var(--Neutral-900)] hover:bg-[var(--Neutral-200)] font-bold"
        : "text-[var(--Neutral-100)] bg-[var(--Neutral-900)] font-medium hover:bg-[var(--Neutral-700)]"

    return (
        <button type="button" onClick={onClick} className={`${base} ${styles}`}>
            {children}
        </button>
    )
}