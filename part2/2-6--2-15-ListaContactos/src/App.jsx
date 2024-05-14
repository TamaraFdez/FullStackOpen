import { useState,useEffect } from "react";
import { FilterContact } from "./components/Filter.jsx";
import { AddContact } from "./components/AddContact.jsx";
import { Contactos } from "./components/Contacts.jsx";
import  contactsService from "./services/contactsService.js"
import "./App.css";



function App() {
  const [persons, setPersons] = useState([]);
  useEffect(() => {
    console.log('effect')
    contactsService
      .getAll()
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])

  return (
    <div>
      <h1>Lista de Contactos</h1>
      <FilterContact persons={persons} setPersons={setPersons} />
      <AddContact setPersons={setPersons} persons={persons} />
      <Contactos persons={persons} setPersons={setPersons}  />
    </div>
  );
}

export default App;
