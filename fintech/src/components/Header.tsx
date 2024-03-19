import logo from '../../../fintech/public/images/Logo.svg'

const Header = () => {
    return (
        <>
        <div className='w-full flex  rounded-[30px] fixed z-10 hidden sm:hidden'>
            <img className='p-4' src={logo} alt="logo"/>
            <div className="w-12 h-6 relative">
                <div className="w-12 h-6 left-[130px] top-[20px] absolute bg-zinc-900 rounded-[30px] border border-zinc-900" />
                <div className="w-5 h-5 left-[155px] top-[22px] absolute bg-white rounded-[30px]" />
            </div>

        </div>
   {/* <div>burger menu</div>*/}
        </>
    );
};

export default Header;