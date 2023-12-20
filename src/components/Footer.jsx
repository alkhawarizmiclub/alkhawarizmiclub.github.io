import SocialMediaIcon from "./SocialMediaIcon";
import clubSocialMediaLinks from "../assets/json/clubSocialMediaLinks";
import LogoLightSVG from "../assets/images/logoLightSVG.svg";

const Footer = () => {

    return (
        <footer className="pt-24 pb-10 px-10 w-full text-white text-lg bg-blue-950">
            <div className="footer-container mx-auto w-full max-w-7xl space-y-10">

                <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-20">
                    <div className='h-12'><img src={LogoLightSVG} className="w-full h-full"/></div>
                    <div className="text-center md:text-left space-y-2">
                        <p><span className="font-bold">Email:</span> <a href="mailto:contact@alkhawarizmi.club">contact@alkhawarizmi.club</a></p>
                        <p><span className="font-bold">Address:</span> <a href="https://maps.app.goo.gl/iXc33UFZXd3SwotbA">Hay Ezzaitoune BP 145, Bd 2 Mars, Khouribga 25000</a></p>
                    </div>
                </div>

                <div className="border-t border-white"></div>

                <ul id="footer-social-media-icons" className="w-full flex justify-center gap-2">

                    {Object.keys(clubSocialMediaLinks).map((link, i) => (
                        <li key={i} className="text-3xl transition-all duration-200 text-white hover:text-gray-200"><a href={clubSocialMediaLinks[link]}><SocialMediaIcon pltaformName={link} /></a></li>
                    ))}

                </ul>

            </div>
        </footer>
    );
}

export default Footer;
