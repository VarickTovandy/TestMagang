import './App.css';
import Navbar from './components/Navbar';
import ImageSlider from "./components/ImageSliders";
import Values from './components/Values';
import Form from './components/Form';
import Footer from './components/Footer';

const slides = [
  { url: "http://localhost:3000/imgs/img1.jpg", title: "lorem" },
  { url: "http://localhost:3000/imgs/img2.jpg", title: "lorem" },
];
const containerStyles = {

};

function App() {
  return (
    <div className="App">
      <Navbar />
      <ImageSlider slides={slides} />
      <Values />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
