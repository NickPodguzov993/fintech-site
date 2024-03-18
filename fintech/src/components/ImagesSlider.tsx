import React, {useState} from "react";
import {ThemeType} from "./DesktopHeader";
import loc from '../../public/images/locationDesctop.svg'

const ImagesSlider = ({theme}:ThemeType) => {
    const [isHovered1, setIsHovered1] = useState<boolean>(false)
    const [isHovered2, setIsHovered2] = useState<boolean>(false)
    const [isHovered3, setIsHovered3] = useState<boolean>(false)
    const [isHovered4, setIsHovered4] = useState<boolean>(false)

    const handleHover1 = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsHovered1(true)
        setIsHovered2(false)
        setIsHovered3(false)
        setIsHovered4(false)
    }
    const handleHover2 = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsHovered1(false)
        setIsHovered2(true)
        setIsHovered3(false)
        setIsHovered4(false)
    }
    const handleHover3 = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsHovered1(false)
        setIsHovered2(false)
        setIsHovered3(true)
        setIsHovered4(false)
    }
    const handleHover4 = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsHovered1(false)
        setIsHovered2(false)
        setIsHovered3(false)
        setIsHovered4(true)
    }
    const onMouseLeave = () => {
        setIsHovered1(false)
        setIsHovered2(false)
        setIsHovered3(false)
        setIsHovered4(false)
    }

    return (
        <div>
            <div className="w-[552px] h-24 justify-start items-center gap-8 hidden sm:inline-flex mb-8">
                <div className=" text-zinc-900 text-[64px] font-medium font-['Raleway']" style={{color: theme === 'light' ? '#FF1744' : 'white'}}>Мы в Ростове</div>
                <div className="p-6 bg-rose-600 rounded-[30px] justify-start items-center gap-2.5 flex">
                    <div className="w-12 h-12 relative" ><img src={loc}/></div>
                </div>
            </div>


            <div className="hidden sm:flex  ">
                <div
                    className="hidden self-stretch  justify-start items-start sm:inline-flex">
                    <div
                        className="flex gap-2 sm:gap-8  ">
                        <div onMouseEnter={handleHover1} onMouseLeave={onMouseLeave}
                             className="flex flex-col sm:w-[260px] hover:w-[640px] justify-end duration-[1s] grayscale
                         hover:justify-between p-8 rounded-[30px] bg-cover bg-center h-[480px] w-[237px] hover:grayscale-0 bg-[url('/images/image1.jpg')]">
                            {isHovered1 ? <div
                                className="animate-fade animate-once animate-duration-300 animate-delay-100 animate-ease-linear animate-normal
                             flex justify-end gap-2 duration-300 mb-[180px]">

                            </div> : <div
                                className="animate-fade animate-once animate-duration-300 animate-delay-100 animate-ease-linear text-white animate-normal
                             flex justify-start gap-2 duration-300 mb-[320px] font-['Raleway']">
                                <div>/01</div>
                            </div>}
                            <div className="flex justify-end">
                                <div className="flex self-end flex-col gap-4 duration-300 relative ">
                                    {isHovered1 ? <div className="absolute w-[640px] h-[164px] p-8 bg-neutral-100 bg-opacity-60 rounded-[30px] backdrop-blur-[20px]
                                 flex-col  top-[-132px] right-[-32px] bg-no-repeat  bg-[top_25px_right_10px] bg-[url('/images/locationSvg.svg')]
                                 animate-fade-up animate-once animate-duration-300 animate-delay-200 animate-ease-linear animate-normal">
                                            <p className="animate-fade-down animate-once animate-duration-300 animate-delay-[800ms] animate-ease-linear animate-normal
                                    justify-end text-[#1B1B1B] text-base sm:text-xl duration-300 text-2xl
                                    font-medium font-['Raleway'] leading-9 sm:leading-loose leading-relaxed"  style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>
                                                Уютный и просторный офис
                                            </p>
                                            <span
                                                className="hover-span"  style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>
                                Здесь все создано для удобства сотрудников: просторные помещения, современная техника, удобная мебель
                                    </span>
                                        </div>
                                        : <p className="sm:w-[200px]
                                    justify-end text-white text-base sm:text-xl duration-300 font-['Raleway'] sm:leading-loose leading-relaxed">
                                            Уютный и просторный офис
                                        </p>}

                                </div>
                            </div>
                        </div>
                        <div onMouseEnter={handleHover2} onMouseLeave={onMouseLeave}
                             className="flex flex-col sm:w-[260px] hover:w-[640px] justify-end duration-[1s] grayscale
                         hover:justify-between p-8 rounded-[30px] bg-cover bg-center h-[480px] w-[300px] hover:grayscale-0 bg-[url('/images/image2.jpg')]">
                            {isHovered2 ? <div
                                className="animate-fade animate-once animate-duration-300 animate-delay-100 animate-ease-linear animate-normal
                             flex justify-end gap-2 duration-300 mb-[180px]">

                            </div> : <div
                                className="animate-fade animate-once animate-duration-300 animate-delay-100 animate-ease-linear text-white animate-normal
                             flex justify-start gap-2 duration-300 mb-[320px] font-['Raleway']">
                                <div>/02</div>
                            </div>}
                            <div className="flex justify-end">
                                <div className="flex self-end flex-col gap-4 duration-300 relative">
                                    {isHovered2 ?
                                        <div className="absolute w-[640px] h-[164px] p-8 bg-neutral-100 bg-opacity-60 rounded-[30px] backdrop-blur-[20px]
                                 flex-col  top-[-132px] right-[-32px] bg-no-repeat  bg-[top_25px_right_10px] bg-[url('/images/locationSvg.svg')]
                                 animate-fade-up animate-once animate-duration-300 animate-delay-200 animate-ease-linear animate-normal">
                                            <p className="
                                    justify-end text-[#1B1B1B] text-base sm:text-xl duration-300 text-2xl
                                    font-medium font-['Raleway'] leading-9 sm:leading-loose leading-relaxed"  style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>
                                                Уютный и просторный офис
                                            </p>
                                            <span
                                                className="hover-span"  style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>
                                Здесь все создано для удобства сотрудников: просторные помещения, современная техника, удобная мебель
                                    </span>
                                        </div> :
                                        <p className="w-[200px] justify-end text-white text-base sm:text-xl duration-300 font-['Raleway'] sm:leading-loose leading-relaxed">
                                            Оборудованные рабочие места
                                        </p>}


                                </div>
                            </div>
                        </div>
                        <div onMouseEnter={handleHover3} onMouseLeave={onMouseLeave}
                             className="flex flex-col sm:w-[260px] hover:w-[640px] justify-end duration-[1s] grayscale
                         hover:justify-between p-8 rounded-[30px] bg-cover bg-center h-[480px] w-[300px] hover:grayscale-0 bg-[url('/images/image3.jpg')]">
                            {isHovered3 ? <div
                                className="animate-fade animate-once animate-duration-300 animate-delay-100 animate-ease-linear animate-normal
                             flex justify-end gap-2 duration-310 mb-[180px]">

                            </div> : <div
                                className="animate-fade animate-once animate-duration-300 animate-delay-100 animate-ease-linear text-white animate-normal
                             flex justify-start gap-2 duration-300 mb-[320px] font-['Raleway']">
                                <div>/03</div>
                            </div>}
                            <div className="flex justify-end">
                                <div className="flex self-end flex-col gap-4 duration-300 relative">
                                    {isHovered3 ?
                                        <div className="absolute w-[640px] h-[164px] p-8 bg-neutral-100 bg-opacity-60 rounded-[30px] backdrop-blur-[20px]
                                 flex-col  top-[-132px] right-[-32px] bg-no-repeat  bg-[top_25px_right_10px] bg-[url('/images/locationSvg.svg')]
                                  animate-fade-up animate-once animate-duration-300 animate-delay-200 animate-ease-linear animate-normal">
                                            <p className="animate-fade-down animate-once animate-duration-300 animate-delay-[800ms] animate-ease-linear animate-normal
                                    justify-end text-[#1B1B1B] text-base sm:text-xl duration-300 text-2xl
                                    font-medium font-['Raleway'] leading-9 sm:leading-loose leading-relaxed"  style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>
                                                Уютный и просторный офис
                                            </p>
                                            <span
                                                className="hover-span"  style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>
                                Здесь все создано для удобства сотрудников: просторные помещения, современная техника, удобная мебель
                                    </span>
                                        </div>:
                                        <p className="w-[200px] justify-end text-white text-base sm:text-xl duration-300 font-['Raleway'] sm:leading-loose leading-relaxed">
                                            Большая комната отдыха
                                        </p>}

                                </div>
                            </div>
                        </div>
                        <div onMouseEnter={handleHover4} onMouseLeave={onMouseLeave}
                             className="flex flex-col sm:w-[260px] hover:w-[640px] justify-end duration-[1s] grayscale
                         hover:justify-between p-8 rounded-[30px] bg-cover bg-center h-[480px] w-[300px] hover:grayscale-0 bg-[url('/images/image4.jpg')]">
                            {isHovered4 ? <div
                                className="animate-fade animate-once animate-duration-300 animate-delay-100 animate-ease-linear animate-normal
                             flex justify-end gap-2 duration-300 mb-[180px]">

                            </div> : <div
                                className="animate-fade animate-once animate-duration-300 animate-delay-100 animate-ease-linear text-white animate-normal
                             flex justify-start gap-2 duration-300 mb-[320px] font-['Raleway']">
                                <div>/04</div>
                            </div>}

                            <div className="flex justify-end">
                                <div className="flex self-end flex-col gap-4 duration-300 relative">
                                    {isHovered4 ?
                                        <div className="absolute w-[640px] h-[164px] p-8 bg-neutral-100 bg-opacity-60 rounded-[30px] backdrop-blur-[20px]
                                 flex-col  top-[-132px] right-[-32px] bg-no-repeat  bg-[top_25px_right_10px] bg-[url('/images/locationSvg.svg')]
                                  animate-fade-up animate-once animate-duration-300 animate-delay-200 animate-ease-linear animate-normal">
                                            <p className="animate-fade-down animate-once animate-duration-300 animate-delay-[800ms] animate-ease-linear animate-normal
                                    justify-end text-[#1B1B1B] text-base sm:text-xl duration-300 text-2xl
                                    font-medium font-['Raleway'] leading-9 sm:leading-loose leading-relaxed"  style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>
                                                Уютный и просторный офис
                                            </p>
                                            <span
                                                className="hover-span"  style={{color: theme === 'light' ? '#1B1B1B' : 'white'}}>
                                Здесь все создано для удобства сотрудников: просторные помещения, современная техника, удобная мебель
                                    </span>
                                        </div> :
                                        <p className="w-[200px] justify-end text-white text-base sm:text-xl duration-300  sm:leading-loose font-['Raleway'] leading-relaxed">
                                            Open space пространство
                                        </p>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="sm:hidden overflow-y-hidden self-stretch h-full justify-start items-start inline-flex">
                    <div className="flex gap-2 px-4">
                        <div
                            className="flex flex-col  justify-between p-8 rounded-[30px] bg-cover bg-center h-[480px] w-[300px] bg-[url('/images/image/image2.jpg')]">
                            <div className="flex justify-end gap-2">
                                <button className="gray_button">TEAM</button>
                                <button className="gray_button">SUPPORT</button>
                            </div>
                            <div className="flex flex-col gap-8">
                                <p className="text-white text-base font-semibold font-['Roboto'] leading-relaxed">
                                    Unparalleled Customer Support: Your Satisfaction is Our Priority
                                </p>
                                <span className="text-white text-sm font-normal font-['Roboto'] leading-snu">We are committed to providing unmatched customer
                                support to our clients. Our team is always ready to assist you with any questions or concerns you may have,
                                ensuring your complete satisfaction.</span>
                            </div>
                        </div>
                        <div
                            className="flex flex-col justify-between p-8 rounded-[30px] bg-cover bg-center h-[480px] w-[300px] bg-[url('/images/image/image1.jpg')]">
                            <div className="flex justify-end gap-2">
                                <button className="gray_button">innovation</button>
                                <button className="gray_button">safety</button>
                            </div>
                            <div className="flex flex-col gap-8">
                                <p className="text-white text-base font-semibold font-['Roboto'] leading-relaxed">
                                    Innovative solutions for a safe and secure gaming environment
                                </p>
                                <span className="text-white text-sm font-normal font-['Roboto'] leading-snu">Our company utilizes cutting-edge
                                technology to provide a secure and reliable gambling platform. You can play with confidence, knowing that your
                                personal information and financial transactions are protected.</span>
                            </div>
                        </div>
                        <div
                            className="flex flex-col justify-between p-8 rounded-[30px] bg-cover bg-center h-[480px] w-[300px] bg-[url('/images/image/image3.jpg')]">
                            <div className="flex justify-end gap-2">
                                <button className="gray_button">bonuses</button>
                            </div>
                            <div className="flex flex-col gap-8">
                                <p className="text-white text-base font-semibold font-['Roboto'] leading-relaxed">
                                    Attractive Bonuses and Rewards: Enjoy Our Generous Offers
                                </p>
                                <span className="text-white text-sm font-normal font-['Roboto'] leading-snu">We offer attractive
                                bonuses and rewards to our players, making your gambling experience even more enjoyable.
                                From welcome bonuses to loyalty programs, our generous offers will keep you coming back for more.</span>
                            </div>
                        </div>
                        <div
                            className="flex flex-col justify-between p-8 rounded-[30px] bg-cover bg-center h-[480px] w-[300px] bg-[url('/images/image/image4.jpg')]">
                            <div className="flex justify-end gap-2">
                                <button className="gray_button">Opportunities</button>
                            </div>
                            <div className="flex flex-col gap-8">
                                <p className="text-white text-base font-semibold font-['Roboto'] leading-relaxed">
                                    Exciting Games and Opportunities: Join Our Gambling Team
                                </p>
                                <span className="text-white text-sm font-normal font-['Roboto'] leading-snu">Our company offers a
                                wide range of thrilling gambling games and numerous opportunities for personal growth and development.
                                Join our team and experience the excitement of the gambling world!</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImagesSlider;
