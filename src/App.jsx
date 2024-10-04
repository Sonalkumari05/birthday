import './App.css';
import pic from './assets/dammy.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>🎉 Happy Birthday, Anshul ! 🎉</h1>

        {/* Marquee for moving text */}
        <marquee behavior="scroll" direction="left">
          Wishing you an amazing day filled with happiness, fun, and lots of cake! 🎂🎈🎁
        </marquee>

        {/* Birthday message */}
        <p>May all your dreams come true this year and always! ✨</p>

        {/* Birthday Image */}
        <img
          src={pic}
          alt="Birthday Party"
          className="birthday-img"
        />

        {/* CSS Balloons */}
        <div className="balloon balloon1"></div>
        <div className="balloon balloon2"></div>
        <div className="balloon balloon3"></div>
        <div className="balloon balloon4"></div>
        <div className="balloon balloon5"></div>
      </header>
    </div>
  );
}

export default App;
