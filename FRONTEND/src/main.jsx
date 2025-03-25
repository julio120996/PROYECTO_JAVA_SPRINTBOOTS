import { GoogleOAuthProvider } from "@react-oauth/google";
import { createRoot } from 'react-dom/client';
import { AuthProvider } from "./hooks/user/AuthContext.jsx";

const clientId = "348879139983-63mdvf0rf4d1jbeiv4crtospltd5202a.apps.googleusercontent.com";


import App from './App.jsx';
import './index.css';


createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId={clientId}>
   <AuthProvider> {/* Envolver la app con AuthProvider */}
      <App />
    </AuthProvider>
</GoogleOAuthProvider>
)
