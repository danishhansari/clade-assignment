const AboutTheJob = ({ description, benefits, jobSchedule, supplementary }) => {
    return (
        <div className="px-4 md:pl-20 py-4 border-b">
            <h5 className="text-gray-500 text-sm font-medium tracking-wide">About the Job</h5>
            <ul className="list-decimal max-w-lg px-4 mt-2 text-[#3D3D3D] text-xs md:text-base  tracking-wide flex flex-col gap-0.5">

                { description.map((desc, index) => <li key={ index }>{ desc }</li>) }

            </ul>
            <h5 className="text-gray-500 text-sm font-medium tracking-wide mt-4">
                Benefits:
            </h5>
            <ul className="list-disc px-8 text-[#3D3D3D] text-xs md:text-base  tracking-wide mt-1">
                {
                    benefits.map((benefit, index) => <li key={ index }>{ benefit }</li>)
                }
            </ul>

            <h5 className="text-gray-500 text-sm tracking-wide mt-4 font-medium">
                Schedule:</h5>
            <ul className="list-disc px-8 text-[#3d3d3d] text-xs md:text-base  tracking-wide mt-1">
                { jobSchedule.map((schedule, index) => <li key={ index }>{ schedule }</li>) }
            </ul>

            <h5 className="text-gray-500 text-sm tracking-wide mt-4 font-medium">
                Supplemental pay types:</h5>
            <ul className="list-disc px-8 text-[#3d3d3d] text-xs md:text-base mt-1  tracking-wide">

                {
                    supplementary?.map((sup, index) => <li key={ index }>{ sup }</li>)
                }
            </ul>


        </div >
    )
}

export default AboutTheJob