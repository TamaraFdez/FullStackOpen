# Feedback App

Esta aplicación de retroalimentación te permite recopilar opiniones de los usuarios y mostrar estadísticas basadas en esas opiniones.

## Cómo funciona

La aplicación tiene tres botones: "Bueno", "Neutral" y "Malo". Cuando un usuario hace clic en uno de los botones, se registra su opinión y se actualizan las estadísticas en tiempo real en la parte inferior de la página.

## Componentes

### `ButtonG`

Un componente reutilizable para crear botones.

```jsx
function ButtonG({ onClick, text }) {
  return <button onClick={onClick}>{text}</button>;
}
```

### `StatisticLine`

Un componente que muestra una línea de estadística en la tabla de estadísticas.

```jsx
function StatisticLine({ text, res }) {
  return (
    <tr>
      <td>{text}:</td>
      <td>{res}</td>
    </tr>
  );
}
```

### `Estadisticas`

Un componente que muestra las estadísticas basadas en las opiniones recopiladas.

```jsx
function Estadisticas({ good, bad, neutral }) {
  const allResponse = good + neutral + bad;
  const promedio = (good - bad) / allResponse;
  const positivos = (good / allResponse) * 100 + "%";

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
```

¡Deja tu opinión y observa las estadísticas actualizarse en tiempo real!


