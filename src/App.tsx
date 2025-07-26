import './App.css';
import WeeklyBitcoinChart from './components/charts/WeeklyBitcoinChart';

import { SidebarProvider, SidebarTrigger } from './components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';

function App() {
	return (
		<SidebarProvider>
			<AppSidebar />
			{/* <div className="bg-gray-900 min-h-screen text-white font-sans w-full"> */}
			{/* <header className="bg-gray-800 shadow-md p-4">
					<h1 className="text-3xl font-bold text-center text-green-400">
					Crypto Dashboard
					</h1>
					</header> */}
			<main className="bg-gray-900 min-h-screen text-white font-sans w-full">
				<SidebarTrigger />
				<div className="grid grid-cols-1 gap-6">
					<WeeklyBitcoinChart />
					{/* Aquí irían los otros componentes del dashboard */}
					{/* <GlobalDataCard /> */}
					{/* <TopTenChangesBarChart /> */}
				</div>
			</main>
			{/* </div> */}
		</SidebarProvider>
	);
}

export default App;
