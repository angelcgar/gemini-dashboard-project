import { useQuery } from '@tanstack/react-query';
import { getTopCoins } from '../coingecko';

export const useTopCoins = () => {
  return useQuery({
    queryKey: ['topCoins'],
    queryFn: getTopCoins,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};