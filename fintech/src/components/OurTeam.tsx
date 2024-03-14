import hh from '../../public/images/hh-red-large.svg'
import {ThemeType} from "./DesktopHeader";

const OurTeam = ({theme}:ThemeType) => {
    return (
        <div>
            <div className="sm:hidden w-[360px] h-[356px] px-4 flex-col justify-start items-start gap-8 inline-flex">
                <div className="self-stretch text-zinc-900 text-[32px] font-medium font-['Raleway'] leading-[48px]" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Наша команда</div>
                <div className="self-stretch h-[276px] flex-col justify-start items-start gap-8 flex">
                    <div className="self-stretch">
                        <span className="text-zinc-900 text-2xl font-medium font-['Raleway'] leading-9" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Наши сотрудники - наша гордость и ключевая ценность компании. И мы </span>
                        <span className="text-zinc-900 text-2xl font-bold font-['Raleway'] leading-9" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>стремимся привлечь и удержать лучших! </span></div>
                    <div className="h-16 pl-8 pr-1 bg-neutral-100 rounded-[100px] justify-center items-center gap-4 inline-flex">
                        <div className="text-rose-600 text-xl font-bold font-['Raleway']">Вакансии Fintech</div>
                        <div className="w-14 h-14 justify-center items-center flex">
                            <div className="w-14 h-14 relative">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden w-[1400px] h-60 justify-start items-start gap-16 sm:inline-flex">
                <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-2.5 inline-flex">
                    <div className="self-stretch text-zinc-900 text-[64px] font-medium font-['Raleway']" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Наша команда</div>
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-8 inline-flex">
                    <div className="self-stretch"><span className="text-zinc-900 text-[32px] font-medium font-['Raleway'] leading-[48px]" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Наши сотрудники - наша гордость и ключевая ценность компании. И мы </span>
                        <span className="text-zinc-900 text-[32px] font-bold font-['Raleway'] leading-[48px]" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>стремимся привлечь и удержать лучших! </span>
                    </div>
                    <div className="h-16 pl-8 pr-1 bg-neutral-100 rounded-[100px] justify-center items-center gap-4 inline-flex">
                        <div className="text-rose-600 text-xl font-bold font-['Raleway']">Вакансии Fintech</div>
                        <div className="w-14 h-14 justify-center items-center flex">
                            <div className="w-14 h-14 relative">
                                <img src={hh}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;