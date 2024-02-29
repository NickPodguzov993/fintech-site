import React, {useState} from "react";
import redSearch from '../../public/images/redSearch.svg'


const OurHrPolitics = () => {

    const initialData = [
        {
            id: 1,
            block:  <div class="w-[300px] h-[290px]  flex-col justify-start items-start inline-flex">
                <div class="self-stretch h-32 p-4 bg-neutral-100 rounded-tl-[30px] rounded-tr-[30px] flex-col justify-start items-start flex">
                    <div class="px-4 py-2 bg-white rounded-[20px] justify-center items-center gap-[100px] inline-flex">
                        <div class="text-zinc-900 text-2xl font-medium font-['Raleway'] leading-9">Заработная</div>
                    </div>
                    <div class="px-4 py-2 bg-white rounded-[20px] justify-center items-center gap-[100px] inline-flex">
                        <div class="text-zinc-900 text-2xl font-medium font-['Raleway'] leading-9">плата</div>
                    </div>
                </div>
                <div class="self-stretch h-[162px] p-4 bg-neutral-100 rounded-bl-[30px] rounded-br-[30px] flex-col justify-start items-end gap-4 flex">
                    <div class="self-stretch text-zinc-900 text-sm font-bold font-['Raleway'] leading-snug">Заработная плата пересматривается ежегодно по итогам Perfomance Rewier</div>
                    <div class="p-2 bg-white rounded-[10px] justify-start items-end gap-[26px] inline-flex">
                        <div class="w-8 h-8 relative"></div>
                    </div>
                </div>
            </div>

        },
        {
            id: 2,
            block:  <div class="w-[300px] h-[290px] flex-col justify-start items-start inline-flex">
                <div class="self-stretch h-32 p-4 bg-neutral-100 rounded-tl-[30px] rounded-tr-[30px] flex-col justify-start items-start flex">
                    <div class="px-4 py-2 bg-white rounded-[20px] justify-center items-center gap-[100px] inline-flex">
                        <div class="text-zinc-900 text-2xl font-medium font-['Raleway'] leading-9">Реферальный</div>
                    </div>
                    <div class="px-4 py-2 bg-white rounded-[20px] justify-center items-center gap-[100px] inline-flex">
                        <div class="text-zinc-900 text-2xl font-medium font-['Raleway'] leading-9">бонус</div>
                    </div>
                </div>
                <div class="self-stretch h-[162px] p-4 bg-neutral-100 rounded-bl-[30px] rounded-br-[30px] flex-col justify-start items-end gap-4 flex">
                    <div class="self-stretch text-zinc-900 text-sm font-bold font-['Raleway'] leading-snug">Порекомендуй компании талантливого кандидата и получи премию</div>
                    <div class="p-2 bg-white rounded-[10px] justify-start items-end gap-[26px] inline-flex">
                        <div class="w-8 h-8 relative"></div>
                    </div>
                </div>
            </div>

        },
        {
            id: 3,
            block:  <div class="w-[300px] h-[290px] flex-col justify-start items-start inline-flex">
                <div class="self-stretch h-32 p-4 bg-neutral-100 rounded-tl-[30px] rounded-tr-[30px] flex-col justify-start items-start flex">
                    <div class="px-4 py-2 bg-white rounded-[20px] justify-center items-center gap-[100px] inline-flex">
                        <div class="text-zinc-900 text-2xl font-medium font-['Raleway'] leading-9">Кафетерий</div>
                    </div>
                    <div class="px-4 py-2 bg-white rounded-[20px] justify-center items-center gap-[100px] inline-flex">
                        <div class="text-zinc-900 text-2xl font-medium font-['Raleway'] leading-9">бенефитов</div>
                    </div>
                </div>
                <div class="self-stretch h-[162px] p-4 bg-neutral-100 rounded-bl-[30px] rounded-br-[30px] flex-col justify-start items-end gap-4 flex">
                    <div class="self-stretch text-zinc-900 text-sm font-bold font-['Raleway'] leading-snug">Компенсация занятий спортом, увлечений, обучающих курсов с трудовой фиксацией</div>
                    <div class="p-2 bg-white rounded-[10px] justify-start items-end gap-[26px] inline-flex">
                        <div class="w-8 h-8 relative"></div>
                    </div>
                </div>
            </div>

        },
        {
            id: 4,
            block:  <div class="w-[300px] h-[290px] flex-col justify-start items-start inline-flex">
                <div class="self-stretch h-32 p-4 bg-neutral-100 rounded-tl-[30px] rounded-tr-[30px] flex-col justify-start items-start flex">
                    <div class="px-4 py-2 bg-white rounded-[20px] justify-center items-center gap-[100px] inline-flex">
                        <div class="text-zinc-900 text-2xl font-medium font-['Raleway'] leading-9">Vel accumsan</div>
                    </div>
                    <div class="px-4 py-2 bg-white rounded-[20px] justify-center items-center gap-[100px] inline-flex">
                        <div class="text-zinc-900 text-2xl font-medium font-['Raleway'] leading-9">Ornare amet, tortor</div>
                    </div>
                </div>
                <div class="self-stretch grow shrink basis-0 p-4 bg-neutral-100 rounded-bl-[30px] rounded-br-[30px] flex-col justify-between items-end flex">
                    <div class="self-stretch text-zinc-900 text-sm font-bold font-['Raleway'] leading-snug">In est. Dictum non consectetur consectetur elit. Non sit e.</div>
                    <div class="p-2 bg-white rounded-[10px] justify-start items-end gap-[26px] inline-flex">
                        <div class="w-8 h-8 relative"></div>
                    </div>
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
        <div className="fc gap-8 justify-start items-start w-full ">
            <div className='flex p-4'>
                <h2 className=' text-[32px] '>Наша HR-политика</h2>
            </div>
            
            <div className="fc sm:flex-row-reverse sm:justify-between sm:w-full px-4 gap-4 justify-start items-start">
            </div>
            <div className="sm:hidden w-full  justify-start items-start inline-flex flex-col overflow-y-hidden">
                <div className="flex flex-row  px-4">
                    {cards.map(c => (
                        <div onTouchStart={() => touchStart(c.id)} onTouchEnd={() => touchEnd(c.id)}
                             className="w-[300px]  h-[332px]  flex-col justify-between items-start inline-flex">

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

export default OurHrPolitics;