import React from 'react'
import {MenuIcon, XIcon} from '@heroicons/react/outline'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Support from './Support'
import AllInOne from './AllInOne'
import Pricing from './Pricing'
import Footer from './Footer'

function App() {
  return (
<>
  <Navbar />
  <Hero />
  <About />
  <Support />
  <AllInOne />
  <Pricing />
  <Footer />
</>
    )
}

export default App