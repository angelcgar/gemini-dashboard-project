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
import { CoinGeckoMarketChartResponse } from '@/types/coingecko.types';

interface DynamicLineChartProps {
	data: CoinGeckoMarketChartResponse;
}

const DynamicLineChart = ({ data }: DynamicLineChartProps) => {
	const formattedData = data.prices.map((pricePoint) => ({
		date: new Date(pricePoint[0]).toLocaleDateString(),
		price: pricePoint[1],
	}));

	return (
		<ResponsiveContainer width="100%" height="100%">
			<LineChart
				data={formattedData}
				margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
			>
				<CartesianGrid strokeDasharray="3 3" stroke="#4A5568" />
				<XAxis dataKey="date" stroke="#A0AEC0" />
				<YAxis stroke="#A0AEC0" tickFormatter={(value) => `$${Number(value).toLocaleString()}`} />
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
	);
};

export default DynamicLineChart;