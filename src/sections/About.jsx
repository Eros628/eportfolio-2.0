import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { LiaAsteriskSolid } from "react-icons/lia";

function About({stacks}){
  
    const aboutContainer = useRef(null);

    const {scrollYProgress} = useScroll({
        target: aboutContainer,
        offset: ["start center", "end end"]
    });

 

    const opacity = useTransform(scrollYProgress, [0, 0.5, 0.8], [0, 0, 1]);
    const opacity2 = useTransform(scrollYProgress, [0, 0.5, 0.8], [0, 0, 1]);

    return(
        <div ref={aboutContainer} className="top-0 grid grid-cols-3 gap-x-10 grid-rows-[100px] w-screen h-screen px-50">
            <motion.div className="w-full col-span-full flex justify-center items-center relative">
                <motion.h1
                style={{opacity}}
                transition={{ease: 'easeIn', duration: 1}}
                className="absolute -bottom-25 text-9xl font-bold text-rust">ABOUT ME</motion.h1>
            </motion.div>
            <div className=" w-full flex items-center">
                <motion.div 
                style={{opacity: opacity2,transformOrigin: "top top" }}
                transition={{ease: "anticipate", duration: 0.5, delay: 2}}
                className=" flex flex-col gap-10">
                   <p className="text-xl text-charcoal">  I approach software engineering with a fast-learning mindset and a focus on clean, scalable architecture. 
                        My background spans cross-platform mobile development with <span className="text-terracota">Flutter</span> and <span className="text-terracota">Firebase</span>, where I engineered apps to 
                        communicate with hardware components—to building modern web interfaces and backend services.
                    </p>
                    <p className="text-xl text-charcoal"> My core toolkit centers on <span className="text-terracota">React</span>, <span className="text-terracota">Express.js</span>, and <span className="text-terracota">RESTFUL API</span> design. I love using real projects as proving grounds for new tech; 
                        this portfolio itself was my playground for <span className="text-terracota">Framer Motion</span> and <span className="text-terracota">Tailwind CSSS</span>. As I refine my backend data architecture with PostgreSQL and Prisma, 
                        I am also looking forward to diving into <span className="text-terracota">Next.js</span> and <span className="text-terracota">AI agent development</span>. I am eager to bring this adaptability and problem-solving energy to 
                        a collaborative engineering team.
                    </p>
                </motion.div>
            </div>
            <div className="w-5"></div>
            <div className="flex flex-col h-full w-full justify-center items-end font-Familjen">
                <div className="flex flex-col w-full border-b-solid border-b-lightCharcoal border-b-1 py-6 gap-2">
                    <p className="text-terracota text-base text-bold">PROFILE</p>
                    <div className="flex flex-col gap-1">
                        <p className="text-charcoal text-xl">Eros Lucagbo</p>
                        <p className="text-lightCharcoal text-base">Software Developer based in Cagayan De Oro, Philippines</p>
                    </div>
                </div>
                <div className="flex flex-col w-full border-b-solid border-b-lightCharcoal border-b-1 py-6 gap-2">
                    <p className="text-terracota text-base text-bold">EDUCATION</p>
                    <div className="flex flex-col gap-1">
                        <p className="text-charcoal text-xl">B.S Computer Science</p>
                        <p className="text-lightCharcoal text-base">University of Science and Technology of Southern Philippines {"(USTP)"}</p>
                    </div>
                </div>
                <div className="flex flex-col w-full border-b-solid border-b-lightCharcoal border-b-1 py-6 gap-2">
                    <p className="text-terracota text-base text-bold">EXPERIENCE</p>
                    <div className="flex flex-col gap-1">
                        <p className="text-charcoal text-xl">Web Developer Intern</p>
                        <p className="text-lightCharcoal text-base">Syntactics, Inc. {"(June - Aug 2024)"}</p>
                    </div>
                </div>
                <div className="flex flex-col w-full border-b-solid border-b-lightCharcoal border-b-1 py-6 gap-2">
                    <p className="text-terracota text-base text-bold">STATUS</p>
                   <div className="flex flex-col gap-1 ">
                        <p className="text-charcoal text-xl">Actively Seeking Roles</p>
                        <p className="text-lightCharcoal text-base">Open for Full-Time, Remote & On-Site Positions</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default About;