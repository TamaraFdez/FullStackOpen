sequenceDiagram
    Cliente->>+Servidor: Envia petición con nueva nota con Metodo POST Status: 302
    Servidor-->>-Cliente: Añade la nota al array y responde con Metodo GET con de nuevo con los archivos de la página con la nueva nota en el array. Status: 200
  

