
type BonusComponentType = {
    num:string
    title:string
    theme:string
    onClick: ()=> void
}

const BonusComponent = (props:BonusComponentType) => {

    return (
        <div >
            <div onClick={props.onClick} className={`${props.theme === 'light' ? "bg-white" : "bg-[#212121]"} px-6 py-4 
             rounded-[20px] border border-rose-600 justify-center items-center gap-4 inline-flex ml-2 mb-2 hover:bg-rose-600   hover:text-white focus:bg-rose-600`}
                 >
                <div className=  "text-rose-600 text-xl font-bold font-['Raleway'] leading-[30px] hover:text-white" style={{color: props.theme === 'light' ? '#FF1744' : 'white'}}>{props.num}</div>
                <div className="text-rose-600 text-xl font-medium font-['Raleway'] leading-[30px]" style={{color: props.theme === 'light' ? '#FF1744' : 'white'}}>{props.title}</div>
            </div>
        </div>
    );
};

export default BonusComponent;
