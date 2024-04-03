import Navbar from "./Navbar";
import SocialMediaIcon from "./SocialMediaIcon";
import clubSocialMediaLinks from "../assets/json/clubSocialMediaLinks";

const Header = () => {
    return (
        <header className="relative h-screen w-full flex flex-col bg-no-repeat bg-cover">

            <Navbar/>

            <div className="px-10 grow flex flex-col justify-center gap-4 text-center text-blue-950 text-shadow shadow-white">
                <h1 className="text-5xl font-bold">Coding, Learning, and Having Fun</h1>
                <h2 className="text-3xl font-medium">Where bugs become unexpected features, and errors become inside jokes!</h2>
                <ul id="footer-social-media-icons" className="w-full flex justify-center gap-2">
                    {Object.keys(clubSocialMediaLinks).map((link, i) => (
                        <li key={i} className="text-4xl transition-all duration-200 text-blue-950 hover:text-slate-800"><a href={clubSocialMediaLinks[link]}><SocialMediaIcon pltaformName={link} /></a></li>
                    ))}
                </ul>
            </div>

            {/* ------------- Header Blended Background ------------- */}
            <div id="header-background" className="-z-10 absolute w-full h-full top-0 left-0 blur-md">
                <div className="absolute w-full h-full bg-center bg-no-repeat bg-cover bg-header-bg"></div>
                {/* <div className="absolute w-full h-full bg-repeat bg-opacity-0 bg-header-bg-layer"></div> */}
            </div>

        </header>
    );
}

export default Header;