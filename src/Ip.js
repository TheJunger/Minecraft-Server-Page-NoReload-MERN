import React from "react";
import { useState } from "react";
import "font-awesome/css/font-awesome.min.css";
import './Ip.css'

let Ip = ()=>{
    const [texto, setCopyText] = useState('cogimientoland.exaroton.me') //añadir al terminar la cuenta
    /*const [texto, setCopyText] = useState('La IP se revelara pronto!')*/

    const copyText = () =>{
        navigator.clipboard.writeText(texto)
    }

    return(
        <div className="ipCont">
            <p className="ipText">Ip: {texto} </p>
            <div onClick={()=>{copyText(); alert('Ip copiada!')}} className="iconIp"><i class="icon fa fa-solid fa-copy"></i></div>
        </div>
    )
}

export {Ip}