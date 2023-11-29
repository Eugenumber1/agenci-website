import { Widget } from "@typeform/embed-react";
import React from "react";
import { Buttons } from "./buttons.js";

const Typeform = () => {
  return <Widget id="tPgi0YGC" className="myTypeform" />;
};

// export default function Home() {
//   return (
//     <div className="homePage">
//       <h1>Welcome to your AI solutions</h1>
//       <p>
//         AgencI is a first of a kind Artificial Intelligence development studio.
//         We work with research and development of different Machine Learning
//         projects.
//       </p>
//       <Typeform />
//       <p>Please fill in the typeform!</p>
//     </div>
//   );
// }

export default function Home() {
  return (
    <div>
      <p className="p">
        We are not just building AI, we are cultivating collaboration
      </p>
      <p className="welcome-to-the-place">
        <span className="span">Welcome to the place where human </span>
        <span className="text-wrapper-5">agency</span>
        <span className="span">
          {" "}
          is empowered with machine intelligence, creating human-centric AI
          applications
        </span>
      </p>
      <div className="CTA">
        <Buttons
          className="main-cta"
          text="Book a Call"
          type="primary"
          onClick={() =>
            (window.location.href = "https://calendly.com/yevhenii-budnyk")
          }
        />
        <Buttons
          className="secondary-cta"
          text1="Collaborate with Us"
          type="secondary"
          onClick={() =>
            (window.location.href =
              "https://1qjcn52krxc.typeform.com/to/tPgi0YGC")
          }
        />
      </div>
    </div>
  );
}
