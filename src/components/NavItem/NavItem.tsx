type NavItemProps = {
    href: string
    icon: string
    label: string
    badge?: number
}

export default function NavItem({ href, icon, label, badge }: NavItemProps) {
    return (
        <li className="w-full">
            <a className="flex items-center justify-start gap-2 rounded-md hover:bg-[var(--Neutral-0)] p-3" href={href}>
                <img src={icon} alt="" className="mt-[2px] w-5 h-5 shrink-0 object-contain"  />
                <span>{label}</span>
                {badge !== undefined && badge > 0 && (
                    <span className="font-fraunces pt-[1px] w-4 h-4 max-h-max flex items-center justify-center text-center text-[9px] rounded-full bg-[var(--Terracotta-700)] text-[var(--Neutral-0)] ml-auto justify-self-end" aria-label={`${badge} new notifications`}>
                        {badge}
                    </span>
                )}
            </a>
        </li>
    )
}