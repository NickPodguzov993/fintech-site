import { NavLink } from "react-router-dom";
import arrowRight from '../../public/images/arrowRight.svg'
import Logo from "./svg/Logo";

export type ThemeType = {
    theme: string
    switchTheme?: () => void
}


const DesktopHeader = ({theme,switchTheme}:ThemeType) => {

    return (
        <>
            <div  className={`${theme === 'light' ? "bg-white" : "bg-[#212121]"} w-[360px]  sm:w-[1440px] inline-flex flex h-20 p-4  bg-opacity-90  sm:justify-between items-center fixed z-20 `}>
                <NavLink  to="/">
                    <Logo theme={theme}/>
                </NavLink>
                <div className="fixed sm:hidden w-[264px] h-16 p-2 bg-white rounded-[30px] top-[528px] right-[8px] z-90 shadow justify-start items-start gap-1 inline-flex">
                    <div className="w-[196px] h-12 px-8 bg-rose-600 rounded-[100px] justify-start items-center gap-1 inline-flex">
                        <div className="text-white text-sm font-bold font-['Raleway'] leading-snug">Отправить резюме</div>
                    </div>
                    <div className="w-12 h-12 p-2.5 rounded-[100px] justify-center items-center gap-2.5 flex">
                        <div className="w-4 h-4 py-[2.40px] justify-center items-center flex" />
                    </div>
                </div>
                <div className="h-12  items-center flex">
                    <div className="sm:w-[110.74px] h-12 relative" />
                    <div className="justify-start items-start gap-4 flex">
                        <div className="sm:w-[109px] px-4 rounded-[50px] justify-center items-center gap-2 flex">
                            <NavLink  to="/contacts">
                                <div className= {`${theme === 'light' ? 'text-[#1B1B1B]' : 'text-[#fff]'} text-zinc-900 text-base font-bold font-['Raleway'] hidden sm:block hover:text-rose-600 leading-relaxed pt-2`}
                                    >Контакты</div>
                            </NavLink>
                        </div>
                        <div className="w-[70px] sm:w-[124px] px-4 rounded-[50px] justify-center items-center gap-2 flex">
                            <NavLink  to="/policies">
                                <div className={`${theme === 'light' ? 'text-[#1B1B1B]' : 'text-[#fff]'} text-zinc-900 text-base font-bold font-['Raleway'] hidden sm:block hover:text-rose-600 leading-relaxed pt-2`}>Документы</div>
                            </NavLink>

                        </div>
                        <input onChange={switchTheme}  type="checkbox" id="toggle-btn" />
                        <label className="switch">
                            <input onChange={switchTheme} type="checkbox" />
                                <span className="slider round"></span>
                        </label>
                        <div className="hidden sm:flex  sm:w-[243px] h-10 self-stretch pl-8 pr-1 bg-rose-600 rounded-[100px] justify-start items-center gap-4 flex">
                            <div className=" text-white text-base font-bold font-['Raleway'] leading-relaxed">Отправить резюме</div>
                            <div className="w-9 h-9 p-2 bg-white rounded-[100px] justify-center items-center gap-3 flex">
                                <img src={arrowRight}/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default DesktopHeader;
