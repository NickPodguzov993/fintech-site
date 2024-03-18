

const Maps = () => {
    return (
        <div className='relative'>
            <div className='flex mb-[160px]  mt-[160px]'>
                <iframe className='rounded-[30px] w-[360px] w-[226px] sm:h-[780px]  sm:w-[1400px] sm:w-[1400px] sm:h-[780px]'
                        src="https://yandex.ru/map-widget/v1/?from=mapframe&ll=39.692665%2C47.208878&mode=poi&poi%5Buri%5D=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DIgoN-cMeQhXf1TxC&source=mapframe&utm_source=mapframe&z=15.5"
                        width="360" height="226"   frameBorder="1" ></iframe>
            </div>
            <div className='absolute z-10 top-[190px] left-[700px]'>
                <div className="hidden sm:block  flex-col  w-[668px] h-[716px] p-8 bg-white rounded-[40px] shadow  justify-start items-center gap-8 inline-flex ">
                    <div className="self-stretch text-zinc-900 text-5xl font-medium font-['Raleway']">Мы ждём вас!</div>
                    <div className="self-stretch h-[358px] flex-col justify-start items-center gap-4 flex">
                        <div className="self-stretch p-8 bg-neutral-100 rounded-[40px] justify-start items-center gap-2.5 inline-flex">
                            <div className="text-black text-opacity-50 text-base font-medium font-['Raleway']">ФИО</div>
                        </div>
                        <div className="self-stretch justify-start items-start gap-4 inline-flex">
                            <div className="grow shrink basis-0 h-[83px] p-8 bg-neutral-100 rounded-[40px] justify-start items-center gap-2.5 flex">
                                <div className="text-black text-opacity-50 text-base font-medium font-['Raleway']">Email</div>
                            </div>
                            <div className="grow shrink basis-0 h-[83px] p-8 bg-neutral-100 rounded-[40px] justify-start items-center gap-2.5 flex">
                                <div className="text-black text-opacity-50 text-base font-medium font-['Raleway']">Телефон</div>
                            </div>
                        </div>
                        <div className="w-[608px] h-40 p-8 bg-neutral-100 rounded-[40px] justify-start items-start gap-2.5 inline-flex">
                            <div className="text-black text-opacity-50 text-base font-medium font-['Raleway']">Обращение</div>
                        </div>
                    </div>
                    <div className="w-[608px] justify-start items-start gap-2 inline-flex absolute">
                        <div className="w-6 h-6 relative" />
                        <div className="grow shrink basis-0"><span className="text-black text-opacity-50 text-sm font-normal font-['Raleway'] leading-[21px]">Я ознакомлен и согласен с условиями </span><span className="text-rose-600 text-sm font-bold font-['Raleway'] leading-snug">Политики конфиденциальности</span></div>
                    </div>
                    <div className="self-stretch justify-start items-start gap-4 inline-flex mt-[40px]">
                        <div className="w-[294px] h-[118px] p-8 rounded-[20px] border border-stone-300 justify-center items-center gap-2 inline-flex">
                            <div className="w-6 h-6 justify-center items-center flex" />
                            <div className="text-rose-600 text-base font-bold font-['Raleway'] leading-relaxed">Добавить резюме</div>
                        </div>
                        <div className="w-[294px] h-[118px] p-8 bg-rose-600 rounded-[20px] flex-col justify-center items-center gap-1 inline-flex">
                            <div className="w-6 h-6 relative" />
                            <div className="text-white text-base font-bold font-['Raleway'] leading-relaxed">Отправить</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Maps;


