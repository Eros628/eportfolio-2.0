import { useEffect, useReducer, useState } from 'react'
import Hero from './sections/Hero'
import Header from './components/Header'
import About from './sections/About'
import Projects from './sections/Projects'
import { useRef } from 'react'
import { motion , useMotionValueEvent, useScroll, useTransform} from 'framer-motion'
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

  const container = useRef(null);


  const {scrollYProgress} = useScroll({
    target: container,
    offset: ["start start", "end start"]
  });

  const [opacity, setOpacity] = useState(1);


  const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.7] );

  const opacityScroll = useTransform(scrollYProgress, [0, 0.4, 0.8], [1, 1, 0]);

  const widthImg = useTransform(scrollYProgress, [0, 1], ["400px", "340px"]);
  const height= useTransform(scrollYProgress, [0, 1], ["100vh", "5vh"] );
  const width= useTransform(scrollYProgress, [0, 1], ["100vw", "1vw"] );
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["0px", "100px"]);

  useMotionValueEvent(opacityScroll, "change", (latestvalue)=>{
    setOpacity(latestvalue);
  });

  return (
    <main className='flex flex-col  min-h-screen max-h-full  font-Familjen text-white overflow-x-clip'>
      <Header />
      <motion.div ref={container} className='h-[600vh] flex flex-col w-full items-center'>
        <div className={`sticky top-[60px] h-screen w-full justify-center`}>
            <motion.div 
            style={{ opacity, scale, height, width, borderRadius}}   className='sticky top-0 mx-auto flex overflow-hidden justify-center items-center'>
              <Hero />
            </motion.div>
            <div className='sticky top-0 h-screen w-screen'>
               <About stacks={stacks}/>
            </div>
          
        </div>
        <motion.div style={{width: widthImg}}  className="fixed w-[100px] h-auto mx-auto bottom-0">
              <img src="src/assets/imgs/picture-big-hero-section.png"alt="Eros Lucagbo Picture"/>
        </motion.div>
      </motion.div>
    </main>
  )
}

export default App
