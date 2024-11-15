import { FaCalendar, FaLocationDot } from "react-icons/fa6";

const Participation = ({ mediaURL, label, descritpion, location, date }) => {
    return (
        <div className="relative p-5 space-y-3 rounded-lg shadow-lg border- border-blue-950 bg-white">

            <div className="w-full flex aspect-video rounded overflow-hidden bg-gray-100">
                <img className="w-full h-full object-cover" src={mediaURL} alt={label} />
            </div>

            <p className="w-full flex justify-between text-blue-950 text-sm">
                <span className="flex items-center gap-2"><FaCalendar />{date}</span>
                <span className="flex items-center gap-2"><FaLocationDot />{location}</span>
            </p>

            <div className="space-y-1">
                <h1 className="text-blue-950 text-xl font-semibold">{label}</h1>

                <p className="text-slate-600">{descritpion}</p>
            </div>

            {/* <p className="w-full flex justify-between text-blue-950">
                <span className="flex items-center gap-2"><FaCalendar />{location}</span>
                <span className="flex items-center gap-2"><FaLocationDot />{date}</span>
            </p> */}

        </div>
    );
}

export default Participation;