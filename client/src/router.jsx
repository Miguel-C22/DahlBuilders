import { createBrowserRouter } from "react-router-dom";
import App from "./App"
import About from './routes/About';
import Contact from './routes/Contact';
import Gallery from "./routes/Gallery";
import Roofing from "./routes/Roofing";

export const router = createBrowserRouter([
    {path: "/", element: <App/>},
    {path: "/about", element: <About/>},
    {path: "/contact", element: <Contact/>},
    {path: "/roofing", element: <Roofing/>},
    {path: "/gallery", element: <Gallery/>},
  ])