import { FaPython,  FaJs, FaReact,FaGithub, FaCss3Alt,FaNodeJs} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

import { TiHtml5 } from "react-icons/ti";
import { FaFlutter } from "react-icons/fa6";

function Hero(){
    return(
        <div className="grid grid-cols-3 shrink-0 w-[100vw] bg-deep-charcoal h-screen px-50 pt-10">
            <div className="flex flex-col  gap-15 mt-[15vh] items-start">
                <div className="flex  flex-col gap-5">
                    <h1 className="font-bold text-8xl text-start text-cream">EROS LUCAGBO</h1>
                    <div className="flex  flex-row text-lg gap-2 text-cream">
                        <div className=" px-2 py-1 bg-dark-gray rounded-md border-solid border-lightCharcoal border-1">
                            <p>Web</p>
                        </div>
                        <div className=" px-2 py-1 bg-dark-gray rounded-md border-solid border-lightCharcoal border-1">
                            <p>Mobile</p>
                        </div>
                        <div className="px-2 py-1 bg-dark-gray rounded-md border-solid border-lightCharcoal border-1">
                            <p>Full-stack</p>
                        </div>
                    </div>
                </div>
    

                <div className="flex flex-row gap-4">
                    <button className="bg-rust border-none text-cream rounded-md py-2 px-5 text-lg" >VIEW RESUME</button>
                    <button className="bg-dark-gray rounded-md border-solid border-lightCharcoal border-1 py-2 px-5 text-lg">CONTACT ME</button>
                </div>

            </div>
            <div className=" h-auto">  

            </div>
            <div className="flex  shrink-0 flex-col mt-[15vh] items-end text-end gap-8 ">
                <div className="flex flex-col">
                    <p className="text-base text-terracota font-bold">ROLE</p>
                    <p className="text-5xl font-bold text-cream">FULL-STACK DEVELOPER</p>
                </div>
                <p className="w-70 text-lg text-cream">
                    Adaptable Full-Stack Developer focuses 
                    on Web and Mobile Applications, inspire to build    
                </p>
                <div className="flex flex-col gap-3">
                    <p className="text-base text-terracota font-bold">TECH-STACK</p>
                    <div className="grid grid-cols-4 grid-rows-2 gap-2">
                        <div  className="border-1 bg-dark-gray rounded-md border-solid border-lightCharcoal px-3 py-1">
                            <FaJs size={25} />
                        </div>
                        <div  className="border-1 bg-dark-gray rounded-md border-solid border-lightCharcoal px-3 py-1">
                            <TiHtml5 size={25} />
                        </div>
                        <div  className="border-1 bg-dark-gray rounded-md border-solid border-lightCharcoal px-3 py-1">
                            <FaCss3Alt size={25} />
                        </div>
                         <div  className="border-1 bg-dark-gray rounded-md border-solid border-lightCharcoal px-3 py-1">
                            <RiTailwindCssFill size={25} />
                            
                        </div>
                        <div  className="border-1 bg-dark-gray rounded-md border-solid border-lightCharcoal px-3 py-1">
                            <FaNodeJs size={25}/>
                        </div>
                        <div  className="border-1 bg-dark-gray rounded-md border-solid border-lightCharcoal px-3 py-1">
                            <FaReact size={25}/>
                        </div>
                        <div  className="border-1 bg-dark-gray rounded-md border-solid border-lightCharcoal px-3 py-1">
                            <FaFlutter size={25} />
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-end ">
                    <button className="bg-transparent w-fit border-1 bg-dark-gray  text-cream border-solid rounded-md px-5 py-2">
                        VIEW PROJECTS
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hero;