import { MapPin, Database } from "lucide-react"
const JobTitle = () => {
    return (
        <div className="flex flex-col gap-2 md:gap-4 border-b px-4 md:pl-20 py-6">
            <div className="flex gap-4 md:gap-6 items-center">
                <h1 className="text-lg md:text-3xl font-extrabold text-[#3d3d3d] tracking-wide">Senior Product Designer</h1>
                <div className="flex items-center gap-2 md:gap-4">
                    <p className="text-gray-400 text-xs font-semibold tracking-wide">posted 2 days ago</p>
                    <div className="flex items-center justify-center gap-0.5 border px-1 py-0.5 rounded-full bg-green-400/20 border-green-500/30">
                        <span className="w-1 h-1 rounded-full bg-green-500 mb-0.5"></span>
                        <p className="text-green-500 font-semibold text-xs">Open</p>
                    </div>
                </div>
            </div>
            <div className="flex gap-4 items-center">
                <p className="flex text-gray-600 gap-2"><MapPin />Delaware, USA</p>
                <p className="flex text-gray-600 gap-2">
                    <Database className="w-4" />
                    $300k-$400k</p>
            </div>
        </div>
    )
}

export default JobTitle