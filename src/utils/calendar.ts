type CalendarEventInput = {
    title: string
    description: string
    location: string
    start: Date
    end: Date
}

function formatGoogleCalendarDate(date: Date): string {
    return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z"
}

export function buildGoogleCalendarUrl({ title, description, location, start, end }: CalendarEventInput): string {
    const params = new URLSearchParams({
        action: "TEMPLATE",
        text: title,
        dates: `${formatGoogleCalendarDate(start)}/${formatGoogleCalendarDate(end)}`,
        details: description,
        location,
    })

    return `https://calendar.google.com/calendar/render?${params.toString()}`
}