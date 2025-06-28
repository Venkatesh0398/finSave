import { createRoot } from 'react-dom/client'
import App from './App.tsx'
// import './index.css' // Removed because the file does not exist

createRoot(document.getElementById("root")!).render(<App />);
