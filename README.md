# Pizzería Mamma Mia!

Hito 5 de proyecto desarrollado para mostrar conocimientos de desarrollo con React.

## Tecnologías Empleadas

- React
- CSS & Bootstrap
- JavaScript

## Instalación

Instrucciones para instalar y configurar el proyecto:

1. Clonar repositorio:

```bash
git clone https://github.com/aepenalver/pizzeria-mamma-mia-h5.git
```

2. Acceder al directorio:

```bash
cd pizzeria-mamma-mia-h5
```

3. Instalar las dependencias:

```bash
npm install
```

4. Uso (modo desarrollo):

```bash
npm run dev
```

- La aplicación debería estar visible desde el navegador en "http://localhost:5173/" para lo cual <u>**ya debe haberse levantado el servidor backend**</u>.

⚠️ En caso de no contar con el backend:

1. Descargarlo desde el siguiente link "[Backend](https://we.tl/t-vU9qqqOnqo)"(Peso de archivo descargable: <span style="color: green">23 KB</span>). <span style="color: yellow">*Este link es de carácter temporal y estará disponible sólo hasta el* <span style="color: red;">**01/10/2025**</span>*, luego de esta fecha se debe solicitar nuevo link para descarga*</span>.
2. Descomprimir archivo descargado
3. Abrir el directorio en terminal
4. Instalar dependencias:
   ```
   npm install
   ```
5. Levantar servidor:

   ```bash
   npm run start
   ```

- El backend debería quedar escuchando en el puerto indicado en su configuración, por ejemplo http://localhost:5000.

## Estructura del proyecto

```bash
.
├── index.html          # Plantilla HTML principal
├── package.json        # Configuración del proyecto y dependencias
├── public/             # Archivos estáticos accesibles públicamente
└── src/                # Código fuente de la aplicación
   ├── App.jsx          # Componente principal de la app
   ├── App.css          # Estilos específicos de App.jsx
   ├── main.jsx         # Entrada de la app, monta App en index.html
   ├── index.css        # Estilos globales de la aplicación
   ├── components/      # Componentes reutilizables
   ├── assets/          # Recursos (imágenes, íconos, fuentes)
   │   └── img/         # Imágenes de la aplicación
   └── utils/           # Funciones auxiliares o helpers
```
