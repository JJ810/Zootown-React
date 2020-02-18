import React from "react";
import StatsDetailListItem from "./item";
const detailstats_data = [
  {
    id: "1",
    avatar: "https://api.adorable.io/avatars/96/abott@adorable.png",
    name: "Karl Fohn",
    mail: "Example@aol.com",
    start_date: "23.10.2018"
  },
  {
    id: "2",
    avatar:
      "https://www.stickees.com/files/avatars/girl-avatars/1672-blonde-hair-girl.png",
    name: "Karl Fohn",
    mail: "Example@aol.com",
    start_date: "23.10.2018"
  },
  {
    id: "3",
    avatar:
      "https://www.stickees.com/files/avatars/girl-avatars/1694-girl-bunny-heart-sticker.png",
    name: "Karl Fohn",
    mail: "Example@aol.com",
    start_date: "23.10.2018"
  },
  {
    id: "4",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNCf8ypR84btbxfXV9tMg5dGepx6Q4kiW0vXTCZj-MwiKXYzcv1w&s",
    name: "Karl Fohn",
    mail: "Example@aol.com",
    start_date: "23.10.2018"
  },
  {
    id: "5",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwtEmet0eKi9qR6CDBXYXpGFbWqHe4O3x3tHyEq-WhdLe1mfqZ&s",
    name: "Karl Fohn",
    mail: "Example@aol.com",
    start_date: "23.10.2018"
  }
];

function StatsDetailList() {
  const statsdetaillist = detailstats_data.map(item => (
    <StatsDetailListItem
      key={item.id}
      statsDetailListItem={item}
    ></StatsDetailListItem>
  ));
  return (
    <div>
      <div>
        <div className="adminclassroom-statsdetail-header">
          <div className="adminclassroom-statsdetail-header-cell">
            <div className="adminclassroom-statsdetail-header-cell-label">
              COURSEWORK NAME
            </div>
            <div className="adminclassroom-statsdetail-header-cell-value">
              User Experience
            </div>
          </div>
          <div className="adminclassroom-statsdetail-header-cell">
            <div className="adminclassroom-statsdetail-header-cell-label">
              TOPIC
            </div>
            <div className="adminclassroom-statsdetail-header-cell-value">
              Design
            </div>
          </div>
          <div className="adminclassroom-statsdetail-header-cell">
            <div className="adminclassroom-statsdetail-header-cell-label">
              SKILLS DEVELOPED
            </div>
            <div className="adminclassroom-statsdetail-header-cell-value">
              UX, DESIGN
            </div>
          </div>
          <div className="adminclassroom-statsdetail-header-cell">
            <div className="adminclassroom-statsdetail-header-cell-label">
              STARTED
            </div>
            <div className="adminclassroom-statsdetail-header-cell-value">
              12
            </div>
          </div>
          <div className="adminclassroom-statsdetail-header-cell">
            <div className="adminclassroom-statsdetail-header-cell-label">
              INCOMPLETE
            </div>
            <div className="adminclassroom-statsdetail-header-cell-value">
              5
            </div>
          </div>
          <div className="adminclassroom-statsdetail-header-cell">
            <div className="adminclassroom-statsdetail-header-cell-label">
              COMPLETED
            </div>
            <div className="adminclassroom-statscourse-item-cell-value">20</div>
          </div>
        </div>
      </div>
      <div className="adminclassroom-statsdetail-subheader mt-5">
        <div className="adminclassroom-statsdetail-subheader-label">
          CANDIDATE NAME
        </div>
        <div className="adminclassroom-statsdetail-subheader-label">EMAIL</div>
        <div className="adminclassroom-statsdetail-subheader-section mr-2">
          <div className="adminclassroom-statsdetail-subheader-label">
            COURSE START
          </div>
          <div className="adminclassroom-statsdetail-subheader-label">DATE</div>
        </div>
        <div className="adminclassroom-statsdetail-subheader-label mr-4">
          STATUS
        </div>
      </div>
      <div>{statsdetaillist}</div>
    </div>
  );
}

export default StatsDetailList;
