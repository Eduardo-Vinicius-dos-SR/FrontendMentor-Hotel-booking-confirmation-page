import { useState } from "react"
import Menu from "../../assets/images/icon-menu.svg"
import Close from "../../assets/images/icon-close.svg"
import logo from "../../assets/images/logo.svg"

import StayIcon from "../../assets/images/icon-bed.svg"
import HouseIcon from "../../assets/images/icon-house.svg"
import TownIcon from "../../assets/images/icon-pin.svg"
import BreakfastOutIcon from "../../assets/images/icon-breakfast-outline.svg"
import MessagesIcon from "../../assets/images/icon-mail.svg"

import NavItem from "../NavItem/NavItem"
import { useMediaQuery } from "../../hooks/useMediaQuery"

export default function Aside() {
    const [notificationCount] = useState<number>(1)
    const [active, setActive] = useState<boolean>(false)
    const isDesktop = useMediaQuery("(min-width: 1024px)")

    const isMenuVisible = active || isDesktop

    return (
        <aside className="fixed inset-0 lg:w-[280px] lg:h-full h-full flex flex-col w-full p-6 bg-[var(--Neutral-100)]">
            <header className="w-full max-h-25 flex justify-between items-center pb-6 border-b border-[var(--Neutral-400)]">
                <a href="/stay">
                    <img src={logo} alt="Maison Soleil home" className="h-12" />
                </a>
                <button type="button" onClick={() => setActive(!active)}
                    aria-expanded={active} aria-controls="main-nav" aria-label={active ? "Close menu" : "Open menu"}
                    className="lg:hidden h-max border border-[var(--Neutral-400)] p-1 rounded-xs cursor-pointer">
                    <img src={active ? Close : Menu} alt="" className="h-7" />
                </button>
            </header>

            {isMenuVisible && (
                <div id="main-nav" className="flex flex-col flex-1 w-full">
                    <nav className="w-full py-4 mb-auto">
                        <ul className="flex flex-col">
                            <NavItem href="/stay" icon={StayIcon} label="Your Stay" badge={notificationCount} />
                            <NavItem href="/house" icon={HouseIcon} label="The House" />
                            <NavItem href="/town" icon={TownIcon} label="Around Town" />
                            <NavItem href="/breakfast" icon={BreakfastOutIcon} label="Breakfast" />
                            <NavItem href="/messages" icon={MessagesIcon} label="Messages" />
                        </ul>
                    </nav>

                    <article className="w-full flex flex-col items-start gap-2 text-[var(--Neutral-800)] text-xs bg-[var(--Sun-200)] rounded-2xl px-5 py-3 mb-5 article_weather">
                        <p className="uppercase">Today &nbsp; in &nbsp; Cassis</p>
                        <p><span className="font-fraunces font-normal text-4xl">27°</span></p>
                        <p>Sunny · light breeze</p>
                    </article>

                    <footer className="flex flex-col gap-3 text-left text-[var(--Neutral-600)] uppercase text-sm border-t border-dashed border-[var(--Neutral-400)] pt-4">
                        <p>Est. 1987</p>
                        <p>Maison Soleil · 12 Rue des Oliviers · Cassis</p>
                        <p>© 2026 Maison Soleil</p>
                    </footer>
                </div>
            )}
        </aside>
    )
}