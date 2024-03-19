import {useState} from "react";
import goals1 from '../../../fintech/public/images/goals1.png'
import goals2 from '../../../fintech/public/images/goals2.png'
import goals3 from '../../../fintech/public/images/goals3.png'
import StarSvg from "./svg/StarSvg";


const SliderGoals = () => {

    const initialData = [
        {
            id: 1,
            block:  <div className="w-[300px] h-[332px] bg-neutral-100 rounded-[30px] flex-col justify-start items-start inline-flex">
                <div className="self-stretch grow shrink basis-0 p-4 flex-col justify-start items-center gap-4 flex">
                    <div className="self-stretch justify-start items-center gap-4 inline-flex">
                        <div className="w-6 h-6 px-0.5 pt-0.5 pb-[2.88px] justify-center items-center flex" ><StarSvg/></div>
                        <div className="grow shrink basis-0 text-rose-600 text-2xl font-medium font-['Raleway'] leading-9">Качество</div>
                    </div>
                    <div className="self-stretch text-zinc-900 text-sm font-medium font-['Raleway'] leading-snug">
                        Высокое качество сопровождения и взаимодействия с проектами и их подразделениями</div>
                </div>
                <img className="self-stretch h-40 p-4 rounded-[30px]" src={goals1} />
            </div>

        },
        {
            id: 2,
            block:  <div className="w-[300px] h-[332px] bg-neutral-100 rounded-[30px] flex-col justify-start items-start inline-flex">
                <div className="self-stretch grow shrink basis-0 p-4 flex-col justify-start items-center gap-4 flex">
                    <div className="self-stretch justify-start items-center gap-4 inline-flex">
                        <div className="w-6 h-6 px-[5.45px] py-[1.31px] justify-center items-center flex" />
                        <div className="grow shrink basis-0 text-rose-600 text-2xl font-medium font-['Raleway'] leading-9">Риски</div>
                    </div>
                    <div className="self-stretch text-zinc-900 text-sm font-medium font-['Raleway'] leading-snug">Минимизация всех видов рисков проектов</div>
                </div>
                <img className="self-stretch h-40 p-4 rounded-[30px]" src={goals2} />
            </div>

        },
        {
            id: 3,
            block:  <div className="w-[300px] h-[332px] bg-neutral-100 rounded-[30px] flex-col justify-between items-start inline-flex">
                <div className="self-stretch h-[172px] p-4 flex-col justify-start items-center gap-4 flex">
                    <div className="self-stretch justify-start items-center gap-4 inline-flex">
                        <div className="w-6 h-6 px-[3.25px] pt-[2.16px] pb-[2.25px] justify-center items-center flex" />
                        <div className="grow shrink basis-0 text-rose-600 text-2xl font-medium font-['Raleway'] leading-9">Развитие</div>
                    </div>
                    <div className="self-stretch text-zinc-900 text-sm font-medium font-['Raleway'] leading-snug">Развитие компетенций в профессиональных направлениях и рост экспертизы УК в В2В и В2С  сферах</div>
                </div>
                <img className="self-stretch h-40 p-4 rounded-[30px]" src={goals3} />
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
            <h2 className='text-[#FF1744] text-[48px] p-4'>Наши цели</h2>
            <div className="fc sm:flex-row-reverse sm:justify-between sm:w-full px-4 gap-4 justify-start items-start">
            </div>
            <div className="sm:hidden w-full  justify-start items-start inline-flex flex-col overflow-y-hidden">
                <div className="flex flex-row  px-4">
                    {cards.map(c => (
                        <div onTouchStart={() => touchStart(c.id)} onTouchEnd={() => touchEnd(c.id)}
                             className="w-[300px]  h-[332px]   flex-col justify-between items-start ml-2 inline-flex">

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

export default SliderGoals;
