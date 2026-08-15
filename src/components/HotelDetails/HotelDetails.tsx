export default function HotelDetails() {
    type HotelInfoData = {
        city: string;
        weather: string;
        breeze: string;
        hotelName: string;
        streetAddress: string;
        temperature: string | number;
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
            <article className="w-full flex flex-col items-start gap-2 lg:gap-0 2xl:gap-1 text-[var(--Neutral-800)] text-[11px] 2xl:text-[12px] bg-[var(--Sun-200)] rounded-2xl px-5 py-3 lg:px-3 2xl:px-4 lg:pt-1 2xl:pt-2 lg:pb-2 2xl:pb-3 mb-5 article_weather">
                <p className="uppercase"><span className="mr-1">Today</span> in <span className="ml-1">{hotelInfo.city}</span></p>
                <p><span className="font-fraunces font-normal text-4xl lg:text-3xl 2xl:text-4xl">{hotelInfo.temperature}</span></p>
                <p className="text-xs lg:text-[11px] 2xl:text-xs"><span className="mr-1 lg:mr-0.5 2xl:mr-1">{hotelInfo.weather}</span> · <span className="ml-1 lg:ml-0.5 2xl:ml-1">{hotelInfo.breeze}</span></p>
            </article>

            <footer className="flex flex-col gap-3 2xl:gap-4 text-left text-[var(--Neutral-600)] uppercase text-sm lg:text-[12px] 2xl:text-[14px] border-t border-dashed border-[var(--Neutral-400)] pt-4">
                <p>Est. 1987</p>
                <p className="text-left">{hotelInfo.hotelName} <span className="mx-1">·</span> {hotelInfo.streetAddress} <span className="mx-1">·</span> {hotelInfo.city}</p>
                <p>© {new Date().getFullYear()} {hotelInfo.hotelName}</p>
            </footer>
        </>
    );
}