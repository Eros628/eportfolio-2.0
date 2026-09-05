function Header(){
    return(
        <div className="grid z-5 grid-cols-3 sticky top-0 bg-deep-charcoal px-50 pt-5 pb-2  ">
            <h1 className="text-3xl font-bold text-terracota">Eros.</h1>
            <div className="flex flex-row gap-15 items-center justify-center flex-1 text-cream">
                <p>
                    About
                </p>
                <p>
                    Projects
                </p>
                <p>
                    Skills
                </p>
                <p>
                    Experience
                </p>
                <p>
                    Contact
                </p>
            </div>
            <div className= "flex justify-end items-center gap-2">
                <p>Available</p>
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
            </div>
        </div>
    )
}

export default Header;