import Skills from "./Skills"

const JobRequirement = ({ skills, language, jobType, experience }) => {
    return (
        <div className="flex flex-col md:flex-row border-b px-4 md:pl-20 py-2 md:py-6 gap-8 md:gap-32">

            <div>
                <h2 className="heading">Skilled Required</h2>

                <Skills skills={ skills } />

            </div>


            <div className="flex gap-8 md:gap-32 overflow-auto">

                <div>
                    <h2 className="heading text-nowrap">Preferred Language</h2>
                    {
                        language.map((lang, index) => <p key={ index } className="text-gray-700">{ lang }</p>)
                    }
                </div>

                <div>
                    <h2 className="heading">Type</h2>
                    {
                        jobType.map((type, index) => <p key={ index } className="text-gray-700 text-nowrap">{ type }</p>
                        )
                    }
                </div>

                <div>
                    <h2 className="heading text-nowrap">Years of Experience</h2>
                    <div>
                        <p className="text-gray-700 text-nowrap">{ experience } of Experience</p>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default JobRequirement