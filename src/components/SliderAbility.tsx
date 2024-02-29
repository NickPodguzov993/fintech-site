import {useState} from "react";
import time from '../../../fintech/public/images/Frame211.png'
import fintech from '../../../fintech/public/images/Frame214.svg'
import rings from '../../../fintech/public/images/rings.svg'

const SliderAbility = () => {

    const initialData = [
        {
            id: 1,
            block:  <div>
                <div className="w-[300px] h-[150px] p-[27.43px] bg-neutral-800 rounded-[34.29px] justify-between items-center inline-flex">
                    <div className="flex-col justify-center items-start inline-flex">
                        <div className="text-white text-[27.43px] font-medium font-['Raleway'] leading-[41.14px]">Клиент</div>
                        <div className="text-white text-[27.43px] font-medium font-['Raleway'] leading-[41.14px]">Задача</div>
                    </div>
                    <div className="w-[205.71px] h-[205.71px] rounded-full border-8 border-black" />
                    <div className="w-[41.14px] h-[41.14px] relative" />
                </div>
                <div className="w-[300px] h-[150px] p-[27.43px] bg-rose-600 rounded-[34.29px] justify-start items-center gap-[27.43px] inline-flex">
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
                <img src={time} alt=""/>
            </div>

        },
        {
            id: 3,
            block: <div>
                <img src={fintech} alt=""/>
            </div>
        },
        {
            id: 4,
            block: <div style={{width: '100%', height: '300px', background: '#212121', borderRadius: 30, overflow: 'hidden', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 38, display: 'inline-flex'}}>
                <div style={{alignSelf: 'stretch', padding: 15, justifyContent: 'center', alignItems: 'center', gap: 12, display: 'inline-flex'}}>
                    <div style={{flex: '1 1 0', color: 'white', fontSize: 27.43, fontFamily: 'Raleway', fontWeight: '500', wordWrap: 'break-word'}}>Оптимизируем бизнес-процессы</div>
                </div>
                <div style={{width: 300, height: 150, position: 'relative'}}>
                    <img src={rings}/>
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
        <div className="fc gap-8 justify-start items-start w-full ">
            <div className="fc sm:flex-row-reverse sm:justify-between sm:w-full px-4 gap-4 justify-start items-start">
            </div>
            <div className=" w-full  justify-start items-start inline-flex flex-col overflow-y-hidden">
                <div className="flex flex-row  px-4">
                    {cards.map(c => (
                        <div onTouchStart={() => touchStart(c.id)} onTouchEnd={() => touchEnd(c.id)}
                             className="w-[300px]  h-[300px]  flex-col justify-between items-start inline-flex">

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