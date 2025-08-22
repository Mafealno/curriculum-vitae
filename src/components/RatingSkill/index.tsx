import React from 'react'

import Skill from '../../interfaces/skill';
import { AiFillStar } from "react-icons/ai";

import "./styles.css";

type Props = {
    id: number,
    skill: Skill
}

export function StarSkill(props: Props) {

    const { skill } = props;

  return (
    <div className="flex items-center">
        <p
        className="title-skill text-white text-lg font-bold w-36 mr-3"
        ><div id={`skill-${skill.name}`} className={`whitespace-nowrap ${skill.name.length > 15 ? "marquee" : ""}`}>{skill.name}</div></p>
        <span className="flex gap-3">
          {Array.from(Array(skill.rating).keys()).map(() => (<AiFillStar className="h-6 w-6 sm:h-8 sm:w-8" style={{ color: "var(--secondary-color)" } as React.CSSProperties} />))}
          {Array.from(Array(5 - skill.rating).keys()).map(() => (<AiFillStar className="h-6 w-6 sm:h-8 sm:w-8" />))}
        </span>
    </div>
  )
}

export function RangeSkill(props: Props) {

  const { skill } = props;

return (
  <div className="flex items-center">
      <p className="text-white text-lg font-bold w-36">{skill.name}</p>
      <div className="ml-36 range-container absolute range-empty" />
      <div className="ml-36 range-container absolute range-skill" style={{ width: `${40 * skill.rating}px` } as React.CSSProperties} />
      <div className="bullet-skill ml-36" style={{ left: `${128 + (40 * skill.rating)}px` } as React.CSSProperties}>{skill.rating}</div>
  </div>
)
}