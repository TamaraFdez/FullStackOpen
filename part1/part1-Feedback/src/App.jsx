import { useState } from 'react';


//Boton reutilizable
function ButtonG({ onClick, text }){
return <button onClick={onClick}>{text}</button>
}
//Tabla 
function StatisticLine({ text,res }){
  return <tr><td> {text}:</td><td>{res}</td></tr>
}
//Montar Estadisticas
function Estadisticas({ good, bad, neutral }) {
  const allResponse = good + neutral + bad;
  const promedio = (good - bad) / allResponse;
  const positivos = (good / allResponse) * 100+"%";

  if (good === 0 && bad === 0 && neutral === 0) {
    return (
      <>
        <h2>Estadísticas</h2>
        <p>No hay Feedback</p>
      </>
    );
  }
  return (
    <>
      <h2>Estadísticas</h2>
      <table>
        <StatisticLine text="Bueno" res={good} />
        <StatisticLine text="Neutral" res={neutral} />
        <StatisticLine text="Malo" res={bad} />
        <StatisticLine text="Total" res={allResponse} />
        <StatisticLine text="Promedio" res={promedio} />
        <StatisticLine text="Procentaje Positivo" res={positivos} />
      </table>
    </>
  );
}
const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const handleGoodClick = () => {
    setGood(good + 1);
  };
  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };
  const handleBadClick = () => {
    setBad(bad + 1);
  };
  return (
    <div>
      <h1>Deja tu opinión</h1>
      <ButtonG onClick={handleGoodClick} text="Bueno"/>
      <ButtonG onClick={handleNeutralClick} text="Neutral"/>
      <ButtonG onClick={handleBadClick} text="Malo"/>
      <Estadisticas good={good} bad={bad} neutral={neutral} />
    </div>
  );
};

export default App;