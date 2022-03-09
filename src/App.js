import './App.css';
import CarouselComp from './components/Carousel/Carousel';
import Footer from "./components/footer/Footer";
import RequestForm from "./components/request-form";
import Header from "./components/header";

function App(props) {
  return (
    <div className="App">
      <Header />
      <CarouselComp slider='Тренировки' />
      <CarouselComp slider='Рецепты' />
      <RequestForm />
      <Footer />
    </div>
  );
}

export default App;
