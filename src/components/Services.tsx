import search from '../../public/images/search.svg'

const Services = () => {
    return (
        <div className=' mb-[120px] sm:flex'>
            <div >
                <div className='flex justify-between p-4 '><h2 className='text-[32px]'>Спектр услуг</h2>
                    <img src={search} alt=""/></div>
                <p className='p-4 text-[16px] text-[#707070]'>
                    Мы предлагаем широкий спектр услуг в сфере сопровождения операционной деятельности IT Компаний
                </p>
            </div>

            <p className='text-[#1B1B1B] p-4 text-[24px]'>
                FinTech специализируется <br/> на предоставлении услуг аккаунтинга, банкинга, управления платежными системами,
                HR сопровождения и ведения международной юридической деятельности для IT Компаний в Роcсии, Европе и
                Средней Азии
            </p>
        </div>
    );
};

export default Services;