const AboutTheJob = ({ description, benefits, jobSchedule, supplementary }) => {
    return (
        <div className="px-4 md:pl-20 py-4 border-b">
            <h5 className="text-gray-500 text-sm font-medium tracking-wide">About the Job</h5>
            <ul className="list-decimal max-w-lg px-4 mt-2 text-[#3D3D3D] text-sm md:text-base  tracking-wide flex flex-col gap-0.5">

                { description.map((desc, index) => <li key={ index }>{ desc }</li>) }

            </ul>
            <h5 className="text-gray-500 text-sm font-medium tracking-wide mt-4">
                Benefits:
            </h5>
            <ul className="jobList">
                {
                    benefits.map((benefit, index) => <li key={ index }>{ benefit }</li>)
                }
            </ul>

            <h5 className="text-gray-500 text-sm tracking-wide mt-4 font-medium">
                Schedule:</h5>
            <ul className="jobList">
                { jobSchedule.map((schedule, index) => <li key={ index }>{ schedule }</li>) }
            </ul>

            <h5 className="text-gray-500 text-sm tracking-wide mt-4 font-medium">
                Supplemental pay types:</h5>
            <ul className="jobList">

                {
                    supplementary?.map((sup, index) => <li key={ index }>{ sup }</li>)
                }
            </ul>


        </div >
    )
}

export default AboutTheJob