# Curso de Desarrollo de Aplicaciones con React y Node.js

Este proyecto es una aplicación simple que muestra información sobre cursos de desarrollo de aplicaciones utilizando React y Node.js.

## Cómo funciona

La aplicación muestra una lista de cursos, cada uno con su nombre y una lista de partes que incluyen el nombre y la cantidad de ejercicios. La información se renderiza utilizando componentes de React.

## Componentes

### `Course`

Un componente que muestra un curso, incluyendo su nombre y las partes del curso.

```jsx
import { Course } from './components/Course.jsx';

function App() {
  // Define la lista de cursos
  const courses = [
    // Lista de cursos...
  ];

  // Renderiza el componente Course con la lista de cursos
  return <Course courses={courses} />;
}

export default App;

