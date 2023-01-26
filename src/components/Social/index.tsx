import React, { useEffect, useState, useContext } from 'react'

import { TiSocialInstagram, TiSocialLinkedin } from "react-icons/ti"
import { HiOutlineMail } from "react-icons/hi";
import { BsGithub } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

import { OutputContext } from '../../App';

function Social() {

    const [showCopy, setShowCopy] = useState(false);

    const { dispatchOutput } = useContext(OutputContext);

    useEffect(() => {
        if(showCopy) setTimeout(() => setShowCopy(false), 2000);
    }, [showCopy]);

  return (
    <>
        <a href="https://github.com/Mafealno" target="_blank" rel="noreferrer" onClick={() => dispatchOutput({ type: "ADD_ACTION", payload: "Aberto 'https://github.com/Mafealno'" })}><BsGithub className="h-8 w-7" /></a>
        <a href="https://www.linkedin.com/in/marcelo-fernando-alves-nogueira-3b1562116/" target="_blank" rel="noreferrer" onClick={() => dispatchOutput({ type: "ADD_ACTION", payload: "Aberto 'https://www.linkedin.com/in/marcelo-fernando-alves-nogueira-3b1562116/'" })}><TiSocialLinkedin className="h-11 w-11"/></a>
        <a href="http://api.whatsapp.com/send?1=pt_BR&phone=5511949679592" target="_blank" rel="noreferrer" onClick={() => dispatchOutput({ type: "ADD_ACTION", payload: "Aberto 'http://api.whatsapp.com/send?1=pt_BR&phone=5511949679592'" })}><BsWhatsapp className="h-7 w-7"/></a>
        <a href="https://www.instagram.com/mafealno/" target="_blank" rel="noreferrer" onClick={() => dispatchOutput({ type: "ADD_ACTION", payload: "Aberto 'https://www.instagram.com/mafealno/'" })}><TiSocialInstagram className="h-8 w-8"/></a>
        {showCopy && <span className="absolute bg-black rounded py-2 px-4 text-white">Copiado</span>}
        <a href="malito:mafealno@gmail.com" onClick={() => {
            navigator.clipboard.writeText("mafealno@gmail.com");
            setShowCopy(true);
            dispatchOutput({ type: "ADD_ACTION", payload: "Copiado email 'mafealno@gmail.com'" })
        }}><HiOutlineMail className="h-8 w-8"/></a>
    </>
  )
}

export default Social