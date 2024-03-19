import search from '../../public/images/search.svg'
import {ThemeType} from "./DesktopHeader";

const Services = ({theme}:ThemeType) => {
    return (
        <div>
            <div className='sm:hidden'>
                <div >
                    <div className='flex justify-between p-4 '><h2 className='text-[32px]' style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Спектр услуг</h2>
                        <img src={search} alt=""/></div>
                    <p className='p-4 text-[16px] text-[#707070]'>
                        Мы предлагаем широкий спектр услуг в сфере сопровождения операционной деятельности IT Компаний
                    </p>
                </div>

                <p className='text-[#1B1B1B] p-4 text-[24px]'>
                    FinTech специализируется <br/> на предоставлении услуг аккаунтинга, банкинга, управления платежными системами,
                    HR сопровождения и ведения международной юридической деятельности для IT Компаний в Роcсии, Европе и
                    Средней Азии
                </p>
            </div>

            <div className="hidden sm:inline-flex w-[1400px] h-[336px] justify-start items-start gap-16 mb-[160px]">
                <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-4 inline-flex">
                    <div className="justify-start items-center gap-8 inline-flex">
                        <div className="text-zinc-900 text-[64px] font-medium font-['Raleway']" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Спектр услуг</div>
                        <div className="p-6 bg-neutral-100 rounded-[30px] justify-start items-center gap-2.5 flex">
                            <div className="w-14 h-14 relative" ><img src={search} alt=""/></div>
                        </div>
                    </div>
                    <div className="self-stretch text-black text-opacity-50 text-xl font-medium font-['Raleway'] leading-[30px]" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Мы предлагаем широкий спектр услуг в сфере сопровождения операционной деятельности IT Компаний</div>
                </div>
                <div className="grow shrink basis-0 self-stretch text-zinc-900 text-[32px] font-medium font-['Raleway'] leading-[48px]" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>FinTech специализируется на предоставлении услуг аккаунтинга, банкинга, управления платежными системами, HR сопровождения и ведения международной юридической деятельности для IT Компаний в Роcсии, Европе и Средней Азии</div>
            </div>
        </div>

    );
};

export default Services;