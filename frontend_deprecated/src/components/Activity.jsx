import { FaCalendar, FaLocationDot } from "react-icons/fa6";

const Activity = ({ mediaURL, label, description, location, google_maps_url, date, url }) => {
    return (
        <div className="p-5 rounded-xl text-blue-950 space-y-5 bg-white">

            <div className="w-full aspect-video rounded overflow-hidden flex bg-red-300">
                <img src={mediaURL} alt={label} className="w-full h-full object-cover" />
            </div>

            <div className="space-y-3">

                <div className="sm:col-span-2 flex justify-between items-center gap-1">
                    <span className="flex items-center gap-2"><FaCalendar />{date}</span>
                    <a href={google_maps_url} target="_blank" className="flex items-center gap-2"><FaLocationDot />{location}</a>
                </div>

                <h1 className="text-2xl font-semibold">{label}</h1>

                <p>{description}</p>

            </div>

            {url &&
                <div className="w-full flex font-thin">
                    <a href={url} className="py-1 px-4 w-full sm:w-1/3 rounded-lg font-medium text-center text-white transition-all duration-200 bg-blue-950 hover:bg-slate-900">Read More</a>
                </div>
            }

        </div>
    );
}

export default Activity;