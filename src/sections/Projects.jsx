import { motion, useAnimationFrame, useInView, useMotionValue, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { FiGithub } from "react-icons/fi";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";


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

          <div className="flex flex-col pt-20">
            <div className="flex flex-row w-full h-screen gap-20">
                <div className="flex w-full flex-col gap-10">
                  <div className="flex flex-row items-center gap-1">
                    <p className="text-rust font-Antic text-bold text-5xl italic">01</p>
                    <div className="h-full w-full flex  pt-7"><hr className="w-1/2 border-dark-gray"/></div>
                    
                  </div>
                  <p className="text-white font-bold text-7xl">PlastiCash</p>
                  <p className="text-white-200 text-lg font-Instrument-Sans">PlastiCash is an IoT smart recycling ecosystem that rewards users for depositing plastic bottles. 
                    As the full-stack developer, I connected physical Arduino hardware to the cloud in real-time using an ESP32 module and a Firebase backend. 
                    I designed and built two complete Flutter applications—a machine operating interface and a gamified consumer app where users can 
                    locate nearby stations via OpenStreetMap, scan QR codes, track deposits, and redeem points to an e-wallet. 
                    The project successfully bridges hardware and software to turn eco-friendly habits into a seamless, tech-driven experience.
                  </p>
                  <div className="flex flex-col gap-5">
                    <p className=" text-lightCharcoal">TOOLKIT</p>
                    <div className="flex flex-row gap-5">
                      <div className="py-2 px-5 bg-dark-gray border-1 border-solid border-lightCharcoal rounded-full"><p>Flutter</p></div>
                      <div className="py-2 px-5  bg-dark-gray border-1 border-solid border-lightCharcoal rounded-full"><p>Dart</p></div>
                      <div className="py-2 px-5  bg-dark-gray border-1 border-solid border-lightCharcoal rounded-full"><p>Firebase</p></div>
                      <div className="py-2 px-5  bg-dark-gray border-1 border-solid border-lightCharcoal rounded-full"><p>Arduino</p></div>
                      <div className="py-2 px-5  bg-dark-gray border-1 border-solid border-lightCharcoal rounded-full"><p>ESP32</p></div>
                     
                    </div>
                  </div>
                  <div className="flex flex-row gap-10 mt-10">
                    <button className="bg-none  flex gap-2 items-center">
                      <FiGithub color="#C15F3C" size={20}/>
                      <p className="text-rust">View Source Code</p>
                    </button>

                    <button className="flex items-center gap-2">
                      <FaArrowUpRightFromSquare  color="#C15F3C"/>
                      <p className="text-rust">View Live</p>
                    </button>
                  </div>
                  
                </div>
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
                    border: isHoverFirstContainer ? "1px solid #2D4B35" : "none"
                  }}
                  className="flex items-center justify-center w-full h-1/2  rounded-xl relative">
                    <motion.div 
                    animate={{x: isHoverFirstContainer ? -70 : 0}}
                    transition={{ease: 'easeInOut', duration: 0.5}}
                    className="w-[200px] h-max left-30 absolute shadow-xl">
                      <img src="src/assets/imgs/plastiCash-project-home-ui.png" alt="PlastiCash Home Page UI" />
                    </motion.div>
                    <motion.div
                    animate={{y: isHoverFirstContainer ? 10 : 0}}
                    transition={{ease: 'easeInOut', duration: 0.5}}
                    className="w-[210px] top-5 h-max absolute z-1 shadow-xl">
                      <img src="src/assets/imgs/plastiCash-project-start-ui.png" alt="PlastiCash Start Up UI" />
                    </motion.div>
                    <motion.div 
                    animate={{x: isHoverFirstContainer ? 70 : 0}}
                    transition={{ease: 'easeInOut', duration: 0.5}}
                    className="w-[200px] right-30 h-max absolute ">
                      <img  src="src/assets/imgs/plastiCash-project-user-ui.png " alt="PlastiCash User Page UI " />
                    </motion.div>
                  </motion.div>
                  <div onMouseEnter={
                    ()=>{
                      setIsHoverSecondContainer(true);
                    }
                  } 
                  onMouseLeave={
                    ()=>{
                      setIsHoverSecondContainer(false);
                    }
                  }
                  className="w-full h-[200px] bg-dark-green  rounded-xl relative flex items-center justify-center overflow-hidden">
                    <motion.div 
                    animate={{x: isHoverSecondContainer ? -100 : 0, y: isHoverSecondContainer ? -40 : 0}}
                    className="w-[440px] h-max absolute -bottom-10 -right-30">
                      <img src="src/assets/imgs/plastiCash-project-machine-count-ui.png" alt="PlastiCash Machine Count Bottle UI" />
                    </motion.div>
                    <motion.div 
                    animate={{x: isHoverSecondContainer ? 100 : 0, y: isHoverSecondContainer ? 40 : 0}}
                    className="w-[450px] h-max absolute -left-40 -top-10">
                      <img src="src/assets/imgs/plastiCash-project-machine-start-ui.png" alt="PlastiCash Machine Start up UI" />
                    </motion.div>
                  </div>
                </div>
            </div>
          </div>
      </div>
    )
}

export default Projects;