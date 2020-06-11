import React from "react"
import "../styles/intro.scss"
import profilePic from "../images/profilePic.jpg"
import { TweenMax } from "gsap"
import { ScrollTo } from "react-scroll-to"

class Intro extends React.Component {
  constructor() {
    super()
    // reference to the animation
    this.myTween = null
  }

  componentDidMount() {
    // this.myTween = TweenMax.to(this.bubble, 0, { scale: "0", opacity: "0" })
    // this.myTween = TweenMax.to(this.bubble, 2.5, {
    //   delay: "2",
    //   scale: "1",
    //   opacity: "1",
    //   ease: "elastic.out",
    // })
  }

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
        <div className="bubbleContainer">
          <div
            className="bubbles bubble0"
            ref={bubble => (this.bubble = bubble)}
          >
            <span>
              <a>HTML5</a>
            </span>
          </div>
          <div
            className="bubbles bubble1"
            ref={bubble => (this.bubble = bubble)}
          >
            <span>
              <a>E56</a>
            </span>
          </div>
          <div
            className="bubbles bubble2"
            ref={bubble => (this.bubble = bubble)}
          >
            <span>
              <a>CSS3</a>
            </span>
          </div>
          <div
            className="bubbles bubble3"
            ref={bubble => (this.bubble = bubble)}
          >
            <span>
              <a>Javascript</a>
            </span>
          </div>
          <div
            className="bubbles bubble4"
            ref={bubble => (this.bubble = bubble)}
          >
            <span>
              <a>HTML Emails</a>
            </span>
          </div>
          <div
            className="bubbles bubble5"
            ref={bubble => (this.bubble = bubble)}
          >
            <span>
              <a>React</a>
            </span>
          </div>
          <div
            className="bubbles bubble6"
            ref={bubble => (this.bubble = bubble)}
          >
            <span>
              <a>QA/Testing</a>
            </span>
          </div>
          <div
            className="bubbles bubble7"
            ref={bubble => (this.bubble = bubble)}
          >
            <span>
              <a>Project Management</a>
            </span>
          </div>
          {/* <div className="bubble8" ref={bubble => (this.bubble = bubble)}>
            <span>
              <a>E56</a>
            </span>
          </div>
          <div className="bubble9" ref={bubble => (this.bubble = bubble)}>
            <span>
              <a>E56</a>
            </span>
          </div> */}
        </div>
      </section>
    )
  }
}

export default Intro
