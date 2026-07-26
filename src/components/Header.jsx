function Header(){
    return(
        <div className="flex z-5 flex-row sticky top-0 bg-gradient-to-r from-stop1 from-37% via-stop2 via-58% to-stop3 to-90% items-center px-30 pt-5 pb-2 justify-between">
            <h1 className="text-3xl font-bold flex-1">Eros.</h1>
            <div className= "px-4 py-1 rounded-full flex items-center gap-2 bg-charcoal">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <p>Available</p>
            </div>
            <div className="flex flex-row gap-5 items-center flex-1 justify-end">
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
        </div>
    )
}

export default Header;