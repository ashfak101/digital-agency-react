import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Choice from './components/Choice/Choice';
import Services from './components/Services/Services';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="">
       <Header/>
       <Banner/>
       <Choice/>
       <Services/>
       <Portfolio/>
       <Contact/>
       <Footer/>
    </div>
  );
}

export default App;
