import { FaCode, FaUsers  } from "react-icons/fa";
import { PiTreeStructure } from "react-icons/pi";
import { IoIosRocket } from "react-icons/io";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import Card from "../components/Card";

function Services(){
     const card = useRef(null);
    const {scrollYProgress} = useScroll({
        target: card,
        offset: ["start end", "end end"]
    });
    const services = [
        {
            title: "Web & Mobile Engineering",
            desc: "Transforming static UI designs into fluid, interactive, and responsive applications. Whether building single-page web apps with React or cross-platform mobile solutions with Flutter, I bridge the gap between design and fully functional software.",
            color: "bg-neutral-core",
            icon: <FaCode size={50} color="#A4A4A4" />
        },
        {
            title: "Clean & Structured Architecture",
            desc: "Writing code that is not just functional, but readable and scalable. I approach every project with an organized mindset, ensuring the underlying structure is easy to maintain, debug, and expand as the application grows.",
            color: "bg-deep-emerald",
            icon: <PiTreeStructure size={50} color="#A4A4A4" />
        },
        {
            title: "Rapid Tech Adoption",
            desc: "Built on a strong foundation of core programming principles, I adapt quickly to new environments. From picking up new tech stacks to diving into complex AI research, I am constantly learning and eager to tackle new challenges.",
            color:"bg-mid-indigo",
            icon: <IoIosRocket size={50} color="#A4A4A4" />
        },
        {
            title: "Collaborative Workflow",
            desc: "Great software is built by great teams. I am a strong communicator who values clear feedback, shared goals, and working cross-functionally to build efficient systems that truly solve user problems.",
            color: "bg-warm-graphite",
            icon: <FaUsers size={50} color="#A4A4A4" />
        }
    ]

    const slideX = useTransform(scrollYProgress, [0, 1], ["80%", "14%"]);

    return(
        <div ref={card} className=" flex flex-col bg-black h-full ">
            <motion.div 
            style={{x: slideX}}
            transition={{ease: "linear", duration:0.5}}
            className="text-[10rem] sticky top-20 font-bold text-charcoal">
                 <h1 >WHAT I OFFER</h1>
            </motion.div>
            {
                services.map((item, index)=>{
                    const targetScale = 1 - ((services.length - index ) * 0.05);
                    return <Card key={index} index={index} scrollYProgress={scrollYProgress} targetScale={targetScale} range={[index * 0.25, 1]} item={item} />
                })
            }

        </div>
    )
}

export default Services;