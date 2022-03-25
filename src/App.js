import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header";
import MainPage from "./components/MainPage"
import Error from "./components/Error"
import Recipes from "./components/Recipes"
import Contacts from "./components/Contacts"
import Workout from "./components/Workout"
import Account from "./components/Account"
import AccountNavbar from './components/AccountNavbar/AccountNavbar';
import AccountTarget from "./components/AccountTarget/index";
import AccountAchievments from "./components/AccountAchievments/index";
import AccountFavorites from "./components/AccountFavorites/index";

import ModalWindow from "./components/modalWindow/ModalWindow";
import { useState } from "react";
import Survey from "./components/survey/Survey";

function App(props) {
    const [isModal, setModal] = useState(false);
    const onCloseWindow = () => setModal(false);
    const onOpenWindow = () => setModal(true);

    const image = require('./images/users/1.png');
    console.log(window.location)
    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route exact path="/" element={<MainPage />} />
                    <Route path="/workout" element={<Workout />} />
                    <Route path="/recipes" element={<Recipes link='recipesCarouselItems' />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/survey" element={<Survey />} />
                    <Route path="/account" element={<AccountNavbar />}>
                        <Route index element={<Account
                            name="Сергей"
                            surname="Иванов"
                            age={22}
                            imageSrc={image}
                        />} />
                        <Route path="generalinfo"
                            element={<Account
                                name="Сергей"
                                surname="Иванов"
                                age={22}
                                imageSrc={image}
                            />} />
                        <Route path="target" element={<AccountTarget />} />
                        <Route path="achievments" element={<AccountAchievments />} />
                        <Route path="favorites" element={<AccountFavorites />} />
                    </Route>
                    <Route path="*" element={<Error />} />
                </Routes>
                {!['/account'].includes(window.location.pathname) && <Footer />}
            </Router>
            <ModalWindow visible={isModal}
                title='Восстановление пароля'
                onCloseWindow={onCloseWindow}
            />
        </div>
    );
}

export default App;
