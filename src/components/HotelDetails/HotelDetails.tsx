export default function HotelDetails() {
    type HotelInfoData = {
        city: string;
        weather: string;
        breeze: string;
        hotelName: string;
        streetAddress: string;
        temperature: string;
    };

    const hotelInfo: HotelInfoData = {
        city: 'Cassis',
        weather: 'Sunny',
        breeze: 'Light breeze',
        hotelName: 'Maison Soleil',
        streetAddress: '12 Rue des Oliviers',
        temperature: "27°",
    };

    return (
        <>
            <article className="w-full flex flex-col items-start gap-2 text-[var(--Neutral-800)] text-xs bg-[var(--Sun-200)] rounded-2xl px-5 py-3 mb-5 article_weather">
                <p className="uppercase"><span className="mr-1">Today</span> in <span className="ml-1">{hotelInfo.city}</span></p>
                <p><span className="font-fraunces font-normal text-4xl">{hotelInfo.temperature}</span></p>
                <p className="text-xs"><span className="mr-1">{hotelInfo.weather}</span> · <span className="ml-1">{hotelInfo.breeze}</span></p>
            </article>

            <footer className="flex flex-col gap-3 text-left text-[var(--Neutral-600)] uppercase text-sm border-t border-dashed border-[var(--Neutral-400)] pt-4">
                <p>Est. 1987</p>
                <p className="flex flex-wrap items-center gap-x-1"><span>{hotelInfo.hotelName}</span><span className="mx-1"> · </span> <span>{hotelInfo.streetAddress}</span> <span className="mx-1"> · </span><span>{hotelInfo.city}</span></p>
                <p>© {new Date().getFullYear()} {hotelInfo.hotelName}</p>
            </footer>
        </>
    );
}