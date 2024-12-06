import { createRoot } from 'react-dom/client';
import App from './src/App.js';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);