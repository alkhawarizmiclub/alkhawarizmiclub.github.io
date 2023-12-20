import { FaCalendar, FaLocationDot } from "react-icons/fa6";

const Activity = ( {label, description, date, location} ) => {
    return (
        <div className="rounded-xl text-blue-950 bg-white">
            <div className="p-5 pb-0 space-y-3">
                <h1 className="text-2xl font-semibold">{label}</h1>
                <p>{description}</p>
            </div>
            <div className="p-5 w-full grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-2 font-thin">
                <div className="order-last sm:order-first col-span-2 sm:col-span-1 flex justify-center items-center">
                    <a href="http://www.google.com" className="py-1 px-4 w-full rounded-lg font-medium text-white transition-all duration-200 bg-blue-950 hover:bg-slate-900">Read More</a>
                </div>
                <div className="sm:col-span-2 flex justify-between sm:justify-around items-center gap-1">
                    <span className="flex items-center gap-2"><FaCalendar/>{date}</span>
                    <span className="flex items-center gap-2"><FaLocationDot/>{location}</span>
                </div>
            </div>
        </div>
    );
}
 
export default Activity;