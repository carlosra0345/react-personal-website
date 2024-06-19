import Heading from "../components/Heading";
import Dropdown from "./Dropdown";
import Mastercard from "../assets/mastercard.svg";
import TAMU from "../assets/tamu.svg";
import Paycom from "../assets/paycom.svg";
import PYTHON from "../assets/python.svg";
import MATLAB from "../assets/matlab.svg";

const Experience = () => {
  return (
    <div style={{ marginBottom: "10rem" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Heading num={2} title="Work Experience" />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Dropdown
          imageSource={Mastercard}
          imageHeight={50}
          experienceTitle="Mastercard"
          jobTitle="Software Engineer Intern"
          startDate="June 2024"
          endDate="Present"
          content="Spearhead full-stack development initiatives within Mastercard's dynamic platform engineering team. 
          Leverage a robust tech stack including Golang, Node.js, React.js, Kubernetes, and AWS to architect
          and implement our internal developer platform and deployment systems."
          skillIcons={[{image: PYTHON, alt: "Python Programming Language Logo", height: 40}, {image: MATLAB, alt: "Matlab Programming Language Logo", height: 25}]}
        />
        <Dropdown
          imageSource={TAMU}
          imageHeight={70}
          experienceTitle="Texas A&M University"
          jobTitle="Student Research Technician"
          startDate="January 2023"
          endDate="Present"
          content="Currently working under the guidance of Dr. Prabir Daripa for my research regarding the modeling 
          and simulation of methods for enhanced oil recovery. Here I utilized and developed MATLAB programs to perform 
          computation heavy simulations while also implementing a user-interface to provide a more intuitive user experience. 
          I also maintained documentation and performed isolated unit tests before integration into codebase."
          skillIcons={[{image: PYTHON, alt: "Python Programming Language Logo", height: 40}, {image: MATLAB, alt: "Matlab Programming Language Logo", height: 25}]}
        />
        <Dropdown
          imageSource={Paycom}
          imageHeight={50}
          experienceTitle="Paycom"
          jobTitle="Summer Technology Engagement Program"
          startDate="June 2023"
          endDate="July 2023"
          content="Currently working under the guidance of Dr. Prabir Daripa for my research regarding the modeling and simulation of methods for 
          enhanced oil recovery. Here I utilized and developed MATLAB programs to perform computation heavy simulations while also implementing a 
          user-interface to provide a more intuitive user experience. I also maintained documentation and performed isolated unit tests before integration into codebase."
          skillIcons={[{image: PYTHON, alt: "Python Programming Language Logo", height: 40}, {image: MATLAB, alt: "Matlab Programming Language Logo", height: 25}]}
        />
      </div>
    </div>
  );
};

export default Experience;
