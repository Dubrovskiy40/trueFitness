import './App.css';
import Footer from "./components/footer/Footer";
import RequestForm from "./components/request-form";
import Header from "./components/header";

function App(props) {
  return (
    <div className="App">
        <Header />
      <header className="App-header">
        <p>
          Place for our future True Fitness app =)
        </p>
      </header>
      <RequestForm />
      <Footer />
    </div>
  );
}

export default App;
