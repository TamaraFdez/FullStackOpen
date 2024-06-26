import { useState } from 'react';
function Popular({ points, anecdotes }){
  let max = [0];
  let indice;
for (let i = 0; i < points.length; i++) {
  if (points[i] > max) {
    max = points[i];
    indice = i
  }
}
return <p>{anecdotes[indice]}</p>
}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.',
  ];

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState([0, 0, 0, 0, 0, 0, 0, 0]);

  const handleClickVote = () => {
    const newPoints = [...points];
    newPoints[selected] += 1;
    setPoints(newPoints);
  };
  const handleClickRandom = () => {
    return setSelected(Math.floor(Math.random() * 8));
  };
  return (
    
    <div>
      <p> {anecdotes[selected]}</p>
      <p> Votos: {points[selected]}</p>
      <button onClick={handleClickRandom}>Random</button>
      <button onClick={handleClickVote}>Vote</button>
      <Popular points={points} anecdotes={anecdotes} />
    </div>
    
    
  );
};

export default App;
