import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="p-4 h-24 flex justify-between items-center">
            <img className=" h-full" src="/assets/images/header-bg.png" />
            <ul className="flex gap-5">
                <li><Link to={'link1'}>Page #1</Link></li>
                <li><Link to={'link1'}>Page #2</Link></li>
                <li><Link to={'link1'}>Page #3</Link></li>
                <li><Link to={'link1'}>Page #4</Link></li>
            </ul>
        </nav>
    );
}
 
export default Navbar;