// main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './styles/globals.css'
import Hero from './Hero.jsx'
import Feat1 from './Feat1.jsx'
import Feat2 from './Feat2.jsx'
import Pricing from './Pricing.jsx'
import Complications from './Complications.jsx'
import Footer from './Footer.jsx'
import Press from './Press-kit.jsx'
import Privacy from './Privacy-policy.jsx'
import InstallNow from './Install.jsx'
import Faq from './Faq.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Hero />
        <Feat1 />
        <Feat2 />
        <Pricing />
        <Complications />
        <InstallNow />
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
    element: (<><Faq /><Footer /></>)
  },
  {
    path: "/privacy-policy",
    element: (<><Privacy /><Footer /></>)
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)