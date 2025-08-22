import React, { useContext, useEffect, useState } from 'react'
import { OutputContext } from '../../App';
import { Experience } from '../../interfaces/experience';

import { GiClick } from "react-icons/gi";

import "./styles.css";
import { getExperienceMounths } from '../../utils/date';

type Props = {
    experiences: Experience[];
    showExperience: (index: Experience) => void,
}

function ExperienceLine(props: Props) {

    const { experiences, showExperience } = props;
    
    const [clicked, setClicked] = useState<boolean>(false);
    const [widthTimeline, setWidthTimeline] = useState<number>(0);
    const { dispatchOutput } = useContext(OutputContext);

    useEffect(() => {
        experiences.forEach((experience) => {
            let mouths = getExperienceMounths(experience.startDate, experience.endDate);

            setWidthTimeline(prevState => prevState + (200 + (mouths * 5)));
        })
    }, [])

    const mountComponentExperience = (experience: Experience, index: number) : JSX.Element => {

        let mouths = getExperienceMounths(experience.startDate, experience.endDate);

        return <div key={index} className={`flex relative h-[100px] mx-10 mx-lg:min-w[100px] max-lg:mx-5`}
        style={{
            minWidth: `${200 + (mouths * 5)}px`
        }}
        >
                        <div className="bullet-timeline top-[-15px] left-0">{experience.endDate ? experience.endDate.getFullYear() : "Atual"}</div>
                        <div className="company-timeline" />
                        <div className="flex flex-col justify-start items-center h-full w-full">
                            <div className="indication-line"/>
                            <div
                            className="w-28 px-2 py-2 text-center font-bold text-lg hover:text-xl hover:text-[var(--aux-color-2)] hover:cursor-pointer hover:border-dashed hover:border"
                            onClick={() => {
                                setClicked(true);
                                showExperience(experience);
                                dispatchOutput({ type: "ADD_ACTION", payload: `Selecionada experiência da empresa '${experience.companyName}'` })
                            }}
                            >
                                {experience.companyName}
                                {index === 0 && !clicked && <GiClick  className="absolute top-[75px] left-[175px] -translate-x-1/2 text-[var(--secondary-color)] animate-click" />}
                            </div>
                        </div>
                        <div className="bullet-timeline top-[-15px] right-0">{experience.startDate.getFullYear()}</div>
                    </div>;
    }

  return (
    <div id="container-experience-line"className="flex items-top w-full h-44 pt-5">
        <div id="rotate-180" className="flex items-top w-full pt-[40px]">
            <div className={`timeline`} style={{ width: `${ (widthTimeline + 650) / 2 }px` }}/>
            {experiences.map((item, index) => mountComponentExperience(item, index))}
        </div>
    </div>
  )
}

export default ExperienceLine