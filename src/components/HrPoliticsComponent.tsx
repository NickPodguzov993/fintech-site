type HrPoliticsComponentType = {
    title: string
    title2: string
    description: string
    img: string
}

const HrPoliticsComponent = (props:HrPoliticsComponentType) => {
    return (
        <div className="w-[400px] h-[402px] flex-col justify-start items-start inline-flex pl-2 overflow-x-auto ">
            <div
                className="self-stretch h-[164px] p-8 bg-neutral-100 hover:bg-rose-600 rounded-tl-[40px] rounded-tr-[40px] flex-col justify-start items-start flex">
                <div className="px-4 py-2 bg-white rounded-[20px] justify-center items-center gap-2.5 inline-flex">
                    <div className="text-zinc-900 text-[32px] font-medium font-['Raleway']">{props.title}</div>
                </div>
                <div className="px-4 py-2 bg-white rounded-[20px] justify-center items-center gap-2.5 inline-flex">
                    <div className="text-zinc-900 text-[32px] font-medium font-['Raleway']">{props.title2}</div>
                </div>
            </div>
            <div
                className="self-stretch grow shrink basis-0 p-8 bg-neutral-100 rounded-bl-[40px] rounded-br-[40px] flex-col justify-between items-end flex">
                <div
                    className="self-stretch text-zinc-900 text-base font-bold font-['Raleway'] leading-relaxed">{props.description}
                </div>
                <div className="p-4 bg-white rounded-[20px] justify-start items-end gap-[26px] inline-flex">
                    <div className="w-12 h-12 relative"><img src={props.img}/></div>
                </div>
            </div>
        </div>
    );
};

export default HrPoliticsComponent;