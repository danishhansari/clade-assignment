import figmaIcon from "../assets/figma.png"
import adobeIllustratorIcon from "../assets/adobeIllustrator.png"
import adobeXdIcon from "../assets/adobeXd.png"
import SkillItem from "../utils/SkillItem"

const JobRequirement = () => {
    return (
        <div className="flex flex-col md:flex-row border-b px-4 md:pl-20 py-2 md:py-6 gap-8 md:gap-32">

            <div>
                <h2 className="text-sm md:text-md text-gray-500 mb-2 font-medium">Skilled Required</h2>
                <div className="flex md:flex-col flex-wrap gap-2">
                    <SkillItem image={ figmaIcon } skill={ "Figma" } />
                    <SkillItem image={ adobeIllustratorIcon } skill={ "Adobe Illustrator" } />
                    <SkillItem image={ adobeXdIcon } skill={ "Adobe XD" } />
                </div>
            </div>


            <div className="flex gap-8 md:gap-32 overflow-auto">
                <div>
                    <h2 className="text-sm md:text-md text-gray-500 mb-2 font-medium text-nowrap">Preferred Language</h2>
                    <div>
                        <p className="text-gray-700">English</p>
                    </div>
                </div>

                <div>
                    <h2 className="text-sm md:text-md text-gray-500 mb-2 font-medium">Type</h2>
                    <div>
                        <p className="text-gray-700 text-nowrap">Full time</p>
                    </div>
                </div>

                <div>
                    <h2 className="text-sm md:text-md text-gray-500 mb-2 font-medium text-nowrap">Years of Experience</h2>
                    <div>
                        <p className="text-gray-700 text-nowrap">3+ Years of Experience</p>
                    </div>
                </div>


            </div>


        </div>
    )
}

export default JobRequirement