import { useState } from "react";
import contactsService from "../services/contactsService";

export function Contactos({ persons, setPersons }) {
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
  })
  .catch(error => {
    setError(`Error al eliminar el contacto ${name}:`, error);
    setTimeout(() => setError(null), 3000);
  });
 }
  };

  return (
    <section>
      <h2>Contactos</h2>
      {success && <p style={{ color: "green" }}>{success} </p>}
          {error && <p style={{ color: "red" }}>{error} </p>}
      <div>
        {persons.map((person) => (
          <div key={person.id}>
            <p>
             {person.name} Telf: {person.number}
            </p>
            <button onClick={() => deleteContact(person.id, person.name)}>Eliminar</button>
          </div>
        ))}
      </div>
    </section>
  );
}