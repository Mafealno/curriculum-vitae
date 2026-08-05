import React, { useState } from 'react'

import { FaQuestionCircle } from "react-icons/fa";

import "./styles.css";

type Props = {
    title: string,
    legend?: string
}

function SectionTitle(props: Props) {

    const [showLegend, setShowLegend] = useState(false);

    const { title, legend } = props;

  return (
    <div className="group">
      <div className="flex flex items-center gap-3">
        <p className="text-2xl font-bold select-none">{title}</p>
        {legend && (
          <div className="relative flex items-center">
            <FaQuestionCircle className='h-6 w-6 text-[var(--secondary-color)]'
            onMouseEnter={() => setShowLegend(true)}
            onMouseLeave={() => setShowLegend(false)}
            />
            {showLegend && (
              <div className="cursor-default text-center leading-snug flex justify-center items-center z-30 bg-black rounded py-2 px-4 text-white absolute left-full top-0 ml-3 w-max max-w-[16rem] sm:max-w-xs whitespace-normal break-words shadow-lg">
                {legend}
              </div>
            )}
          </div>
        )}
      </div>
      <div className="line-title w-12 h-1 rounded mb-5 transition-all duration-300 group-hover:w-28"></div>
    </div>
  )
}

export default SectionTitle