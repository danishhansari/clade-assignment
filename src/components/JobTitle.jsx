import { MapPin, Database } from "lucide-react"


const JobTitle = ({ designation, postedTime, status, location, payRange }) => {
    return (
        <div className="flex flex-col gap-2 md:gap-4 border-b px-4 md:pl-20 py-2 md:py-6">

            <div className="flex gap-2 md:gap-6 items-center">
                <h1 className="jobTitle">{ designation }</h1>
                <div className="flex items-center gap-2 md:gap-4">
                    <p className="text-gray-400 text-xs font-semibold tracking-wide">posted { postedTime } ago</p>
                    <div className="jobStatusBase">
                        <span className="w-1 h-1 rounded-full bg-green-500 mb-0.5"></span>
                        <p className="text-green-500 font-semibold text-xs">{ status ? "Open" : "closed" }</p>
                    </div>
                </div>
            </div>

            <div className="jobLocationParent ">
                <p className="jobLocationAndPayBase"><MapPin className="w-4 md:w-6" />{ location }</p>
                <p className="jobLocationAndPayBase">
                    <Database className="w-4" />
                    ${ payRange }</p>
            </div>

        </div>
    )
}

export default JobTitle