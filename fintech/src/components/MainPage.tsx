import SliderAbility from "./SliderAbility";
import Services from "./Services";
import SliderGoals from "./SliderGoals";
import OurMission from "./OurMission";
import OurTeam from "./OurTeam";
import OurHrPolitics from "./OurHrPolitics";
import OurBonuses from "./OurBonuses";
import OurLocation from "./OurLocation";
import Maps from "./Maps";
import GoalsDesktop from "./GoalsDesktop";
import BonusesDesktop from "./BonusesDesktop";
import DesktopOurMission from "./DesktopOurMission";
import ImagesSlider from "./ImagesSlider";
import {ThemeType} from "./DesktopHeader";
import MainFigure from "./svg/MainFigure";


const MainPage = ({theme}: ThemeType) => {
    return (
        <div
            className='overflow-y-hidden w-full sm:pt-[150.5px] pt-[120px] flex flex-col justify-start items-center sm:gap-40 gap-[120px] '>
            <div className='hidden sm:flex  w-[1400px] '>
                <div className='mt-[20px]'> <MainFigure theme={theme}/></div>

                <h1 className='hidden sm:flex'>
                    <div className=" inline-flex grow shrink basis-0 flex-col justify-center items-end w-full">
                        <div className="self-stretch"><span
                            className="text-zinc-900 text-[64px] font-medium font-['Raleway'] "
                            style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Оказываем </span><span
                            className="text-rose-600 text-[64px] font-medium font-['Raleway']">спектр услуг</span></div>
                        <div
                            className="px-8 bg-neutral-100 rounded-[80px] justify-start items-start inline-flex  ml-[173.5px]"
                            style={{backgroundColor: theme === 'light' ? '#F5F5F5' : '#212121'}}>
                            <div className="text-right text-zinc-900 text-[64px] font-medium font-['Raleway'] self-end"
                                 style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>в сфере
                                сопровождения
                            </div>
                        </div>
                        <div className="self-stretch"><span
                            className="text-zinc-900 text-[64px] font-medium font-['Raleway']"
                            style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>деятельности </span><span
                            className="text-rose-600 text-[64px] font-medium font-['Raleway']">it-компаний</span></div>
                    </div>
                </h1>


            </div>
            <h1 className='sm:hidden'>
                <div className="w-[328px] h-72 flex-col justify-center items-end gap-0.5 inline-flex">
                    <div className="self-stretch"><span className="text-zinc-900 text-[40px] font-medium font-['Raleway']">Оказываем </span>
                        <span className="text-rose-600 text-[40px] font-medium font-['Raleway']">спектр услуг </span>
                        <span className="text-zinc-900 text-[40px] font-medium font-['Raleway']">в </span></div>
                    <div className="px-4 bg-neutral-100 rounded-[30px] justify-end items-center inline-flex">
                        <div className="text-zinc-900 text-[40px] font-medium font-['Raleway']">сфере</div>
                    </div>
                    <div className="px-4 bg-neutral-100 rounded-[30px] justify-start items-start inline-flex">
                        <div className="w-[312px] text-zinc-900 text-[40px] font-medium font-['Raleway']">сопровождения</div>
                    </div>
                    <div className="self-stretch"><span className="text-zinc-900 text-[40px] font-medium font-['Raleway']">деятельности<br/>
                    </span><span className="text-rose-600 text-[40px] font-medium font-['Raleway']">it-компаний</span></div>
                </div>
            </h1>


            <SliderAbility/>
            <Services theme={theme}/>
            <SliderGoals/>
            <GoalsDesktop theme={theme}/>
            <OurMission/>
            <DesktopOurMission theme={theme}/>
            <OurTeam theme={theme}/>
            <OurHrPolitics theme={theme}/>
            <OurBonuses/>
            <BonusesDesktop theme={theme}/>
            <OurLocation/>
            <ImagesSlider theme={theme}/>
            <Maps/>



        </div>

    );
};

export default MainPage;
