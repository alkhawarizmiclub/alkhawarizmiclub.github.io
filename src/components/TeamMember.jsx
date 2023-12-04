const TeamMember = ( { firstName, lastName, description, imgSrc, isLeader } ) => {
    return (
        <div className={` w-full relative ${isLeader ? 'col-span-1' : 'col-span-1'}`}>

            <div className="w-32 h-32 rounded-full -translate-x-6 -translate-y-6 absolute aspect-square overflow-hidden">
                <img src={imgSrc} alt=""/>
            </div>

            <div className="member-container p-5 pl-32 rounded-2xl bg-blue-900 space-y-2">
                <h1 className="flex flex-col text-2xl text-white font-semibold">
                    <span>{firstName}</span>
                    <span>{lastName}</span>
                </h1>
                <p className="text-blue-200">{description}</p>
                <ul>
                    <li><a href="http://www.google.com/"></a></li>
                </ul>
            </div>

        </div>
    );
}
 
export default TeamMember;