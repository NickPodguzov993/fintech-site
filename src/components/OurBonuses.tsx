import  {useState} from "react";

import redSearch from '../../public/images/redSearch.svg'



const OurBonuses = () => {

    const [open,setOpen] = useState(false)

    const initialData = [
        {
            id: 1,
            block:
                <div>
                    <div onClick={()=>{setOpen(!open)}}
                         className="w-[209px] h-[58px] px-6 py-4 bg-white rounded-[20px] border border-rose-600 justify-center items-center gap-2 inline-flex">
                        <div className="text-rose-600 text-base font-bold font-['Raleway'] leading-relaxed">01</div>
                        <div className="text-rose-600 text-base font-medium font-['Raleway'] leading-normal">Медицина и ДМС</div>
                    </div>
                    {open && <div className="w-[328px] h-[181px] p-8 flex-col justify-start items-center gap-4 inline-flex">
                        <div className="self-stretch text-zinc-900 text-xl font-bold font-['Raleway']">Кафетерий бенефитов</div>
                        <div className="self-stretch text-zinc-900 text-base font-medium font-['Raleway'] leading-relaxed">Возмещение затрат на посещение спортивных секций или клубов</div>
                    </div>}
                    {/*<div onClick={showBonus}
                        className="w-[209px] h-[58px] px-6 py-4 bg-white rounded-[20px] border border-rose-600 justify-center items-center gap-2 inline-flex">
                        <div className="text-rose-600 text-base font-bold font-['Raleway'] leading-relaxed">01</div>
                        <div className="text-rose-600 text-base font-medium font-['Raleway'] leading-normal">Медицина и ДМС</div>
                    </div>
                    <div className="w-[328px] h-[181px] p-8 flex-col justify-start items-center gap-4 inline-flex">
                        <div className="self-stretch text-zinc-900 text-xl font-bold font-['Raleway']">Кафетерий бенефитов</div>
                        <div className="self-stretch text-zinc-900 text-base font-medium font-['Raleway'] leading-relaxed">Возмещение затрат на посещение спортивных секций или клубов</div>
                    </div>*/}
                </div>
       ,
            block2: <div
                className="w-[306px] h-[58px] px-6 py-4 bg-white rounded-[20px] border border-rose-600 justify-center items-center gap-2 inline-flex">
                <div className="text-rose-600 text-base font-bold font-['Raleway'] leading-relaxed">05</div>
                <div className="text-rose-600 text-base font-medium font-['Raleway'] leading-normal">Корпоративные
                    мероприятия
                </div>
            </div>

        },
        {
            id: 2,
            block: <div
                className="w-[251px] h-[58px] px-6 py-4 border border-rose-600 hover:bg-rose-600 bg-white  rounded-[20px] justify-center items-center gap-2 inline-flex">
                <div className="text-rose-600 hover:text-white text-base font-bold font-['Raleway'] leading-relaxed">02</div>
                <div className="text-rose-600 hover:text-white text-base font-medium font-['Raleway'] leading-normal">Кафетерий бенефитов
                </div>
            </div>,
            block2: <div
                className="w-[178px] h-[58px] px-6 py-4 bg-white rounded-[20px] border border-rose-600 justify-center items-center gap-2 inline-flex">
                <div className="text-rose-600 text-base font-bold font-['Raleway'] leading-relaxed">06</div>
                <div className="text-rose-600 text-base font-medium font-['Raleway'] leading-normal">Страхование</div>
            </div>

        },
        {
            id: 3,
            block: <div
                className="w-[241px] h-[58px] px-6 py-4 bg-white rounded-[20px] border border-rose-600 justify-center items-center gap-2 inline-flex">
                <div className="text-rose-600 text-base font-bold font-['Raleway'] leading-relaxed">03</div>
                <div className="text-rose-600 text-base font-medium font-['Raleway'] leading-normal">Обучение и
                    развитие
                </div>
            </div>,
            block2: <div
                className="w-[253px] h-[58px] px-6 py-4 bg-white rounded-[20px] border border-rose-600 justify-center items-center gap-2 inline-flex">
                <div className="text-rose-600 text-base font-bold font-['Raleway'] leading-relaxed">07</div>
                <div className="text-rose-600 text-base font-medium font-['Raleway'] leading-normal">Материальная
                    помощь
                </div>
            </div>


        },
        {
            id: 4,
            block: <div
                className="w-[248px] h-[58px] px-6 py-4 bg-white rounded-[20px] border border-rose-600 justify-center items-center gap-2 inline-flex">
                <div className="text-rose-600 text-base font-bold font-['Raleway'] leading-relaxed">04</div>
                <div className="text-rose-600 text-base font-medium font-['Raleway'] leading-normal">Подарки
                    сотрудникам
                </div>
            </div>,
            block2: <div
                className="w-[171px] h-[58px] px-6 py-4 bg-white rounded-[20px] border border-rose-600 justify-center items-center gap-2 inline-flex">
                <div className="text-rose-600 text-base font-bold font-['Raleway'] leading-relaxed">08</div>
                <div className="text-rose-600 text-base font-medium font-['Raleway'] leading-normal">Happy hours</div>
            </div>

        },
        {
            id: 5,
            block: '',
            block2: <div
                className="w-[299px] h-[58px] px-6 py-4 bg-white rounded-[20px] border border-rose-600 justify-center items-center gap-2 inline-flex">
                <div className="text-rose-600 text-base font-bold font-['Raleway'] leading-relaxed">09</div>
                <div className="text-rose-600 text-base font-medium font-['Raleway'] leading-normal">Изучение
                    английского языка
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
                <h2 className=' text-[32px] '>Наши бонусы</h2>
                <img src={redSearch} />
            </div>

            <p>Для наших сотрудников мы разработали ценностное предложение, основанное на современных HR-методиках.</p>
            <div className="fc sm:flex-row-reverse sm:justify-between sm:w-full px-4 gap-4 justify-start items-start">
            </div>
            <div className=" w-full  justify-start items-start inline-flex flex-col overflow-y-hidden">
                <div className="flex flex-row  px-4">
                    {cards.map(c => (
                        <div>
                            <div onTouchStart={() => touchStart(c.id)} onTouchEnd={() => touchEnd(c.id)}
                                 className="p-1">

                                <div>
                                    {c.block}
                                </div>
                            </div>
                        </div>


                    ))}
                </div>
                <div className="flex flex-row  px-4">
                    {cards.map(c => (
                        <div>
                            <div onTouchStart={() => touchStart(c.id)} onTouchEnd={() => touchEnd(c.id)}
                                 className="p-1">

                                <div>
                                    {c.block2}
                                </div>
                            </div>
                        </div>


                    ))}
                </div>
            </div>
        </div>




    );
};

export default OurBonuses;