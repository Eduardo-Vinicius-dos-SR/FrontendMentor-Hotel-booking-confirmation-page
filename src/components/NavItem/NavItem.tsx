type NavItemProps = {
    href: string
    icon: string
    label: string
    badge?: number
}

export default function NavItem({ href, icon, label, badge }: NavItemProps) {
    return (
        <li className="w-full">
            <a className="flex items-center justify-start gap-3 text-[var(--Neutral-600)] font-sans font-semibold rounded-md hover:bg-[var(--Neutral-0)] text-base p-3" href={href}>
                <img src={icon} alt="" className="mt-[1px] w-6 h-6 shrink-0 object-contain" />
                <span>{label}</span>
                {badge !== undefined && badge > 0 && (
                    <span
                        className="flex items-center justify-center font-fraunces font-normal w-5 h-5 shrink-0 text-center text-xs rounded-full bg-[var(--Terracotta-700)] text-[var(--Neutral-0)] ml-auto"
                        aria-label={`${badge} new notifications`}
                    >
                        <span aria-hidden="true" className="pt-[2px]">
                            {badge}
                        </span>
                    </span>
                )}
            </a>
        </li>
    )
}