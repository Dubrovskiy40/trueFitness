import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./components/header";
import MainPage from "./components/MainPage"
import Error from "./components/Error"
import Recipes from "./components/Recipes"
import Contacts from "./components/Contacts"
import Account from "./components/Account/AccountGeneral"
import AccountNavbar from './components/Account/AccountNavbar/AccountNavbar';
import AccountTarget from "./components/Account/AccountTarget/index";
import AccountAchievments from "./components/Account/AccountAchievments/index";
import AccountFavorites from "./components/Account/AccountFavorites/index";
import ModalWindow from "./components/modalWindow/ModalWindow";
import Survey from "./components/survey/Survey";
import FirstCourse from "./components/Recipes/firstCourse/FirstCourse";
import SecondCourse from "./components/Recipes/secondCourse/SecondCourse";
import Salads from "./components/Recipes/salads/Salads";
import Desserts from "./components/Recipes/desserts/Desserts";
import Trainings from './components/Trainings';
import TrainingPage from './components/Trainings/TrainingPage';
import RecipesCard from './components/Recipes/RecipesCard';

function App(props) {
    const [isModal, setModal] = useState(true);
    const onCloseWindow = () => setModal(false);
    const onOpenWindow = () => setModal(true);

    const image = require('./images/users/1.png');
    console.log(window.location)
    // return (
    //   <div className="App">
    //       <Router>
    //           <Header />
    //           <Routes>
    //               <Route exact path="/" element={<MainPage />} />
    //               <Route path="/workout" element={<Workout />} />
    //               <Route path="/recipes" element={<Recipes link='recipesCarouselItems'/>} />
    //               <Route path="/contacts" element={<Contacts />} />
    //               <Route path="/survey" element={<Survey />} />
    //               <Route path="/test" element={<TestRecipes />} />
    //               <Route path="/account"
    //                      element={<Account
    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route exact path="/" element={<MainPage />} />
                    <Route path="/trainings" element={<Trainings />} />
                    <Route path="/trainings/:trainingUrl" element={<TrainingPage />} />
                    {/*<Route path="/recipes" element={<Recipes link='recipesCarouselItems' />} />*/}
                    <Route path="/recipes" element={<Recipes />} />
                    <Route path="/recipes/firstCourse" element={<FirstCourse />} />
                    <Route path="/recipes/secondCourse" element={<SecondCourse />} />
                    <Route path="/recipes/salads" element={<Salads />} />
                    <Route path="/recipes/desserts" element={<Desserts />} />
                    <Route path="/recipes/salads/:id" element={<RecipesCard />} />
                    <Route path="/survey" element={<Survey />} />
                    <Route path="/account" element={<AccountNavbar />}>
                        <Route index element={<Account
                            imageSrc={image}
                        />} />
                        <Route path="generalinfo"
                            element={<Account
                                imageSrc={image}
                            />} />
                        <Route path="target" element={<AccountTarget />} />
                        <Route path="achievments" element={<AccountAchievments />} />
                        <Route path="favorites" element={<AccountFavorites />} />
                    </Route>
                    <Route path="*" element={<Error />} />
                </Routes>
                {/* {!['/account'].includes(window.location.pathname) && <Footer />} */}
                <ModalWindow visible={isModal}
                    onCloseWindow={onCloseWindow}
                    onOpenWindow={onOpenWindow}
                />
            </Router>
        </div>
    );
}

export default App;
