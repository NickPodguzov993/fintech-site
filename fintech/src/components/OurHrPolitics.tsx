import React, {useState} from "react";
import HrPoliticsComponent from "./HrPoliticsComponent";
import cake from '../../public/images/cake.svg'
import loyality from '../../public/images/loyalty.svg'
import education from '../../public/images/education.svg'
import {ThemeType} from "./DesktopHeader";


const OurHrPolitics = ({theme}:ThemeType) => {

    const initialData = [
        {
            id: 1,
            block:  <div class="w-[300px] h-[290px] sm:w-[400px] sm:h-[402px]  flex-col justify-start items-start inline-flex">
                <div class="self-stretch h-32 p-4 bg-neutral-100 rounded-tl-[30px] rounded-tr-[30px] flex-col justify-start items-start flex">
                    <div class="px-4 py-2 bg-white rounded-[20px] justify-center items-center gap-[100px] inline-flex">
                        <div class="text-zinc-900 text-2xl font-medium font-['Raleway'] leading-9" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Заработная</div>
                    </div>
                    <div class="px-4 py-2 bg-white rounded-[20px] justify-center items-center gap-[100px] inline-flex">
                        <div class="text-zinc-900 text-2xl font-medium font-['Raleway'] leading-9" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>плата</div>
                    </div>
                </div>
                <div class="self-stretch h-[162px] p-4 bg-neutral-100 rounded-bl-[30px] rounded-br-[30px] flex-col justify-start items-end gap-4 flex">
                    <div class="self-stretch text-zinc-900 text-sm font-bold font-['Raleway'] leading-snug" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Заработная плата пересматривается ежегодно по итогам Perfomance Rewier</div>
                    <div class="p-2 bg-white rounded-[10px] justify-start items-end gap-[26px] inline-flex">
                        <div class="w-8 h-8 relative"></div>
                    </div>
                </div>
            </div>

        },
        {
            id: 2,
            block:  <div class="w-[300px] h-[290px] sm:w-[400px] sm:h-[402px] flex-col justify-start items-start inline-flex">
                <div class="self-stretch h-32 p-4 bg-neutral-100 rounded-tl-[30px] rounded-tr-[30px] flex-col justify-start items-start flex">
                    <div class="px-4 py-2 bg-white rounded-[20px] justify-center items-center gap-[100px] inline-flex">
                        <div class="text-zinc-900 text-2xl font-medium font-['Raleway'] leading-9" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Реферальный</div>
                    </div>
                    <div class="px-4 py-2 bg-white rounded-[20px] justify-center items-center gap-[100px] inline-flex">
                        <div class="text-zinc-900 text-2xl font-medium font-['Raleway'] leading-9" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>бонус</div>
                    </div>
                </div>
                <div class="self-stretch h-[162px] p-4 bg-neutral-100 rounded-bl-[30px] rounded-br-[30px] flex-col justify-start items-end gap-4 flex">
                    <div class="self-stretch text-zinc-900 text-sm font-bold font-['Raleway'] leading-snug" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Порекомендуй компании талантливого кандидата и получи премию</div>
                    <div class="p-2 bg-white rounded-[10px] justify-start items-end gap-[26px] inline-flex">
                        <div class="w-8 h-8 relative"></div>
                    </div>
                </div>
            </div>

        },
        {
            id: 3,
            block:  <div class="w-[300px] h-[290px] sm:w-[400px] sm:h-[402px] flex-col justify-start items-start inline-flex">
                <div class="self-stretch h-32 p-4 bg-neutral-100 rounded-tl-[30px] rounded-tr-[30px] flex-col justify-start items-start flex">
                    <div class="px-4 py-2 bg-white rounded-[20px] justify-center items-center gap-[100px] inline-flex">
                        <div class="text-zinc-900 text-2xl font-medium font-['Raleway'] leading-9" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Кафетерий</div>
                    </div>
                    <div class="px-4 py-2 bg-white rounded-[20px] justify-center items-center gap-[100px] inline-flex">
                        <div class="text-zinc-900 text-2xl font-medium font-['Raleway'] leading-9">бенефитов</div>
                    </div>
                </div>
                <div class="self-stretch h-[162px] p-4 bg-neutral-100 rounded-bl-[30px] rounded-br-[30px] flex-col justify-start items-end gap-4 flex">
                    <div class="self-stretch text-zinc-900 text-sm font-bold font-['Raleway'] leading-snug" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Компенсация занятий спортом, увлечений, обучающих курсов с трудовой фиксацией</div>
                    <div class="p-2 bg-white rounded-[10px] justify-start items-end gap-[26px] inline-flex">
                        <div class="w-8 h-8 relative"></div>
                    </div>
                </div>
            </div>

        },
        {
            id: 4,
            block:  <div class="w-[300px] h-[290px] sm:w-[400px] sm:h-[402px] flex-col justify-start items-start inline-flex">
                <div class="self-stretch h-32 p-4 bg-neutral-100 rounded-tl-[30px] rounded-tr-[30px] flex-col justify-start items-start flex">
                    <div class="px-4 py-2 bg-white rounded-[20px] justify-center items-center gap-[100px] inline-flex">
                        <div class="text-zinc-900 text-2xl font-medium font-['Raleway'] leading-9" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Vel accumsan</div>
                    </div>
                    <div class="px-4 py-2 bg-white rounded-[20px] justify-center items-center gap-[100px] inline-flex">
                        <div class="text-zinc-900 text-2xl font-medium font-['Raleway'] leading-9" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Ornare amet, tortor</div>
                    </div>
                </div>
                <div class="self-stretch grow shrink basis-0 p-4 bg-neutral-100 rounded-bl-[30px] rounded-br-[30px] flex-col justify-between items-end flex">
                    <div class="self-stretch text-zinc-900 text-sm font-bold font-['Raleway'] leading-snug" style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>In est. Dictum non consectetur consectetur elit. Non sit e.</div>
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
        <div className="fc gap-8 justify-start items-start w-full">
            <div className='flex p-4'>
                <h2 className=' text-[32px] sm:text-[64px]' style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Наша HR-политика</h2>
            </div>
            
            <div className="fc sm:flex-row-reverse sm:justify-between sm:w-full px-4 gap-4 justify-start items-start">
            </div>
            <div className=" w-full  justify-start items-start inline-flex flex-col overflow-y-hidden sm:overflow-y-scroll">
                <div className="flex flex-row  px-4 sm:hidden">
                    {cards.map(c => (
                        <div onTouchStart={() => touchStart(c.id)} onTouchEnd={() => touchEnd(c.id)}
                             className="w-[300px]  h-[332px] sm:w-[400px] sm:h-[402px] sm:  flex-col justify-between items-start inline-flex">

                            <div>
                                {c.block}
                            </div>
                        </div>
                    ))}
                </div>
                <div className='hidden sm:flex'>
                    <HrPoliticsComponent theme={theme} title={'Заработная'} title2={'плата'} description={'Заработная плата пересматривается ежегодно по итогам Perfomance Rewier'} img={loyality}/>
                    <HrPoliticsComponent theme={theme} title={'Реферальный'} title2={'бонус'} description={'Порекомендуй компании талантливого кандидата и получи премию'} img={education}/>
                    <HrPoliticsComponent theme={theme} title={'Кафетерий'} title2={'бенефитов'} description={'Компенсация занятий спортом, увлечений, обучающих курсов с трудовой фиксацией'} img={cake}/>
                    <HrPoliticsComponent theme={theme} title={'Vel accumsan'} title2={'Ornare amet, tortor'} description={'In est. Dictum non consectetur consectetur elit. Non sit e.'} img={education}/>


                </div>
            </div>
        </div>




    );
};

export default OurHrPolitics;