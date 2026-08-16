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
        <div ref={aboutContainer} className="top-0 grid grid-cols-3 grid-rows-[100px] w-screen h-screen px-50">
            <motion.div className="w-full col-span-full flex justify-center items-center relative">
                <motion.h1
                style={{opacity}}
                transition={{ease: 'easeIn', duration: 1}}
                className="absolute -bottom-25 text-9xl font-bold text-rust">ABOUT ME</motion.h1>
            </motion.div>
            <div className=" w-full flex items-center ">
                <motion.div 
                style={{opacity: opacity2,transformOrigin: "top top" }}
                transition={{ease: "anticipate", duration: 0.5, delay: 2}}
                className=" flex flex-col gap-10">
                    <p className="text-charcoal text-xl">
                        Hi, I'm Eros Lucagbo, <span className="text-terracota text-bold">a software developer</span> based in Cagayan de Oro City with a <span className="text-terracota text-bold">B.S in Computer Science</span> 
                        from the University of Science and Technology of Southern Philippines. I am passionate about solving complex technical problems and building accessible software applications across both web and mobile platforms.</p>
                    <p className="text-charcoal text-xl">
                        As an early-career developer, I have <span className="text-terracota text-bold">built a solid foundation in modern frameworks</span> 
                        and <span className="text-terracota text-bold">thrive</span> in environments where I can continuously learn and adapt. 
                        My ultimate goal is to <span className="text-terracota text-bold">write clean</span>, <span className="text-terracota text-bold">effective</span> code 
                        that translates into real-world applications that genuinely help people. I am highly motivated to bring my dedication, 
                        <span className="text-terracota text-bold"> problem-solving skills</span>, and growing <span className="text-terracota text-bold">technical tooklit</span>
                         to a <span className="text-terracota text-bold"> collaborative</span> engineering team.</p>
                </motion.div>
            </div>
            <div className="w-5"></div>
            <div className="flex flex-col w-full items-end gap-5 justify-center">
                <p className="text-rust text-bold text-xl ">TECHNICAL TOOLKIT</p>
                <div className="flex  w-full flex-wrap h-fit gap-x-1 gap-y-4 content-start justify-end bg-red-500">
                    {stacks.map((item, index)=>{
                        return <div className="flex justify-center  h-fit border-solid border-1 rounded-md border-deep-charcoal  items-center p-2 text-charcoal gap-2 text-lg" key={index}>
                                {item.logo}
                                <p>{item.name}</p>
                             </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default About;