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
    <>
      <div className="flex flex items-center gap-3 relative">
        <p className="text-2xl font-bold">{title}</p>
        {legend && (
          <>
            <FaQuestionCircle className='h-6 w-6 text-[var(--secondary-color)]'
            onMouseEnter={() => setShowLegend(true)}
            onMouseLeave={() => setShowLegend(false)}
            />
            {showLegend && <div className="cursor-default text-center flex justify-center items-center z-30 bg-black rounded py-2 absolute left-48 px-4 text-white">{legend}</div>}
          </>
        )}
      </div>
      <div className="line-title w-12 h-1 rounded mb-5"></div>
    </>
  )
}

export default SectionTitle