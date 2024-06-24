import { MapPin, Database } from "lucide-react"
import { BiCoinStack } from "react-icons/bi";
const JobTitle = () => {
    return (
        <div className="flex flex-col gap-1 md:gap-2 border-b px-4 md:pl-20">
            <div className="flex gap-4 md:gap-6 items-center">
                <h1 className="text-xl md:text-3xl font-extrabold text-[#3d3d3d] tracking-wide">Senior Product Designer</h1>
                <div className="flex items-center gap-4">
                    <p className="text-gray-400 text-xs">posted 2 days ago</p>
                    <div className="flex items-center justify-center gap-0.5 border px-1 py-0.5 rounded-full bg-green-400/20 border-green-500/30">
                        <span className="w-1 h-1 rounded-full bg-green-500 mb-1"></span>
                        <p className="text-green-500 font-semibold text-xs">Open</p>
                    </div>
                </div>
            </div>
            <div className="flex">
                <p><MapPin />Delaware, USA</p>
                <p><Database /><BiCoinStack />
                    $300k-$400k</p>
            </div>
        </div>
    )
}

export default JobTitle