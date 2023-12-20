import React from "react";
import { Buttons } from "./buttons.js";

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
