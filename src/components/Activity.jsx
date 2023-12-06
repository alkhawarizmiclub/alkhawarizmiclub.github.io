import { FaCalendar, FaLocationDot } from "react-icons/fa6";

const Activity = ( {label, description, date, location} ) => {
    return (
        <div className="rounded-xl bg-gradient-to-tr text-white from-blue-900 to-blue-600">
            <div className="p-10 pb-0 space-y-3">
                <h1 className="text-2xl font-semibold">{label}</h1>
                <p>{description}</p>
            </div>
            <div className="p-5 w-full flex justify-between items-center font-thin">
                <a href="http://www.google.com" className="py-1 px-4 rounded-lg transition-all duration-200 font-medium text-blue-800 bg-white hover:bg-slate-200">Read More</a>
                <div className="flex items-center gap-1"><FaCalendar/>{date}</div>
                <div className="flex items-center gap-1"><FaLocationDot/>{location}</div>
            </div>
        </div>
    );
}
 
export default Activity;