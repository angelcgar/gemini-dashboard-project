import { useQuery } from '@tanstack/react-query';
import { getMarketChart } from '../coingecko';

export const useMarketChart = (coinId: string, days: number) => {
  return useQuery({
    queryKey: ['marketChart', coinId, days],
    queryFn: () => getMarketChart(coinId, days),
    staleTime: 1000 * 60 * 5, // 5 minutes
    enabled: !!coinId, // Only run the query if a coinId is provided
  });
};