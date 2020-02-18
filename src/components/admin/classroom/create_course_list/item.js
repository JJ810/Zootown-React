import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import UploadCoursePhoto from "./../upload_image";
import { newCourse } from "./../../../../actions/course";
import "./style.scss";

const NewCourseListItem = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [coursename, setCoursename] = useState("");
  const [coursetopic, setCoursetopic] = useState("");
  const [coursephoto, setCoursephoto] = useState("");

  const callbackFunction = childData => {
    setCoursephoto(childData);
  };

  function handleClick() {
    console.log(coursename);

    dispatch(newCourse({ coursename, coursetopic, coursephoto }));
    history.push("/admin-classroom-editcoursepage");
  }

  return (
    <div>
      <div className="adminclassroom-createcourse-item pl-1 pr-1">
        <div className="adminclassroom-createcourse-item-cell">
          <div className="adminclassroom-createcourse-item-cell-label">
            COURSEWORK NAME
          </div>
          <input
            type="type"
            className="adminclassroom-createcourse-item-cell-value"
            placeholder="Please enter the course name"
            value={coursename}
            onChange={e => setCoursename(e.target.value)}
          ></input>
        </div>
        <div className="adminclassroom-createcourse-item-cell">
          <div className="adminclassroom-createcourse-item-cell-label">
            PHOTO
          </div>
          <UploadCoursePhoto
            width="150px"
            height="100px"
            parentCallback={callbackFunction}
          />
        </div>
        <div className="adminclassroom-createcourse-item-cell">
          <div className="adminclassroom-createcourse-item-cell-label">
            TOPIC
          </div>
          <input
            type="type"
            className="adminclassroom-createcourse-item-cell-value"
            placeholder="Please enter the topic"
            value={coursetopic}
            onChange={e => setCoursetopic(e.target.value)}
          ></input>
        </div>
        <div className="adminclassroom-createcourse-item-cell">
          <div className="adminclassroom-createcourse-item-cell-label">
            LEVEL
          </div>
          <select>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <div className="adminclassroom-createcourse-item-cell">
          <div className="adminclassroom-createcourse-item-cell-label">
            TIME
          </div>
          <input
            type="number"
            className="adminclassroom-createcourse-item-cell-value"
            placeholder="course hours"
          ></input>
        </div>
        <div className="adminclassroom-createcourse-item-cell">
          <div className="adminclassroom-createcourse-item-cell-label">
            ACTION
          </div>
          <div className="adminclassroom-createcourse-item-action">
            <div
              className="adminclassroom-createcourse-item-create"
              onClick={handleClick}
            >
              Create Course
            </div>
            <div className="adminclassroom-createcourse-item-publish">
              Publish Course
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCourseListItem;
