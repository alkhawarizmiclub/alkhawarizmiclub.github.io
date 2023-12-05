import { Link } from "react-router-dom";
import LogoDarkSVG from "../assets/images/logoDarkSVG.svg";


const Navbar = () => {
    return (
        <nav className="">
            <div className="navbar-container p-4 mx-auto w-full max-w-screen-2xl h-20 flex justify-between items-center">
                <Link to={'/'} className="h-full"><img src={LogoDarkSVG} className="h-full" /></Link>
                <ul className="flex items-center gap-5 font-medium text-lg text-blue-950">
                    <li className="transition-all duration-200 text-blue-950 hover:text-blue-900"><Link to={'/'}>Home</Link></li>
                    <li className="transition-all duration-200 text-blue-950 hover:text-blue-900"><Link to={'/about'}>About</Link></li>
                    <li className="transition-all duration-200 text-blue-950 hover:text-blue-900"><Link to={'/contact'}>Contact Us</Link></li>
                    <li><Link to={'/join'} className="py-2 px-4 rounded-xl transition-all duration-200 text-white bg-blue-950 hover:bg-blue-900">Join Us</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;