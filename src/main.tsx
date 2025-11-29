import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';

import { enableKittyCursor } from 'cats-are-love-cats-are-life';

enableKittyCursor({ animation: 'parabola', emoji: '🐈' });

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App />
	</StrictMode>
);
