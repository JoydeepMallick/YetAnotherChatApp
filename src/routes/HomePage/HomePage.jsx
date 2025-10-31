import { TypeAnimation } from "react-type-animation";
import "./HomePage.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="homepage">
      {/* background wallpaper */}
      <img src="../public/orbital.png" alt="orbital" className="orbital" />

      <div className="left">
        <h1>Alpaca AI</h1>
        <h2>Yet another ChatGPT clone but worth trying</h2>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
          mollitia soluta? Voluptates reprehenderit alias praesentium blanditiis
          atque, laborum quasi, saepe est earum iusto necessitatibus!
        </h3>
        <Link to="/dashboard">Get Started</Link>
      </div>

      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            {/* animated background */}
            <div className="bg"></div>
          </div>

          {/* alpaca waifu image */}
          <img src="../public/waifu.png" alt="alpacawaifu" className="waifu" />

          {/* floating text using react type animation */}
          <div className="chat">
            <TypeAnimation
              sequence={[
                "Hello, how can I assist you today?",
                1000,
                "I'm here to help you with your queries.",
                1000,
                "Feel free to ask me anything!",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1.5em", display: "inline-block" }}
              cursor={true}
              repeat={Infinity}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
