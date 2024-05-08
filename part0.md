sequenceDiagram
    participant Usuario
    participant Navegador
    participant Servidor

    Usuario -> Navegador: Escribe algo en el campo de texto
    Usuario -> Navegador: Clic en el botón "Guardar"
    Navegador -> Servidor: Petición HTTP POST con la nueva nota
    Servidor --> Navegador: Confirmación de recepción de la nota
    Navegador --> Usuario: Notificación de que la nota ha sido guardada exitosamente
