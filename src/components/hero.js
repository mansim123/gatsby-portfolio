import React from "react"
import "./hero.scss"
import avatar from "../images/avatar.jpg"
import { TweenMax } from "gsap"
import { ScrollTo } from "react-scroll-to"

let drawInterval

class Hero extends React.Component {
  constructor() {
    super()
    // reference to the animation
    this.myTween = null
    this.animateArrows = this.animateArrows.bind(this)
    this.draw = this.draw.bind(this)
  }

  initDraw(w, h) {
    var m = document.getElementById("m")
    var ctx = m.getContext("2d")

    //making the canvas full screen
    m.height = h
    m.width = w

    //chinese characters - taken from the unicode charset
    var matrix = "バカマン"
    //converting the string into an array of single characters
    matrix = matrix.split("")

    var font_size = 14
    var columns = m.width / font_size //number of columns for the rain
    //an array of drops - one per column
    var drops = []
    //x below is the x coordinate
    //1 = y co-ordinate of the drop(same for every drop initially)
    for (var x = 0; x < columns; x++) drops[x] = 1
    var self = this
    drawInterval = setInterval(function() {
      self.draw(ctx, drops, matrix, m, font_size)
    }, 45)
  }

  //drawing the characters
  draw(ctx, drops, matrix, m, font_size) {
    //translucent BG to show trail
    ctx.fillStyle = "rgba(0, 0, 0, 0.04)"
    ctx.fillRect(0, 0, m.width, m.height)

    ctx.fillStyle = "#6666ff" //blue text
    ctx.font = font_size + "px arial"
    //looping over drops
    for (var i = 0; i < drops.length; i++) {
      //a random chinese character to print
      var text = matrix[Math.floor(Math.random() * matrix.length)]
      //x = i*font_size, y = value of drops[i]*font_size
      ctx.fillText(text, i * font_size, drops[i] * font_size)

      //sending the drop back to the top randomly after it has crossed the screen
      //adding a randomness to the reset to make the drops scattered on the Y axis
      if (drops[i] * font_size > m.height && Math.random() > 0.975) drops[i] = 0

      //incrementing Y coordinate
      drops[i]++
    }
  }

  updateDimensions() {
    clearInterval(drawInterval)
    this.initDraw(window.innerWidth, window.innerHeight)
  }

  componentDidMount() {
    this.initDraw(window.innerWidth, window.innerHeight)
    window.addEventListener("resize", this.updateDimensions.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this))
  }

  animateArrows() {
    this.myTween = TweenMax.to(this.topArrow, 0.35, { rotate: "180" })
    this.myTween = TweenMax.to(this.bottomArrow, 0.35, { rotate: "180" })
    this.myTween = TweenMax.to(this.topArrow2, 0.35, { rotate: "-180" })
    this.myTween = TweenMax.to(this.bottomArrow2, 0.35, { rotate: "-180" })

    this.myTween = TweenMax.to(this.topArrow, 0, { delay: 0.4, rotate: "0" })
    this.myTween = TweenMax.to(this.bottomArrow, 0, { delay: 0.4, rotate: "0" })
    this.myTween = TweenMax.to(this.topArrow2, 0, { delay: 0.4, rotate: "0" })
    this.myTween = TweenMax.to(this.bottomArrow2, 0, {
      delay: 0.4,
      rotate: "0",
    })
  }

  render() {
    return (
      <section className="home">
        <div className="canvas">
          <canvas id="m"></canvas>
        </div>
        <div className="homeMainSection">
          <img src={avatar} className="avatar" alt="hello"></img>
          <h1 ref={head1 => (this.head1 = head1)}>
            Front end developer &<br></br> Project Manager
          </h1>
          <a
            rel="noopener noreferrer"
            href="http://www.manuelyemoh.co.uk/ManuelYemohCV_2019_dev_.pdf"
            target="_blank"
          >
            Download CV
          </a>
          <p>
            <a
              rel="noopener noreferrer"
              href="tel:075-250-0-3188"
              target="_blank"
            >
              07525003188
            </a>
            &nbsp; / &nbsp;
            <a
              rel="noopener noreferrer"
              href="mailto:manuelyemoh@gmail.com"
              target="_blank"
            >
              manuelyemoh@gmail.com
            </a>
          </p>
          <div
            className="downSelect"
            onMouseOver={event => this.animateArrows()}
            onFocus={event => this.animateArrows()}
          >
            <span
              ref={topArrow => (this.topArrow = topArrow)}
              className="topArrow"
            >
              \
            </span>
            <span
              ref={topArrow2 => (this.topArrow2 = topArrow2)}
              className="topArrow2"
            >
              /
            </span>
            <span
              ref={bottomArrow => (this.bottomArrow = bottomArrow)}
              className="bottomArrow"
            >
              \
            </span>
            <span
              ref={bottomArrow2 => (this.bottomArrow2 = bottomArrow2)}
              className="bottomArrow2"
            >
              /
            </span>
          </div>
          {/* <ScrollTo>
            {({ scroll }) => (
              <a
                onClick={() =>
                  scroll({ ref: this.myRef, x: 20, y: 500, smooth: true })
                }
              >
                Scroll to Bottom
              </a>
            )}
          </ScrollTo>
          <div ref={this.myRef}>My Element</div> */}
        </div>
      </section>
    )
  }
}

export default Hero
