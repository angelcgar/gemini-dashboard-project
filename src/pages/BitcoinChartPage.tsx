import { lazy, Suspense } from 'react';
import { useBitcoinChartData } from '@/api/queries/useBitcoinChartData';
import { Button } from '@/components/ui/button';

const WeeklyBitcoinChart = lazy(
	() => import('@/components/charts/WeeklyBitcoinChart'),
);

const BitcoinChartPage = () => {
	const { data, isLoading, isError, error, refetch } = useBitcoinChartData();

	return (
		<div className="flex flex-col items-center justify-center min-h-screen p-4">
			<div className="flex justify-between w-full max-w-4xl mb-4">
				<h2 className="text-2xl font-bold text-yellow-400">
					Precio de Bitcoin (últimos 7 días)
				</h2>
				<Button onClick={() => refetch()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
					Recargar datos
				</Button>
			</div>

			{isLoading && <div className="text-white">Cargando datos del gráfico...</div>}
			{isError && (
				<div className="text-red-500">
					Error al cargar los datos: {error?.message || 'Error desconocido'}
				</div>
			)}

			{data && (
				<Suspense fallback={<div className="text-white">Cargando gráfico...</div>}>
					<WeeklyBitcoinChart data={data} />
				</Suspense>
			)}
		</div>
	);
};

export default BitcoinChartPage;
