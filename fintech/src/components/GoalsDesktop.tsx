import {useState} from 'react';
import goals1 from '../../../fintech/public/images/goals1.png'
import goals2 from '../../../fintech/public/images/goals2.png'
import goals3 from '../../../fintech/public/images/goals3.png'
import {ThemeType} from "./DesktopHeader";
import StarSvg from "./svg/StarSvg";
import LightSvg from "./svg/LightSvg";
import RocketSvg from "./svg/RocketSvg";

const GoalsDesktop = ({theme}: ThemeType) => {
    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)


    return (
        <div>
            <div
                className="hidden  sm:w-[1400px] sm:h-[612px] sm:flex-col sm:justify-start sm:items-center sm:gap-20 sm:inline-flex ">
                <div className="self-stretch justify-start items-center gap-8 inline-flex">
                    <div className="text-rose-600 text-8xl font-medium font-['Raleway']">Наши цели</div>
                </div>
                <div className="self-stretch h-[419px] flex-col justify-start items-center gap-px flex">
                    <div onMouseEnter={() => setShow1(!show1)}
                         onMouseLeave={() => setShow1(!show1)}
                         className={`text-[grey] hover:text-rose-600 ${theme === 'light' ? 'bg-[#F5F5F5]' : 'bg-[#212121]'} 
                         self-stretch px-16 py-8  rounded-[40px] justify-start items-center gap-8 inline-flex fill-[grey]  hover:fill-rose-600`}>
                        <div className="w-16 h-12 px-1 pt-1 pb-[5.75px] justify-center items-center flex ">
                           {/* <img
                            src={star} className='w-[30px]'/>*/}
                        <StarSvg/>
                        </div>
                        <div
                            className={` grow shrink basis-0  text-[64px] font-medium font-['Raleway'] relative text-opacity-50 `}
                            >Качество
                        </div>
                        {show1 && <div
                            className="absolute left-[600px] w-[640px] h-[160px]  rounded-[40px] shadow justify-center items-center flex"
                            style={{backgroundColor: theme === 'light' ? 'white' : 'black'}}>
                            <img className="grow shrink basis-0 self-stretch p-4 rounded-[40px]"
                                 src={goals1}/>
                            <div className="grow shrink basis-0 h-40 p-8 justify-center items-center gap-2.5 flex">
                                <div
                                    className="grow shrink basis-0 text-zinc-900 text-base font-medium font-['Raleway'] leading-normal"
                                    style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Высокое
                                    качество сопровождения и взаимодействия с проектами и их подразделениями
                                </div>
                            </div>
                        </div>}
                    </div>
                    <div onMouseEnter={() => setShow2(!show2)}
                         onMouseLeave={() => setShow2(!show2)}
                         className={`text-[grey] hover:text-rose-600 ${theme === 'light' ? 'bg-[#F5F5F5]' : 'bg-[#212121]'} 
                         self-stretch px-16 py-8  rounded-[40px] justify-start items-center gap-8 inline-flex fill-[grey]  hover:fill-rose-600`}>
                        <div className="w-16 h-12 px-1 pt-1 pb-[5.75px] justify-center items-center flex ">
                            {/* <img
                            src={star} className='w-[30px]'/>*/}
                            <LightSvg/>
                        </div>
                        <div
                            className={` grow shrink basis-0  text-[64px] font-medium font-['Raleway'] relative text-opacity-50 `}
                        >Риски
                        </div>
                        {show2 && <div
                            className="absolute left-[600px] w-[640px] h-[160px]  rounded-[40px] shadow justify-center items-center flex"
                            style={{backgroundColor: theme === 'light' ? 'white' : 'black'}}>
                            <img className="grow shrink basis-0 self-stretch p-4 rounded-[40px]"
                                 src={goals2}/>
                            <div className="grow shrink basis-0 h-40 p-8 justify-center items-center gap-2.5 flex">
                                <div
                                    className="grow shrink basis-0 text-zinc-900 text-base font-medium font-['Raleway'] leading-normal"
                                    style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Высокое
                                    качество сопровождения и взаимодействия с проектами и их подразделениями
                                </div>
                            </div>
                        </div>}
                    </div>
                    <div onMouseEnter={() => setShow3(!show3)}
                         onMouseLeave={() => setShow3(!show3)}
                         className={`text-[grey] hover:text-rose-600 ${theme === 'light' ? 'bg-[#F5F5F5]' : 'bg-[#212121]'} 
                         self-stretch px-16 py-8  rounded-[40px] justify-start items-center gap-8 inline-flex fill-[grey]  hover:fill-rose-600`}>
                        <div className="w-16 h-12 px-1 pt-1 pb-[5.75px] justify-center items-center flex ">
                            {/* <img
                            src={star} className='w-[30px]'/>*/}
                            <RocketSvg/>
                        </div>
                        <div
                            className={` grow shrink basis-0  text-[64px] font-medium font-['Raleway'] relative text-opacity-50 `}
                        >Развитие
                        </div>
                        {show3 && <div
                            className="absolute left-[600px] w-[640px] h-[160px]  rounded-[40px] shadow justify-center items-center flex"
                            style={{backgroundColor: theme === 'light' ? 'white' : 'black'}}>
                            <img className="grow shrink basis-0 self-stretch p-4 rounded-[40px]"
                                 src={goals3}/>
                            <div className="grow shrink basis-0 h-40 p-8 justify-center items-center gap-2.5 flex">
                                <div
                                    className="grow shrink basis-0 text-zinc-900 text-base font-medium font-['Raleway'] leading-normal"
                                    style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Высокое
                                    качество сопровождения и взаимодействия с проектами и их подразделениями
                                </div>
                            </div>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GoalsDesktop;
