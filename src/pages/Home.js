import { Widget } from "@typeform/embed-react";

const Typeform = () => {
  return <Widget id="tPgi0YGC" className="myTypeform" />;
};

export default function Home() {
  return (
    <div className="homePage">
      <h1>Welcome to your AI solutions</h1>
      <p>
        AgencI is a first of a kind Artificial Intelligence development studio.
        We work with research and development of different Machine Learning
        projects.
      </p>
      <Typeform />
      <p>Please fill in the typeform!</p>
    </div>
  );
}
