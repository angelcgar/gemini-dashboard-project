import { useState, useEffect } from 'react';
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from 'recharts';
import { getMarketChart } from '../../api/coingecko';

interface CardProps {
	children: React.ReactNode;
	title: string;
}

// Componente de tarjeta para envolver el gráfico
const Card = ({ children, title }: CardProps) => (
	<div className="bg-gray-800 p-3 w-full rounded-lg shadow-lg">
		<h2 className="text-xl font-bold mb-4 text-gray-200">{title}</h2>
		{children}
	</div>
);

const WeeklyBitcoinChart = () => {
	const [chartData, setChartData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);
				const data = await getMarketChart('bitcoin', 7);

				// Formateamos los datos para que Recharts los entienda
				const formattedData = data.prices.map((pricePoint) => ({
					date: new Date(pricePoint[0]).toLocaleDateString(),
					price: pricePoint[1].toFixed(2),
				}));

				setChartData(formattedData);
				setError(null);
			} catch (err) {
				setError('No se pudieron cargar los datos del gráfico.');
				console.error(err);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	if (loading) {
		return <div className="text-center p-10">Cargando gráfico...</div>;
	}

	if (error) {
		return <div className="text-center p-10 text-red-500">{error}</div>;
	}

	return (
		<Card title="Evolución del Precio de Bitcoin (Últimos 7 días)">
			<ResponsiveContainer width="100%" height={400}>
				<LineChart
					data={chartData}
					margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
				>
					<CartesianGrid strokeDasharray="3 3" stroke="#4A5568" />
					<XAxis dataKey="date" stroke="#A0AEC0" />
					<YAxis
						stroke="#A0AEC0"
						tickFormatter={(value) => `$${Number(value).toLocaleString()}`}
					/>
					<Tooltip
						contentStyle={{
							backgroundColor: '#1A202C',
							border: '1px solid #4A5568',
						}}
						labelStyle={{ color: '#E2E8F0' }}
					/>
					<Legend wrapperStyle={{ color: '#E2E8F0' }} />
					<Line
						type="monotone"
						dataKey="price"
						name="Precio (USD)"
						stroke="#48BB78"
						strokeWidth={2}
						dot={false}
					/>
				</LineChart>
			</ResponsiveContainer>
		</Card>
	);
};

export default WeeklyBitcoinChart;
