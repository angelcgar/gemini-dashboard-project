# README.md

```text
    1 /src
    2 ├── api
    3 │   └── coingecko.js      # Configuración de Axios, URL base y funciones para llamar a la API.
    4 │
    5 ├── components
    6 │   ├── charts
    7 │   │   ├── WeeklyBitcoinChart.jsx   # Gráfico de líneas para el precio de Bitcoin.
    8 │   │   └── TopTenChangesBarChart.jsx  # Gráfico de barras para el top 10.
    9 │   │
   10 │   ├── layout
   11 │   │   ├── Header.jsx               # Cabecera del dashboard.
   12 │   │   └── DashboardGrid.jsx        # Layout principal usando CSS Grid o Flexbox.
   13 │   │
   14 │   ├── summary
   15 │   │   └── GlobalDataCard.jsx       # Tarjeta/resumen con datos globales.
   16 │   │
   17 │   └── shared
   18 │       ├── Card.jsx                 # Componente de tarjeta reutilizable para los gráficos.
   19 │       └── LoadingSpinner.jsx       # Indicador de carga.
   20 │
   21 ├── hooks
   22 │   └── useApi.js           # Hook personalizado para manejar el estado de la API (data, loading, error).
   23 │
   24 ├── App.jsx                 # Componente principal que ensambla el layout y los componentes.
   25 └── main.jsx                # Punto de entrada de la aplicación Vite.
```
