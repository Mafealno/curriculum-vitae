import React from 'react'

import "./styles.css";

type Props = {
  children: JSX.Element,
  id: string,
  height?: string;
}

function ContainerSection(props: Props) {

    const { children, id, height } = props;

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