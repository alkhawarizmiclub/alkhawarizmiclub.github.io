import SocialMediaIcon from "./SocialMediaIcon";

const Project = ( {imgURL, label, description, links} ) => {

    return (
        <div className="p-5 rounded-2xl text-center space-y-2 border-2 border-blue-950 drop-shadow-lg bg-white">
            <img src={imgURL} className="rounded-lg" />
            <h1 className="text-2xl text-blue-950 font-bold">{label}</h1>
            <p className=" text-blue-950">{description}</p>
            <ul className="text-2xl flex justify-center gap-2">

                {Object.keys(links).map((link, i) =>(
                    <li key={i} className=" transition-all duration-200 text-blue-950 hover:text-slate-900"><a href={links[link]}><SocialMediaIcon pltaformName={link} /></a></li>
                ))}
 
            </ul>
        </div>
    );
}
 
export default Project;