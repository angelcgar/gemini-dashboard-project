// Tipos para la respuesta de la API de CoinGecko
export interface CoinGeckoMarketChartResponse {
    prices:        Array<number[]>;
    market_caps:   Array<number[]>;
    total_volumes: Array<number[]>;
}
