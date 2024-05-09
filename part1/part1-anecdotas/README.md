# Popular Anecdotes App

Esta aplicación te permite ver anécdotas y votar por tus favoritas. También muestra la anécdota más popular basada en los votos.

## Cómo funciona

La aplicación muestra una anécdota aleatoria y te permite votar por ella. También muestra cuántos votos ha recibido la anécdota actual. Puedes presionar el botón "Random" para obtener una nueva anécdota aleatoria y el botón "Vote" para votar por la anécdota actual.

## Componentes

### `Popular`

Un componente que muestra la anécdota más popular basada en los votos.

```jsx
function Popular({ points, anecdotes }) {
  let max = 0;
  let indice;
  for (let i = 0; i < points.length; i++) {
    if (points[i] > max) {
      max = points[i];
      indice = i;
    }
  }
  return <p>{anecdotes[indice]}</p>;
}

