import logo from '../../../fintech/public/images/Logo.svg'

const Header = () => {
    return (
        <>
        <div className='w-full flex  rounded-[30px] sm:bg-rose-500'>
            <img className='p-4' src={logo} alt="logo"/>
           <div >button</div>
            <img src="" alt="theme image"/>
        </div>
   {/* <div>burger menu</div>*/}
        </>
    );
};

export default Header;