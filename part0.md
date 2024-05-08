sequenceDiagram
    participant User
    participant Browser
    participant Server

    User -> Browser: Escribe algo en el campo de texto
    User -> Browser: Clic en el botón "Save"
    Browser -> Server: Petición HTTP POST con la nueva nota
    Server --> Browser: Confirmación de recepción de la nota
    Browser --> User: Notificación de que la nota ha sido guardada exitosamente

