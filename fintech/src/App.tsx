import Wrapper from "./components/Wrapper";
import { Route, Routes} from "react-router-dom";
import MainPage from "./components/MainPage";
import Contacts from "./components/Contacts";
import Policies from "./components/Policies";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DesktopHeader from "./components/DesktopHeader";
import {useState} from "react";
function App() {
    const [theme, setTheme]= useState('light')
    const switchTheme = () => {
        setTheme((cur)=> (cur === 'light' ? 'dark' : 'light'))
    }

    return (
        <div id={theme}>

            <Wrapper >
                  <Header/>
            <DesktopHeader switchTheme={switchTheme} theme={theme}/>
                <Routes>
                    <Route path='/' element={<MainPage theme={theme}/>}/>
                    <Route path='/contacts' element={<Contacts/>}/>
                    <Route path='/policies' element={<Policies/>}/>
                </Routes>
                <Footer theme={theme}/>




            </Wrapper>
        </div>
    )
}

export default App
