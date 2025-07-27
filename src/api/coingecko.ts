import axios from 'axios';
import type { CoinGeckoMarket, CoinGeckoMarketChartResponse } from '../types/coingecko.types';

// Variables para la configuración de la API
const API_BASE_URL = 'https://api.coingecko.com/api/v3';
const API_KEY = import.meta.env.VITE_COINGECKO_API_KEY || null; // Preparado para el futuro

// Creamos una instancia de Axios para no repetir la URL base
const apiClient = axios.create({
	baseURL: API_BASE_URL,
	headers: {
		'Content-Type': 'application/json',
		// Si se necesitara una API Key, se añadiría aquí:
		'x-cg-demo-api-key': API_KEY,
	},
});

/**
 * Obtiene los datos históricos de una moneda para un gráfico.
 * @param {string} coinId - El ID de la moneda (ej. "bitcoin").
 * @param {number} days - El número de días a consultar.
 * @returns {Promise<CoinGeckoMarketChartResponse>}
 */
export const getMarketChart = async (
    coinId: string = 'bitcoin',
    days: number = 7
): Promise<CoinGeckoMarketChartResponse> => {
    try {
        const response = await apiClient.get<CoinGeckoMarketChartResponse>(`/coins/${coinId}/market_chart`, {
            params: {
                vs_currency: 'usd',
                days: days,
            },
        });
        return response.data;
    } catch (error) {
        console.error(`Error fetching market chart for ${coinId}:`, error);
        throw error;
    }
};

/**
 * Fetches the top 10 cryptocurrencies by market capitalization.
 * @returns A promise that resolves with a list of the top 10 coins.
 */
export const getTopCoins = async (): Promise<CoinGeckoMarket[]> => {
    try {
        const response = await apiClient.get<CoinGeckoMarket[]>('/coins/markets', {
            params: {
                vs_currency: 'usd',
                order: 'market_cap_desc',
                per_page: 10,
                page: 1,
                sparkline: false,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching top coins:', error);
        throw error;
    }
};
