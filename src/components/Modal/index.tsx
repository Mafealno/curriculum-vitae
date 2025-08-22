import React from 'react'
import Modal from 'react-modal';

type Props = {
    key:number,
    show: boolean,
    className?: string,
    children: JSX.Element,
    closeModal: () => void,
}


export function SimpleModal(props: Props) {

    const { key, show, className, children, closeModal } = props;

  return (
    <Modal
    key={key}
    isOpen={show}
    onRequestClose={() => closeModal()}
    className={className} style={{
      overlay: {
        backdropFilter: "blur(5px)",
        backgroundColor: "rgb(0,0,0, 0.6)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: "100000000000",
        
        
      },
      content: {
        display: "flex",
        flexDirection: "column",
        border: "2px solid white",
        overflow: "hidden"
      }
    } as Modal.Styles }>
      {children}
    </Modal>
  )
}