import { motion, useAnimationFrame, useInView, useMotionValue, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import ProjectCard from "../components/ProjectCard";


function Projects({stacks}){
  const xPosition = useMotionValue(0);
  const x = useTransform(xPosition, (v)=> `${v}%`);
  const [isHover, setIsHover] = useState(false);

  const [isHoverFirstContainer, setisHoverFirstContainer] = useState(false);
  const [isHoverSecondContainer, setIsHoverSecondContainer] = useState(false);

  const containerProject = useRef(null);

  const inView = useInView(containerProject);



  useAnimationFrame((time, delta)=>{
    console.log(inView);

    if(!inView) return;

    const normalSpeed = -0.06;
    const slowSpeed = -0.03;

    const currentVelocity = isHover ? slowSpeed : normalSpeed;

    let moveBy = currentVelocity * (delta / 16);
    let nextX  = xPosition.get() + moveBy;

    if(nextX <= -50){
      nextX += 50;
    }

    xPosition.set(nextX);
  })

  const projects = [
    {
      number: "01",
      title: "PlastiCash",
      description: "PlastiCash is an IoT smart recycling ecosystem that rewards users for depositing plastic bottles. Collaborating with a hardware engineer, I architected the real-time cloud synchronization between the machine's ESP32 module and a Firebase backend. I designed and built two complete Flutter applications - a machine operating interface and a gamified consumer app where users can locate nearby stations via OpenStreetMap API, scan QR codes, track deposits, and redeem points to an e-wallet. The project successfully bridges hardware and software to turn eco-friendly habits into a seamless, tech-driven experience",
      toolkit: ["Flutter", "Firebase", "Dart", "Arduino", "ESP32"],
      sourceCode: "https://github.com/Eros628/PlastiCash_App",
      liveURL: ""
    }
  ]

    return(
      <div ref={containerProject} className="h-full w-full flex flex-col bg-deep-charcoal px-50">
          <div className="h-[70vh] w-full flex items-start flex-row py-10 border-b-solid border-b-1 border-dark-gray gap-10">
            <div className="flex flex-col h-full">
              <p className="text-terracota font-bold text-lg">SELECTED PROJECTS</p>
              <div className="flex flex-col gap-10">
                  <p className="text-cream  font-bold text-9xl">Learning by Building</p>
                  <p className="text-cream text-lg"> I believe the best way to master a technology is to build with it. 
                      This is a curated archive of my hands-on problem-solving, spanning IoT hardware, API integrations,
                      and modern web architectures.
                  </p>
                  <p className="mt-10">SCROLL TO EXPLORE</p>
              </div>
            </div>
            <div className="w-full h-full flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,var(--color-deep-charcoal)_5%,var(--color-deep-charcoal)_90%,transparent)]">
              <motion.div 
              className="w-max  flex flex-row"
              style={{x}}
              >
                <div className="flex flex-row gap-10 pr-10">
                    {[...Array(3)].map((_, index)=>(
                    <div onMouseEnter={()=>{
                          setIsHover(true);
                    }} 
                    onMouseLeave={()=>{
                      setIsHover(false)
                    }}
                    key={index} className="h-1/2 w-md bg-gray-500 rounded-md shrink-0"></div>
                  ))}
                </div>
                <div className="flex flex-row gap-10 pr-10">
                    {[...Array(3)].map((_, index)=>(
                    <div key={index} className="h-1/2 w-md bg-gray-500 rounded-md shrink-0"></div>
                  ))}
                </div>

              </motion.div>
            </div>
          </div>

          <ProjectCard projects={projects[0]} >
            <div className="flex flex-col items-center w-full  gap-5">
                  <motion.div onMouseEnter={
                    ()=>{
                      setisHoverFirstContainer(true);
                    }
                  } 
                    onMouseLeave={
                      ()=>{
                        setisHoverFirstContainer(false);
                      }
                    }
                  animate={{
                    background: isHoverFirstContainer? "radial-gradient(circle at center top, #2D4B35 0%, #131313 76%)": "radial-gradient(circle at center top, #424342 0%, #181818 76%)" ,
                    border: isHoverFirstContainer ? "1px solid #2D4B35" : " 1px solid transparent"
                  }}
                  className="flex flex-col w-full h-1/2 box-border  rounded-xl">
                    <div className="flex gap-2 items-center px-8 py-5">
                      <div className="h-[10px] w-[10px] rounded-full bg-dark-green"></div>
                      <p className="text-sm text-white"><span className="text-lightCharcoal">User app</span> &mdash; consumer experience</p>
                    </div>
                    <div className="flex justify-center items-center w-full  h-full relative">
                      <motion.div 
                      animate={{x: isHoverFirstContainer ? -70 : 0}}
                      transition={{ease: 'easeInOut', duration: 0.5}}
                      className="w-[200px] h-max left-30 absolute shadow-xl">
                        <img src="src/assets/imgs/plastiCash-project-home-ui.png" alt="PlastiCash Home Page UI" />
                      </motion.div>
                      <motion.div
                      animate={{y: isHoverFirstContainer ? 10 : 0}}
                      transition={{ease: 'easeInOut', duration: 0.5}}
                      className="w-[210px] -top-2 h-max absolute z-1 shadow-xl">
                        <img src="src/assets/imgs/plastiCash-project-start-ui.png" alt="PlastiCash Start Up UI" />
                      </motion.div>
                      <motion.div 
                      animate={{x: isHoverFirstContainer ? 70 : 0}}
                      transition={{ease: 'easeInOut', duration: 0.5}}
                      className="w-[200px] right-30 h-max absolute ">
                        <img  src="src/assets/imgs/plastiCash-project-user-ui.png " alt="PlastiCash User Page UI " />
                      </motion.div>
                    </div>
                  </motion.div>
                  <motion.div 
                  animate={{background: isHoverSecondContainer ? "linear-gradient(to right, #1c5c47, #16352a 70%)" : "linear-gradient(to right, #1e4a3a, #16352a 70%)", border: isHoverSecondContainer ? "1px solid #1c5c47" : " 1px solid transparent"}}
                  onMouseEnter={
                    ()=>{
                      setIsHoverSecondContainer(true);
                    }
                  } 
                  onMouseLeave={
                    ()=>{
                      setIsHoverSecondContainer(false);
                    }
                  }
                  className="w-full h-[200px] rounded-xl relative flex  overflow-hidden">
                    <div className="flex flex-col gap-7 px-8 py-5">
                      <div className="flex flex-row gap-2 items-center">
                        <div className="h-[10px] w-[10px] rounded-full bg-white"></div>
                        <p className="text-sm text-white font-thin"><span className="text-lightCharcoal">Machine App</span> &mdash; kiosk interface</p>
                      </div>
                      <div className="flex flex-col">
                        <p className="text-xl text-white font-bold">Bottle it up, Cash it out</p>
                        <p className="text-base text-white font-thin">The in-device interface running on the recycling kiosk itself</p>
                      </div>
                    </div>
                    <motion.div 
                    className="w-full h-max ">
                      <img src="src/assets/imgs/plastiCash-project-machine-start-ui.png" alt="PlastiCash Machine Count Bottle UI" />
                    </motion.div>
                  </motion.div>
              </div>
          </ProjectCard>
      </div>
    )
}

export default Projects;