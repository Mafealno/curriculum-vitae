import React, { useState } from 'react'
import { Experience } from '../../interfaces/experience';

import "./styles.css";

type Props = {
    experiences: Experience[];
    showExperience: (index: Experience) => void,
}

function ExperienceLine(props: Props) {

    const [widowWidth, setWidowWidth] = useState(window.screen.width);
    const [selected, setSelected] = useState<number>();

    const lineWrap = 1100;

    const { experiences, showExperience } = props;

    window.addEventListener("resize", () => {
        setWidowWidth(window.innerWidth);
    })

  return (
    <div className="flex items-top w-full h-36 pt-3">
        <div className="timeline"/>
        {experiences.map((item, index) => {
            const spaceMobile = index === 0 ? 3 : (index * 33);
            const spaceDesktop = index === 0 ? 50 : (index * 310);
            return (
                <>
                    <div className="bullet-timeline" style={{ left: widowWidth < lineWrap ? `${spaceMobile}%` : `${spaceDesktop + 20 }px` } as React.CSSProperties}>{item.startDate.getFullYear()}</div>
                    <div className="company-timeline" style={{ left: widowWidth < lineWrap ? `${spaceMobile + 5 }%` : `${spaceDesktop + (20 + 12) }px` } as React.CSSProperties}/>
                    <div className="bullet-timeline" style={{ left: widowWidth < lineWrap ? `${spaceMobile + 5 + 10 }%` : `${spaceDesktop + (20 + 200) }px` } as React.CSSProperties}>{item.endDate ? item.endDate.getFullYear() : "Atual"}</div>
                    <div className="indication-line" style={{ height: "65px", left: widowWidth < lineWrap ? `calc(${spaceMobile + 4.7 }% + 30px)` : `${spaceDesktop + (20 + 200 - 80) }px` } as React.CSSProperties}/>
                    <div
                    className="w-28 px-2 py-2 text-center font-bold text-lg top-36 absolute hover:text-xl hover:text-[var(--secondary-color)] hover:cursor-pointer hover:border-dashed hover:border"
                    style={{
                        left: widowWidth < lineWrap ? `${spaceMobile - 2 }%` : `${spaceDesktop + (20 + 65) }px`,
                        border: index === selected ? "1px dashed" : ""
                    } as React.CSSProperties}
                    onClick={() => {
                        showExperience(item);
                        setSelected(index);
                    }}
                    >
                        {item.companyName}
                    </div>
                </>
            )
        })}
    </div>
  )
}

export default ExperienceLine