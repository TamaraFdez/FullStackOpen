# APP que muestra los Cursos

Este proyecto es una aplicación simple que muestra información sobre cursos de desarrollo de aplicaciones utilizando React y Node.js.

## Cómo funciona

La aplicación muestra una lista de cursos, cada uno con su nombre y una lista de partes que incluyen el nombre y la cantidad de ejercicios. La información se renderiza utilizando componentes de React.

## Componentes

### `Part`

El componente `Part` recibe una lista de partes como prop `parts` y renderiza cada parte individualmente.

```jsx
import React from 'react';

function Part({ parts }) {
  return (
    <div>
      {parts.map(part => (
        <div key={part.id}>
          <h2>{part.name}</h2>
          <p>Ejercicios: {part.exercises}</p>
        </div>
      ))}
    </div>
  );
}

export default Part;
```
### `Course`

El componente `Course` recibe una lista de cursos como prop `courses` y calcula el total de ejercicios de todos los cursos. Luego, renderiza cada curso individualmente utilizando el componente `Part` y muestra el total de ejercicios al final.

```jsx
import React from 'react';
import Part from './Part';

function Course({ courses }) {
  const totalExercises = courses.reduce((total, course) => {
    return total + course.parts.reduce((sum, part) => {
      return sum + part.exercises;
    }, 0);
  }, 0);

  return (
    <div>
      {courses.map(course => (
        <div key={course.id}>
          <h1>{course.name}</h1>
          <Part parts={course.parts} />
        </div>
      ))}
      <div>Total de Ejercicios: {totalExercises}</div>
    </div>
  );
}

export default Course;
```
Estos componentes son esenciales para la estructura de la aplicación, ya que organizan la información de los cursos y partes y la presentan de manera ordenada.

