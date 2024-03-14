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
            <div  className={`${theme === 'light' ? "bg-white" : "bg-[#212121]"} w-[1440px] hidden sm:inline-flex h-20 p-4  bg-opacity-90 justify-between items-center fixed z-20`}>
                <NavLink exact activeClassName="active" to="/">
                    <Logo theme={theme}/>
                </NavLink>
                <div className="h-12 justify-between items-center flex">
                    <div className="w-[110.74px] h-12 relative" />
                    <div className="justify-start items-start gap-4 flex">
                        <div className="w-[109px] px-4 rounded-[50px] justify-center items-center gap-2 flex">
                            <NavLink exact activeClassName="active" to="/contacts">
                                <div className="text-zinc-900 text-base font-bold font-['Raleway'] leading-relaxed pt-2"
                                     style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Контакты</div>
                            </NavLink>
                        </div>
                        <div className="w-[124px] px-4 rounded-[50px] justify-center items-center gap-2 flex">
                            <NavLink exact activeClassName="active" to="/policies">
                                <div className="text-zinc-900 text-base font-bold font-['Raleway'] leading-relaxed pt-2"
                                     style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Документы</div>
                            </NavLink>

                        </div>
                        <input onChange={switchTheme}  type="checkbox" id="toggle-btn" />
                        {/*<div className="toggle-container">
                            <input onChange={switchTheme} type="checkbox" id="toggle-btn" />
                            <label htmlFor="toggle-btn" className="toggle-label"></label>
                        </div>*/}
                        <label className="switch">
                            <input onChange={switchTheme} type="checkbox" />
                                <span className="slider round"></span>
                        </label>
                        <div className="w-[243px] h-10 self-stretch pl-8 pr-1 bg-rose-600 rounded-[100px] justify-start items-center gap-4 flex">
                            <div className="text-white text-base font-bold font-['Raleway'] leading-relaxed">Отправить резюме</div>
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