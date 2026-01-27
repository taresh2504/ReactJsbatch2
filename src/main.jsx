import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import App from './Props.jsx'
// import App from "./Assignment1";
// import App from './Tailwind.jsx'
// import App from './Propscard.jsx'
// import App from './Navbar'
// import App from './Routing.jsx'
// import App from './Hook.jsx'
// import App from './Hook2'
// import App from './Form'
// import App from './Formvalidation'
// import App from './Useeffect'
// import App from './Datashow'
import App from './BookingForm'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
    <BrowserRouter>  
    <App/>
    </BrowserRouter>
 
)
