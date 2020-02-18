import React, { useEffect, useState } from "react";
import { Menu, Dropdown, Button, Icon, message } from "antd";
import ReactPlayer from "react-player";
import {
  FaSignal,
  FaClock,
  FaCheckCircle,
  FaChevronRight,
  FaChevronDown,
  FaChevronLeft,
  FaSearch
} from "react-icons/fa";
import { times } from "lodash";

import classnames from "classnames";
import "../../assets/css/classroompage.scss";

const menu = (
  <Menu>
    <Menu.Item key="1" className="text-center">
      Topic 1
    </Menu.Item>
    <Menu.Item key="2" className="text-center">
      Topic 2
    </Menu.Item>
    <Menu.Item key="3" className="text-center">
      Topic 3
    </Menu.Item>
  </Menu>
);

const Card = props => {
  const { url, name, desc, difficulty, duration } = props;
  return (
    <div className="task">
      <div className="d-flex">
        <div className="task-video">
          <img src={url} alt="" style={{ width: "100%" }} />
        </div>
        <div className="ml-5">
          <div className="task-user">USER EXPERIENCE</div>
          <div>
            <FaSignal size={20} color={"#4F4D4D"} />{" "}
            <span className="ml-2 mr-4">
              <b>{difficulty}</b>
            </span>
            <FaClock size={20} color={"#4F4D4D"} />{" "}
            <span className="ml-2">
              <b>{duration}MINS</b>
            </span>
          </div>
          <div className="task-desc">{desc}</div>
        </div>
      </div>
      <div className="task-footer">
        <div className="task-name">{name}</div>
        <div className="task-button">
          <FaCheckCircle size={20} />
          <a href="/coursepage">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;START COURSE</a>
        </div>
      </div>
    </div>
  );
};

const TaskTable = props => {
  const { data } = props;
  return (
    <div className="task-table">
      {data.map(task => {
        return <Card {...task} />;
      })}
    </div>
  );
};

const Pagination = props => {
  const { active, first, last } = props;
  return (
    <div className="task-pagination">
      <div className={"task-pagination-button"}>
        <FaChevronLeft size={20} color={"#FED008"} />
      </div>
      {times(last - first + 1, index => {
        return (
          <div
            className={
              "task-pagination-button " +
              (index + first === active ? "active" : "")
            }
          >
            {index + first}
          </div>
        );
      })}
      <div className={"task-pagination-button"}>
        <FaChevronRight size={20} color={"#FED008"} />
      </div>
    </div>
  );
};
export default function Classroom(props) {
  const taskData = [
    {
      url:
        "https://oc-course.imgix.net/courses/5664336/5664336_teaser_picture_1572517438.jpg%3Fr%3Dpad?auto=compress,format&amp;q=80",
      name: "TEACHER - ANDY SMITH",
      desc:
        "This will be a very interested course that will explain how to create user experience thats are. Join in the fun if you would like to understand how to create user experience. ",
      difficulty: "EASY",
      duration: 30
    },
    {
      url:
        "https://oc-course.imgix.net/courses/5664336/5664336_teaser_picture_1572517438.jpg%3Fr%3Dpad?auto=compress,format&amp;q=80",
      name: "TEACHER - ANDY SMITH",
      desc:
        "This will be a very interested course that will explain how to create user experience thats are. Join in the fun if you would like to understand how to create user experience. ",
      difficulty: "EASY",
      duration: 30
    },
    {
      url:
        "https://oc-course.imgix.net/courses/5664336/5664336_teaser_picture_1572517438.jpg%3Fr%3Dpad?auto=compress,format&amp;q=80",
      name: "TEACHER - ANDY SMITH",
      desc:
        "This will be a very interested course that will explain how to create user experience thats are. Join in the fun if you would like to understand how to create user experience. ",
      difficulty: "EASY",
      duration: 30
    },
    {
      url:
        "https://oc-course.imgix.net/courses/5664336/5664336_teaser_picture_1572517438.jpg%3Fr%3Dpad?auto=compress,format&amp;q=80",
      name: "TEACHER - ANDY SMITH",
      desc:
        "This will be a very interested course that will explain how to create user experience thats are. Join in the fun if you would like to understand how to create user experience. ",
      difficulty: "EASY",
      duration: 30
    }
  ];

  return (
    <div className="classroom">
      <h1 className="classroom-title">ZOO TOWN TASKS CLASSROOM</h1>
      <div className="classroom-search">
        <div className="col-md-4">
          <Dropdown overlay={menu}>
            <div className="classroom-search-category">
              <span>Topic</span>
              <FaChevronDown
                className="classroom-search-category-icon"
                size={20}
                color={"#FED008"}
              />
            </div>
          </Dropdown>
        </div>
        <div className="col-md-4 p-2">
          <div>
            <FaSearch type="search" size={25} color={"black"} />
            <input className="ml-3" placeholder="Search for a course" />
          </div>
        </div>
        <div className="col-md-4 p-2">
          <div className="classroom-clear-button">CLEAR FILTERS</div>
        </div>
      </div>
      <div className="mt-5 mb-5">
        <TaskTable data={taskData} />
      </div>
      <Pagination active={1} first={1} last={9} />
    </div>
  );
}
