import { Trash2, Pencil, Users, UserRoundCheck, Eye, MessageSquare } from 'lucide-react'
const JobAction = ({ jobStatus }) => {
    return (
        <div className="py-4 md:py-6 md:pl-6 max-w-sm px-6">
            <div className="flex items-center gap-4">
                <button className="deleteBtn"><Trash2 className='w-4 inline-block mr-2' />Delete job</button>
                <button className="editBtn"><Pencil className="w-4 inline-block mr-2" />Edit job</button>
            </div>
            <div className="flex flex-col mt-8 gap-4">
                <div className="jobActionBase">
                    <p className='text-gray-500 font-medium tracking-wide text-sm md:text-base    '><Users className='inline-block mr-2' />Applicants</p>
                    <p className='jobActionMatric'>{ jobStatus.applicants }</p>
                </div>
                <div className="jobActionBase">
                    <p className='text-gray-500 font-medium tracking-wide'><UserRoundCheck className='inline-block mr-2' />Matches</p>
                    <p className='jobActionMatric'>{ jobStatus.matches }</p>
                </div>
                <div className="jobActionBase">
                    <p className='text-gray-500 font-medium tracking-wide'><MessageSquare className='inline-block mr-2' />Messages</p>
                    <p className='jobActionMatric'>{ jobStatus.messages }</p>
                </div>
                <div className="flex py-4 justify-between pr-2">
                    <p className='text-gray-500 font-medium tracking-wide'><Eye className='inline-block mr-2' />Views</p>
                    <p className='jobActionMatric'>{ jobStatus.views }</p>
                </div>
            </div>
        </div>
    )
}

export default JobAction