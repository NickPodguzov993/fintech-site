import React from 'react';
import heart from '../../public/images/heart.svg'
import BonusComponent from "./BonusComponent";

const BonusesDesktop = () => {
    return (
        <div className='relative'>
            <div className="hidden sm:inline-flex w-[1400px] h-24 justify-center items-center gap-16 ">
                <div className="grow shrink basis-0 h-24 justify-start items-center gap-8 flex">
                    <div className="text-zinc-900 text-[64px] font-medium font-['Raleway']">Наши бонусы</div>
                    <div className="p-6 bg-rose-600 rounded-[30px] justify-start items-center gap-2.5 flex">
                        <div className="w-12 h-12 relative" ><img src={heart}/></div>
                    </div>
                </div>
                <div className="grow shrink basis-0 text-zinc-900 text-xl font-medium font-['Raleway'] leading-[30px]">Для наших сотрудников мы разработали ценностное предложение, основанное на современных HR-методиках.</div>
            </div>
            
            <div className='flex'>
                <div><div className="grow shrink basis-0 flex-col justify-start items-start gap-8 inline-flex absolute ">
                    <div className="self-stretch bg-neutral-100 rounded-[40px] justify-center items-start inline-flex">
                        <img className="grow shrink basis-0 self-stretch p-4 rounded-[40px]" src=""/>
                        <div className="grow shrink basis-0 p-8 flex-col justify-start items-center gap-4 inline-flex">
                            <div className="self-stretch text-zinc-900 text-xl font-bold font-['Raleway']">ss</div>
                            <div className="self-stretch text-zinc-900 text-base font-medium font-['Raleway'] leading-relaxed">Возмещение затрат на посещение спортивных секций или клубов</div>
                        </div>
                    </div>
                </div></div>
                
                <div className='flex flex-wrap w-[668px] ml-[720px] mt-[40px]'>
                    <BonusComponent num={'01'} title={'Медицина и ДМС'}/>
                    <BonusComponent num={'02'} title={'Кафетерий бенефитов'}/>
                    <BonusComponent num={'03'} title={'Обучение и развитие'}/>
                    <BonusComponent num={'04'} title={'Подарки сотрудникам'}/>
                    <BonusComponent num={'05'} title={'Корпоративные мероприятия'}/>
                    <BonusComponent num={'06'} title={'Страхование'}/>
                    <BonusComponent num={'07'} title={'Материальная помощь'}/>
                    <BonusComponent num={'08'} title={'Happy hours'}/>
                    <BonusComponent num={'09'} title={'Изучение английского языка'}/>

                </div>
                
            </div>
        </div>

       

    );
};

export default BonusesDesktop;