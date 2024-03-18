import  {useEffect, useState} from 'react';
import heart from '../../public/images/heart.svg'
import BonusComponent from "./BonusComponent";
import {ThemeType} from "./DesktopHeader";
import BonusDescription from "./BonusDescription";
import dms from '../../public/images/dms.jpg'
import ball from '../../public/images/ball.png'
import education from '../../public/images/education.jpg'
import gift from '../../public/images/gift.jpg'
import events from '../../public/images/events.jpg'
import save from '../../public/images/save.jpg'
import help from '../../public/images/help.jpg'
import dinners from '../../public/images/dinners.jpg'
import learnEnglish from '../../public/images/learnEnglish.jpg'

type SuperObjType = {"01": {img: string, description: string, title: string}, "02": {img: string, description: string, title: string}, "03": {img: string, description: string, title: string}, "04": {img: string, description: string, title: string}, "05": {img: string, description: string, title: string}, "06": {img: string, description: string, title: string}, "07": {img: string, description: string, title: string}, "08": {img: string, description: string, title: string}, "09": {img: string, description: string, title: string}}

const superObj: SuperObjType
    = {
    '01': {
        title: 'Медицина и ДМС',
        description: 'У нас действуют специальные условия ДМС для работников',
        img: dms

    },
    '02': {
        title: 'Кафетерий бенефитов',
        description: 'Возмещение затрат на посещение спортивных секций или клубов',
        img: ball
    },
    '03': {
        title: 'Обучение и развитие',
        description: 'Мы предоставляем нашим сотрудникам возможность проходить различные тренинги и курсы, которые помогают им улучшить свои профессиональные навыки',
        img: education
    },
    '04': {
        title: 'Подарки сотрудникам',
        description: 'День рождения сотрудника, семейные торжества (день рождения ребенка, свадьба, подарок ко дню ухода в отпуск по беременности и родам - Baby-box',
        img: gift
    },
    '05': {
        title: 'Корпоративные мероприятия',
        description: 'День защитника Отечества, Международный женский день, День рождения компании, Family day, Children\'s day, Празднование Нового года',
        img: events
    },
    '06': {
        title: 'Страхование',
        description: 'Финансовая поддержка с банком-партнером',
        img: save
    },
    '07': {
        title: 'Материальная помощь',
        description: 'В жизни могут происходить самые разные обстоятельства, мы это прекрасно понимаем и потому мы готовы помочь сотрудникам, которые оказались в затруднительной ситуации',
        img: help
    },
    '08': {
        title: 'Happy hours',
        description: 'Каждый четверг у нас «Happy hours». Организовываем вкусный обед или перекус для всех сотрудников Компании.',
        img: dinners
    },
    '09': {
        title: 'Изучение английского языка',
        description: 'Корпоративный английский. Организовываем занятия несколько раз в неделю.',
        img: learnEnglish
    },
}


const BonusesDesktop = ({theme}: ThemeType) => {
    const [index, setIndex] = useState('01')
    const [isClicked, setIsClicked] = useState(false)

    useEffect(() => {

        if (isClicked) {
            setIsClicked(false)
        } else {
            const interval = window.setInterval(() => {
                const max = Math.floor(Object.keys(superObj).length + 1);

                setIndex(`0${Math.floor(Math.random() * (max - 1) + 1)}`)

            }, 3000,)

            return () => clearInterval(interval)
        }
    }, [isClicked])

    const handleClick = (key:string) => {
        setIndex(key)
        setIsClicked(true)
    }

    return (
        <div className='hidden sm:block relative'>
            <div className="hidden sm:inline-flex w-[1400px] h-24 justify-center items-center gap-16 ">
                <div className="grow shrink basis-0 h-24 justify-start items-center gap-8 flex">
                    <div className="text-zinc-900 text-[64px] font-medium font-['Raleway']"
                         style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Наши бонусы
                    </div>
                    <div className="p-6 bg-rose-600 rounded-[30px] justify-start items-center gap-2.5 flex">
                        <div className="w-12 h-12 relative"><img src={heart}/></div>
                    </div>
                </div>
                <div className="grow shrink basis-0 text-zinc-900 text-xl font-medium font-['Raleway'] leading-[30px]"
                     style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Для наших сотрудников мы разработали
                    ценностное предложение, основанное на современных HR-методиках.
                </div>
            </div>
            <div className='flex'>
                <BonusDescription config={superObj[index]} theme={theme}/>
                <div className='flex flex-wrap w-[668px] ml-[720px] mt-[40px] '>
                    {Object.entries(superObj).map(([key, value]) => (
                        <BonusComponent onClick={() => handleClick(key)} num={key} isActive={index===key} title={value.title}
                                        theme={theme}/>))}
                </div>

            </div>
        </div>


    );
};

export default BonusesDesktop;
