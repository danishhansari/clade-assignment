import atlassianIcon from "../assets/atlassian.png"
const AboutTheCompany = () => {
    return (
        <>
            <div className="flex items-center">
                <img src={ atlassianIcon } alt="" />
                <h3>Atlassian</h3>
                <button>Follow</button>
            </div>
            <div className="flex justify-between items-center">
                <div className="flex flex-col">
                    <div>
                        <h5>Company size</h5>
                        <p>1k - 2k Employee</p>
                    </div>
                    <div>
                        <h5>Sector</h5>
                        <p>Information Technology, Infrastructure</p>
                    </div>
                    <div>
                        <h5>Founded in</h5>
                        <p>2019</p>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div>
                        <h5>Type</h5>
                        <p>Private</p>
                    </div>
                    <div>
                        <h5>Funding</h5>
                        <p>Bootstrapped</p>
                    </div>
                    <div>
                        <h5>Founded By</h5>
                        <a href="">Scott Farquhar</a>
                        <a href="">Mike Cannan-Brookes</a>
                    </div>
                </div>

            </div>
        </>
    )
}

export default AboutTheCompany