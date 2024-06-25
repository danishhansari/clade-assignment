import figmaIcon from "../assets/figma.png";
import adobeIllustratorIcon from "../assets/adobeIllustrator.png";
import adobeXdIcon from "../assets/adobeXd.png";
import atlassianIcon from "../assets/atlassian.png";
import quoteAuthorIcon from "../assets/quoteAuthor.png";

export const requireSkills = [
  { id: 1, icon: figmaIcon, technology: "Figma" },
  { id: 2, icon: adobeIllustratorIcon, technology: "Adobe Illustrator" },
  { id: 3, icon: adobeXdIcon, technology: "Adobe XD" },
];

export const jobDescription = [
  "Handle the UI/UX research design.",
  "Work on researching on latest web applications designs & trends.",
  "Work on conceptualizing and visualizing.",
  "Work on creating graphics content and other graphic related works.",
];

export const benefits = ["Health insurance", "Provident Fund"];

export const jobSchedule = ["Day shift"];

export const companyDetails = {
  companyLogo: atlassianIcon,
  companyName: "Atlassian",
  companySize: "1k - 2k",
  sector: "Information Technology, Infrastructure",
  foundedIn: 2019,
  type: "Private",
  funding: "Bootstrapped",
  founders: ["Scott Farquhar", "Mike Cannan-Brookes"],
};

export const jobStatus = {
  applicants: 400,
  matches: 100,
  messages: 147,
  views: 800,
};

export const companyQuote = {
  quote: "A quote from Atlassian",
  img: quoteAuthorIcon,
  name: "Name",
  description: "Description",
};
