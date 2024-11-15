import SocialMediaIcon from "./SocialMediaIcon";


const TeamMember = ( { firstName, lastName, description, imgSrc, socialMediaLinks} ) => {

    return (
        <div className="mx-auto max-w-lg w-full h-full relative">

            {/* ------------ Portrait Image ------------ */}
            <div className="w-32 h-32 rounded-full -translate-x-6 -translate-y-6 absolute aspect-square overflow-hidden drop-shadow-lg bg-slate-600">
                <img src={imgSrc} alt="Team Member's portrait"/>
            </div>

            <div className="p-5 pl-32 h-full flex flex-col justify-evenly gap-2 rounded-2xl shadow shadow-black/40 bg-gradient-to-tr from-blue-950 to-blue-900">

                {/* ------------ Full Name ------------ */}
                <h1 className="w-full flex flex-col capitalize text-2xl text-white font-semibold">
                    <span>{firstName}</span>
                    <span>{lastName}</span>
                </h1>

                {/* ------------ Description ------------ */}
                <p className="capitalize text-blue-200">{description}</p>

                {/* ------------ Social Media Icons ------------ */}
                <ul className="w-full flex gap-2 ">

                    {socialMediaLinks && Object.keys(socialMediaLinks).map( (element, i) => (

                        <li key={i}>
                            <a href={socialMediaLinks[element]} className="text-2xl transition-all duration-200 text-white hover:text-gray-200">
                                <SocialMediaIcon pltaformName={element}/>
                            </a>
                        </li>

                    ) )}

                </ul>

            </div>

        </div>
    );
}

export default TeamMember;
