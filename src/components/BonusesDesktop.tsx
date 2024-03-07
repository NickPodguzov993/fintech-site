import React from 'react';

const BonusesDesktop = () => {
    return (

        <div className="hidden sm:inline-flex w-[1400px] h-24 justify-center items-center gap-16 ">
            <div className="grow shrink basis-0 h-24 justify-start items-center gap-8 flex">
                <div className="text-zinc-900 text-[64px] font-medium font-['Raleway']">Наши бонусы</div>
                <div className="p-6 bg-rose-600 rounded-[30px] justify-start items-center gap-2.5 flex">
                    <div className="w-12 h-12 relative" />
                </div>
            </div>
            <div className="grow shrink basis-0 text-zinc-900 text-xl font-medium font-['Raleway'] leading-[30px]">Для наших сотрудников мы разработали ценностное предложение, основанное на современных HR-методиках.</div>
        </div>

    );
};

export default BonusesDesktop;