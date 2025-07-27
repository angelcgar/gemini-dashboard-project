import './App.css';
import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { SidebarProvider, SidebarTrigger } from './components/ui/sidebar';
import { AppSidebar } from '@/components/app-sidebar';

// Páginas
import HomePage from './pages/HomePage';
const BitcoinChartPage = lazy(() => import('./pages/BitcoinChartPage'));
const TopCoinsPage = lazy(() => import('./pages/TopCoinsPage'));

function App() {
	return (
		<SidebarProvider>
			<Router>
				{/* Sidebar */}
				<AppSidebar />
				<main className="bg-gray-900 min-h-screen text-white font-sans w-full">
					{/* Icono del sidebar */}
					<SidebarTrigger />

					{/* Mis rutas */}
					{/* TODO: usar un skeleton */}
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route
							path="/bitcoin"
							element={
								<Suspense fallback={<div className="p-8">Cargando...</div>}>
									<BitcoinChartPage />
								</Suspense>
							}
						/>
						<Route
							path="/mejores-monedas"
							element={
								<Suspense fallback={<div className="p-8">Cargando...</div>}>
									<TopCoinsPage />
								</Suspense>
							}
						/>
					</Routes>
				</main>
			</Router>
		</SidebarProvider>
	);
}

export default App;
