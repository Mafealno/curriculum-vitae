import React from 'react'

import "./styles.css";

type Props = {
  children: JSX.Element,
  id: string,
  backgroundImage?: string
  height?: string;
}

function ContainerSection(props: Props) {

    const { children, id, backgroundImage, height } = props;

  return (
    <div
    id={id}
    className="container-section"
    style={{
      height: height
    } as React.CSSProperties}>
        {children}
    </div>
  )
}

export default ContainerSection