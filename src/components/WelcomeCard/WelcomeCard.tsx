import SunIcon from "../../assets/images/icon-sun.svg"

type WelcomeCardProps = {
    hostName: string
    roomName: string
    message: string
}

export default function WelcomeCard({ hostName, roomName, message }: WelcomeCardProps) {
    return (
        <article
            className="relative z-10 w-full max-w-90 flex flex-col justify-between gap-4 text-left text-[var(--Neutral-0)] rounded-2xl p-6 overflow-hidden rotate-[2deg] shadow-[0_15px_20px_-5px_rgba(159,62,29,0.5),0_35px_60px_-15px_rgba(159,62,29,0.55)]"
            style={{
                background: "radial-gradient(circle at 85% 15%, var(--Terracotta-400) 0%, var(--Terracotta-600) 45%, var(--Terracotta-700) 100%)"
            }}>
            <header className="flex justify-between border-t border-dashed border-[var(--Terracotta-400)] pt-[10px]">
                <span className="text-[10px] tracking-widest text-[var(--Sun-50)] uppercase tracking-wide">Welcome card</span>
                <img src={SunIcon} alt="Sun Icon" className="mt-2 w-12 h-12" />
            </header>

            <div className="flex flex-col gap-4 mb-15">
                <p className="font-fraunces italic text-xl text-[var(--Sun-200)]">A note from your host,</p>
                <h2 className="font-fraunces italic font-normal text-[40px]">{hostName}.</h2>
                <p className="text-sm text-[var(--Neutral-100)] mt-2 leading-relaxed">{message}</p>
            </div>

            <footer className="flex flex-col mt-auto">
                <span className="text-[10px] uppercase tracking-wide text-[var(--Sun-300)]">Room</span>
                <span className="font-fraunces font-normal text-xl">{roomName}</span>
            </footer>
        </article>
    )
}