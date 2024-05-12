import { useState } from "react";
import { FilterContact } from "./components/Filter.jsx";
import { AddContact } from "./components/AddContact.jsx";
import { Contactos } from "./components/Contacts.jsx";
import "./App.css";



function App() {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);

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
