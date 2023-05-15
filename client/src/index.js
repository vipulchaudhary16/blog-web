import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import { AuthProvider } from './contexts/auth.context';
import { BlogProvider } from './contexts/blog.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<AuthProvider>
				<BlogProvider>
					<App />
				</BlogProvider>
			</AuthProvider>
		</BrowserRouter>
	</React.StrictMode>
);
