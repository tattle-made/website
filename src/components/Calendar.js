import React, { useEffect } from "react";
import * as d3 from "d3";


/**
 * Calendar component renders a heatmap-style calendar using D3.js
 * to visualize blog post frequency per day across multiple years.
 *
 * @component
 *
 * @param {Object} props - Component props.
 * @param {Object[]} props.data - Array of blog post objects.
 * @param {string} props.data[].date - ISO string of post date (e.g., "2025-01-17").
 *
 * @returns {JSX.Element} A responsive calendar heatmap of blog activity.
 *
 * @remarks
 * Uses `d3.scaleLinear` to color days by post count.
 * Clears previous SVGs before rendering new ones.
 * Shows tooltip on hover with post details.
 */



const Calendar = ({ data }) => {
  const startYear = d3.min(data, (d) => new Date(d.date).getFullYear());
  const endYear = d3.max(data, (d) => new Date(d.date).getFullYear());
  const years = Array.from(
    { length: endYear - startYear + 1 },
    (_, i) => startYear + i
  ).reverse();

  useEffect(() => {
    years.forEach((year) => {
      const width = 130; // Adjusted to accommodate all days, including Sunday
      const cellSize = 16;

      const weekdays = ["M", "T", "W", "T", "F", "S", "S"];
      const container = d3.select(`#calendar-${year}`);

      // Remove previous calendar
      container.selectAll("svg").remove();

      const processedData = d3.rollups(
        data,
        (v) => v.length,
        (d) => d3.timeFormat("%Y-%m-%d")(new Date(d.date))
      );

      const colorScale = d3
        .scaleLinear()
        .domain([0, d3.max(processedData, (d) => d[1] || 0)]) // 0 to max number of posts
        .range([
          d3.rgb("#7d4e70").brighter(1.5),
          d3.rgb("#7d4e70"),
          d3.rgb("#7d4e70").darker(1),
        ]); // Lighter shades for fewer posts, darker for more

      const months = d3.timeMonths(new Date(year, 0, 1), new Date(year + 1, 0, 1));

      months.forEach((month) => {
        const monthStart = d3.timeMonth(month);
        const daysInMonth = d3.timeDays(
          monthStart,
          d3.timeMonth.offset(monthStart, 1)
        );

        const svg = container
          .append("svg")
          .attr("width", width)
          .style("margin", "3px")
          .append("g")
          .attr("transform", "translate(10, 30)");

        const firstDayOfMonth = monthStart.getDay();
        const numRows = Math.ceil((daysInMonth.length + firstDayOfMonth) / 7);
        const height = cellSize * numRows + 30;

        svg.attr("height", height);

        svg
          .append("text")
          .attr("x", width / 2)
          .attr("y", -10)
          .attr("text-anchor", "middle")
          .style("font-size", "12px")
          .style("font-weight", "bold")
          .style("fill", "#7d4e70")
          .text(d3.timeFormat("%B")(month));

        svg
          .selectAll(".weekday")
          .data(weekdays)
          .enter()
          .append("text")
          .attr("class", "weekday")
          .attr("x", (d, i) => i * cellSize)
          .attr("y", 15)
          .text((d) => d)
          .attr("font-size", "8px")
          .attr("fill", "#333");

        svg
          .selectAll(".day")
          .data(daysInMonth)
          .enter()
          .append("rect")
          .attr("class", "day")
          .attr("width", cellSize)
          .attr("height", cellSize)
          .attr("x", (d) => d.getDay() * cellSize)
          .attr("y", (d, i) => Math.floor((i + firstDayOfMonth) / 7) * cellSize + 25)
          .attr("fill", (d) => {
            const formattedDate = d3.timeFormat("%Y-%m-%d")(d);
            const blogPost = processedData.find((post) => post[0] === formattedDate);
            return blogPost ? colorScale(blogPost[1]) : "#fff";
          })
          .attr("stroke", "#ccc")
          .attr("stroke-width", 1)
          .style("cursor", "pointer")
          .on("mouseenter", function (event, d) {
            const formattedDate = d3.timeFormat("%Y-%m-%d")(d);
            const blogPosts = data.filter(
              (post) =>
                d3.timeFormat("%Y-%m-%d")(new Date(post.date)) === formattedDate
            );

            if (blogPosts.length) {
              const tooltip = d3
                .select("#calendar-container")
                .append("div")
                .attr("class", "tooltip")
                .style("position", "absolute")
                .style("background", "#333")
                .style("color", "#fff")
                .style("padding", "5px")
                .style("border-radius", "4px")
                .style("visibility", "visible")
                .html(`
                  <div><strong>Date:</strong> ${formattedDate}</div>
                  <div><strong>Blog Posts:</strong></div>
                  ${blogPosts.map((post) => `<div>${post.name}</div>`).join("")}
                `);

              tooltip
                .style("top", `${event.pageY + 10}px`)
                .style("left", `${event.pageX + 10}px`);
            }
          })
          .on("mouseleave", () => {
            d3.select(".tooltip").remove();
          });
      });
    });
  }, [data, years]);

  return (
    <div className="container mx-auto text-center">
      <div id="calendar-container">
        {years.map((year) => (
          <div key={year} className="flex items-start">
            <div className="w-16 text-right pr-3 text-[#7d4e70] font-bold text-lg">
              {year}
            </div>
            <div id={`calendar-${year}`} className="flex flex-wrap gap-2" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
