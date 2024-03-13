import {useState} from "react";


type BonusComponentType = {
    num:string
    title:string
    theme:string
    onClick: ()=> void
}

const BonusComponent = (props:BonusComponentType) => {

   // const [show, setShow] = useState(false)

    return (
        <div >
            <div onClick={props.onClick} className=" px-6 py-4  rounded-[20px] border border-rose-600 justify-center items-center gap-4 inline-flex ml-2 mb-2 "
                 style={{backgroundColor: props.theme === 'light' ? 'white' : '#212121'}}>
                <div className="text-rose-600 text-xl font-bold font-['Raleway'] leading-[30px]" style={{color: props.theme === 'light' ? '#1B1B1B' : 'white'}}>{props.num}</div>
                <div className="text-rose-600 text-xl font-medium font-['Raleway'] leading-[30px]" style={{color: props.theme === 'light' ? '#1B1B1B' : 'white'}}>{props.title}</div>
            </div>
           {/* {show && <div className="grow shrink basis-0 flex-col justify-start items-start gap-8 inline-flex  absolute">
                <div className="self-stretch bg-neutral-100 rounded-[40px] justify-center items-start inline-flex">
                    <img className="grow shrink basis-0 self-stretch p-4 rounded-[40px]" src=""/>
                    <div className="grow shrink basis-0 p-8 flex-col justify-start items-center gap-4 inline-flex">
                        <div className="self-stretch text-zinc-900 text-xl font-bold font-['Raleway']" style={{color: props.theme === 'light' ? '#1B1B1B' : 'white'}}>{props.title}</div>
                        <div className="self-stretch text-zinc-900 text-base font-medium font-['Raleway'] leading-relaxed" style={{color: props.theme === 'light' ? '#1B1B1B' : 'white'}}>Возмещение затрат на посещение спортивных секций или клубов</div>
                    </div>
                </div>
            </div>}*/}
        </div>
    );
};

export default BonusComponent;
