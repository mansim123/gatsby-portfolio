import React from "react"
import "../styles/intro.scss"
import profilePic from "../images/profilePic.jpg"
import { TweenMax } from "gsap"
import { ScrollTo } from "react-scroll-to"
import SkillsData from "../data/SkillsData.js";

class Intro extends React.Component {
  constructor() {
    super()
    this.state = {
      width:  0,
      height: 0
    }
    this.bubble = []
    this.myTween = null
  }

  componentDidMount() {

    this.animateBubbles();
    this.resizeBubbles();
    window.addEventListener("resize", this.resizeBubbles.bind(this))
  
  }

  resizeBubbles() {
    if(window.innerWidth > 701 && window.innerWidth < 1000) {
      this.myTween = TweenMax.to(this.bubbleCont, 0, { scale:window.innerWidth/1100,transformOrigin:"20% 0%"})
    }
    else if(window.innerWidth < 700){
      this.myTween = TweenMax.to(this.bubbleCont, 0, { scale:window.innerWidth/1100,transformOrigin:"7% 0%"})
    }
    else if(window.innerWidth > 1000){
      this.myTween = TweenMax.to(this.bubbleCont, 0, { scale:1,transformOrigin:"0% 0%"})
    }
  }

  animateBubbles() {

    for(let i=0;i<this.bubble.length;i++){
      this.myTween = TweenMax.to(this.bubble[i], 0, { scale: "0", opacity: "0" })
      this.myTween = TweenMax.to(this.bubble[i], 3.5, {
        delay: i/5,
        scale: "1",
        opacity: "0.95",
        ease: "elastic.out",
      })
    }
  }

  render() {
    const skillComponents = SkillsData.map((skill, index) => (
      <div key={skill.id}>
        <div
          ref={bubble => (this.bubble[index] = bubble)}
          className={"bubbles bubble"+[index]} style={{
            backgroundColor: "#"+skill.bgColor,
            opacity:0
          }}>
            <span>
              <a>
                {skill.title}
              </a>
              </span>
        </div>
      </div>
    ));

    return (
      <section className="intro-section">
        <div className="introMainSection">
          <h1>The Drive to Learn</h1>
          <h2>working with all the latest technlogies</h2>
        </div>
        <div className="flexContainer">
          <div className="leftCont">
            <img src={profilePic} alt=""></img>
          </div>
          <div className="rightCont">
            <h3>Manuel Yemoh</h3>
            <p>
              BSc in Computer Game Design, with over 9 years of professional
              digital development experience and 4 years running a successful
              production studio. Working with some of the biggest agencies in
              London, specialising in HTML5 digital development, project
              management and consultation. Available for on-site or
              remote&nbsp;work.
            </p>
          </div>
        </div>
        <div className="bubbleContainer" ref={bubbleCont => (this.bubbleCont = bubbleCont)}>
          {skillComponents}
        </div>
      </section>
    )
  }
}

export default Intro
