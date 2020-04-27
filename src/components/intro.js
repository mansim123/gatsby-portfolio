import React from "react"
import "./intro.scss"
import avatar from "../images/avatar.jpg"
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
        </div>
      </section>
    )
  }
}

export default Intro
