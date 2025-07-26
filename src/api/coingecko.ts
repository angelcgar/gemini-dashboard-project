import axios from 'axios';

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
 * @returns {Promise<object>}
 */
export const getMarketChart = async (coinId: string = 'bitcoin', days: number = 7): Promise<object> => {
	try {
		const response = await apiClient.get(`/coins/${coinId}/market_chart`, {
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
