import './App.css';
import CarouselComp from './components/Carousel/Carousel';
import Footer from "./components/footer/Footer";

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Place for our future True Fitness app =)
        </p>
      </header>
      <CarouselComp slider='Тренировки' />
      <CarouselComp slider='Рецепты' />
      <Footer />
    </div>
  );
}

export default App;
