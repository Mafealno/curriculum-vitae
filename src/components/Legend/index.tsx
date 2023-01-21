import React, { useState } from 'react'

type Props = {
    children: JSX.Element,
    label: string,
}

function Legend(props: Props) {

    const [showLegend, setShowLegend] = useState(false);

    const { children, label } = props

  return (
    <span className="relative flex justify-center items-center" onMouseEnter={() => setShowLegend(true)} onMouseLeave={() => setShowLegend(false)}>
        {showLegend && <div className="absolute bg-black rounded py-2 px-4 text-white">{label}</div>}
        {children}
    </span>
  )
}

export default Legend