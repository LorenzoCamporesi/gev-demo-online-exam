import Logo from "./logo";
import Image from "next/image";

function Navbar() {
    return <nav id="header" className="fixed w-full z-50 top-0">
        <div className="text-white w-full container mx-auto flex flex-wrap items-center justify-end mt-0 py-2">
            <div id="topButton">
                <svg viewBox="0 0 100 100" width="100" height="100">
                    <defs>
                        <path id="circle"
                              d="
                          M 50, 50
                          m -37, 0
                          a 30,30 0 1,1 65,0
                          a 30,30 0 1,1 -65,0
                    "/>
                    </defs>
                    <circle cx="46" cy="50" r="25" fill="red"></circle>
                    <text fontSize="15.1">
                        <textPath fill="white" xlinkHref="#circle">
                            Unisciti a noi - Unisciti a noi -
                        </textPath>
                    </text>
                </svg>
            </div>
        </div>
    </nav>

}

export default Navbar;
