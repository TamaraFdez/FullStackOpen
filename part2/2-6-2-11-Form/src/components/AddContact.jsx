import { useState } from "react";
export function AddContact({ persons, setPersons }) {
    const [error, setError] = useState(null);
    const handleSubmitForm = (e) => {
      e.preventDefault();
      const newNameValue = e.target.name.value.trim();
      const newTelValue = e.target.tel.value.trim();
  
      const existingName = persons.some((person) => person.name === newNameValue);
      const existingTel = persons.some((person) => person.number === newTelValue);
  
      if (existingName) {
        setError(`${newNameValue} ya está en la lista de teléfonos`);
      } else if (newNameValue === "") {
        setError("El nombre y/o el numero no pueden estar vacíos");
      } else if (existingTel) {
        setError("El número ya está en la lista");
      } else {
        setError(null);
        setPersons([...persons, { name: newNameValue, number: newTelValue }]);
      }
    };
    return (
      <section>
        <h3>Añadir Nuevo Contacto</h3>
        <form onSubmit={handleSubmitForm}>
          <div>
            <label>
              Name: <input type="text" maxLength="20" name="name" id="name" />
            </label>
            <br />
            <label>
              Number: <input type="tel" name="tel" id="tel" />
            </label>
          </div>
          <div>
            <button type="submit">Añadir</button>
          </div>
          {error && <p style={{ color: "red" }}>{error} </p>}
        </form>
      </section>
    );
  }