import React from 'react'

import "./styles.css";

type Props = {
    title: string
}

function Title(props: Props) {

    const { title } = props;

  return (
    <>
        <p className="text-2xl font-bold">{title}</p>
        <div className="line-title w-12 h-1 rounded mb-5"></div>
    </>
  )
}

export default Title