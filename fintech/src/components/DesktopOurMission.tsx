
import {ThemeType} from "./DesktopHeader";
import SearchSvg from "./svg/SearchSvg";

const DesktopOurMission = ({theme}: ThemeType) => {
    return (
        <div className='hidden sm:flex'>
            <div className="w-[1400px] h-[901px] flex-col justify-start items-center gap-20 inline-flex">
                <div className="self-stretch justify-center items-center gap-16 inline-flex">
                    <div className="grow shrink basis-0 flex-col justify-center items-start inline-flex">
                        <div className="self-stretch justify-start items-center gap-8 inline-flex">
                            <div className="text-zinc-900 text-[64px] font-medium font-['Raleway']"
                                 style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Наша миссия
                            </div>
                            <div className="p-6  rounded-[30px] justify-start items-center gap-2.5 flex"
                                 style={{backgroundColor: theme === 'light' ? '#F5F5F5' : '#212121'}}>
                                <div className="w-12 h-12 relative"><SearchSvg theme={theme}/></div>
                            </div>
                        </div>
                        <div
                            className="self-stretch text-right text-zinc-900 text-[64px] font-medium font-['Raleway']"
                            style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>и
                            ценности
                        </div>
                    </div>
                    <div
                        className="grow shrink basis-0 h-[120px] rounded-[40px] justify-center items-center gap-2.5 flex">
                        <div
                            className="grow shrink basis-0 text-zinc-900 text-xl font-medium font-['Raleway'] leading-[30px]"
                            style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Благодаря
                            накопленной экспертизе и профессионализму, мы оказываем высокий уровень качества
                            сопровождения и обеспечиваем оптимизацию операционных затрат start-up it-проектов
                        </div>
                    </div>
                </div>
                <div className="self-stretch h-[650px] flex-col justify-start items-center gap-4 flex">
                    <div className="self-stretch justify-center items-start gap-4 inline-flex">
                        <div className="w-[456px] h-[480px] relative  bg-no-repeat
                         bg-[top_75px_right_50px] bg-[url('/images/Union.svg')]">
                            <div className={`${theme === 'light' ? 'bg-neutral-100' : 'bg-neutral-800'}h-[206px] p-8 left-0 top-[274px] absolute  bg-opacity-60 
                            rounded-[40px] backdrop-blur-[20px] flex-col justify-start items-start gap-4 inline-flex`}>
                                <div className="self-stretch text-zinc-900 text-[32px] font-medium font-['Raleway'] leading-[48px]" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Экспертность</div>
                                <div className="self-stretch text-zinc-900 text-base font-bold font-['Raleway'] leading-relaxed" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>
                                    Мы аккумулируем полученный опыт и постоянно продолжаем учиться и развиваться. Рост компетенций для нас приоритет.</div>
                            </div>
                        </div>
                        <div
                            className="grow shrink basis-0 h-[480px] flex-col justify-start items-center gap-px inline-flex">
                            <div
                                className="self-stretch grow shrink basis-0 p-8 rounded-[40px] flex-col justify-start items-start gap-4 flex"
                                style={{backgroundColor: theme === 'light' ? '#F5F5F5' : '#212121'}}>
                                <div
                                    className="self-stretch text-zinc-900 text-[32px] font-medium font-['Raleway'] leading-[48px]"
                                    style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Проактивность
                                </div>
                                <div
                                    className="self-stretch text-zinc-900 text-base font-bold font-['Raleway'] leading-relaxed"
                                    style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Мы
                                    способны и готовы действовать, предлагать, пробовать, опережая современные тенденции
                                    (реалии).
                                </div>
                            </div>
                            <div
                                className="self-stretch grow shrink basis-0 p-8 rounded-[40px] flex-col justify-start items-start gap-4 flex"
                                style={{backgroundColor: theme === 'light' ? '#F5F5F5' : '#212121'}}>
                                <div
                                    className="self-stretch text-zinc-900 text-[32px] font-medium font-['Raleway'] leading-[48px]"
                                    style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Поощрение
                                    инициатив
                                </div>
                                <div className="self-stretch justify-start items-start gap-4 inline-flex">
                                    <div
                                        className="grow shrink basis-0 text-zinc-900 text-base font-bold font-['Raleway'] leading-relaxed"
                                        style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Мы
                                        стимулируем живой интерес, увлеченность и идейность наших сотрудниковю.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grow shrink basis-0 h-[480px] p-8 bg-rose-600 rounded-[40px] flex-col justify-end items-start gap-4 inline-flex bg-no-repeat
                         bg-[top_-75px_right_60px] bg-[url('/images/figureForMission.svg')]">

                            <div
                                className="self-stretch text-white text-[32px] font-medium font-['Raleway'] leading-[48px]">Инновационность
                                подходов
                            </div>
                            <div
                                className="self-stretch text-white text-base font-bold font-['Raleway'] leading-relaxed">Мы
                                стремимся найти принципиально новые варианты решений, смотреть шире и пробовать,
                                тестировать гипотезы.
                            </div>
                        </div>
                    </div>
                    <div
                        className='back'
                        style={{backgroundColor: theme === 'light' ? '#F5F5F5' : '#212121'}}>
                        <div
                            className="self-stretch text-zinc-900 text-[32px] font-medium font-['Raleway'] leading-[48px]"
                            style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Клиентоориентированность
                        </div>
                        <div
                            className="self-stretch text-zinc-900 text-base font-bold font-['Raleway'] leading-relaxed"
                            style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Мы
                            работаем для наших клиентов и партнеров, поэтому их интересы = наши интересы.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DesktopOurMission;