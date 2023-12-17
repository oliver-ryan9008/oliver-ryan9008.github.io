import React from "react"

interface RowProps {
  headerText: string
  bodyText: string
  children: any
}

const SkillsCell: React.FC<RowProps> = ({ headerText, bodyText, children }) => {
  return (
    <div key="engineering" className="col-lg-4 col-md-6 col-12">
      <div className="single-feature wow fadeInUp" data-wow-delay=".2s">
        <div className="skill-icons">{children}</div>
        <h3>{headerText}</h3>
        <p>{bodyText}</p>
      </div>
    </div>
  )
}

export default SkillsCell
