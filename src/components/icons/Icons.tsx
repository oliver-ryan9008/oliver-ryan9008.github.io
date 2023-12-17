import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faJs, faReact, faGit } from "@fortawesome/free-brands-svg-icons"
import { IconDefinition } from "@fortawesome/fontawesome-svg-core"

interface IconProps {
  icon: IconDefinition
  otherProps?: any
}

export const Icon: React.FC<IconProps> = ({ icon, otherProps }) => {
  return (
    <i>
      <FontAwesomeIcon icon={icon} {...otherProps} />
    </i>
  )
}

export const JSIcon: React.FC = () => {
  const otherProps = {
    title: "Javascript/Typescript",
  }
  return <Icon icon={faJs} {...otherProps} />
}

export const ReactIcon: React.FC = () => {
  const otherProps = {
    title: "React",
  }
  return <Icon icon={faReact} {...otherProps} />
}

export const GitIcon: React.FC = () => {
  const otherProps = {
    title: "Git",
  }
  return <Icon icon={faGit} {...otherProps} />
}
