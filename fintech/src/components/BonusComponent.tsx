
type BonusComponentType = {
    num:string
    title:string
    theme:string
    onClick: ()=> void
    isActive: boolean
}

const BonusComponent = (props:BonusComponentType) => {

    return (
        <div >
            <div onClick={props.onClick} className={` ${props.isActive ? 'bg-rose-600 text-white' : 'bg-white'} 
            ${props.theme === 'light' ? "bg-rose-600 text-rose-600" : "bg-[#0F0F0F] text-white border-none"} px-6 py-4 
             rounded-[20px] border border-rose-600 justify-center items-center gap-4 inline-flex ml-2 mb-2 text-rose-600 hover:bg-rose-600   hover:text-white focus:bg-rose-600`}
                 >
                <div className=  " text-xl font-bold font-['Raleway'] leading-[30px]" >{props.num}</div>
                <div className=" text-xl font-medium font-['Raleway'] leading-[30px]" >{props.title}</div>
            </div>
        </div>
    );
};

export default BonusComponent;
