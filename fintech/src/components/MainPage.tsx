import style from './MainPage.module.css'
import SliderAbility from "./SliderAbility";
import Services from "./Services";
import SliderGoals from "./SliderGoals";
import OurMission from "./OurMission";
import OurTeam from "./OurTeam";
import OurHrPolitics from "./OurHrPolitics";
import OurBonuses from "./OurBonuses";
import OurLocation from "./OurLocation";
import Maps from "./Maps";
import Form from "./Form";
import figure from '../../public/images/Frame355.svg'
import GoalsDesktop from "./GoalsDesktop";
import BonusesDesktop from "./BonusesDesktop";
import DesktopOurMission from "./DesktopOurMission";
import ImagesSlider from "./ImagesSlider";
import {ContactForm} from "./ContactForm";
import {ThemeType} from "./Wrapper/DesktopHeader";


const MainPage = ({theme}: ThemeType) => {
    return (
        <div
            className='overflow-y-hidden w-full sm:pt-[87.5px] pt-[120px] flex flex-col justify-start items-center sm:gap-40 gap-[120px] '>
            <div className='hidden sm:flex  w-[1400px]'>

                <img src={figure} className='w-[400px]' alt=""/>
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
            <h1 className='p-8 text-[40px] leading-[46px] m-auto mt-[52px] sm:hidden'>Оказываем <br/> <span
                className={style.span}>спектр услуг </span>
                в<br/> сфере<br/> сопровождения<br/> деятельности<br/> <span className={style.span}> it-компаний</span>
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
            <Form/>
            <ContactForm/>


        </div>

    );
};

export default MainPage;