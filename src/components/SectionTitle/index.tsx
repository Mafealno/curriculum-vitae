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
      <div className="relative sm:static flex items-center gap-3">
        <p className="text-2xl font-bold select-none">{title}</p>
        {legend && (
          <div className="sm:relative">
            <FaQuestionCircle className='h-6 w-6 shrink-0 text-[var(--secondary-color)]'
            onMouseEnter={() => setShowLegend(true)}
            onMouseLeave={() => setShowLegend(false)}
            />
            {showLegend && (
              <div className="cursor-default text-center leading-snug flex justify-center items-center z-30 bg-black rounded py-2 px-4 text-white absolute left-0 right-0 top-full mt-2 w-auto max-w-full sm:left-full sm:right-auto sm:top-0 sm:ml-3 sm:mt-0 sm:w-max sm:max-w-xs whitespace-normal break-words shadow-lg">
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