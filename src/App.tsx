import Wrapper from "./components/Wrapper";
import { Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";
import Contacts from "./components/Contacts";
import Policies from "./components/Policies";
import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react";
import DesktopHeader from "./components/Wrapper/DesktopHeader";
function App() {
    return (
        // Wrapper нужно стилизовать в соответствии с требованиями
        <Wrapper>
            <Header/>
            <DesktopHeader/>
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/contacts' element={<Contacts/>}/>
                <Route path='/policies' element={<Policies/>}/>
            </Routes>
            <Footer/>


        </Wrapper>
    )
}

export default App
