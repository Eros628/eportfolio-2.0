import { useEffect, useReducer, useState } from 'react'
import Hero from './sections/Hero'
import Header from './components/Header'
import About from './sections/About'
import Projects from './sections/Projects'
import Services from './sections/Services'
import { useRef } from 'react'
import { motion , useMotionValueEvent, useScroll, useTransform} from 'framer-motion'
import { AnimatePresence } from 'framer-motion'
import { FaFigma, FaHtml5, FaJs, FaNodeJs, FaPython, FaReact } from 'react-icons/fa'
import { BiLogoPostgresql } from "react-icons/bi";
import { FaCss, FaFlutter } from 'react-icons/fa6'
import { RiFirebaseFill, RiTailwindCssFill } from 'react-icons/ri'
import { SiMysql } from 'react-icons/si'



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
    },
    {
      name: "PostgresSQL",
      logo: <BiLogoPostgresql />
    }
  ]

  const container = useRef(null);
  const aboutContainer = useRef(null)


  const {scrollYProgress} = useScroll({
    target: container,
    offset: ["start start", "end start"]
  });

  const [opacity, setOpacity] = useState(1);


  const scale = useTransform(scrollYProgress, [0, 0.2, 0.5], [1, 0.9, 0.5] );

  const opacityScroll = useTransform(scrollYProgress, [0, 0.2, 0.5], [1, 1, 0]);
  const backgroundColor = useTransform(scrollYProgress, [0.1, 0.5], ["rgb(24, 24, 24)", "rgb(244, 243, 238)"])

  const widthImg = useTransform(scrollYProgress, [0, 0.5], ["600px", "550px"]);
  const height= useTransform(scrollYProgress, [0, 0.5], ["100vh" ,"0vh"] );
  const width= useTransform(scrollYProgress, [0, 0.5], ["100vw","40vw"] );
  const borderRadius = useTransform(scrollYProgress, [0, 0.2 ,0.5], ["0px", "50px", "100px"]);

  useMotionValueEvent(opacityScroll, "change", (latestvalue)=>{
    setOpacity(latestvalue);
  });

  return (
    <main className='flex flex-col  min-h-screen max-h-full  font-Familjen text-white overflow-x-clip'>
      <Header />
      <motion.div ref={container} className='h-[400vh] flex flex-col w-full items-center'>
        <div className={`sticky top-[60px] h-screen w-full justify-center`}>
            <motion.div 
            style={{ opacity, scale, height, width, borderRadius}}   className='top-0 mx-auto flex overflow-hidden justify-center items-center'>
              <Hero />
            </motion.div>
            <About stacks={stacks}/>
            <motion.div style={{width: widthImg}}  className="absolute w-[100px] h-auto mx-auto left-0 right-0 bottom-0">
              <img src="src/assets/imgs/picture-big-hero-section.png"alt="Eros Lucagbo Picture"/>
            </motion.div>
        </div>
       
      </motion.div>
      <Services />
      <Projects stacks={stacks}/>
    </main>
  )
}

export default App
