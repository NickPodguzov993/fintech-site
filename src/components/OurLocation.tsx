import React, {useState} from "react";
import redSearch from '../../public/images/location.svg'
import location1 from '../../public/images/location1.jpg'
import location2 from '../../public/images/location2.jpg'
import location3 from '../../public/images/location3.jpg'
import location4 from '../../public/images/location4.jpg'



const OurLocation = () => {

    const initialData = [
        {
            id: 1,
            block: <div className='w-[300px] h-[525px] m-2 relative '>
                <img src={location3} className='rounded-[30px] ' alt=""/>
                <div
                    className="w-[300px] absolute top-[350px] bottom-[0px] h-56 p-8 bg-neutral-100 rounded-[30px] flex-col justify-start items-start gap-4 inline-flex">
                    <div className="w-[400px] h-[400px]  justify-center items-center inline-flex">
                    </div>
                    <div className="self-stretch text-zinc-900 text-xl font-bold font-['Raleway'] leading-[30px]">Уютный
                        и просторный офис
                    </div>
                    <div
                        className="self-stretch text-zinc-900 text-sm font-medium font-['Raleway'] leading-[21px]">Здесь
                        все создано для удобства сотрудников: просторные помещения, современная техника, удобная мебель
                    </div>
                </div>
            </div>

        },
        {
            id: 2,
            block: <div className='w-[300px] h-[525px] m-2 relative '>
                <img src={location2} className='rounded-[30px] ' alt=""/>
                <div
                    className="w-[300px] absolute top-[350px] bottom-[0px] h-56 p-8 bg-neutral-100 rounded-[30px] flex-col justify-start items-start gap-4 inline-flex">
                    <div className="w-[400px] h-[400px]  justify-center items-center inline-flex">
                    </div>
                    <div className="self-stretch text-zinc-900 text-xl font-bold font-['Raleway'] leading-[30px]">Оборудованные рабочие места
                    </div>
                    <div
                        className="self-stretch text-zinc-900 text-sm font-medium font-['Raleway'] leading-[21px]">В нашем офисе у каждого сотрудника оборудованно рабочее место
                    </div>
                </div>
            </div>

        },
        {
            id: 3,
            block: <div className='w-[300px] h-[525px] m-2 relative '>
                <img src={location3} className='rounded-[30px] ' alt=""/>
                <div
                    className="w-[300px] absolute top-[350px] bottom-[0px] h-56 p-8 bg-neutral-100 rounded-[30px] flex-col justify-start items-start gap-4 inline-flex">
                    <div className="w-[400px] h-[400px]  justify-center items-center inline-flex">
                    </div>
                    <div className="self-stretch text-zinc-900 text-xl font-bold font-['Raleway'] leading-[30px]">Большая комната отдыха
                    </div>
                    <div
                        className="self-stretch text-zinc-900 text-sm font-medium font-['Raleway'] leading-[21px]">Комната отдыха обустроена всем необходимым для комфортного обеда и перекуса: кофемашина, холодильник, микроволновка и многое другое
                    </div>
                </div>
            </div>
        },
        {
            id: 4,
            block: <div className='w-[300px] h-[725px] m-2 relative '>
                <img src={location4} className='rounded-[30px] ' alt=""/>
                <div
                    className="w-[300px] absolute absolute top-[350px] bottom-[0px] h-56 p-8 bg-neutral-100 rounded-[30px] flex-col justify-start items-start gap-4 inline-flex">
                    <div className="w-[400px] h-[400px]  justify-center items-center inline-flex">
                    </div>
                    <div className="self-stretch text-zinc-900 text-xl font-bold font-['Raleway'] leading-[30px]">Open space пространство
                    </div>
                    <div
                        className="self-stretch text-zinc-900 text-sm font-medium font-['Raleway'] leading-[21px]">В нашем офисе присутствуют как отдельные комнаты так и открытые пространства, поэтому каждый может почувствовать себя как дома, что положительно сказывается на продуктивности работы.
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
            <div className='flex justify-between  p-4'>
                <h2 className=' text-[32px] '>Мы в Ростове</h2>
                <img src={redSearch} />
            </div>

            <div className="fc sm:flex-row-reverse sm:justify-between sm:w-full px-4 gap-4 justify-start items-start">
            </div>
            <div className=" w-full  justify-start items-start inline-flex flex-col overflow-y-hidden">
                <div className="flex flex-row  px-4">
                    {cards.map(c => (
                        <div onTouchStart={() => touchStart(c.id)} onTouchEnd={() => touchEnd(c.id)}
                             className="w-[300px] h-[625px]   flex-col justify-between items-start inline-flex">

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

export default OurLocation;