import { motion, useScroll, useTransform } from "framer-motion";


function Card({index, targetScale, range, item, scrollYProgress}){

    const scale = useTransform(scrollYProgress, range, [1,targetScale]);
    console.log(scale);
    return(
        <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{ease: "anticipate", duration: 0.5}}
            style={{scale}}
            className={`sticky top-0 h-[100vh] w-full flex justify-center items-center pb-[20vh]`}
                > 
                <div style={{top:`calc(10% + ${index * 25}px)`}} className={`relative  flex flex-col gap-10 w-1/2 h-100 justify-center items-center p-10 rounded-[25px] ${item.color} ${item.textColor} border-1 border-lightCharcoal border-solid`}>
                    {item.icon}
                    <div className="flex flex-col gap-5 items-center">
                        <p className="text-4xl font-bold">{item.title}</p>
                        <p className="text-xl font-Familjen font-normal text-center">{item.desc}</p>
                    </div>
                </div>
        </motion.div>
    )
}


export default Card;