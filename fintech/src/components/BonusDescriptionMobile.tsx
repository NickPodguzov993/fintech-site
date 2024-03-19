import {BonusDescriptionType} from "./BonusDescription";


const BonusDescriptionMobile = ({config,theme}:BonusDescriptionType) => {
    return (
        <div className=' absolute  z-30 bg-rose-600 top-[230px] left-[20px] sm:hidden'>
            <div>
                <img className="w-[328px] h-[155px] p-4 rounded-[30px]" src={config.img} />
            </div>
            <div className="w-[328px] h-[181px] p-8 flex-col justify-start items-center gap-4 inline-flex">
                <div className="self-stretch text-zinc-900 text-xl font-bold font-['Raleway']"
                     style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>{config.title}</div>
                <div className="self-stretch text-zinc-900 text-base font-medium font-['Raleway'] leading-relaxed">{config.description}</div>
            </div>
        </div>
    );
};

export default BonusDescriptionMobile;
