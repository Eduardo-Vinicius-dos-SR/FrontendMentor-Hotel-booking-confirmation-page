import type { ReactNode } from "react"

type PageLayoutProps = {
    children: ReactNode
}

export default function PageLayout({ children }: PageLayoutProps) {
    return (
        <main className="relative h-full mt-18 lg:mt-0 p-4 lg:p-8 2xl:p-10 lg:pl-[calc(240px+3rem)] 2xl:pl-[calc(300px+3rem)] h-full w-full flex flex-col justify-start gap-12 lg:gap-10 2xl:gap-12">
            {children}
        </main>
    )
}