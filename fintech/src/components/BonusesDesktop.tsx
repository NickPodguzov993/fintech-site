import React, {useEffect, useState} from 'react';
import heart from '../../public/images/heart.svg'
import BonusComponent from "./BonusComponent";
import {ThemeType} from "./Wrapper/DesktopHeader";
import BonusDescription from "./BonusDescription";

const superObj = {
'01' : {
    title: 'dms',
    description: 'sdfdsfdsg'
},
    '02' : {
        title: 'bonuses',
        description: 'sdfdsfdsg'
    },
    '03' : {
        title: 'kek1',
        description: 'sdfdsfddcsssssssssssssssssg'
    },
    '04' : {
        title: 'bonuses2',
        description: 'sdfdsfdsg'
    },
    '05' : {
        title: 'kek3',
        description: 'sdfdsfdsg'
    },
    '06' : {
        title: 'kek4',
        description: 'sdfdsfdsg'
    }
}


const BonusesDesktop = ({theme}: ThemeType) => {
    const [index, setIndex] = useState('01')
    const [isClicked, setIsClicked] = useState(false)

    useEffect(()=>{

        if(isClicked){
           setIsClicked(false)
        } else {
            const interval = window.setInterval(()=>{
                // const min = Math.ceil(min);
                const  max = Math.floor(Object.keys(superObj).length + 1);

                setIndex(`0${Math.floor(Math.random() * (max - 1) + 1)}`)

            },  7000, )

            return () => clearInterval(interval)
        }
    },[isClicked])

    const handleClick = (key) => {
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
                {/*<div>
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-8 inline-flex absolute ">
                        <div
                            className="self-stretch bg-neutral-100 rounded-[40px] justify-center items-start inline-flex">
                            <img className="grow shrink basis-0 self-stretch p-4 rounded-[40px]" src=""/>
                            <div
                                className="grow shrink basis-0 p-8 flex-col justify-start items-center gap-4 inline-flex">
                                <div className="self-stretch text-zinc-900 text-xl font-bold font-['Raleway']">ss</div>
                                <div
                                    className="self-stretch text-zinc-900 text-base font-medium font-['Raleway'] leading-relaxed"
                                    style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>Возмещение затрат на
                                    посещение спортивных секций или клубов
                                </div>
                            </div>
                        </div>
                    </div>
                </div>*/}

                <BonusDescription config={superObj[index]}/>

                <div className='flex flex-wrap w-[668px] ml-[720px] mt-[40px] '>
                    {Object.entries(superObj).map(([key,value])=> (
                        <BonusComponent onClick={()=>handleClick(key)} num={key} title={value.title} theme={theme}/>))}

                  {/*  <BonusComponent theme={theme} num={'01'} title={'Медицина и ДМС'}/>
                    <BonusComponent theme={theme} num={'02'} title={'Кафетерий бенефитов'}/>
                    <BonusComponent theme={theme} num={'03'} title={'Обучение и развитие'}/>
                    <BonusComponent theme={theme} num={'04'} title={'Подарки сотрудникам'}/>
                    <BonusComponent theme={theme} num={'05'} title={'Корпоративные мероприятия'}/>
                    <BonusComponent theme={theme} num={'06'} title={'Страхование'}/>
                    <BonusComponent theme={theme} num={'07'} title={'Материальная помощь'}/>
                    <BonusComponent theme={theme} num={'08'} title={'Happy hours'}/>
                    <BonusComponent theme={theme} num={'09'} title={'Изучение английского языка'}/>
*/}
                </div>

            </div>
        </div>


    );
};

export default BonusesDesktop;
