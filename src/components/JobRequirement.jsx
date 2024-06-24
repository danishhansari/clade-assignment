import figmaIcon from "../assets/figma.png"
import adobeIllustratorIcon from "../assets/adobeIllustrator.png"
import adobeXdIcon from "../assets/adobeXd.png"

const JobRequirement = () => {
    return (
        <div className="flex items-center">
            <div>
                <h2>Skilled Required</h2>
                <p>
                    <img src={ figmaIcon } alt="" />
                    <p>Figma</p>
                </p>
                <p>
                    <img src={ adobeIllustratorIcon } alt="" />
                    <p>Adobe Illustrator</p>
                </p>
                <p>
                    <img src={ adobeXdIcon } alt="" />
                    <p>Adobe</p>
                </p>
            </div>

            <div>
                <h2>Preferred Language</h2>
                <div>
                    <p>English</p>
                </div>
            </div>

            <div>
                <h2>Type</h2>
                <div>
                    <p>Full time</p>
                </div>
            </div>

            <div>
                <h2>Years of Experience</h2>
                <div>
                    <p>3+ Years of Experience</p>
                </div>
            </div>
        </div>
    )
}

export default JobRequirement