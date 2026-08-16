function Header(){
    return(
        <div className="grid z-5 grid-cols-3 sticky top-0 bg-deep-charcoal px-50 pt-5 pb-2  ">
            <h1 className="text-3xl font-bold text-terracota">Eros.</h1>
            <div className="flex flex-row gap-15 items-center justify-center flex-1 text-cream">
                <p>
                    Home
                </p>
                <p>
                    About
                </p>
                <p>
                    Projects
                </p>
                <p>
                    Contact
                </p>
            </div>
            <div className= "flex justify-end items-center gap-5">
                <p>Available</p>
                <div className="w-2 h-2 rounded-full"></div>
            </div>
        </div>
    )
}

export default Header;