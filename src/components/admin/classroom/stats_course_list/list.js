import React from "react";
import StatsCourseListItem from "./item";

const coursestats_data = [
  {
    id: "1",
    name: "User Experience1",
    topic: "Design",
    skill: "UX, DESIGN",
    start_count: 12,
    incomplete_count: 5,
    complete_count: 20
  },
  {
    id: "2",
    name: "User Experience1",
    topic: "Design",
    skill: "UX, DESIGN",
    start_count: 12,
    incomplete_count: 5,
    complete_count: 20
  },
  {
    id: "3",
    name: "User Experience1",
    topic: "Design",
    skill: "UX, DESIGN",
    start_count: 12,
    incomplete_count: 5,
    complete_count: 20
  },
  {
    id: "4",
    name: "User Experience1",
    topic: "Design",
    skill: "UX, DESIGN",
    start_count: 12,
    incomplete_count: 5,
    complete_count: 20
  },
  {
    id: "5",
    name: "User Experience1",
    topic: "Design",
    skill: "UX, DESIGN",
    start_count: 12,
    incomplete_count: 5,
    complete_count: 20
  }
];

function StatsCourseList() {
  const statscourselist = coursestats_data.map(item => (
    <StatsCourseListItem
      key={item.id}
      statsCourseListItem={item}
    ></StatsCourseListItem>
  ));
  return <div>{statscourselist}</div>;
}

export default StatsCourseList;
