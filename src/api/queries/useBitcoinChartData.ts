import { useQuery } from '@tanstack/react-query';

import { getMarketChart } from '../coingecko';

import type { CoinGeckoMarketChartResponse } from '@/types/coingecko.types';

/**
 * Custom hook to fetch Bitcoin market chart data from the CoinGecko API.
 *
 * This hook encapsulates the data fetching logic using @tanstack/react-query,
 * providing benefits like caching, automatic re-validation, and robust state handling (loading, error).
 *
 * @returns {object} The result of the useQuery hook, containing:
 *  - `data`: The market chart data for Bitcoin.
 *  - `isLoading`: A boolean indicating if the data is currently being fetched.
 *  - `isError`: A boolean indicating if an error occurred during fetching.
 *  - `error`: The error object if an error occurred.
 *  - `refetch`: A function to manually trigger a refetch of the data.
 */
export const useBitcoinChartData = () => {
  const queryResult = useQuery<CoinGeckoMarketChartResponse, Error>({
    queryKey: ['bitcoinMarketChart'],
    queryFn: () => getMarketChart('bitcoin'),
    staleTime: 1000 * 60 * 5, // 5 minutes: Data is considered fresh for this long
    refetchOnWindowFocus: false, // Optional: Prevents refetching on window focus
  });

  // The refetch function is available directly from the queryResult.
  // You can destructure it and use it in your component to manually trigger a refresh.
  // For example: const { data, refetch } = useBitcoinChartData();
  // Then, you can call `refetch()` in a button's onClick handler.

  return queryResult;
};
