const AboutTheCompany = ({ companyDetails }) => {
    return (
        <>
            <div className="px-4 md:pl-20 py-4 md:py-6">
                <div className="flex items-center gap-4 mb-4">
                    <img src={ companyDetails.companyLogo } className="w-10 rounded-md shadow-sm" alt="" />
                    <h3 className="text-base md:text-xl text-[#3d3d3d]">{ companyDetails.companyName }</h3>
                    <button className="followBtn drop-shadow-sm">Follow</button>
                </div>

                <div className="flex justify-between max-w-3xl">

                    <div className="flex flex-col gap-2 md:gap-4 font-normal">
                        <div className="mt-2">
                            <h5 className="companyDetail">Company size</h5>
                            <p className="text-sm text-gray-800 tracking-wider">{ companyDetails.companySize } Employee</p>
                        </div>
                        <div>
                            <h5 className="companyDetail">Sector</h5>
                            <p className="text-sm text-gray-800 tracking-wider">{ companyDetails.sector }</p>
                        </div>
                        <div>
                            <h5 className="companyDetail">Founded in</h5>
                            <p className="text-sm text-gray-800 tracking-wider">{ companyDetails.foundedIn }</p>
                        </div>
                    </div>


                    <div className="flex flex-col gap-2 md:gap-4 font-normal">
                        <div className="mt-2">
                            <h5 className="companyDetail">Type</h5>
                            <p className="text-sm text-gray-800 tracking-wider" >{ companyDetails.type }</p>
                        </div>
                        <div>
                            <h5 className="companyDetail">Funding</h5>
                            <p className="text-sm text-gray-800 tracking-wider" >{ companyDetails.funding }</p>
                        </div>
                        <div>
                            <h5 className="companyDetail">Founded By</h5>
                            <div className="text-sm text-gray-800 tracking-wider">
                                {
                                    companyDetails.founders.map((founder, index) => {
                                        return <a href={ `https://google.com/search?q=${founder}` } key={ index } target="_blank" > { founder }</a>
                                    })
                                }
                            </div>
                        </div>
                    </div>

                </div>

                <a href="#" className="text-xs text-gray-400 underline inline-block mt-6">Report this listing</a>
            </div >
        </>
    )
}

export default AboutTheCompany