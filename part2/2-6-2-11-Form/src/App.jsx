import { useState,useEffect } from "react";
import { FilterContact } from "./components/Filter.jsx";
import { AddContact } from "./components/AddContact.jsx";
import { Contactos } from "./components/Contacts.jsx";
import axios from 'axios'
import "./App.css";



function App() {
  const [persons, setPersons] = useState([]);
  useEffect(() => {
    console.log('effect')
    axios
      .get('https://fullstackopen-4lxg--4001--34455753.local-credentialless.webcontainer.io/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])

  return (
    <div>
      <h1>Lista de Contactos</h1>
      <FilterContact persons={persons} />
      <AddContact setPersons={setPersons} persons={persons} />
      <Contactos persons={persons} />
    </div>
  );
}

export default App;
