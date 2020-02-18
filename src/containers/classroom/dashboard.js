import React, { useEffect, useState } from "react";

import classnames from "classnames";
import "../../assets/css/classroompage.scss";

const Index = props => {
  const { text, value } = props;
  return (
    <div className="index-box">
      <div className="index-box-text">{text}</div>
      <div className="index-box-value">{value}</div>
    </div>
  );
};

const Figure = props => {
  const { url, desp } = props;
  return (
    <div className="dashboard-figure">
      <div className="dashboard-figure-content">
        <img src={url} alt="" style={{ width: "100%" }} />
      </div>
      <div className="dashboard-figure-desp">{desp}</div>
    </div>
  );
};

const CourseTable = props => {
  const { data } = props;
  return (
    <div className="course-table">
      <div className="course-table-header">
        <div className="course-table-cell">COURSE</div>
        <div className="course-table-cell">STATUS</div>
        <div className="course-table-cell">SKILL</div>
      </div>
      <div className="course-table-content">
        {data.map(row => {
          return (
            <div className="course-table-row">
              <div className="course-table-cell">{row.course}</div>
              <div className="course-table-cell">
                <div
                  className="course-table-cell-status"
                  style={{
                    backgroundColor:
                      row.status === "Incomplete"
                        ? "#E00718"
                        : row.status === "Completed"
                        ? "#7ED321"
                        : "#FE8708"
                  }}
                >
                  {row.status}
                </div>
              </div>
              <div className="course-table-cell">
                <div className="course-table-cell-skill">{row.skill}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default function Dashboard(props) {
  const indexValues = [
    { text: "Courses Completed", value: 7 },
    { text: "New Skills Developed", value: 3 },
    { text: "Case Studies Submitted", value: 2 }
  ];

  const figureData = [
    {
      url:
        "https://oc-course.imgix.net/courses/5664336/5664336_teaser_picture_1572517438.jpg%3Fr%3Dpad?auto=compress,format&amp;q=80",
      desp:
        "This role will play an important role in growing our international network of content creators. "
    },
    {
      url:
        "https://oc-course.imgix.net/courses/5664336/5664336_teaser_picture_1572517438.jpg%3Fr%3Dpad?auto=compress,format&amp;q=80",
      desp:
        "This role will play an important role in growing our international network of content creators. "
    },
    {
      url:
        "https://oc-course.imgix.net/courses/5664336/5664336_teaser_picture_1572517438.jpg%3Fr%3Dpad?auto=compress,format&amp;q=80",
      desp:
        "This role will play an important role in growing our international network of content creators. "
    }
  ];

  const courseData = [
    { course: "Junior Designer", status: "Incomplete", skill: "Design" },
    { course: "UI Designer", status: "Completed", skill: "UX" },
    { course: "3D Modeller, V-Ray", status: "Redo", skill: "Microsoft" },
    { course: "Interior Designer", status: "Completed", skill: "Funding" },
    { course: "Interior Designer", status: "Completed", skill: "HTML" }
  ];

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">DASHBOARD</h1>
      <div className="dashboard-section1">
        {indexValues.map(val => {
          return <Index {...val}></Index>;
        })}
      </div>
      <div className="dashboard-section3">
        <div className="dashboard-section3-title">
          NEW COURSES WE THINK YOU WOULD LIKE...
        </div>

        <div className="dashboard-section3-content">
          {figureData.map(figure => {
            return <Figure {...figure}></Figure>;
          })}
        </div>
        <div className="mt-5 d-flex justify-content-center">
          <div className="show-more">Show More</div>
        </div>
      </div>
      <div className="dashboard-section4">
        <div className="dashboard-section4-title">STATUS OF COURSES</div>
        <CourseTable data={courseData} />
        <div className="mt-5 d-flex justify-content-center">
          <div className="show-more">Show More</div>
        </div>
      </div>
    </div>
  );
}
