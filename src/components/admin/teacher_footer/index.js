import React from "react";
import UploadImg from "./../../../components/admin/classroom/upload_image";
import "./style.scss";

function TeacherFooter() {
  return (
    <div className="admin-teacherfooter">
      <div className="admin-teacherfooter-teacherlabel">Teacher</div>
      <div className="admin-teacherfooter-main">
        <div>
          <UploadImg />
        </div>
        <div className="admin-teacherfooter-infoContainer">
          <div>
            <input
              type="text"
              className="admin-teacherfooter-infoContainer-name"
              placeholder="
            Teacher Name"
            ></input>
          </div>

          <textarea
            className="admin-teacherfooter-infoContainer-intro"
            placeholder="TEACHER INTRO-Please Add One Line"
            cols="40"
            rows="4"
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default TeacherFooter;
