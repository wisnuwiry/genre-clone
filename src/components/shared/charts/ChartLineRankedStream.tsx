import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

interface DataLine {
  color: string;
  genre: string;
  items: DataPoint[];
  animate?: boolean;
}

interface DataPoint {
  date: Date;
  rank: number;
}

interface Props {
  data: DataLine[];
  minRank: number;
  maxRank: number;
  xLabels?: { [key: number]: string }; // Custom labels for the x-axis (date)
  yLabels?: { [key: number]: string }; // Custom labels for the y-axis (rank)
  animate?: boolean;
}
export default function ChartLineRankedStream({
  data,
  minRank,
  maxRank,
  xLabels = {},
  yLabels = {},
  animate = true,
}: Props) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    const width = 600;
    const height = 650;

    svg
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("preserveAspectRatio", "xMidYMid meet");

    const x = d3
      .scaleTime()
      .domain(
        d3.extent(
          data.flatMap((d) => d.items),
          (d) => d.date
        ) as [Date, Date]
      )
      .range([0, width]);

    const y = d3.scaleLinear().domain([maxRank, minRank]).range([height, 0]);

    const line = d3
      .line<DataPoint>()
      .x((d) => x(d.date))
      .y((d) => y(d.rank))
      .curve(d3.curveLinear);

    svg.selectAll("*").remove();

    // Draw grid lines
    const uniqueRanks = Object.keys(yLabels).map(Number);
    const uniqueYears = Array.from(
      new Set(data.flatMap(d => d.items.map(point => point.date.getFullYear())))
    );

    uniqueRanks.forEach((rank) => {
      if (rank >= minRank && rank <= maxRank) {
        svg
          .append("line")
          .attr("x1", 0)
          .attr("x2", width)
          .attr("y1", y(rank))
          .attr("y2", y(rank))
          .style("stroke", "#878787")
          .style("stroke-width", 1)
          .style("stroke-dasharray", "4,4");
      }
    });

    // Draw lines
    data.forEach((lineData) => {
      const path = svg
        .append("path")
        .data([lineData.items])
        .attr("class", "line")
        .attr("d", line)
        .style("fill", "none")
        .style("stroke", lineData.color)
        .style("stroke-width", "3px")
        .style("opacity", 0.9);

      if (animate && lineData.animate !== false) {
        path
          .transition()
          .duration(2000)
          .attrTween("stroke-dasharray", function () {
            const length = this.getTotalLength();
            return (t: number) => `${t * length},${length * (1 - t)}`;
          });
      }

      // Start and End Point Labels
      const start = lineData.items[0];
      const end = lineData.items[lineData.items.length - 1];

      svg
        .append("circle")
        .attr("cx", x(start.date))
        .attr("cy", y(start.rank))
        .attr("r", 6)
        .style("fill", lineData.color);

      svg
        .append("circle")
        .attr("cx", x(end.date))
        .attr("cy", y(end.rank))
        .attr("r", 6)
        .style("fill", lineData.color);

      svg
        .append("text")
        .attr("x", x(start.date))
        .attr("y", y(start.rank) - 10)
        .text(`#${start.rank}`)
        .style("font-size", "14px")
        .style("fill", lineData.color)
        .attr("class", "font-sans font-semibold");

      svg
        .append("text")
        .attr("x", x(end.date))
        .attr("y", y(end.rank) - 10)
        .text(`#${end.rank} ${lineData.genre}`)
        .style("font-size", "16px")
        .style("fill", lineData.color)
        .attr("class", "font-sans font-bold");
    });

    // Add x-axis with custom labels
    const xAxis = d3
      .axisBottom(x)
      .tickValues(uniqueYears.map(year => new Date(year, 0, 1)))
      .tickFormat(d => {
        const year = (d as Date).getFullYear();
        return xLabels[year] || '';
      });

    svg
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(xAxis)
      .attr("class", "x-axis");

    svg
      .selectAll(".x-axis text")
      .style("font-size", "14px")
      .style("color", "#6d6d6d")
      .attr("class", "font-sans font-semibold");

    // Add y-axis with custom labels
    const yAxis = d3.axisLeft(y)
    .tickValues(Object.keys(yLabels).map(Number))
    .tickFormat((d) => yLabels[d as number] ?? "");

    svg.append("g").call(yAxis).attr("class", "y-axis");

    svg
      .selectAll(".y-axis text")
      .style("font-size", "14px")
      .style("color", "#6d6d6d")
      .attr("class", "font-sans font-semibold");

    // Remove base line (horizontal & vertical)
    svg.selectAll("g .domain").remove();
    svg.selectAll(".x-axis .tick line").remove();
    svg.selectAll(".y-axis .tick line").remove();
    svg.selectAll(".grid .tick text").remove();
  }, [data, minRank, maxRank, xLabels, yLabels, animate]);

  return <svg ref={svgRef} className="overflow-visible" />;
}
