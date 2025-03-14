"use client";

import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import GitHubCalendar from "github-calendar";
import "github-calendar/dist/github-calendar.css"; 
import { RevealOnScroll} from "../components/RevealOnScroll"

function GithubGraph({ username }) {
  const calendarRef = useRef(null);

  useEffect(() => {
    if (calendarRef.current) {
      GitHubCalendar(calendarRef.current, username, {
        responsive: true,
        tooltips: true,
        global_stats: false, // Keeps it simple
      });
    }
  }, [username]);

  return (
    <RevealOnScroll>
    <div className="flex justify-center items-center">
      <div className="p-4 bg-gray-800 text-white rounded-lg shadow-lg w-full max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center text-sky-400">GitHub Contributions</h2>
        
        <div
          ref={calendarRef}
          className="github-calendar bg-black/60 p-4 rounded-lg shadow-md overflow-hidden border border-gray-700"
        ></div>
      </div>
      </div>
      </RevealOnScroll>
  );
}

GithubGraph.propTypes = {
  username: PropTypes.string.isRequired,
};

export default GithubGraph;
