import Wrapper from "./components/Wrapper";
import { Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";
import Contacts from "./components/Contacts";
import Policies from "./components/Policies";
import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react";
function App() {
    return (
        // Wrapper нужно стилизовать в соответствии с требованиями
        <Wrapper>
            <Header/>
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/contacts' element={<Contacts/>}/>
                <Route path='/policies' element={<Policies/>}/>
            </Routes>

            {/*<iframe
                src="https://yandex.ru/map-widget/v1/?ll=39.697132%2C47.210465&mode=whatshere&whatshere%5Bpoint%5D=39.691322%2C47.208884&whatshere%5Bzoom%5D=17&z=15.53"
                width="560" height="400" frameBorder="1" allowFullScreen="true" ></iframe>*/}

            <Footer/>


        </Wrapper>
    )
}

export default App
