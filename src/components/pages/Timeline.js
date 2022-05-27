import React, { useEffect, useState } from "react";
import TimelineItem from "./TimelineItem";

function Timeline() {
  const [timelineData, setTimelineData] = useState([]);

  useEffect(() => {
    fetch(" http://localhost:3004/discoveries")
      .then((r) => r.json())
      .then((data) => setTimelineData(data));
  }, []);

  const lineDataArray = timelineData
    .map((discovery) => (
      <TimelineItem discovery={discovery} key={discovery.id} />
    ))
    .reverse();

  return <div className="timeline-container">{lineDataArray}</div>;
}

export default Timeline;
