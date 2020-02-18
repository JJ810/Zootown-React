import React, { useEffect, useState } from "react";
import { Menu, Dropdown, Button, Icon, message } from "antd";
import ReactPlayer from "react-player";
import { Player } from "video-react";
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
import ImgCheck from "./../../assets/membership.png";
import ImgBonus from "./../../assets/icons/bonus.png";
import ImgTeacher from "./../../assets/teacher.png";
import "../../assets/css/course.scss";

export default function Course4() {
  return (
    <div className="container">
      <div className="course1-section1">
        <img src={ImgCheck} className="course1-section1-imgcheck" />
        <div className="course1-section1-stick-enable"></div>
        <div className="course1-section1-stick-disable"></div>
        <div className="course1-section1-stick-disable"></div>
        <img src={ImgBonus} className="course1-section1-i" />
      </div>
      <div className="container course1-section2 ">
        <ReactPlayer
          url="https://vimeo.com/243556536"
          className="react-player"
          playing
          width="100%"
        />
      </div>
      <div className="course1-section3">
        <div className="course1-section3-title">USER EXPEREINCE</div>
        <div className="course1-section3-desp">
          This role will play an important role in growing our international
          network of content creators. Working within a small team, you’ll
          execute on a range of campaigns that will attract a high calibre of
          freelance talent into our Network. You’ll then use your organisation
          skills to ensure all applicants are screened in an efficient yet
          professional manner. The right person for this role gets excited about
          running large-scale talent attraction campaigns, but also enjoys
          directly sourcing and approaching candidates for specific project
          briefs.
        </div>
        <div className="course1-section3-desp">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
        <div className="course1-section3-title">
          WHY IS USER EXPERIENCE IMPORTANT?
        </div>
        <div className="course1-section3-desp">
          This role will play an important role in growing our international
          network of content creators. Working within a small team, you’ll
          execute on a range of campaigns that will attract a high calibre of
          freelance talent into our Network. You’ll then use your organisation
          skills to ensure all applicants are screened in an efficient yet
          professional manner. The right person for this role gets excited about
          running large-scale talent attraction campaigns, but also enjoys
          directly sourcing and approaching candidates for specific project
          briefs.
        </div>
        <div className="course1-section3-desp">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
        <div className="course1-section3-title">
          WHY IS USER EXPERIENCE IMPORTANT?
        </div>
        <div className="course1-section3-desp">
          This role will play an important role in growing our international
          network of content creators. Working within a small team, you’ll
          execute on a range of campaigns that will attract a high calibre of
          freelance talent into our Network. You’ll then use your organisation
          skills to ensure all applicants are screened in an efficient yet
          professional manner. The right person for this role gets excited about
          running large-scale talent attraction campaigns, but also enjoys
          directly sourcing and approaching candidates for specific project
          briefs.
        </div>
        <div className="course1-section3-desp">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
      </div>
      <div className="course1-section4">
        <a href="/course2" className="course1-section4-nextbtn">
          NEXT
        </a>
      </div>
      <div className="course1-section5 mt-5">
        <div className="course1-section5-teacher-photo">
          <div className="course1-section5-teacher-photo-title">Teacher</div>
          <img src={ImgTeacher} />
        </div>
        <div className="course1-section5-teacher-about">
          <div className="course1-section5-teacher-about-title">
            Reggie Banigo
          </div>
          <div className="course1-section5-teacher-about-desp">
            Reggie Banigo is a famous actor who helps develop web experience for
            larger organisation across London
          </div>
        </div>
      </div>
    </div>
  );
}
