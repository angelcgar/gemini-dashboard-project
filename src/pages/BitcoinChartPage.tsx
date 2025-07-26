import React from 'react';

const BitcoinChartPage = React.lazy(
	() => import('../components/charts/WeeklyBitcoinChart'),
);

const BitcoinChartPageWrapper = () => {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
			<h2 className="text-2xl font-bold mb-4 text-yellow-400">
				Precio de Bitcoin (últimos 7 días)
			</h2>
			<React.Suspense fallback={<div>Cargando gráfico...</div>}>
				<BitcoinChartPage />
			</React.Suspense>
		</div>
	);
};

export default BitcoinChartPageWrapper;
