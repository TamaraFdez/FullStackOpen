sequenceDiagram
Usuario ->>+Navegador: Entra en la página
Navegador->>+Servidor: Pide datos al servidor Metodo GET
 Servidor-->>-Navegador: Responde con los archivos de la página Metodo GET
 Navegador ->>+ Usuario: Muestra la página
 Usuario ->>+Navegador: Escribe en el input text y Envia por el boton en modo Sumbit.
    Navegador->>+Servidor: Envia petición con nueva nota con Metodo POST. Status 302
    Servidor-->>-Navegador: Añade la nota al array y responde con Metodo GET con de nuevo con los archivos de la página. Status 200
    Navegador ->>+ Usuario: Muestra la página con la nueva nota
  

