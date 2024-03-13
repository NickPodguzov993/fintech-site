import React from 'react';

type BonusDescriptionType = {
    config: object
}

const BonusDescription = ({config}:BonusDescriptionType) => {
    return (
            <div className="grow shrink basis-0 flex-col justify-start items-start gap-8 inline-flex  absolute">
                <div className="self-stretch bg-neutral-100 rounded-[40px] justify-center items-start inline-flex">
                    <img className="grow shrink basis-0 self-stretch p-4 rounded-[40px]" src=""/>
                    <div className="grow shrink basis-0 p-8 flex-col justify-start items-center gap-4 inline-flex">
                        <div className="self-stretch text-zinc-900 text-xl font-bold font-['Raleway']" >{config.title}</div>
                        <div className="self-stretch text-zinc-900 text-base font-medium font-['Raleway'] leading-relaxed" >{config.description}</div>
                    </div>
                </div>
            </div>
    );
};

export default BonusDescription;
