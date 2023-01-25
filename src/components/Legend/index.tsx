import React, { useState } from 'react'

type Props = {
    children: JSX.Element,
    label: string,
    className?: string,
    position?: number,
}

function Legend(props: Props) {

    const [showLegend, setShowLegend] = useState(false);

    const { children, label, className, position } = props

  return (
    <span
    className={`relative flex h-full justify-center items-center ${className}`}
    onMouseEnter={() => setShowLegend(true)}
    onMouseLeave={() => setShowLegend(false)}
    >
        {showLegend &&
          <div className="cursor-default z-10 max-w-[150px] text-center absolute bg-black rounded py-2 px-4 text-white"
          style={{
            transform: position ? `translateX(${position}%)`: ""
          } as React.CSSProperties}>{label}</div>}
        {children}
    </span>
  )
}

export default Legend