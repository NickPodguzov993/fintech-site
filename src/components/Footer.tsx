import logo from '../../../fintech/public/images/Logo.svg'
import bigLogo from '../../../fintech/public/images/fintechblacktext.svg'

const Footer = () => {
    return (
        <div className=''>
            <div
                className="w-[360px] h-[520px] px-4 py-8 bg-neutral-100 rounded-[30px] flex-col justify-start items-start gap-8 inline-flex mb-[120px]">
                <div className="w-[110.84px] h-12 relative"><img src={logo} alt="logo"/></div>
                <div className="self-stretch h-[312px] flex-col justify-start items-start gap-8 flex">
                    <div className="w-[195px] h-14 text-zinc-900 text-base font-medium font-['Mulish']">FinTech<br/>©
                        2024 All rights reserved
                    </div>
                    <div className="flex-col justify-start items-start flex">
                        <div
                            className="self-stretch h-12 px-4 rounded-[50px] justify-start items-center gap-2 inline-flex">
                            <div
                                className="text-zinc-900 text-base font-bold font-['Raleway'] leading-relaxed">Главная
                            </div>
                        </div>
                        <div
                            className="self-stretch h-12 px-4 rounded-[50px] justify-start items-center gap-2 inline-flex">
                            <div
                                className="text-zinc-900 text-base font-bold font-['Raleway'] leading-relaxed">Контакты
                            </div>
                        </div>
                        <div
                            className="self-stretch h-12 px-4 rounded-[50px] justify-start items-center gap-2 inline-flex">
                            <div
                                className="text-zinc-900 text-base font-bold font-['Raleway'] leading-relaxed">Документы
                            </div>
                        </div>
                    </div>
                    <div
                        className="w-[328px] h-12 pl-8 pr-1 bg-rose-600 rounded-[100px] justify-between items-center inline-flex">
                        <div className="text-white text-sm font-bold font-['Raleway'] leading-snug">Связаться с нами
                        </div>
                        <div
                            className="w-10 h-10 p-2 bg-white rounded-[100px] justify-center items-center gap-2.5 flex">
                            <div className="w-6 h-6 relative origin-top-left -rotate-180"></div>
                        </div>
                    </div>
                </div>


            </div>
            <div className='absolute'>
                <img  src={bigLogo} alt=""/>
            </div>
        </div>
    );
}

export default Footer;