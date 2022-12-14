import React from "react";
import data from "../Data/data.json";

const Timeline = () => {
  return (
    <div id="timeline">
      <h3 className="">TimeLines</h3>
      {/* // bg-dark text-light  d-flex justify-content-around w-70 p-5 */}
      <div className="timelineBox">
        {data.Projects.map((item, index) => (
          <TimelineItem
            heading={item.title}
            text={item.date}
            index={index}
            key={item.title}
          />
        ))}
      </div>
    </div>
  );
};

const TimelineItem = ({ heading, text, index }) => (
  <div
    className={`timelineItem ${
      index % 2 === 0 ? "lefttimeLine" : "righttimeLine"
    }   `}
  >
    <h2>{heading} </h2>
    <p>{text}</p>
  </div>
);

export default Timeline;
