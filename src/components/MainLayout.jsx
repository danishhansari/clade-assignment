import AboutTheCompany from "./AboutTheCompany"
import AboutTheJob from "./AboutTheJob"
import JobRequirement from "./JobRequirement"
import JobTitle from "./JobTitle"
import JobAction from "./JobAction"
import Quote from "./Quote"

const MainLayout = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="py-4 md:py-6 col-span-2 border-r w-full">
        <JobTitle />
        <JobRequirement />
        <AboutTheJob />
        <AboutTheCompany />
      </div>
      <div className="grid-cols-1 md:mx-auto border-r">
        <JobAction />
        {/* <Quote /> */ }
      </div>
    </div>
  )
}

export default MainLayout