import PageLayout from "../../components/PageLayout/PageLayout"
import PageHeader from "../../components/PageHeader/PageHeader"

type Message = {
    from: "host" | "guest"
    author: string
    time: string
    text: string
}

const messages: Message[] = [
    { from: "host", author: "Margaux", time: "Mon · 09:14", text: "Bonjour Lucia! Your booking is all confirmed for the 25th. Let me know if you'd like restaurant recommendations before you arrive." },
    { from: "guest", author: "Lucia", time: "Mon · 14:02", text: "That would be lovely, thank you! Also — is there a gluten-free option for breakfast?" },
    { from: "host", author: "Margaux", time: "Mon · 14:20", text: "Of course, just leave a note the night before and I'll have gluten-free bread ready. See you soon!" },
]

export default function Messages() {
    return (
        <PageLayout>
            <PageHeader eyebrow="Conversation with your host" title="Messages" />

            <section className="flex flex-col gap-4 lg:gap-3 2xl:gap-4">
                {messages.map((message, index) => {
                    const isHost = message.from === "host"
                    return (
                        <div key={index} className={`flex flex-col gap-1 max-w-[85%] lg:max-w-[60%] ${isHost ? "items-start self-start" : "items-end self-end"}`}>
                            <span className="text-[10px] uppercase tracking-widest text-[var(--Neutral-600)]">{message.author} · {message.time}</span>
                            <div className={`rounded-2xl px-4 py-3 text-left text-sm lg:text-xs 2xl:text-sm leading-relaxed ${isHost
                                ? "bg-[var(--Neutral-0)] text-[var(--Neutral-800)] border border-[var(--Neutral-400)] shadow-[var(--shadow)]"
                                : "bg-[var(--Neutral-900)] text-[var(--Neutral-100)]"
                                }`}>
                                {message.text}
                            </div>
                        </div>
                    )
                })}
            </section>

            <form className="flex items-center gap-3 bg-[var(--Neutral-0)] rounded-full border border-[var(--Neutral-400)] shadow-[var(--shadow)] p-2 pl-5">
                <input type="text" placeholder="Write a message to Margaux…"
                    className="flex-1 bg-transparent text-sm lg:text-xs 2xl:text-sm text-[var(--Neutral-800)] placeholder:text-[var(--Neutral-600)] focus:outline-none" />
                <button type="submit" className="px-6 py-2 rounded-full bg-[var(--Neutral-900)] text-[var(--Neutral-100)] text-sm lg:text-xs font-bold cursor-pointer hover:bg-[var(--Neutral-700)] focus:outline-3 focus:outline-[var(--Terracotta-700)] active:opacity-50 outline-offset-2">
                    Send
                </button>
            </form>
        </PageLayout>
    )
}