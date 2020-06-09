import React from "react"
import "../styles/intro.scss"
import profilePic from "../images/profilePic.jpg"
import { TweenMax } from "gsap"
import { ScrollTo } from "react-scroll-to"
import BubbleChart from '@weknow/react-bubble-chart-d3';

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
        <BubbleChart
  graph= {{
    zoom: 1.1,
    offsetX: -0.05,
    offsetY: -0.01,
  }}
  width={1000}
  height={800}
  padding={0} // optional value, number that set the padding between bubbles
  showLegend={true} // optional value, pass false to disable the legend.
  legendPercentage={20} // number that represent the % of with that legend going to use.
  legendFont={{
        family: 'Arial',
        size: 12,
        color: '#000',
        weight: 'bold',
      }}
  valueFont={{
        family: 'Arial',
        size: 12,
        color: '#fff',
        weight: 'bold',
      }}
  labelFont={{
        family: 'Arial',
        size: 16,
        color: '#fff',
        weight: 'bold',
      }}
  //Custom bubble/legend click functions such as searching using the label, redirecting to other page
  bubbleClickFunc={this.bubbleClick}
  legendClickFun={this.legendClick}
  data={[
    { label: 'CRM', value: 1 },
    { label: 'API', value: 1 },
    { label: 'Data', value: 1 },
    { label: 'Commerce', value: 1 },
    { label: 'AI', value: 3 },
    { label: 'Management', value: 5 },
    { label: 'Testing', value: 6 },
    { label: 'Mobile', value: 9 },
    { label: 'Conversion', value: 9 },
    { label: 'Misc', value: 21 },
    { label: 'Databases', value: 22 },
    { label: 'DevOps', value: 22 },
    { label: 'Javascript', value: 23 },
    { label: 'Languages / Frameworks', value: 25 },
    { label: 'Front End', value: 26 },
    { label: 'Content', value: 26 },
  ]}
/>
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
