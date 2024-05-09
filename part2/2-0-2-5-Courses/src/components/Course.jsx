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
  
  export function Course({ courses }) {
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