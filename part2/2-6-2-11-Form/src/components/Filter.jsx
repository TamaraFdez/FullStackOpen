import { useState } from "react";

export function FilterContact({ persons }) {
    const [filtered, setFiltered] = useState("");
  
    const changeFilter = (e) => {
      e.preventDefault();
      const newfilterValue = e.target.filter.value.trim().toLowerCase();
      if (newfilterValue === "") {
        setFiltered([]);
      } else {
        const filtrado = persons.filter((person) =>
          person.name.toLowerCase().includes(newfilterValue)
        );
        setFiltered(filtrado);
      }
    };
  
    return (
      <section>
        <h2>Búsqueda de Contactos</h2>
        <form onSubmit={changeFilter}>
          Nombre: <input type="text" name="filter" id="filter" />
          <button>Buscar</button>
          <br />
          Resultado:
          {filtered.length === 0 ? (
            <p>No se han encontrado coincidencias</p>
          ) : (
            filtered.map((person) => (
              <p key={person.id}>
                Nombre: {person.name}, <br /> Teléfono: {person.number}
              </p>
            ))
          )}
        </form>
      </section>
    );
  }