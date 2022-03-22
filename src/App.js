import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header";
import MainPage from "./components/MainPage"
import Error from "./components/Error"
import Recipes from "./components/Recipes"
import Contacts from "./components/Contacts"
import Workout from "./components/Workout"
import Account from "./components/Account"

import ModalWindow from "./components/modalWindow/ModalWindow";
import {useState} from "react";

function App(props) {
    const [isModal, setModal] = useState(true);
    const onCloseWindow = () => setModal(false);
    const onOpenWindow = () => setModal(true);

  return (
    <div className="App">
        <Router>
            <Header />
            <Routes>
                <Route exact path="/" element={<MainPage />} />
                <Route path="/workout" element={<Workout />} />
                <Route path="/recipes" element={<Recipes />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/account" element={<Account />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
        <ModalWindow visible={isModal}
            title='Восстановление пароля'
            onCloseWindow={onCloseWindow}
        />
    </div>
  );
}

export default App;
