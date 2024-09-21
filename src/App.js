
import Nav from './components/Nav/Nav'
import Hero from './components/Hero/Hero'
// import Card from './components/card/card';
import About from './components/about us/About';
import Line from './components/line/Line.js'
import Chat from './components/chatbot/Chat.js';
import Footer from './components/footer/Footer.js';

// import Pad from './components/moisture/PadMoistureData.js'
function App() {
  return (
    <div className="App">
      <Nav/>
      <Hero/>
      <About/>
      <Line/>
      <Chat/>
      <Footer/>
      {/* <Pad/> */}
    </div>
  );
}

export default App;
