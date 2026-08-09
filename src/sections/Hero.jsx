import { FaPython,  FaJs, FaReact,FaGithub, FaCss3Alt,FaNodeJs} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

import { TiHtml5 } from "react-icons/ti";
import { FaFlutter } from "react-icons/fa6";

function Hero(){
    return(
        <div className="grid grid-cols-3 shrink-0 w-[100vw] bg-gradient-to-r from-stop1 from-37% via-stop2 via-58% to-stop3 to-90% h-full px-30 pt-10">
            <div className="flex flex-col  w-full gap-10 mt-[15vh] items-start">
                <div className="flex    flex-col gap-5">
                    <h1 className="font-bold text-7xl text-start">EROS LUCAGBO</h1>
                    <div className="flex   flex-row text-sm gap-2 ">
                        <div className="text-lightCharcoal px-2 py-1 bg-transparent rounded-md border-solid border-lightCharcoal border-1">
                            <p>WEB</p>
                        </div>
                        <div className="text-lightCharcoal px-2 py-1 bg-transparent rounded-md border-solid border-lightCharcoal border-1">
                            <p>MOBILE</p>
                        </div>
                        <div className="text-lightCharcoal px-2 py-1 bg-transparent rounded-md border-solid border-lightCharcoal border-1">
                            <p>FULL-STACK</p>
                        </div>
                    </div>
                </div>
    

                <div className="flex flex-row gap-4">
                    <button className="bg-white border-none text-charcoal rounded-md p-2 text-base" >VIEW RESUME</button>
                    <button className="bg-transparent rounded-md border-solid border-lightCharcoal border-1 p-2 text-base">CONTACT ME</button>
                </div>

            </div>
            <div className="w-100 h-auto">  

            </div>
            <div className="flex  shrink-0 flex-col mt-[15vh] items-end text-end gap-6 ">
                <div className="flex flex-col">
                    <p className="text-base text-lightCharcoal">ROLE</p>
                    <p className="text-4xl font-bold ">FULL-STACK DEVELOPER</p>
                </div>
                <p className="w-60">
                    Adaptable Full-Stack Developer focuses 
                    on Web and Mobile Applications, inspire to build 
                </p>
                <div className="flex flex-col gap-3">
                    <p className="text-base text-lightCharcoal ">TECH-STACK</p>
                    <div className="grid grid-cols-4 grid-rows-2 gap-2">
                        <div  className="border-1 bg-charcoal rounded-md border-solid border-lightCharcoal px-3 py-1">
                            <FaJs  />
                        </div>
                        <div  className="border-1 bg-charcoal rounded-md border-solid border-lightCharcoal px-3 py-1">
                            <TiHtml5 />
                        </div>
                        <div  className="border-1 bg-charcoal rounded-md border-solid border-lightCharcoal px-3 py-1">
                            <FaCss3Alt />
                        </div>
                         <div  className="border-1 bg-charcoal rounded-md border-solid border-lightCharcoal px-3 py-1">
                            <RiTailwindCssFill />
                            
                        </div>
                        <div  className="border-1 bg-charcoal rounded-md border-solid border-lightCharcoal px-3 py-1">
                            <FaNodeJs/>
                        </div>
                        <div  className="border-1 bg-charcoal rounded-md border-solid border-lightCharcoal px-3 py-1">
                            <FaReact/>
                        </div>
                        <div  className="border-1 bg-charcoal rounded-md border-solid border-lightCharcoal px-3 py-1">
                            <FaFlutter />
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-end ">
                    <button className="bg-transparent w-fit border-1 border-lightCharcoal border-solid rounded-md px-5 py-1">
                        VIEW PROJECTS
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hero;