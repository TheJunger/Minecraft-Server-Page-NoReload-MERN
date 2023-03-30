import React from "react";
import cogi5 from './CGL5.png'
import "font-awesome/css/font-awesome.min.css";
import './Lore.css'


let Lore = () =>{

  let LoreSchema = (props) =>{
    return(
      <div className="loreContainer">
        <div className="imgCont">
          {/*<img className="cogi5" src={cogi5}/>*/}
          <div className="textContLore">
          <div className="titleContLore">{props.titulo}</div>
          <div className="descContLore">{props.lores}</div>
        </div>
        </div>

      </div>
    )
  }

  return(
    <div className="lores">
      <div className="warning">ESTA SECCION AUN ESTA EN DESARROLLO</div>
      <LoreSchema titulo='Cogimientoland 5' lore='
      Cogimientoland 5 narra las aventuras de ilHat3rs y sus compas intentando sobrevivir en un mundo postapocaliptico el cual no se sabe ni como comenzo ni por que ellos estan ahi
      
      Este termina con un evento poco frecuente y devastador la luna sangrienta la cual aumenta extremadamente la durabilidad y fuerza de los no muertos 
      TheJunger7, Totogabriel7 y N1c bastante heridos deciden acudir a la llamada de la ultima zona segura en pie para intentar escapar en helicoptero a una zona menos poblada y por ende con menos muertos, lamentablemente su destino seria otro.
      Este helicoptero es impactado por un rayo haciendolo desaparecer sin dejar rastro alguno

      ilHat3rs habia quedado solo en el mundo

      con el tiempo el hogar de Totogabriel7 fue finalmente destruida por la horda zombi,
      el gran puente, estructura que sostenia los hogares de N1c y TongoWey finalmente se derrumbo por fallos estructurales y no haber seguido los planos, junto a sus casas, 
      los misiles nucleares almacenados ilegalmente en el hogar de TheJunger7 finalmente explotaron por falta de mantenimiento creando un gran crater y dejando la zona completamente inhabitable, 

      por lo que ilHat3rs junto con los sobrevivientos de New Vegas partieron en busca de una nueva zona habitable, un nuevo lugar al que llamar hogar. '
/>
      <div className='chevronIcon'><i className="fa fa-sharp fa-solid fa-chevron-down"></i> </div>
      <LoreSchema titulo='Cogimientoland 1' lore='Lorem ipsum dolor sit amet consectetur adipisicing elit. A in amet, tempora ducimus mollitia deserunt impedit error enim corrupti nobis commodi harum dolores blanditiis debitis adipisci dolor alias cumque recusandae.'/>
      <div className='chevronIcon'><i className="fa fa-sharp fa-solid fa-chevron-down"></i> </div>
      <LoreSchema titulo='Cogimientoland 2' lore='Lorem ipsum dolor sit amet consectetur adipisicing elit. A in amet, tempora ducimus mollitia deserunt impedit error enim corrupti nobis commodi harum dolores blanditiis debitis adipisci dolor alias cumque recusandae.'/>
      <div className='chevronIcon'><i className="fa fa-sharp fa-solid fa-chevron-down"></i> </div>
      <LoreSchema titulo='Cogimientoland 3' lore='Lorem ipsum dolor sit amet consectetur adipisicing elit. A in amet, tempora ducimus mollitia deserunt impedit error enim corrupti nobis commodi harum dolores blanditiis debitis adipisci dolor alias cumque recusandae.'/>
      <div className='chevronIcon'><i className="fa fa-sharp fa-solid fa-chevron-down"></i> </div>
      <LoreSchema titulo='Cogimientoland 4' lore='Lorem ipsum dolor sit amet consectetur adipisicing elit. A in amet, tempora ducimus mollitia deserunt impedit error enim corrupti nobis commodi harum dolores blanditiis debitis adipisci dolor alias cumque recusandae.'/>
      <div className='chevronIcon'><i className="fa fa-sharp fa-solid fa-chevron-down"></i> </div>
      <LoreSchema titulo='Cogimientoland 6' lore='Lorem ipsum dolor sit amet consectetur adipisicing elit. A in amet, tempora ducimus mollitia deserunt impedit error enim corrupti nobis commodi harum dolores blanditiis debitis adipisci dolor alias cumque recusandae.'/>
    </div>
  )

}

export {Lore}