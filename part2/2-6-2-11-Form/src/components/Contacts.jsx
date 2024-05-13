export function Contactos({ persons }) {
    return (
      <section>
        <h2>Contactos</h2>
        <div>
          {persons.map((person) => (
            <p key={person.id}>
              Nombre: {person.name}, <br /> Teléfono: {person.number}
            </p>
          ))}
        </div>
      </section>
    );
  }