import { useEffect, useState } from "react"
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
import HotelDetails from "../HotelDetails/HotelDetails"

export default function Aside() {
    const [notificationCount] = useState<number>(1)
    const [active, setActive] = useState<boolean>(false)
    const isDesktop = useMediaQuery("(min-width: 1024px)")

    const isMenuVisible = active || isDesktop
    const isMobileOverlayOpen = active && !isDesktop

    useEffect(() => {
        if (isMobileOverlayOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
        }

        return () => {
            document.body.style.overflow = ""
        }
    }, [isMobileOverlayOpen])

    useEffect(() => {
        if (isDesktop) setActive(false)
    }, [isDesktop])

    return (
        <aside className={`fixed z-99 inset-0 lg:w-[250px] 2xl:w-[290px] ${isMenuVisible ? 'h-full' : 'h-max border-b'} lg:border-r border-[var(--Neutral-400)] flex flex-col w-full p-4 lg:p-3 2xl:p-4 pb-2 bg-[var(--Neutral-100)]`}>
            <header className={`w-full max-h-25 lg:max-h-20 flex justify-between items-center ${isMenuVisible ? "pb-4 border-b border-[var(--Neutral-400)]" : "pb-2"}`}>
                <a href="/stay">
                    <img src={logo} alt="Maison Soleil home" className={`${isMenuVisible ? 'h-12' : 'h-10'} lg:h-9 2xl:h-11`} />
                </a>
                <button type="button" onClick={() => setActive(!active)}
                    aria-expanded={active} aria-controls="main-nav" aria-label={active ? "Close menu" : "Open menu"}
                    className="lg:hidden h-max border border-[var(--Neutral-400)] p-1 rounded-xs cursor-pointer">
                    <img src={active ? Close : Menu} alt="" className={`${isMenuVisible ? 'h-7' : 'h-6'}`} />
                </button>
            </header>

            {isMenuVisible && (
                <div id="main-nav" className="flex flex-col flex-1 w-full overflow-y-auto">
                    <nav className="w-full py-4 mb-auto">
                        <ul className="flex flex-col">
                            <NavItem href="/stay" icon={StayIcon} label="Your Stay" badge={notificationCount} />
                            <NavItem href="/house" icon={HouseIcon} label="The House" />
                            <NavItem href="/town" icon={TownIcon} label="Around Town" />
                            <NavItem href="/breakfast" icon={BreakfastOutIcon} label="Breakfast" />
                            <NavItem href="/messages" icon={MessagesIcon} label="Messages" />
                        </ul>
                    </nav>

                    <HotelDetails />
                </div>
            )}
        </aside>
    )
}