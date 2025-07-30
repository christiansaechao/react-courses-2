export const FooterSection = ({title, downloadCall}) => {
    return (
        <section className=" rounded-[8px] flex flex-col items-center gap-6 bg-violet-500 w-full px-[10px] py-[20px]">
            <h3 className="text-[20px] font-bold">{title}</h3>
            <p>{downloadCall}</p>
            <div className="flex gap-4">
            <button className="text-violet-600 bg-white rounded-[20px]">App Store</button>
            <button className="text-violet-600 bg-white rounded-[20px]">Google Play</button>
            </div>
        </section>
    )
} 