# Estructura de Estilos (SCSS) con ITCSS

Este proyecto utiliza una arquitectura de CSS escalable y mantenible llamada **ITCSS** (Inverted Triangle CSS). La idea principal es organizar los estilos desde reglas más genéricas y de bajo nivel hasta reglas más específicas y de alto nivel. Esto ayuda a gestionar la especificidad y a mantener el código CSS predecible.

La estructura de carpetas en `src/assets/scss` sigue las capas del triángulo invertido:

```
scss/
├── settings/
├── tools/
├── generic/
├── elements/
├── objects/
├── components/
├── trumps/
└── style.scss
```

## Capas de ITCSS

### 1. `settings`

Contiene todas las variables globales del proyecto. Aquí se definen colores, tipografías, espaciados, etc. No debería generar ningún CSS por sí mismo.

-   `_variables.scss`: Define la paleta de colores, tamaños, etc.
-   `_fonts.scss`: Define las familias de fuentes.
-   `_index.scss`: Importa y reenvía todas las configuraciones.

### 2. `tools`

Incluye mixins y funciones de Sass que se reutilizan en todo el proyecto. Al igual que `settings`, esta capa no genera CSS directamente.

-   `_index.scss`: Importa y reenvía todas las herramientas.

### 3. `generic`

Contiene estilos de reseteo y normalización. Aquí se eliminan los estilos por defecto de los navegadores para asegurar una base consistente.

-   `_reset.scss`: Reseteo de estilos (ej. box-sizing).
-   `_normalize.scss`: Estilos para normalizar el comportamiento entre navegadores.
-   `_index.scss`: Importa y reenvía todos los estilos genéricos.

### 4. `elements`

Estilos para las etiquetas HTML básicas sin clases (ej. `body`, `h1`, `a`, `p`). Son los estilos por defecto para los elementos del DOM.

-   `_scaffolding.scss`: Estilos base para `html` y `body`.
-   `_typography.scss`: Estilos para encabezados, párrafos, etc.
-   `_index.scss`: Importa y reenvía todos los estilos de elementos.

### 5. `objects`

Define patrones de diseño y estructuras no decorativas, como el sistema de grid, contenedores, wrappers, etc. Suelen ser clases reutilizables.

-   `_index.scss`: Importa y reenvía todos los objetos.

### 6. `components`

Contiene los componentes de la interfaz de usuario. Cada componente tiene su propio archivo SCSS, lo que facilita su mantenimiento.

-   `buttons/_ButtonPrimary.scss`: Estilos para el componente de botón primario.
-   `_index.scss`: Importa y reenvía todos los componentes.

### 7. `trumps`

La capa de mayor especificidad. Contiene "utility classes" o "helper classes" que sobrescriben cualquier otro estilo. Se usan para aplicar estilos específicos de forma rápida (ej. `.text-center`, `.margin-top-large`).

-   `_index.scss`: Importa y reenvía todas las clases de "trumps".

## Archivo Principal: `style.scss`

Este es el punto de entrada principal que importa todas las capas en el orden correcto. El orden es crucial para que la cascada de CSS funcione como se espera.

```scss
@use 'settings' as *;
@use 'tools' as *;
@use 'generic' as *;
@use 'elements' as *;
@use 'objects' as *;
@use 'components' as *;
@use 'trumps' as *;
```

## Uso de `_index.scss`

Cada carpeta de capa contiene un archivo `_index.scss`. Este archivo se encarga de cargar todos los parciales de su directorio usando `@forward`. Esto nos permite importar una carpeta entera con una sola línea (`@use 'components'`), manteniendo el archivo principal limpio y organizado.
