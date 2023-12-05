import SocialMediaIcon from "./SocialMediaIcon";


const TeamMember = ( { firstName, lastName, description, imgSrc, socialMediaLinks} ) => {

    return (
        <div className="mx-auto max-w-lg w-full relative ">

            {/* ------------ Portrait Image ------------ */}
            <div className="w-32 h-32 rounded-full -translate-x-6 -translate-y-6 absolute aspect-square overflow-hidden bg-slate-600">
                <img src={imgSrc} alt=""/>
            </div>

            <div className="member-container p-5 pl-32 rounded-2xl space-y-2 bg-gradient-to-tr from-blue-900 to-blue-600">

                {/* ------------ Full Name ------------ */}
                <h1 className="w-full flex flex-col capitalize text-2xl text-white font-semibold">
                    <span>{firstName}</span>
                    <span>{lastName}</span>
                </h1>

                {/* ------------ Description ------------ */}
                <p className="text-blue-200">{description}</p>

                {/* ------------ Social Media Icons ------------ */}
                <ul className="w-full flex gap-2 text-white">

                    {socialMediaLinks && Object.keys(socialMediaLinks).map( (element, i) => (

                        <li key={i}>
                            <a href={socialMediaLinks[element]} className="text-2xl hover:text-gray-200">
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
