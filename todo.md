# TODO para el proyecto de dashboard de criptomonedas

## Tareas pendientes

- [ ] Definir los tipos de los datos que se recibirán de la API de CoinGecko.
- [ ] Implementar un sistema de manejo de errores para las llamadas a la API.
- [ ] Añadir una libreria de componentes UI para mejora el diseño del dashboard.

## Ideas para mejorar el dashboard

1. Manejo de Estado Avanzado: Para una aplicación más compleja con múltiples llamadas a la API, considera usar React Query
    - [ ] (@tanstack/react-query) o SWR. Estas librerías simplifican el cacheo de datos, la revalidación automática y el manejo de estados de carga/error de forma mucho más robusta.


2. Interactividad Mejorada:
    - [ ] Haz que la tabla del top 10 sea interactiva. Al hacer clic en una fila, el gráfico principal podría actualizarse para mostrar la evolución de esa moneda en lugar de Bitcoin.
    - [ ] Añade selectores de rango de tiempo (7d, 30d, 90d, 1y) para los gráficos.


3. Visualizaciones Adicionales:
    - [ ] Un gráfico de tarta (Pie Chart) con Recharts para mostrar la dominancia de las 10 principales criptomonedas por capitalización de mercado.
    - [ ] Una tabla de datos completa y ordenable con los datos de /coins/markets, mostrando precio, cambio 24h, volumen y el gráfico sparkline en miniatura.


4. Optimización y Rendimiento:
    - [ ] Usa React.memo para evitar re-renderizados innecesarios de componentes pesados como los gráficos.
    - [ ] Implementa virtualización para la tabla si planeas mostrar más de 100 monedas, usando librerías como TanStack Table
      con TanStack Virtual.


5. Manejo de Errores y UX:
    - [ ] Muestra "esqueletos" (skeletons) de carga en lugar de un simple texto "Cargando..." para una mejor experiencia de
      usuario.
    - [ ] Implementa un sistema de notificaciones para mostrar errores de la API de forma no intrusiva.


6. Pruebas (Testing): Añade pruebas unitarias y de integración con Vitest y React Testing Library para asegurar que los
   componentes y la lógica de datos funcionan como se espera.
