import { NavLink } from "react-router-dom";
import logo from '../../../public/images/Logo.svg'
import arrowRight from '../../../public/images/arrowRight.svg'

const DesktopHeader = () => {
    return (
        <>
          {/*  <div className='w-full hidden sm:flex'>
                <img className='p-4' src={logo} alt="logo"/>
                <div>Контакты</div>
                <div>Документы</div>
                <div >button</div>
                <img src="" alt="theme image"/>
            </div>*/}
            <div className="w-[1440px] hidden sm:inline-flex h-20 p-4 bg-white bg-opacity-90 justify-between items-center">
                <NavLink exact activeClassName="active" to="/">
                    <img className='p-4' src={logo} alt="logo"/>
                </NavLink>
                <div className="h-12 justify-between items-center flex">
                    <div className="w-[110.74px] h-12 relative" />
                    <div className="justify-start items-start gap-4 flex">
                        <div className="w-[109px] px-4 rounded-[50px] justify-center items-center gap-2 flex">
                            <NavLink exact activeClassName="active" to="/contacts">
                                <div className="text-zinc-900 text-base font-bold font-['Raleway'] leading-relaxed pt-2">Контакты</div>
                            </NavLink>
                        </div>
                        <div className="w-[124px] px-4 rounded-[50px] justify-center items-center gap-2 flex">
                            <NavLink exact activeClassName="active" to="/policies">
                                <div className="text-zinc-900 text-base font-bold font-['Raleway'] leading-relaxed pt-2">Документы</div>
                            </NavLink>

                        </div>
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