import React from "react";
import { Link } from "react-router-dom";

const TimelineItem = ({ discovery }) => {
  const { location, date, wellName, reservoir, link } = discovery;

  return (
    <div className="timeline-item">
      <div className="timeline-item-content">
        <span className="location">{location}</span>
        <time>{date}</time>
        <p>{wellName}</p>
        <span>{reservoir}</span>
        <a
          className="article-link"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Click to read more
        </a>
      </div>
    </div>
  );
};

export default TimelineItem;
