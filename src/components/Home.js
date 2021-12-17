import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {getPublicContent}  from "../services/user.service";
import "./Home.css";
import 'animate.css'

const Home = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
      <div className="col-md-6">
       <img className="icon" src={require('../svg/ball-controller-game-sports-svgrepo-com.svg').default} alt='mySvgImage' />
        <h2 className="googleText"> {content}</h2>
        </div>
      </header>
      <body>
      <div class="container bouncing" id="arrow"> 
      <center>
      <img src="https://www.bigw.com.au/medias/sys_master/images/images/hec/h5b/28920049893406.jpg" className="center" alt="Transparent MDB Logo" id="animated-img1"/>
      </center>
</div>
      </body>
      
    </div>
  );
};

export default Home;