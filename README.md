# S13_AburtoYojana · Dashboard Sabor Andino

Dashboard de gestión para un restaurante, desarrollado con **Angular** y **Angular Router** como Actividad Práctica Evaluada (S13 | AP7 | Control).

## Qué desarrollé

Elegí el **Sistema de Restaurante** y construí una aplicación con menú lateral fijo, encabezado y un área principal donde se cargan las vistas sin recargar la página. Cada vista es un componente independiente y usa datos ficticios que creé en un servicio.

### Rutas que implementé

| Ruta | Contenido |
| --- | --- |
| `/inicio` | Bienvenida y tarjetas KPI (platos, categorías, mesas ocupadas, pedidos pendientes y ventas del día) |
| `/platos` | Carta con categoría, descripción, precio y disponibilidad |
| `/categorias` | Categorías de la carta y cantidad de platos en cada una |
| `/mesas` | Estado del salón (libre, ocupada o reservada) y capacidad |
| `/pedidos` | Pedidos con mesa, platos, hora, total y estado |
| `/**` | Página 404 para rutas inexistentes |

### Requisitos técnicos que apliqué

- Rutas definidas en `app.routes.ts`, con redirección de la ruta vacía a `/inicio`.
- `RouterOutlet` para mostrar las vistas.
- `RouterLink` para navegar desde el menú.
- `RouterLinkActive` para resaltar la opción activa.
- Ruta comodín para URLs inexistentes.
- Componentes separados por vista y carpetas organizadas.
- Estilos CSS propios, con paleta y tipografía consistentes y diseño adaptable.

## Tecnologías

- Angular (componentes standalone)
- TypeScript
- HTML y CSS

## Estructura del proyecto

```
src/
├── main.ts
├── styles.css
└── app/
    ├── app.component.*      # Layout: menú, encabezado y router-outlet
    ├── app.config.ts
    ├── app.routes.ts        # Definición de rutas
    ├── models/              # Interfaces (Plato, Categoría, Mesa, Pedido)
    ├── services/            # Datos ficticios del restaurante
    └── pages/
        ├── inicio/
        ├── platos/
        ├── categorias/
        ├── mesas/
        ├── pedidos/
        └── no-encontrado/
```

