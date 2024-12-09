// main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './styles/globals.css'
import Hero from './Hero.jsx'
import Feat1 from './Feat1.jsx'
import Feat2 from './Feat2.jsx'
import Complications from './Complications.jsx'
import Footer from './Footer.jsx'
import Press from './Press-kit.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Hero />
        <Feat1 />
        <Feat2 />
        <Complications />
        <Footer />
      </>
    ),
  },
  {
    path: "/press-kit",
    element: (<><Press /><Footer /></>)
  },
  {
    path: "/faq", 
    element: (<><Footer /></>)
  },
  {
    path: "/privacy-policy",
    element: (<><Footer /></>)
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)