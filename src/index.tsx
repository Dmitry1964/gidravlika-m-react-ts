import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '@/app/app';
import './styles/styles.scss';

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// )
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);