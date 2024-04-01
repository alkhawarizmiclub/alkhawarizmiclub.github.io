import { FaCalendar, FaLocationDot } from "react-icons/fa6";

const Activity = ( {label, description, location, google_maps_url, date} ) => {
    return (
        <div className="rounded-xl text-blue-950 bg-white">

            <div className="p-5 pb-0 space-y-3">

                <h1 className="text-2xl font-semibold">{label}</h1>
                
                <div className="sm:col-span-2 flex justify-between items-center gap-1">
                    <span className="flex items-center gap-2"><FaCalendar/>{date}</span>
                    <a href={google_maps_url} target="_blank" className="flex items-center gap-2"><FaLocationDot/>{location}</a>
                </div>
                
                <p>{description}</p>
            </div>

            <div className="p-5 w-full flex font-thin">
                <a href="#" className="py-1 px-4 w-full sm:w-1/3 rounded-lg font-medium text-center text-white transition-all duration-200 bg-blue-950 hover:bg-slate-900">Read More</a>
            </div>

        </div>
    );
}
 
export default Activity;