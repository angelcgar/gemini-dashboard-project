import { useState } from 'react';
import { useTopCoins } from '@/api/queries/useTopCoins';
import { useMarketChart } from '@/api/queries/useMarketChart';
import { CoinGeckoMarket } from '@/types/coingecko.types';
import { Button } from '@/components/ui/button';
import DynamicLineChart from '@/components/charts/DynamicLineChart';

const timeRanges = [
    { label: '7d', days: 7 },
    { label: '30d', days: 30 },
    { label: '90d', days: 90 },
    { label: '1y', days: 365 },
];

const TopCoinsPage = () => {
    const [selectedCoin, setSelectedCoin] = useState<CoinGeckoMarket | null>(null);
    const [days, setDays] = useState(7);

    const { data: topCoins, isLoading: isLoadingTopCoins, isError: isErrorTopCoins } = useTopCoins();
    const { data: chartData, isLoading: isLoadingChart, isError: isErrorChart } = useMarketChart(selectedCoin?.id || '', days);

    const handleRowClick = (coin: CoinGeckoMarket) => {
        setSelectedCoin(coin);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Mejores Monedas del Mercado</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-1">
                    <h2 className="text-xl font-semibold mb-2">Top 10 Criptomonedas</h2>
                    {isLoadingTopCoins && <p>Cargando monedas...</p>}
                    {isErrorTopCoins && <p className="text-red-500">Error al cargar las monedas.</p>}
                    {topCoins && (
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-gray-800 rounded-lg">
                                <thead>
                                    <tr>
                                        <th className="p-2 text-left">Nombre</th>
                                        <th className="p-2 text-left">Precio</th>
                                        <th className="p-2 text-left">Cambio 24h</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {topCoins.map((coin) => (
                                        <tr key={coin.id} onClick={() => handleRowClick(coin)} className="cursor-pointer hover:bg-gray-700">
                                            <td className="p-2 flex items-center">
                                                <img src={coin.image} alt={coin.name} className="w-6 h-6 mr-2"/>
                                                {coin.name}
                                            </td>
                                            <td className="p-2">${coin.current_price.toLocaleString()}</td>
                                            <td className={`p-2 ${coin.price_change_percentage_24h > 0 ? 'text-green-500' : 'text-red-500'}`}>
                                                {coin.price_change_percentage_24h.toFixed(2)}%
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>

                <div className="md:col-span-2">
                    <h2 className="text-xl font-semibold mb-2">
                        {selectedCoin ? `Gráfico de ${selectedCoin.name}` : 'Selecciona una moneda'}
                    </h2>
                    {selectedCoin && (
                        <div className="flex justify-center mb-4">
                            {timeRanges.map(range => (
                                <Button key={range.label} onClick={() => setDays(range.days)} variant={days === range.days ? "secondary" : "ghost"}>
                                    {range.label}
                                </Button>
                            ))}
                        </div>
                    )}
                    <div className="h-96 bg-gray-800 rounded-lg p-4">
                        {isLoadingChart && <p>Cargando gráfico...</p>}
                        {isErrorChart && <p className="text-red-500">Error al cargar el gráfico.</p>}
                        {chartData && <DynamicLineChart data={chartData} />}
                        {!selectedCoin && <div className="flex items-center justify-center h-full"><p>Haz clic en una moneda para ver su gráfico.</p></div>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopCoinsPage;