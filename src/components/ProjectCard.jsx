import { FiGithub } from "react-icons/fi";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

function ProjectCard ({projects, children}){
    return(
            <div className="flex flex-row w-full items-center h-screen gap-20 border-b-1 border-b-solid border-b-dark-gray">
                <div className="flex w-full h-max flex-col gap-10">
                  <div className="flex flex-row items-center gap-1">
                    <p className="text-rust font-Antic text-bold text-5xl italic">{projects.number}</p>
                    <div className="h-full w-full flex  pt-2"><hr className="w-1/2 border-dark-gray"/></div>
                    
                  </div>
                  <p className="text-white font-bold text-7xl">{projects.title}</p>
                  <p className="text-white-200 text-lg font-Instrument-Sans">{projects.description}
                  </p>
                  <div className="flex flex-col gap-5">
                    <p className=" text-lightCharcoal">TOOLKIT</p>
                    <div className="flex flex-row gap-5 flex-wrap">
                        {projects.toolkit.map((item, index)=>(
                            <div key={index} className="py-2 px-5 bg-dark-gray border-1 border-solid border-lightCharcoal rounded-full"><p>{item}</p></div>
                        ))}
                    </div>
                  </div>
                  <div className="flex flex-row gap-10 mt-10">
                    <button className="bg-none  flex gap-2 items-center">
                      <FiGithub color="#C15F3C" size={20}/>
                      <a href={projects.sourceCode} target="_blank" rel="noopener noreferrer"  className="text-rust">View Source Code</a>
                    </button>

                    <button className="flex items-center gap-2">
                      <FaArrowUpRightFromSquare  color="#C15F3C"/>
                      <p className="text-rust">View Live</p>
                    </button>
                  </div>
                  
                </div>
                {children}
            </div>
    )
}

export default ProjectCard;