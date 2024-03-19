import {ConfigType} from "./BonusesDesktop";


export type BonusDescriptionType = {
    config: ConfigType
    theme:string
}

const BonusDescription = ({config,theme}:BonusDescriptionType) => {
    return (
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-8 inline-flex w-[300px]  sm:w-[668px] sm:top-[170px]  absolute">
                <div className="self-stretch rounded-[40px] justify-center items-start inline-flex"  style={{backgroundColor: theme === 'light' ? '#F5F5F5' : '#212121'}}>
                    <img className="grow shrink basis-0 self-stretch p-4 rounded-[40px] sm:w-[334px] w-[328px] sm:h-[auto] " src={config.img}/>
                    <div className="grow shrink basis-0 p-8 flex-col justify-start items-center gap-4 inline-flex">
                        <div className="self-stretch text-zinc-900 text-xl font-bold font-['Raleway']" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>{config.title}</div>
                        <div className="self-stretch text-zinc-900 text-base font-medium font-['Raleway'] leading-relaxed" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>{config.description}</div>
                    </div>
                </div>
            </div>
    );
};

export default BonusDescription;
