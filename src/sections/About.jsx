
function About({stacks}){
    return(
        <div className="grid grid-cols-2 bg-black px-30 pt-20 gap-y-15">
            <div className="col-span-full h-fit flex flex-col gap-2">
                <h1 className="text-7xl font-bold">ABOUT ME</h1>
                <hr className="w-40"></hr>
            </div>
            <div className="flex flex-col gap-10">
                <div className="text-base text-justify flex flex-col gap-5">
                    <p>
                        Hi, I'm Eros Lucagbo, a software developer based in Cagayan de Oro City 
                        with a B.S. in Computer Science from the University of Science and Technology of Southern Philippines.
                        I am passionate about solving complex technical problems and building accessible software applications across both web and mobile platforms.
                    </p>
                    <p>
                        As an early-career developer, I have built a solid foundation in modern frameworks and thrive in environments where I can continuously learn and adapt. 
                        My ultimate goal is to write clean, effective code that translates into real-world applications that genuinely help people. 
                        I am highly motivated to bring my dedication, problem-solving skills, and growing technical toolkit to a collaborative engineering team.
                    </p>
                </div>
                <div className="flex flex-col gap-5">
                    <p className="text-sm text-lightCharcoal">
                        TECHNICAL TOOLKIT
                    </p>
                    <div className="flex flex-row flex-wrap gap-2">
                        {
                            stacks.map((item, index)=>(
                                <div className="flex gap-2 items-center border-1 bg-charcoal rounded-md border-solid border-lightCharcoal px-3 py-1" key={index}>
                                    {item.logo}
                                    <p className="">{item.name}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-end  gap-10 ">
               <div className="relative w-100 h-80 bg-charcoal rounded-t-md border-lightCharcoal border-1">
                 <img className="absolute bottom-0 left-0 right-0  w-full h-auto" src="src/assets/imgs/about-me-picture.png" alt="Eros Lucagbo Picture"></img>
               </div>
               <div className="flex flex-col w-100  h-fit border-1 border-solid border-charcoal rounded-md">
                 <div className="flex bg-white w-full px-5 py-1">
                    <p className="text-base font-bold text-black">PROFESSIONAL PATH</p>
                 </div>
                 <div className="flex flex-row items-start justify-between px-5 py-5">
                    <div className="flex flex-col border-left-solid border-l-1 border-lightCharcoal px-2">
                        <p className="text-base">Web Developer Intern</p>
                        <p className="text-sm text-lightCharcoal">Syntactics, Inc.</p>
                    </div>
                    <p className="text-sm text-lightCharcoal">Aug 2024 - July 2024</p>
                 </div>
               </div>
            </div>
        </div>
    )
}

export default About;