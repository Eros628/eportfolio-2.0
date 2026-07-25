import { useState } from 'react'
import Hero from './sections/Hero'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='flex flex-col min-h-screen max-h-full bg-red font-Familjen text-white'>
      <Header />
      <Hero />
      <div className='flex flex-col h-20 w-full bg-charcoal'>

      </div>
    </main>
  )
}

export default App
