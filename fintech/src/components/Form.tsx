/*
import  {useState} from 'react';
import {Link} from "react-router-dom";
//import AOS from 'aos';
import Modal from "../../src/components/Modal";

const Form = () => {
    /!*useEffect(() => {
        AOS.init({
            disable: false,
            once: true,
        });
    }, []);*!/

    const [isOpen, setIsOpen] = useState(false);
    const openThanksModal = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [phone, setPhone] = useState<number>()
    const [message, setMessage] = useState<string>("")
    const [checked, setChecked] = useState<boolean>(false);
    const [errorName, setErrorName] = useState<boolean>(false);
    const [errorEmail, setErrorEmail] = useState<boolean>(false);
    const [errorPhone, setErrorPhone] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<boolean>(false);
    const [checkboxError, setCheckboxError] = useState<boolean>(false);
    const [isFailedSent, setIsFailedSent] = useState<boolean>(false);

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);
    };
    const handlePhoneChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setPhone(e.target.value);
    };

    async function sendEmail(e: { preventDefault: () => void }) {
        e.preventDefault();
        if (name.trim() !== ""
            && email.trim() !== ""
            && message.trim() !== ""
            && phone != 0
            && checked) {
            try {
                const res = await fetch("http://localhost:8006/register", {
                    method: "POST",
                    headers: {
                        "Content-Type": 'application/json'
                    }, body: JSON.stringify({
                        name, email, message, phone
                    })
                });
                if (res.status === 201) {
                    openThanksModal();
                } else {
                    console.log(res.status)
                }
            } catch (error) {
                console.log(error);
                setIsFailedSent(true);
                setTimeout(() => {
                    setIsFailedSent(false);
                }, 5000);
            }
            setName('');
            setEmail('');
            setPhone('');
            setMessage('');
            setChecked(false);
            setErrorName(false);
            setErrorEmail(false);
            setErrorPhone(false);
            setErrorMessage(false);
            setCheckboxError(false);
        } else {
            setErrorName(true);
            setErrorEmail(true);
            setErrorMessage(true);
            setErrorPhone(true);
        }
        if (!checked) {
            setCheckboxError(true);
        }
    }

    return (
        <form id={"ContactForm"} className="fc relative sm:flex-row gap-2">
            <div className="fc gap-2">
                <div className="fc gap-2 sm:flex-row">
                    <input type="text" className={errorName ? "error_input" : "input"} value={name}
                           onChange={handleNameChange} placeholder="ФИО"/>
                    <input type="email" className={errorEmail ? "error_input" : "input"} onChange={handleEmailChange}
                           value={email} placeholder="E-mail"/>
                    <input className={errorPhone ? "error_input" : "input"} onChange={handlePhoneChange} value={phone}
                           placeholder="Телефон"/>
                </div>
                <textarea value={message} onChange={handleMessageChange}
                          className={errorMessage ? "error_input h-40 sm:w-full sm:h-[260px]" : "input h-40 sm:w-full sm:h-[260px]"}
                          placeholder="Обращение"/>
            </div>
            <div className="fc gap-2 sm:flex-col-reverse">
                <div className="input fr sm:h-[108px] gap-2 sm:items-center">
                    <input onChange={() => {
                        setChecked(!checked)
                        setCheckboxError(false)
                    }} checked={checked}
                           className={checkboxError ? "error_check_box" : "check_box"} type={"checkbox"}/>
                    <p className={checkboxError ? "error_check_box_text" : "check_box_text"}>Я ознакомлен и согласен с условиями  <Link
                            className="text-sm font-bold" to={'/policies'}>Политики конфиденциальности</Link></p>
                </div>
                <button
                    onClick={sendEmail}
                    className="w-full rounded-[30px] p-8 h-[110px] sm:h-full bg-green duration-300 hover:bg-gradient-to-b from-green to-teal-300 fc text-white taxt-sm font-medium gap-1 justify-center items-center">
                    Send
                </button>
            </div>
            {isFailedSent ? <div className="w-full h-[110px] sm:text-base mx-[200px] sm:max-w-[800px] sm:h-[84px] p-8 bg-white absolute bottom-0 sm:bottom-[-120px] rounded-[30px] shadow justify-start items-center text-red-600 text-sm font-semibold font-['Outfit']">
                Your form has not been submitted. Please try again.
            </div> : null}
            {isOpen ? <Modal onClose={handleClose}/> : null}
        </form>
    );
};

export default Form;*/
