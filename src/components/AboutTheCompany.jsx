const AboutTheCompany = ({ companyDetails }) => {
    return (
        <>
            <div className="px-4 md:pl-20 py-4 md:py-6">
                <div className="flex items-center gap-4 mb-4">
                    <img src={ companyDetails.companyLogo } className="w-10 rounded-md shadow-sm" alt="" />
                    <h3 className="text-base md:text-xl text-[#3d3d3d]">{ companyDetails.companyName }</h3>
                    <button className="text-[#003788] bg-[#e0ebf9d8] text-8s px-2 py-1 drop-shadow-xs border-[#003788] rounded-md">Follow</button>
                </div>

                <div className="flex justify-between max-w-3xl">

                    <div className="flex flex-col gap-2 md:gap-4 font-normal">
                        <div className="mt-2">
                            <h5 className="text-sm mb-1 text-gray-500 tracking-wide">Company size</h5>
                            <p className="text-sm text-gray-800 tracking-wider">{ companyDetails.companySize } Employee</p>
                        </div>
                        <div>
                            <h5 className="text-sm mb-1 text-gray-500 tracking-wide">Sector</h5>
                            <p className="text-sm text-gray-800 tracking-wider">{ companyDetails.sector }</p>
                        </div>
                        <div>
                            <h5 className="text-sm mb-1 text-gray-500 tracking-wide">Founded in</h5>
                            <p className="text-sm text-gray-800 tracking-wider">{ companyDetails.foundedIn }</p>
                        </div>
                    </div>


                    <div className="flex flex-col gap-2 md:gap-4 font-normal">
                        <div className="mt-2">
                            <h5 className="text-sm mb-1 text-gray-500 tracking-wide">Type</h5>
                            <p className="text-sm text-gray-800 tracking-wider" >{ companyDetails.type }</p>
                        </div>
                        <div>
                            <h5 className="text-sm mb-1 text-gray-500 tracking-wide">Funding</h5>
                            <p className="text-sm text-gray-800 tracking-wider" >{ companyDetails.funding }</p>
                        </div>
                        <div>
                            <h5 className="text-sm mb-1 text-gray-500 tracking-wide">Founded By</h5>
                            <div className="text-sm text-gray-800 tracking-wider">
                                {
                                    companyDetails.founders.map((founder, index) => {
                                        return <a href="#" key={ index }>{ founder }</a>
                                    })
                                }
                            </div>
                        </div>
                    </div>

                </div>

                <a href="#" className="text-xs text-gray-400 underline inline-block mt-6">Report this listing</a>
            </div>
        </>
    )
}

export default AboutTheCompany