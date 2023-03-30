import './Contador.css';
import { useState, useEffect } from 'react';

const ContadorCuentaRegresiva = ({ fechaDestino }) => {
  const [dias, setDias] = useState(0);
  const [horas, setHoras] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      const ahora = new Date().getTime();
      const distancia = fechaDestino - ahora;

      if (distancia < 0) {
        clearInterval(intervalo);
        return;
      }

      const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
      const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
      const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

      setDias(dias);
      setHoras(horas);
      setMinutos(minutos);
      setSegundos(segundos);
    }, 1000);

    return () => clearInterval(intervalo);
  }, [fechaDestino]);

  if (dias === 0 && horas === 0 && minutos === 0 && segundos === 0) {
    return /*"Preparate bien, nos vemos hoy a las 19:00 en discord!"*/;
  }

  return `${dias} día${dias > 1 ? 's,' : ','} ${horas}:${minutos < 10 ? '0' : ''}${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;
};

const Contador = () => {
  const fechaDestino = new Date("2023-04-09").getTime();

  return (
    <div className='contador'>
        <p className='contadorP falta'>Faltan:</p>
      <p className='contadorP'>
        <ContadorCuentaRegresiva fechaDestino={fechaDestino} />
      </p>
    </div>
  );
};

export { Contador };
