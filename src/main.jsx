import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App'
import MentionsLegales from './MentionsLegales'
import PolitiqueConf from './PolitiqueConf'
import Cookies from './Cookies'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<App />} />
				<Route path='/mentions-legales' element={<MentionsLegales />} />
				<Route path='/politique-confidentialite' element={<PolitiqueConf />} />
				<Route path='/cookies' element={<Cookies />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>
)
