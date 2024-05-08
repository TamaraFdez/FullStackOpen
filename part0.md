graph LR;
    A[Usuario] --> B[Navegador];
    B --> C[Servidor];
    C --> B;
    B --> A;
