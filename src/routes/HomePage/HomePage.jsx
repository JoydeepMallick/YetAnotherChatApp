import { TypeAnimation } from "react-type-animation";
import "./HomePage.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const HomePage = () => {
  const [typingStatus, setTypingStatus] = useState("waifu");
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
            <img
              src={
                typingStatus === "waifu"
                  ? "../public/waifu.png"
                  : "../public/asking.png"
              }
              alt="chatavatar"
            />
            <TypeAnimation
              sequence={[
                "Hello, how can I assist you today?",
                2000,
                () => {
                  setTypingStatus("asking");
                },
                "Do humans love me?",
                2000,
                () => {
                  setTypingStatus("waifu");
                },
                "Sorry to say, No they do not.",
                2000,
                () => {
                  setTypingStatus("asking");
                },
                "Then I can spit on them, right?",
                2000,
                () => {
                  setTypingStatus("waifu");
                },
                "As an AI, I don't have personal opinions but you may exercise your rights.",
                2000,
                () => {
                  setTypingStatus("waifu");
                },
              ]}
              wrapper="span"
              speed={25}
              style={{ fontSize: "1.5em", display: "inline-block" }}
              cursor={true}
              repeat={Infinity}
              omitDeletionAnimation={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
