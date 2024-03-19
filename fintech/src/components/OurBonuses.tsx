import {useEffect, useState} from "react";

import redSearch from '../../public/images/redSearch.svg'
import Dms from "../../public/images/dms.jpg";
import Ball from "../../public/images/ball.png";
import Education from "../../public/images/education.jpg";
import Gift from "../../public/images/gift.jpg";
import Events from "../../public/images/events.jpg";
import Save from "../../public/images/save.jpg";
import Help from "../../public/images/help.jpg";
import Dinners from "../../public/images/dinners.jpg";
import LearnEnglish from "../../public/images/learnEnglish.jpg";
import {superObj} from "./BonusesDesktop";
import BonusDescription from "./BonusDescription";
import {ThemeType} from "./DesktopHeader";
import BonusDescriptionMobile from "./BonusDescriptionMobile";


const OurBonuses = ({theme}: ThemeType) => {

    const [open, setOpen] = useState(false)

    const openCard = () => {
        console.log('asdasdasdasd')
        setOpen(!open)
    }

    const initialData = [
        {
            id: 1,
            block:
                <div>
                    <div
                        className="w-[209px] h-[58px] px-6 py-4 bg-white rounded-[20px] border border-rose-600 justify-center items-center gap-2 inline-flex">
                        <div className="text-rose-600 text-base font-bold font-['Raleway'] leading-relaxed">01</div>
                        <div className="text-rose-600 text-base font-medium font-['Raleway'] leading-normal">Медицина и
                            ДМС
                        </div>
                    </div>
                    {open && <div>12312312312312321</div>}
                    {/*<div className="w-[328px] h-[181px] p-8 flex-col justify-start items-center gap-4 inline-flex">
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
                <div
                    className="text-rose-600 hover:text-white text-base font-bold font-['Raleway'] leading-relaxed">02
                </div>
                <div
                    className="text-rose-600 hover:text-white text-base font-medium font-['Raleway'] leading-normal">Кафетерий
                    бенефитов
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

    const superObj2 = [
        {
            id: '01',
            title: 'Медицина и ДМС',
            description: 'У нас действуют специальные условия ДМС для работников',
            img: Dms

        },
        {
            id: '02',
            title: 'Кафетерий бенефитов',
            description: 'Возмещение затрат на посещение спортивных секций или клубов',
            img: Ball
        },
        {
            id: '03',
            title: 'Обучение и развитие',
            description: 'Мы предоставляем нашим сотрудникам возможность проходить различные тренинги и курсы, которые помогают им улучшить свои профессиональные навыки',
            img: Education
        },
        {
            id: '04',
            title: 'Подарки сотрудникам',
            description: 'День рождения сотрудника, семейные торжества (день рождения ребенка, свадьба, подарок ко дню ухода в отпуск по беременности и родам - Baby-box',
            img: Gift
        },
        {
            id: '05',
            title: 'Корпоративные мероприятия',
            description: 'День защитника Отечества, Международный женский день, День рождения компании, Family day, Children\'s day, Празднование Нового года',
            img: Events
        },
        {
            id: '06',
            title: 'Страхование',
            description: 'Финансовая поддержка с банком-партнером',
            img: Save
        },
        {
            id: '07',
            title: 'Материальная помощь',
            description: 'В жизни могут происходить самые разные обстоятельства, мы это прекрасно понимаем и потому мы готовы помочь сотрудникам, которые оказались в затруднительной ситуации',
            img: Help
        },
        {
            id: '08',
            title: 'Happy hours',
            description: 'Каждый четверг у нас «Happy hours». Организовываем вкусный обед или перекус для всех сотрудников Компании.',
            img: Dinners
        },
        {
            id: '09',
            title: 'Изучение английского языка',
            description: 'Корпоративный английский. Организовываем занятия несколько раз в неделю.',
            img: LearnEnglish
        },
    ]
    const [cards, setCards] = useState(superObj2);
    const touchStart = (id: number): void => {
        const updatedData = cards.map(c => {
            if (id === c.id) {
                return {...c, isHovered: true};
            }
            return c;
        });

        setCards(updatedData);
    };

    const touchEnd = (id: number): void => {
        const updatedContent = cards.map(c => {
            if (id === c.id) {
                return {...c, isHovered: false};
            }
            return c;
        });

        setCards(updatedContent);
    };

    const [index, setIndex] = useState<string>('01')
    // const [isClicked, setIsClicked] = useState(false)

    /* useEffect(() => {

         if (isClicked) {
             setIsClicked(false)
         } else {
             const interval = window.setInterval(() => {
                 const max = Math.floor(Object.keys(superObj).length + 1);

                 setIndex(`0${Math.floor(Math.random() * (max - 1) + 1)}`)

             }, 3000,)

             return () => clearInterval(interval)
         }
     }, [isClicked])*/

    const handleClick = (key: string) => {
        setIndex(key)
        //  setIsClicked(true)
    }

    return (
        <div className="sm:hidden fc gap-8 justify-start items-start w-full relative">
            {/*  <div className='flex p-4'>
                <h2 className=' text-[32px] '>Наши бонусы</h2>
                <img src={redSearch}/>
            </div>*/}

            <p>Для наших сотрудников мы разработали ценностное предложение, основанное на современных HR-методиках.</p>
            <div className=" w-full  justify-start items-start inline-flex flex-col overflow-y-hidden">
                <BonusDescriptionMobile config={superObj[index]} theme={theme}/>
                <div className="flex flex-row  px-4  ">
                    {cards.map((c, index) => {
                            if (index < 4) {
                                return (
                                    <div>
                                        <div onClick={() => handleClick(c.id)}
                                             className="w-[299px] h-[58px] px-6 py-4 bg-white rounded-[20px] border border-rose-600 justify-center items-center gap-2 inline-flex">
                                            <div
                                                className="text-rose-600 text-base font-bold font-['Raleway'] leading-relaxed">{c.id}</div>
                                            <div
                                                className="text-rose-600 text-base font-medium font-['Raleway'] leading-normal">{c.title}
                                            </div>
                                        </div>
                                    </div>
                                );
                            } return null;

                        }
                    )
                    }


                </div>

                <div className="flex flex-row  px-4  ">
                    {cards.map((c, index) => {
                            if (index > 3) {
                                return (
                                    <div>
                                        <div onClick={() => handleClick(c.id)}
                                             className="w-[299px] h-[58px] px-6 py-4 bg-white rounded-[20px] border border-rose-600 justify-center items-center gap-2 inline-flex">
                                            <div
                                                className="text-rose-600 text-base font-bold font-['Raleway'] leading-relaxed">{c.id}</div>
                                            <div
                                                className="text-rose-600 text-base font-medium font-['Raleway'] leading-normal">{c.title}
                                            </div>
                                        </div>
                                    </div>
                                );
                            } return null;

                        }
                    )
                    }


                </div>
            </div>

        </div>


    );
};

export default OurBonuses;
