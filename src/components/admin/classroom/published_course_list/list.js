import React from "react";
import PublishedCourseListItem from "./item";
import Img_CourseStat from "./../../../../assets/temp_coursestat.png";
const publishedcourse_data = [
  {
    id: "1",
    img: Img_CourseStat,
    name: "UX Design",
    start_date: "23.10.2018"
  },
  {
    id: "2",
    img: Img_CourseStat,
    name: "UX Design",
    start_date: "23.10.2018"
  },
  {
    id: "3",
    img: Img_CourseStat,
    name: "UX Design",
    start_date: "23.10.2018"
  },
  {
    id: "4",
    img: Img_CourseStat,
    name: "UX Design",
    start_date: "23.10.2018"
  },
  {
    id: "5",
    img: Img_CourseStat,
    name: "UX Design",
    start_date: "23.10.2018"
  }
];

function PublishedCourseList() {
  const publishedCourseList = publishedcourse_data.map(item => (
    <PublishedCourseListItem
      key={item.id}
      publishedCourseListItem={item}
    ></PublishedCourseListItem>
  ));
  return <div>{publishedCourseList}</div>;
}

export default PublishedCourseList;
