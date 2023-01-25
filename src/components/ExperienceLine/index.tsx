import React from 'react'
import { Experience } from '../../interfaces/experience';

import "./styles.css";

type Props = {
    experiences: Experience[];
    showExperience: (index: Experience) => void,
}

function ExperienceLine(props: Props) {

    const { experiences, showExperience } = props;

  return (
    <div id="container-experience-line"className="flex items-top w-full h-44 pt-5">
        <div id="rotate-180" className="flex items-top w-full pt-[40px]">
            <div className="timeline "/>
            {experiences.map((item, index) => {
                return (
                    <div key={index} className="flex relative min-w-[200px] mx-lg:min-w[100px] h-[100px] mx-10 max-lg:mx-5">
                        <div className="bullet-timeline top-[-15px] left-0">{item.startDate.getFullYear()}</div>
                        <div className="company-timeline" />
                        <div className="flex flex-col justify-start items-center h-full w-full">
                            <div className="indication-line"/>
                            <div
                            className="w-28 px-2 py-2 text-center font-bold text-lg hover:text-xl hover:text-[var(--aux-color-2)] hover:cursor-pointer hover:border-dashed hover:border"
                            onClick={() => showExperience(item)}
                            >
                                {item.companyName}
                            </div>
                        </div>
                        <div className="bullet-timeline top-[-15px] right-0">{item.endDate ? item.endDate.getFullYear() : "Atual"}</div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default ExperienceLine