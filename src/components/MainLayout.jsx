import AboutTheCompany from "./AboutTheCompany"
import AboutTheJob from "./AboutTheJob"
import JobRequirement from "./JobRequirement"
import JobTitle from "./JobTitle"
import JobAction from "./JobAction"
import Quote from "./Quote"

const MainLayout = () => {
  return (
    <div>
      <div className="py-4 md:py-6">
        <JobTitle />
        <JobRequirement />
        <AboutTheJob />
        <AboutTheCompany />
      </div>
      {/* <JobAction /> */ }
      {/* <Quote /> */ }
    </div>
  )
}

export default MainLayout