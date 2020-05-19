import React from "react"
import "../styles/intro.scss"
import profilePic from "../images/profilePic.jpg"
import { TweenMax } from "gsap"
import { ScrollTo } from "react-scroll-to"

let drawInterval

class Intro extends React.Component {
  constructor() {
    super()
    // reference to the animation
    this.myTween = null
  }

  componentDidMount() {}

  render() {
    return (
      <section className="intro-section">
        <div className="introMainSection">
          <h1>The Drive to Learn</h1>
          <h2>working with all the latest technlogies</h2>
        </div>
        <div className="flexContainer">
          <div>
            <img src={profilePic} alt=""></img>
          </div>
          <div>
            <h3>
              Manuel Yemoh
            </h3>
            <p>
              BSc in Computer Game Design, with over 9 years of professional digital development
              experience and 4 years running a successful production studio. Working with some
              of the biggest agencies in London, specialising in HTML5 digital development, project
              management and consultation. Available for on-site or remote&nbsp;work.
            </p>
          </div>
        </div>
        <div className="flexContainer2">
          <div>
            <div className="bar">
                <h4>Something</h4>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Intro
