import React, { useEffect } from "react"
import "./Skillz.css"
import WOW from "wow.js"
// import { categories } from "../../../your_info"
import { JSIcon, ReactIcon, GitIcon } from "../../icons/Icons"
import SkillsCell from "./Row"

const getIcon = () => {}

const Skillz = () => {
  useEffect(() => {
    new WOW().init()
  }, [])

  return (
    <section id="Skills" className="skills section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title">
              <h3 className="wow zoomIn" data-wow-delay=".2s">
                Skills
              </h3>
              <h2 className="wow fadeInUp" data-wow-delay=".4s">
                Exploring and Expanding My area of focus
              </h2>
              <p className="wow fadeInUp" data-wow-delay=".6s">
                A diverse set of skills and technologies I have acquired to
                develop impactful solutions
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <SkillsCell
            headerText="Software Engineering"
            bodyText="Say something cool here"
          >
            <JSIcon />
            <ReactIcon />
            <GitIcon />
          </SkillsCell>
        </div>
      </div>
    </section>
  )
}

export default Skillz
