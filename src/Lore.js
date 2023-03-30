import React from "react";
import cogi5 from './CGL5.png'
import cogi3 from './CGL3.png'
import cogi4 from './CGL4.png'
import cogi6 from './CGL6.jpg'
import "font-awesome/css/font-awesome.min.css";
import './Lore.css'


let Lore = () =>{

  let LoreSchema = (props) =>{
    return(
      <div className="loreContainer">
        <div className="titleContLore">{props.titulo}</div>
        <div className="imgCont">
          <img className="cogi5" src={props.imagen}/>
          <p className="textContLore">{props.lore}</p>
        </div>

      </div>
    )
  }

  return(
    <div className="lores">
      <div className="warning">ESTA SECCION AUN ESTA EN DESARROLLO</div>
      <LoreSchema titulo='Cogimientoland 5' imagen={cogi5} lore={<p>
      Cogimientoland 5 narra las aventuras de ilHat3rs y sus compas intentando sobrevivir en un mundo postapocaliptico el cual no se sabe ni como comenzo ni por que ellos estan ahi
      <br/> 
      <br/> 
      Este termina con un evento poco frecuente y devastador la luna sangrienta la cual aumenta extremadamente la durabilidad y fuerza de los no-muertos.
      <br/>
      TheJunger7, Totogabriel7 y N1c bastante heridos deciden acudir a la llamada de la ultima zona segura en pie para intentar escapar en helicoptero a una zona menos poblada y por ende con menos muertos, lamentablemente su destino seria otro.
      <br/>
      Este helicoptero es impactado por un rayo haciendolo desaparecer sin dejar rastro alguno.
      <br/> 
      <br/> 
      <span className="adv">ilHat3rs habia quedado solo en el mundo</span>
      <br/> 
      Con el tiempo el hogar de Totogabriel7 fue finalmente destruida por la horda zombi,
      <br/>
      El gran puente, estructura que sostenia los hogares de N1c y TongoWey finalmente se derrumbo por fallos estructurales y no haber seguido los planos, junto a sus casas,
      <br/>
      los misiles nucleares almacenados ilegalmente en el hogar de TheJunger7 finalmente explotaron por falta de mantenimiento creando un gran crater y dejando la zona completamente inhabitable. 
      <br/> 
      <br/> 
      Por lo que ilHat3rs junto con los sobrevivientos de New Vegas partieron en busca de una nueva zona habitable, 
      <br/>
      <br/>
      <span className="next">un nuevo lugar al que llamar hogar...</span>
      </p>}
/>
      <div className='chevronIcon'><i className="fa fa-sharp fa-solid fa-chevron-down"></i> </div>

      <LoreSchema titulo='Cogimientoland 1' lore='Lorem ipsum dolor sit amet consectetur adipisicing elit. A in amet, tempora ducimus mollitia deserunt impedit error enim corrupti nobis commodi harum dolores blanditiis debitis adipisci dolor alias cumque recusandae.'/>

      <div className='chevronIcon'><i className="fa fa-sharp fa-solid fa-chevron-down"></i> </div>

      <LoreSchema titulo='Cogimientoland 2' lore='Lorem ipsum dolor sit amet consectetur adipisicing elit. A in amet, tempora ducimus mollitia deserunt impedit error enim corrupti nobis commodi harum dolores blanditiis debitis adipisci dolor alias cumque recusandae.'/>

      <div className='chevronIcon'><i className="fa fa-sharp fa-solid fa-chevron-down"></i> </div>

      <LoreSchema titulo='Cogimientoland 3' imagen={cogi3} lore={<p>
        Narra las aventuras de otro de los pueblos fundado por [<span className="caciqueColor">cacique</span>] ilHat3rs en su travesia a travez del mundo.
        <br/>
        Este se caracterizo por una serie de varios eventos y sucesos como <br/> el gran evento de pesca,
        <br/>la noche de la gran matanza (purga), 
        <br/>asesinatos en masa con explosivos, 
        <br/>la masacre del nether
        <br/>caceria maritima
        <br/>invasiones
        <br/>
        <br/>
        <span className="next">Y </span>
        <br/>
        <span className="next">Agujeros negros, muchos agujeros negros</span>

      </p>}/>

      <div className='chevronIcon'><i className="fa fa-sharp fa-solid fa-chevron-down"></i> </div>

      <LoreSchema titulo='Cogimientoland 4' imagen={cogi4} lore={
        <p>
          Narra las aventuras de ilHat3rs en su encuentro con la gran isla flotante y el gremio de aventureros.
          <br/>
          Durante su estadia en esta isla ilHat3rs y sus compañeros se alistaron al gremio completando diversas tareas y cacerias asi como el asalto a una fortaleza, si bien el primer asalto a esta fortaleza fallo, no se rindieron ahi.
          <br/>
          A la par en su estadia construyeron un gran pueblo a las afueras de la isla el cual dividieron en pequeñas aldeas con distintos gobernantes.
          <br/>
          <br/>
          Entre las tareas que ilHat3rs y compania completaron se encuentran, la caceria de moustruos hostiles, la recoleccion de recursos, la eliminacion de amenazas mayores entre otras.
          <br/>
          <br/>
          Lamentablemente para la gran isla, cuando se iba a dar el asalto final al gran castillo enemigo, ilHat3rs y compania ya habian emprendido rumbo.
          <br/>
          <br/>
          <span className="next">La isla desaparecio sin dejar rastro</span>
        </p>
      }/>

      <div className='chevronIcon'><i className="fa fa-sharp fa-solid fa-chevron-down"></i> </div>

      <LoreSchema titulo='Cogimientoland 6' imagen={cogi6} lore={
        <p>
          Una inusual tormenta electrica cubre la noche
          <br/>
          En medio de esta tormenta a ilHat3rs le llama la atencion un estruendo en particular, demasiado fuerte y demasiado brilloso como para ser un rayo, pero tambien demasiado lejos como para ir a investigarlo durante esa tormenta, 
          <br/>por lo que este deberia esperar a la mañana siguiente para ir a ver
          <br/>
          <br/>
          A la mañana siguiente ilHat3rs llega al lugar del estruendo y se encuentra con algo que habia olvidado hace tiempo, 
          <br/>algo que jamas penso volver a ver...
          <br/>
          <br/>
          <span className="good">El resto de la historia se adaptara a tus decisiones dentro del servidor, haz una buena historia!</span>
        </p>
      }/>

    </div>
  )

}

export {Lore}