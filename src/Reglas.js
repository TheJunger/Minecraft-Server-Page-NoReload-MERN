import React from "react";
import './Reglas.css'

let Reglas =()=>{

    return(
        <div className="reglasCont">
            <div className="reglasTitle">Reglas del servidor</div>
            <div className="reglasTitle2">TEMPORALES, SUJETAS A CAMBIOS</div>
            <p className="reglas">
                <p className="reglasSubTitle">INGAME</p>
                <div>
                    <p className="rule"><b className="reglasNumber">1.)</b> Intenta ser la mejor version de vos / No seas malo y divertite</p>
                    <p className="rule"><b className="reglasNumber">2.)</b> Reporta los bugs y no los aproveches, seguro recibis una recompensa </p>
                    <p className="rule"><b className="reglasNumber">3.)</b> Juga tranquilo, no es una carrera</p>
                    <p className="rule"><b className="reglasNumber">4.)</b> La casa de un jugador lo es todo, no molestes</p>
                    <p className="rule"><b className="reglasNumber">5.)</b> Respeta los tiempos de evento y exceso a portales</p>
                    <p className="rule"><b className="reglasNumber">6.)</b> No se permiten los hacks</p>
                </div>
                <p className="reglasSubTitle">-IRL:</p>
                <div>
                    <p className="rule"><b className="reglasNumber">1.)</b> Lo que pasa minecraft se queda en minecraft</p>
                </div>
            </p>
        </div>
    )

}

export {Reglas}