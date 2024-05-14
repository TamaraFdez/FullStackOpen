import { useState } from "react";
import contactsService from "../services/contactsService";



export function FilterContact({ persons,setPersons }) {
    const [filtered, setFiltered] = useState("");
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);
  

  const deleteContact = (id, name) => {
    if(window.confirm(`Realmente quieres borrar el contacto: ${name}`)){
     contactsService
     .remove(id)
     .then(() => {
       setPersons(persons.filter(person => person.id !== id));
       setSuccess(`Contacto ${name} eliminado.`);
       setTimeout(() => setSuccess(null), 3000);
       setFiltered([]);
     })
     .catch(error => {
       setError(`Error al eliminar el contacto ${name}:`, error);
       setTimeout(() => setError(null), 3000);
     });
    }
     };
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
          {success && <p style={{ color: "green" }}>{success} </p>}
          {error && <p style={{ color: "red" }}>{error} </p>}
          {filtered.length === 0 ? (
            <p>No se han encontrado coincidencias</p>
           
          ) : (
            filtered.map((person) => (
              <div key={person.id}>
              <p>
               {person.name} Telf: {person.number}
              </p>
              <button onClick={() => deleteContact(person.id, person.name, setError, setSuccess)}>Eliminar</button>
            </div>
            ))
          )}
        </form>
      </section>
    );
  }