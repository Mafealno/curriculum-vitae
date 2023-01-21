import React, { useEffect, useState } from 'react'

import { TiSocialGithub, TiSocialInstagram, TiSocialLinkedin } from "react-icons/ti"
import { HiOutlineMail } from "react-icons/hi";
import { BsWhatsapp } from "react-icons/bs";

function Social() {

    const [showCopy, setShowCopy] = useState(false);

    useEffect(() => {
        if(showCopy) setTimeout(() => setShowCopy(false), 2000);
    }, [showCopy])

  return (
    <>
        <a href="https://github.com/Mafealno"><TiSocialGithub className="h-11 w-11"/></a>
        <a href="https://www.linkedin.com/in/marcelo-fernando-alves-nogueira-3b1562116/"><TiSocialLinkedin className="h-10 w-10"/></a>
        <a href="http://api.whatsapp.com/send?1=pt_BR&phone=5511949679592"><BsWhatsapp className="h-7 w-7"/></a>
        <a href="https://www.instagram.com/mafealno/"><TiSocialInstagram className="h-8 w-8"/></a>
        {showCopy && <span className="absolute bg-black rounded py-2 px-4 text-white">Copiado</span>}
        <a href="#" onClick={() => {
            navigator.clipboard.writeText("mafealno@gmail.com");
            setShowCopy(true);
        }}><HiOutlineMail className="h-8 w-8"/></a>
    </>
  )
}

export default Social