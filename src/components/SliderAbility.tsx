import {useState} from "react";
import time from '../../../fintech/public/images/Frame211.png'
import fintech from '../../../fintech/public/images/Frame214.svg'
import rings from '../../../fintech/public/images/rings.svg'

const SliderAbility = () => {

    const initialData = [
        {
            id: 1,
            block:  <div>
                <div className="w-[300px] h-[150px] sm:w-[350px] sm:h-[175px] p-[27.43px] bg-neutral-800 rounded-[34.29px] justify-between items-center inline-flex">
                    <div className="flex-col justify-center items-start inline-flex">
                        <div className="text-white text-[27.43px] font-medium font-['Raleway'] leading-[41.14px]">Клиент</div>
                        <div className="text-white text-[27.43px] font-medium font-['Raleway'] leading-[41.14px]">Задача</div>
                    </div>
                    <div className="w-[205.71px] h-[205.71px] rounded-full border-8 border-black" />
                    <div className="w-[41.14px] h-[41.14px] relative" />
                </div>
                <div className="w-[300px] h-[150px] sm:w-[350px] sm:h-[175px] p-[27.43px] bg-rose-600 rounded-[34.29px] justify-start items-center gap-[27.43px] inline-flex">
                    <div className="w-[41.14px] h-[41.14px] relative" />
                    <div className="flex-col justify-center items-start inline-flex">
                        <div className="text-white text-[27.43px] font-medium font-['Raleway'] leading-[41.14px]">Финтех</div>
                        <div className="text-white text-[27.43px] font-medium font-['Raleway'] leading-[41.14px]">Решение</div>
                    </div>
                </div>
            </div>
        },
        {

            id: 2,
            block: <div>
                <img  src={time} className='sm:w-[350px] sm:h-[350px]' alt=""/>
            </div>

        },
        {
            id: 3,
            block: <div>
                <img src={fintech} className='sm:w-[350px] sm:h-[350px]' alt=""/>
            </div>
        },
        {
            id: 4,
            block: <div class="w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] bg-neutral-800 rounded-[35px] flex-col justify-center items-start gap-[43px] inline-flex">
                <div class="self-stretch p-7 justify-center items-center gap-3.5 inline-flex">
                    <div class="grow shrink basis-0 text-white text-[32px] font-medium font-['Raleway']">Оптимизируем     бизнес-процессы</div>
                </div>
                <div class="w-[300px] h-[150px] sm:w-[350px] sm:h-[350px] relative">
                    <div class="w-[87.50px] h-[175px] left-0 top-0 absolute rounded-full border-8 border-rose-400"></div>
                    <div class="w-[87.50px] h-[175px] left-[43.75px] top-0 absolute rounded-full border-8 border-rose-600"></div>
                    <div class="w-[87.50px] h-[175px] left-[87.50px] top-0 absolute rounded-full border-8 border-rose-400"></div>
                    <div class="w-[87.50px] h-[175px] left-[131.25px] top-0 absolute rounded-full border-8 border-rose-600"></div>
                    <div class="w-[87.50px] h-[175px] left-[175px] top-0 absolute rounded-full border-8 border-rose-400"></div>
                    <div class="w-[87.50px] h-[175px] left-[218.75px] top-0 absolute rounded-full border-8 border-rose-600"></div>
                    <div class="w-[87.50px] h-[175px] left-[262.50px] top-0 absolute rounded-full border-8 border-rose-400"></div>
                </div>
            </div>
        }
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
        <div className="fc gap-8 justify-start items-start w-full sm:w-[1400px]">
            <div className="fc sm:flex-row-reverse sm:justify-between sm:w-full px-4 gap-4 justify-start items-start">
            </div>
            <div className=" w-full   justify-start items-start inline-flex flex-col overflow-y-hidden">
                <div className="flex flex-row  px-4">
                    {cards.map(c => (
                        <div onTouchStart={() => touchStart(c.id)} onTouchEnd={() => touchEnd(c.id)}
                             className="w-[300px]  h-[300px] sm:w-[350px] sm:h-[350px]  flex-col justify-between items-start inline-flex">

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

export default SliderAbility;