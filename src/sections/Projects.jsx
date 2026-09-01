import { motion, useAnimationFrame, useInView, useMotionValue, useTransform } from "framer-motion";
import { useRef, useState } from "react";

function Projects({stacks}){
  const xPosition = useMotionValue(0);
  const x = useTransform(xPosition, (v)=> `${v}%`);
  const [isHover, setIsHover] = useState(false);

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
          <div className="h-[70vh] w-full flex items-start flex-row py-10 border-b-solid border-b-1 border-lightCharcoal">
            <div className="flex flex-col h-full">
              <p className="text-terracota text-bold text-lg">SELECTED PROJECTS</p>
              <div className="flex flex-col gap-5">
                  <p className="text-cream text-bold text-9xl">Learning by Building</p>
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

          <div className="flex flex-col">
            <div className="flex flex-row">
                <div className="flex flex-col">
                  <div className="flex flex-row items-center">
                    <p>01</p>
                    <hr />
                  </div>
                  <p>PlastiCash</p>
                  <p></p>
                </div>
            </div>
          </div>
      </div>
    )
}

export default Projects;