import React from "react";
import "./style.scss";

function StatsDetailListItem(props) {
  return (
    <div className="adminclassroom-statsdetail-item pr-1 pl-1">
      <div className="adminclassroom-statsdetail-item-personinfo">
        <img
          src={props.statsDetailListItem.avatar}
          className="adminclassroom-statsdetail-item-personinfo-avatar"
        />
        <div className="adminclassroom-statsdetail-item-personinfo-name">
          {props.statsDetailListItem.name}
        </div>
      </div>
      <div className="adminclassroom-statsdetail-item-personinfo-mail">
        {props.statsDetailListItem.mail}
      </div>
      <div className="adminclassroom-statsdetail-item-personinfo-date">
        {props.statsDetailListItem.start_date}
      </div>
      <div className="adminclassroom-statsdetail-item-personinfo-btnstatus">
        Incomplete
      </div>
    </div>
  );
}

export default StatsDetailListItem;
