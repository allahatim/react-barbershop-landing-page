import './App.css';
import Book from './Components/Book';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Book />
      <Footer />
    </div>
  );
}

export default App;
