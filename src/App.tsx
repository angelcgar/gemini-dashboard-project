import './App.css';
import WeeklyBitcoinChart from './components/charts/WeeklyBitcoinChart';

function App() {
	return (
		<div className="bg-gray-900 min-h-screen text-white font-sans">
			<header className="bg-gray-800 shadow-md p-4">
				<h1 className="text-3xl font-bold text-center text-green-400">
					Crypto Dashboard
				</h1>
			</header>
			<main className="container mx-auto p-4 sm:p-6 lg:p-8">
				<div className="grid grid-cols-1 gap-6">
					<WeeklyBitcoinChart />
					{/* Aquí irían los otros componentes del dashboard */}
					{/* <GlobalDataCard /> */}
					{/* <TopTenChangesBarChart /> */}
				</div>
			</main>
		</div>
	);
}

export default App;
