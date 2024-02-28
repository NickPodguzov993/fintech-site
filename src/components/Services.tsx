import search from '../../public/images/search.svg'

const Services = () => {
    return (
        <div>
            <div className='flex justify-between p-4'><h2 className='text-[32px]'>Спектр услуг</h2>
                <img src={search} alt=""/></div>
            <p>
                Мы предлагаем широкий спектр услуг в сфере сопровождения операционной деятельности IT Компаний
            </p>
            <p>
                FinTech специализируется на предоставлении услуг аккаунтинга, банкинга, управления платежными системами,
                HR сопровождения и ведения международной юридической деятельности для IT Компаний в Роcсии, Европе и
                Средней Азии
            </p>
        </div>
    );
};

export default Services;