"use client";

import  { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import GitHubCalendar from "github-calendar";
import "github-calendar/dist/github-calendar.css"; // ✅ Ensure CSS is loaded

function GithubGraph({ username }) {
  const calendarRef = useRef(null);

  useEffect(() => {
    if (calendarRef.current) {
      GitHubCalendar(calendarRef.current, username, {
        responsive: true,
        tooltips: true,
      });
    }
  }, [username]);

  return (
    <div className="p-6 bg-gray-900 text-white rounded-lg shadow-lg w-full">
      <h2 className="text-2xl font-bold mb-4 text-center">GitHub Contributions</h2>
      <div
        ref={calendarRef}
        className="github-calendar bg-black/40 p-6 rounded-lg shadow-md min-h-[200px] overflow-hidden"
      ></div>
    </div>
  );
}

GithubGraph.propTypes = {
  username: PropTypes.string.isRequired,
};

export default GithubGraph;
