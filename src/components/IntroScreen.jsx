import React, { useState } from "react";
import ReactPlayer from "react-player";
import "../styles/introScreen.css"
import logo from '../images/logo.jpeg'
import { Link } from 'react-router-dom';
import FormInput from "./FormInput";

const Hero = () => {
    const[values,setValues] = useState({
      password:"",
    });
    const inputs = [
      {
        id:1,
        name:"password",
        type:"text",
        placeholder:"Ngày đầu mình yêu là khi nào?",
        errorMessage:"Ghi cho đúng, troll là anh chém!",
        pattern: "[0-9]{1,6}$",
        maxlength: 6,
        required: true,
      },
    ];

    const onChange = (e) => {
      setValues({ ...values,[e.target.name]: e.target.value });
    };

    return(
        <div>
        <div className="heroContainer">
          <div className="videoContainer2">
            <ReactPlayer
              className="react-player"
              url="//www.youtube.com/embed/TGan48YE9Us?autoplay=1&mute=1&start=20"
              width="100%"
              height="100%"
              position="relative"
              overflow="hidden"
              playing={true}
              loop={true}
              muted={true}
            />
          </div>
        </div>
        <div className="titleContainer">
          <img className="heroLogo" src={logo} alt="" onLoad={window['alertHello']}/>
          <h1 className="tracking-in-expand-fwd">StudyBeats</h1>
          <h3 className="subTitle"> Món quà dành cho thiên thần của anh <br></br> Nguyễn Ngọc Minh Phương </h3>
          <div class="note-position-1 note-amination">&#9835;</div>
          <div class="note-position-2 note-amination animation-delay-2">
            &#9833;
          </div>
          <div className="bubbleContainer">
            <div className="bubble1"></div>
            <div className="bubble2"></div>
            <div className="bubble3"></div>
          </div>
          <form>
            {inputs.map((input) => (
            <FormInput defaultValue="Ivy" key = {input.id} {...input} value = {values[input.name]} onChange={onChange}/>
            ))}
          </form>
          <section class="wrap">
            <Link to="/music">
                <button class="button">Bấm vào đây</button>
            </Link>         
          </section>
        </div>
        <ReactPlayer 
              className="react-player"
              url="//www.youtube.com/embed/lf6refTxQs8?autoplay=1&mute=1&start=1"
              width="0%"
              height="0%"
              position="absolute"
              top="10000px"
              left="1000px"
              overflow="hidden"
              playing={true}
              loop={true}
            />
      </div> 
    )
}

export default Hero