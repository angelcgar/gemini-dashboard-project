import { lazy, Suspense } from 'react';

const WeeklyBitcoinChart = lazy(
	() => import('@/components/charts/WeeklyBitcoinChart'),
);

const BitcoinChartPage = () => {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
			<h2 className="text-2xl font-bold mb-4 text-yellow-400">
				Precio de Bitcoin (últimos 7 días)
			</h2>
			<Suspense fallback={<div>Cargando gráfico...</div>}>
				<WeeklyBitcoinChart />
			</Suspense>
		</div>
	);
};

export default BitcoinChartPage;
