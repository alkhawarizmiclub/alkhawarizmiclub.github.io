import SocialMediaIcon from "./SocialMediaIcon";
import clubSocialMediaLinks from "../assets/json/clubSocialMediaLinks";
import {ReactComponent as LogoLightSVG} from "../assets/images/logoLightSVG.svg";

const Footer = () => {

    console.log(clubSocialMediaLinks);
    return (
        <footer className="pt-24 pb-10 w-full text-white text-lg bg-blue-900">
            <div className="footer-container mx-auto w-full max-w-7xl space-y-10">

                <div className="flex justify-between items-center">
                    <div className='h-12'><LogoLightSVG className="w-full h-full"/></div>
                    <div id="footer-social-media-icons" className="">
                        <p><span className=" font-semibold">Email:</span> <span>contact@alkhawarizmi.club</span></p>
                        <p><span className=" font-semibold">Address:</span> <span>contact@alkhawarizmi.club</span></p>
                    </div>
                </div>

                <div className="border-t border-white"></div>

                <ul id="footer-social-media-icons" className="w-full flex justify-center gap-4">

                    {Object.keys(clubSocialMediaLinks).map((link, i) => (
                        <li className="h-10 w-10 text-3xl"><a href={clubSocialMediaLinks[link]}><SocialMediaIcon pltaformName={link} /></a></li>
                    ))}

                </ul>

            </div>
        </footer>
    );
}

export default Footer;
