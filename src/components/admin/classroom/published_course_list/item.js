import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "./style.scss";

function PublishedCourseListItem(props) {
  const handleDisable = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to remove this course",
      icon: "warning",
      allowOutsideClick: false,
      showConfirmButton: true,
      closeOnConfirm: true,
      closeOnCancel: true,
      showCancelButton: true,
      confirmButtonText: "OK",
      // confirmButtonColor: '#3085d6',
      cancelButtonText: "Cancel",
      //cancelButtonColor: '#d33',
      confirmButtonText: "Yes, remove it!",
      allowEscapeKey: true,
      showLoaderOnConfirm: false
    }).then(result => {
      if (result.value) {
        Swal.fire("Removed!", "Selected course has been removed.", "success");
      }
    });
  };

  return (
    <div className="adminclassroom-publishedcourse-item pl-1 pr-1">
      <div className="adminclassroom-publishedcourse-item-section1">
        <img
          src={props.publishedCourseListItem.img}
          className="adminclassroom-publishedcourse-item-section1-img"
        />
        <div className="adminclassroom-publishedcourse-item-section1-text">
          {props.publishedCourseListItem.name}
        </div>
      </div>
      <div className="adminclassroom-publishedcourse-item-section2">
        {props.publishedCourseListItem.start_date}
      </div>
      <div className="adminclassroom-publishedcourse-item-section3">
        <Link to="/admin-classroom-editcoursepage">
          <div className="adminclassroom-publishedcourse-item-section3-btnedit">
            Edit Course
          </div>
        </Link>

        <div
          className="adminclassroom-publishedcourse-item-section3-btndisable"
          onClick={handleDisable}
        >
          Disable Course
        </div>
      </div>
    </div>
  );
}

export default PublishedCourseListItem;
