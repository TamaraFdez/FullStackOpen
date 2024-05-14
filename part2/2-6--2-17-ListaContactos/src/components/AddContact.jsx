import { useState,useEffect } from "react";
import contactsService from "../services/contactsService";

export function AddContact({ persons, setPersons }) {
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null)

    useEffect(() => {
      if (success) {
        const timer = setTimeout(() => setSuccess(null), 3000);
        return () => clearTimeout(timer); 
      }
    }, [success]);

    const handleSubmitForm = (e) => {
      e.preventDefault();
      const newNameValue = e.target.name.value.trim();
      const newTelValue = e.target.tel.value.trim();
  
      const existingPerson = persons.find((person) => person.name.toLowerCase() === newNameValue.toLowerCase());
      const existingTel = persons.some((person) => person.number === newTelValue);
  
      if(newNameValue === "") {
        setError("El nombre no puede estar vacío");
      } else if (newTelValue === "") {
        setError("El número no puede estar vacío"); 
    
      } else if (existingPerson) {
        if(window.confirm(`El Contacto ya existe. ¿Desea Cambiar el número?`)){
          const updatedContact = { ...existingPerson, number: newTelValue };
          contactsService
            .update(existingPerson.id, updatedContact)
            .then((response) => {
              setPersons(persons.map(person => person.id !== existingPerson.id ? person : response.data));
              setSuccess(`Número de ${newNameValue} actualizado.`);
              setError(null);
              e.target.name.value = "";
              e.target.tel.value = "";
            })
            .catch((error) => {
              console.error(error);
              setError("Error al actualizar el contacto.");
            });
        } else {
          setError("No se ha podido efectuar el cambio de número.");
        }
      } else if (existingTel) {
        setError("El número ya está en la lista");
      } else {
        setError(null);
        const newContact ={
          name: newNameValue,
          number: newTelValue
        };

        contactsService
        .create(newContact)
        .then(response => {
          console.log(response)
          setPersons([...persons, response.data]);
          setSuccess("Nuevo contacto añadido.");
          e.target.name.value = "";
          e.target.tel.value = "";
          setTimeout(() => setSuccess(null), 3000);
        })
        .catch(error => {
          console.error(error)
          setError("Error al añadir el contacto.");
        });
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
          {success && <p style={{ color: "green" }}>{success} </p>}
          {error && <p style={{ color: "red" }}>{error} </p>}
        </form>
      </section>
    );
  }