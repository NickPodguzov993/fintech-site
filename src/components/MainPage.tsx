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




const MainPage = () => {
    return (
        <div className='overflow-y-hidden w-full sm:pt-[160px] pt-[120px] flex flex-col justify-start items-center sm:gap-40 gap-[120px] bg-white'>
            <div className='hidden sm:flex'>

                    <img src={figure}  className='w-[400px]' alt=""/>


                <h1 className='p-8 text-[40px] leading-[46px] m-auto mt-[52px] sm:text-[64px]'>Оказываем <span className={style.span}>спектр услуг </span>
                    в сфере сопровождения деятельности <span className={style.span}> it-компаний</span> </h1>


            </div>
                <h1 className='p-8 text-[40px] leading-[46px] m-auto mt-[52px] sm:hidden'>Оказываем <br/> <span className={style.span}>спектр услуг </span>
                    в<br/> сфере<br/> сопровождения<br/> деятельности<br/> <span className={style.span}> it-компаний</span> </h1>


          <SliderAbility/>
            <Services/>
            <SliderGoals/>
            <GoalsDesktop/>
            <OurMission/>
            <OurTeam/>
            <OurHrPolitics/>
            <OurBonuses/>
            <BonusesDesktop/>
            <OurLocation/>
           <Maps/>
            <Form/>




        </div>

    );
};

export default MainPage;