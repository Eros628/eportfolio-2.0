import { useState } from 'react'
import Hero from './sections/Hero'
import Header from './components/Header'
import About from './sections/About'
import Projects from './sections/Projects'
import { motion } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'
import { FaFigma, FaHtml5, FaJs, FaNodeJs, FaPython, FaReact } from 'react-icons/fa'
import { FaCss, FaFlutter } from 'react-icons/fa6'
import { RiFirebaseFill, RiTailwindCssFill } from 'react-icons/ri'
import { SiMysql } from 'react-icons/si'
import Services from './sections/Services'

function App() {
  const stacks = [
    {
      name: "HTML",
      logo: <FaHtml5/>
    },
    {
      name: "CSS",
      logo: <FaCss />
    },
    {
      name: "Javascript",
      logo: <FaJs/>
    },
    {
      name: "React",
      logo: <FaReact/>
    },
    {
      name: "ExpressJS",
      logo: <FaNodeJs />
    },
    {
      name: "Tailwind",
      logo: <RiTailwindCssFill />
    },
    {
      name: "Mysql",
      logo: <SiMysql />
    },
    {
      name: "Python",
      logo: <FaPython />
    },
    {
      name: "Flutter",
      logo: <FaFlutter/>
    },
    {
      name: "Figma",
      logo: <FaFigma />
    },
    {
      name: "Firebase",
      logo: <RiFirebaseFill/>
    }
  ]

  return (
    <main className='flex flex-col  min-h-screen max-h-full bg-red font-Familjen text-white  overflow-x-clip'>
      <Header />
      <Hero />
      <div className='flex flex-col justify-center h-20 w-full bg-charcoal overflow-x-hidden'>

          <motion.div 
            initial={{opacity: 0, y:-10}}
            whileInView={{opacity:1, y:0}}
            viewport={{
              once: true,
              amount: 0.3
            }}
            transition={{ease:'easeIn', duration: 0.5}}
            className='w-max flex'>

              <motion.div 
                animate={{x: ["0%", "-50%"]}}
                transition={{repeat: Infinity, ease: "linear", duration: 20, delay: 0.5}}
                className=' flex w-max'>
                <div className='flex gap-20 pr-20'>
                  {
                  stacks.map((item, index)=>
                  (
                    <p className='text-lightCharcoal text-sm whitespace-nowrap' key={index}>{item.name}</p>
                  ))
                }
                </div>
                <div className='flex gap-20 pr-20'>
                  {
                  stacks.map((item, index)=>
                  (
                    <p className='text-lightCharcoal text-sm whitespace-nowrap' key={index}>{item.name}</p>
                  ))
                }
                </div>
            </motion.div>
          </motion.div>   
      </div>
      <About stacks={stacks} />
      <Services />
      <Projects/>
    </main>
  )
}

export default App
