type HrPoliticsComponentType = {
    title: string
    title2: string
    description: string
    img: string
    theme: string
}

const HrPoliticsComponent = (props:HrPoliticsComponentType) => {
    return (
        <div className="w-[400px] h-[402px] flex-col justify-start items-start inline-flex ml-2 overflow-x-auto hover:bg-rose-600
         rounded-[40px] " style={{backgroundColor: props.theme === 'light' ? '#F5F5F5' : '#212121'}}>
            <div
                className="self-stretch h-[164px] p-8  flex-col justify-start items-start flex hover:rounded-t-[20px]">
                <div className="px-4 py-2 rounded-[20px] justify-center items-center gap-2.5 inline-flex" style={{backgroundColor: props.theme === 'light' ? 'white' : 'black'}}>
                    <div className="text-zinc-900 text-[32px] font-medium font-['Raleway']" style={{color: props.theme === 'light' ? '#1B1B1B' : 'white'}}>{props.title}</div>
                </div>
                <div className="px-4 py-2  rounded-[20px] justify-center items-center gap-2.5 inline-flex" style={{backgroundColor: props.theme === 'light' ? 'white' : 'black'}}>
                    <div className="text-zinc-900 text-[32px] font-medium font-['Raleway']" style={{color: props.theme === 'light' ? '#1B1B1B' : 'white'}}>{props.title2}</div>
                </div>
            </div>
            <div
                className="self-stretch grow shrink basis-0 p-8 rounded-bl-[40px] rounded-br-[40px] flex-col justify-between items-end flex ">
                <div
                    className="self-stretch text-zinc-900 text-base font-bold font-['Raleway'] leading-relaxed" style={{color: props.theme === 'light' ? '#1B1B1B' : 'white'}}>{props.description}
                </div>
                <div className="p-4 rounded-[20px] justify-start items-end gap-[26px] inline-flex" style={{backgroundColor: props.theme === 'light' ? 'white' : 'black'}}>
                    <div className="w-12 h-12 relative" style={{color: props.theme === 'light' ? '#1B1B1B' : 'white'}}><img src={props.img}/></div>
                </div>
            </div>
        </div>
    );
};

export default HrPoliticsComponent;