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

export default function Aside() {
    const [noticationCount, setNoticationCount] = useState<number>(1)
    const [active, setActive] = useState<boolean>(false)

    return (
        <aside className={`${active ? "fixed" : ""} flex flex-col h-full w-full p-4 bg-[var(--Neutral-100)]`}>
            <header className='w-full flex justify-between items-center pb-4 border-b border-[var(--Neutral-400)]'>
                <a href="/stay"><img src={logo} alt="Maison Soleil home" /></a>
                <button className={`${window.innerWidth <= 648 ? "" : "hidden"} h-max border border-[var(--Neutral-400)] p-1 rounded-xs cursor-pointer`} onClick={() => { setActive(!active) }}>
                    <img src={active ? Close : Menu} alt="toggle menu" />
                </button>
            </header>


            {active && (
                <div className="flex flex-col h-full w-full">
                    <nav className="w-full py-4 mb-auto">
                        <ul className="flex flex-col">
                            <NavItem href="/stay" icon={StayIcon} label="Your Stay" badge={noticationCount} />
                            <NavItem href="/house" icon={HouseIcon} label="The House" />
                            <NavItem href="/town" icon={TownIcon} label="Around Town" />
                            <NavItem href="/breakfast" icon={BreakfastOutIcon} label="Breakfast" />
                            <NavItem href="/messages" icon={MessagesIcon} label="Messages" />
                        </ul>
                    </nav>

                    <article className="w-full border-b border-[var(--Neutral-400)]">
                        <p>Today in Cassis</p>
                        <p>27°</p>
                        <p>Sunny · light breeze</p>
                    </article>

                    <footer>
                        <p>Est. 1987</p>
                        <p>Maison Soleil · 12 Rue des Oliviers · Cassis</p>
                        <p>© 2026 Maison Soleil</p>
                    </footer>
                </div>
            )}

        </aside>
    )
}
