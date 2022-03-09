import './App.css';
import CarouselComp from './components/Carousel/Carousel';
import Footer from "./components/footer/Footer";
import RequestForm from "./components/request-form";
import Header from "./components/header";
import Main from "./components/main/Main";
import AboutUs from "./components/aboutUs/AboutUs";

function App(props) {
  return (
    <div className="App">
      <Header />
      <Main />
      <CarouselComp slider='Тренировки' />
      <AboutUs />
      <CarouselComp slider='Рецепты' />
      <RequestForm />
      <Footer />
    </div>
  );
}

export default App;
