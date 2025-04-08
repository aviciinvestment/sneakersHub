import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";
import star from "./assets/illustration-five-stars.webp";
import createpost from "./assets/illustration-create-post.webp";
import Schedule from "./assets/illustration-schedule-posts.webp";
import manage from "./assets/illustration-multiple-platforms.webp";
import maintain from "./assets/illustration-consistent-schedule.webp";
import grow from "./assets/illustration-grow-followers.webp";
import audience from "./assets/illustration-audience-growth.webp";
import ai from "./assets/illustration-ai-content.webp";

function App() {
  return (
    <section>
      <Createpost />
      <Socialmedia />
      <Ai />
      <Manage />
      <Maintain />
      <Audience />
      <Growth />
      <Schedules />
    </section>
  );
}
function Createpost() {
  return (
    <div className="container1">
      <div>
        <h1>
          Create and <br />
          schedule content
          <br /> <span>quicker.</span>
        </h1>
      </div>
      <img src={createpost} alt="star" />
    </div>
  );
}

function Schedules() {
  return (
    <div className="container4">
      <div>
        <h1>
          Schedule to
          <br /> social media.
        </h1>
      </div>
      <div>
        <img src={Schedule} alt="star" />
        <p>
          optimize post timings
          <br /> to publish contant at
          <br /> the perfect time <br />
          for audience
        </p>
      </div>
    </div>
  );
}

function Socialmedia() {
  return (
    <div className="container2">
      <div>
        <h1>
          Social Media<span>10x</span>
          <br /> Faster with AI
        </h1>
      </div>
      <div>
        <img src={star} alt="star" />
        <p>Over 4,000 5-star reviews</p>
      </div>
    </div>
  );
}

function Manage() {
  return (
    <div className="container5">
      <img src={manage} alt="star" />
      <h1>
        Manage
        <br /> multiple <br />
        accounts and
        <br /> platforms
      </h1>
    </div>
  );
}

function Maintain() {
  return (
    <div className="container6">
      <h1>
        Maintain a<br /> consistent
        <br /> posting
        <br /> schedule.
      </h1>
      <img src={maintain} alt="star" />
    </div>
  );
}

function Audience() {
  return (
    <div className="container7">
      <h1>>56%</h1>
      <p>faster audience growth</p>
      <img src={audience} alt="star" />
    </div>
  );
}

function Growth() {
  return (
    <div className="container8">
      <img src={grow} alt="star" />
      <h1>
        Grow followers
        <br /> with non-stop <br />
        content.
      </h1>
    </div>
  );
}
function Ai() {
  return (
    <div className="container3">
      <h1>Write your content using AI.</h1>
      <img src={ai} alt="star" />
    </div>
  );
}
//react v18
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
