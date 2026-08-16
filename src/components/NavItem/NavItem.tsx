import { NavLink } from "react-router-dom"

type NavItemProps = {
    href: string
    icon: string
    label: string
    badge?: number
}

export default function NavItem({ href, icon, label, badge }: NavItemProps) {
    return (
        <li className="w-full">
            <NavLink to={href} className={({ isActive }) => `m-1 flex items-center justify-start gap-3 lg:gap-2 font-sans font-semibold rounded-md text-base lg:text-[13px] 2xl:text-sm p-3 lg:p-2 2xl:p-3 ${isActive ? "bg-[var(--Neutral-0)] text-[var(--Neutral-900)]" : "text-[var(--Neutral-600)] hover:bg-[var(--Neutral-0)]"} focus:outline-2 focus:bg-[var(--Neutral-0)] focus:outline-[var(--Terracotta-700)] active:opacity-50 outline-offset-2`}>
                <img src={icon} alt="" className="mt-[1px] w-6 h-6 lg:w-5 lg:h-5 2xl:w-6 2xl:h-6 shrink-0 object-contain" />
                <span>{label}</span>
                {badge !== undefined && badge > 0 && (
                    <span className="flex items-center justify-center font-fraunces font-normal w-5 h-5 lg:w-4 lg:h-4 2xl:w-5 2xl:h-5 shrink-0 text-center text-[11px] 2xl:text-xs rounded-full bg-[var(--Terracotta-700)] text-[var(--Neutral-0)] ml-auto" aria-label={`${badge} new notifications`}>
                        <span aria-hidden="true" className="pt-[2px]">{badge}</span>
                    </span>
                )}
            </NavLink>
        </li>
    )
}