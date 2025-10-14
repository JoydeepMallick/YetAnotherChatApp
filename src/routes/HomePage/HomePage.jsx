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
        </div>
      </div>
    </div>
  );
};

export default HomePage;
