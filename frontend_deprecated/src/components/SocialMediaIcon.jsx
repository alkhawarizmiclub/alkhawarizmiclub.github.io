import { FaSquareFacebook, FaSquareInstagram, FaLinkedin, FaSquareXTwitter, FaSquareYoutube, FaSquareGithub, FaGlobe } from "react-icons/fa6";


const SocialMediaIcon = ({ pltaformName }) => {

    switch (pltaformName) {
        case "facebook":
            return <FaSquareFacebook/>
        case "instagram":
            return <FaSquareInstagram/>
        case "twitter":
            return <FaSquareXTwitter/>
        case "youtube":
            return <FaSquareYoutube/>
        case "linkedin":
            return <FaLinkedin/>
        case "github":
            return <FaSquareGithub/> 
        default:
            return <FaGlobe/>
    }

}

export default SocialMediaIcon;
