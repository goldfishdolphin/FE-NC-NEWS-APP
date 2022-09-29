import ReactDOM from 'react-dom/client';
import App from './App';
import { UserProvider } from './contexts/User';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<UserProvider>< App /></UserProvider>
);

