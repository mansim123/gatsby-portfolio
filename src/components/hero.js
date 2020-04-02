import React from "react"
import "./hero.scss"
import avatar from "../images/avatar.jpg"

class Hero extends React.Component {
  componentDidMount() {
    //drawing the characters
    function draw() {
      //Black BG for the canvas
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
        if (drops[i] * font_size > m.height && Math.random() > 0.975)
          drops[i] = 0

        //incrementing Y coordinate
        drops[i]++
      }
    }

    var m = document.getElementById("m")
    var ctx = m.getContext("2d")

    //making the canvas full screen
    m.height = window.innerHeight
    m.width = window.innerWidth

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

    setInterval(draw, 35)
  }

  render() {
    return (
      <section className="home">
        <div className="canvas">
          <canvas id="m"></canvas>
        </div>
        <div className="homeMainSection">
          <img src={avatar} className="avatar" alt="hello"></img>
        </div>
      </section>
    )
  }
}

export default Hero
