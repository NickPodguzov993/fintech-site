import React, {useState} from "react";
import goals1 from '../../../fintech/public/images/goals1.png'
import goals2 from '../../../fintech/public/images/goals2.png'
import goals3 from '../../../fintech/public/images/goals3.png'
import redSearch from '../../public/images/redSearch.svg'
import union from '../../public/images/Union.svg'


const OurMission = () => {

    const initialData = [
        {
            id: 1,
            block:  <div className="w-[300px] h-[480px] relative">
                <div className="w-[440px] h-[345.66px] absolute  left-[16px] top-[46px] ">
                    <img src={union} />
                </div>
                <div className="h-[196px] p-8 left-0 top-[284px] absolute bg-neutral-100 bg-opacity-60 rounded-[40px] backdrop-blur-[20px] flex-col justify-start items-start gap-2 inline-flex">
                    <div className="self-stretch text-zinc-900 text-2xl font-medium font-['Raleway'] leading-9">Экспертность</div>
                    <div className="self-stretch text-zinc-900 text-sm font-bold font-['Raleway'] leading-snug">Мы аккумулируем полученный опыт и постоянно продолжаем учиться и развиваться. Рост  компетенций для нас приоритет.</div>
                </div>
            </div>

        },
        {
            id: 2,
            block: <div className="w-[300px] h-[480px] flex-col justify-start items-center  inline-flex ">
                <div
                    className="self-stretch grow shrink basis-0 p-8 bg-neutral-100 rounded-[40px] z-40 flex-col justify-start items-start gap-2 flex">
                    <div
                        className="self-stretch text-zinc-900 text-2xl font-medium font-['Raleway'] leading-9">Проактивность
                    </div>
                    <div className="self-stretch text-zinc-900 text-sm font-bold font-['Raleway']  leading-snug">Мы
                        способны и готовы действовать, предлагать, пробовать, опережая современные тенденции (реалии).
                    </div>
                </div>
                <div
                    className="self-stretch grow shrink basis-0 p-8 bg-neutral-100 z-40 rounded-[40px] flex-col justify-start items-start gap-2 flex">
                    <div
                        className="self-stretch text-zinc-900 text-2xl font-medium font-['Raleway'] leading-9">Поощрение
                        инициатив
                    </div>
                    <div className="self-stretch justify-start items-start gap-4 inline-flex">
                        <div
                            className="grow shrink basis-0 text-zinc-900 text-sm font-bold font-['Raleway'] leading-snug">Мы
                            стимулируем живой интерес, увлеченность и идейность наших сотрудниковю.
                        </div>
                    </div>
                </div>
            </div>

        },
        {
            id: 3,
            block: <div
                className="w-[300px] h-[480px] p-8 bg-rose-600 rounded-[40px] flex-col justify-end items-start gap-2 inline-flex relative">

                <div className="self-stretch text-white text-2xl font-medium font-['Raleway'] leading-9">Инновационность
                    подходов
                </div>
                <div className="self-stretch text-white text-sm font-bold font-['Raleway'] leading-snug">Мы стремимся
                    найти принципиально новые варианты решений, смотреть шире и пробовать, тестировать гипотезы.
                </div>
            </div>

        },
        {
            id: 3,
            block: <div
                className="w-[300px] h-[480px] p-8 bg-neutral-100 rounded-[40px] flex-col justify-start items-start gap-4 inline-flex">
                <div className="self-stretch text-zinc-900 text-2xl font-medium font-['Raleway'] leading-9">Ориентация
                    на клиента
                </div>
                <div className="self-stretch text-zinc-900 text-base font-bold font-['Raleway'] leading-relaxed">Мы
                    работаем для наших клиентов и партнеров, поэтому их интересы = наши интересы.
                </div>
            </div>

        },
    ]
    const [cards, setCards] = useState(initialData);
    const touchStart = (id: number) : void => {
        const updatedData = cards.map(c => {
            if (id === c.id) {
                return { ...c, isHovered: true };
            }
            return c;
        });

        setCards(updatedData);
    };

    const touchEnd = (id: number): void => {
        const updatedContent = cards.map(c => {
            if (id === c.id) {
                return { ...c, isHovered: false };
            }
            return c;
        });

        setCards(updatedContent);
    };

    return (
        <div className="fc gap-8 justify-start items-start w-full sm:hidden">
            <div className='flex p-4'>
                <h2 className=' text-[32px] '>Наша миссия и ценности</h2>
                <img src={redSearch} />
            </div>

            <p>Мы помогаем нашим клиентам оптимизировать свои бизнес-процессы, внедрять новые технологии и повышать эффективность работы</p>
            <div className="fc sm:flex-row-reverse sm:justify-between sm:w-full px-4 gap-4 justify-start items-start">
            </div>
            <div className=" w-full  justify-start items-start inline-flex flex-col overflow-y-hidden">
                <div className="flex flex-row  px-4">
                    {cards.map(c => (
                        <div onTouchStart={() => touchStart(c.id)} onTouchEnd={() => touchEnd(c.id)}
                             className="w-[300px]  h-[480px]  flex-col justify-between items-start inline-flex">

                            <div>
                                {c.block}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>




    );
};

export default OurMission;