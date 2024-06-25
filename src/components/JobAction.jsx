import { Trash2, Pencil, Users, UserRoundCheck, Eye, MessageSquare } from 'lucide-react'
const JobAction = () => {
    return (
        <div className="py-4 md:py-6 md:pl-6 max-w-sm px-6">
            <div className="flex items-center gap-4">
                <button className="px-4 md:px-7 py-2 border rounded-lg border-[#dc4a2d] text-[#dc4a2d] bg-[#FEF4F2] tracking-wider text-sm md:text-base shadow-md font-semibold"><Trash2 className='w-4 inline-block mr-2' />Delete job</button>
                <button className="px-4 md:px-7 py-2 shadow-inner drop-shadow-md rounded-lg bg-[#dc4a2d] text-white border text-sm md:text-base md:font-semibold"><Pencil className="w-4 inline-block mr-2" />Edit job</button>
            </div>
            <div className="flex flex-col mt-8 gap-4">
                <div className="flex py-4 border-b justify-between pr-2">
                    <p className='text-gray-500 font-medium tracking-wide text-sm md:text-base    '><Users className='inline-block mr-2' />Applicants</p>
                    <p className='text-base md:text-lg text-gray-500 font-semibold tracking-wider'>400</p>
                </div>
                <div className="flex py-4 border-b justify-between pr-2">
                    <p className='text-gray-500 font-medium tracking-wide'><UserRoundCheck className='inline-block mr-2' />Matches</p>
                    <p className='text-base md:text-lg text-gray-500 font-semibold tracking-wider'>100</p>
                </div>
                <div className="flex py-4 border-b justify-between pr-2">
                    <p className='text-gray-500 font-medium tracking-wide'><MessageSquare className='inline-block mr-2' />Messages</p>
                    <p className='text-base md:text-lg text-gray-500 font-semibold tracking-wider'>147</p>
                </div>
                <div className="flex py-4 justify-between pr-2">
                    <p className='text-gray-500 font-medium tracking-wide'><Eye className='inline-block mr-2' />Views</p>
                    <p className='text-base md:text-lg text-gray-500 font-semibold tracking-wider'>800</p>
                </div>
            </div>
        </div>
    )
}

export default JobAction