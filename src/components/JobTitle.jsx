import { MapPin, Database } from "lucide-react"


const JobTitle = ({ designation, postedTime, status, location, payRange }) => {
    return (
        <div className="flex flex-col gap-2 md:gap-4 border-b px-4 md:pl-20 py-2 md:py-6">

            <div className="flex gap-2 md:gap-6 items-center">
                <h1 className="text-lg md:text-3xl font-black text-[#3d3d3d] tracking-wide">{ designation }</h1>
                <div className="flex items-center gap-2 md:gap-4">
                    <p className="text-gray-400 text-xs font-semibold tracking-wide">posted { postedTime } ago</p>
                    <div className="flex items-center justify-center gap-0.5 border px-1 py-0.5 rounded-full bg-green-400/20 border-green-500/30">
                        <span className="w-1 h-1 rounded-full bg-green-500 mb-0.5"></span>
                        <p className="text-green-500 font-semibold text-xs">{ status ? "Open" : "closed" }</p>
                    </div>
                </div>
            </div>

            <div className="flex gap-4 items-center text-gray-500 text-sm md:text-md">
                <p className="flex gap-1 md:gap-2 items-center"><MapPin className="w-4 md:w-6" />{ location }</p>
                <p className="flex gap-1 md:gap-2 items-center">
                    <Database className="w-4" />
                    ${ payRange }</p>
            </div>

        </div>
    )
}

export default JobTitle