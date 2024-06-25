import AboutTheCompany from "./AboutTheCompany"
import AboutTheJob from "./AboutTheJob"
import JobRequirement from "./JobRequirement"
import JobTitle from "./JobTitle"
import JobAction from "./JobAction"
import Quote from "../utils/Quote"


// Mock Data 
import { requireSkills, jobDescription, benefits, jobSchedule, companyDetails, jobStatus, companyQuote } from "../utils/data"

const MainLayout = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="py-2 col-span-2 border-r w-full">


        {/* If we get data from external api */ }
        <JobTitle location={ "Delaware, USA" } payRange={ "300k-400k" } designation={ "Senior Product Designer" } postedTime={ "2 days" } status={ true } />

        <JobRequirement skills={ requireSkills } language={ ["English"] } jobType={ ["Full Time"] } experience={ "3+ Years" } />

        <AboutTheJob description={ jobDescription } benefits={ benefits } jobSchedule={ jobSchedule } supplementary={ ["Performance bonus"] } />

        <AboutTheCompany companyDetails={ companyDetails } />

      </div>
      <div className="grid-cols-1 md:mx-auto md:border-r p-6">
        <JobAction jobStatus={ jobStatus } />
        <Quote companyQuote={ companyQuote } />
      </div>
    </div>
  )
}

export default MainLayout