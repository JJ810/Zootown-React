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

const Course3 = props => {
  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {};
  }, []);

  return (
    <div className="container">
      <div className="course1-section1">
        <img src={ImgCheck} className="course1-section1-imgcheck" />
        <div className="course1-section1-stick-enable"></div>
        <div className="course1-section1-stick-enable"></div>
        <div className="course1-section1-stick-enable"></div>
        <img src={ImgBonus} className="course1-section1-i" />
      </div>
      <div className="course1-section3">
        <div className="course1-section3-title">
          TRY IT YOURSELF - QUIZ TIME
        </div>
        <div className="course1-section3-desp">
          This role will play an important role in growing our international
          network of content creators. Working within a small team, you’ll
          execute on a range of campaigns that will attract a high calibre of
          freelance talent into our Network. You’ll then use your organisation
          skills to ensure all applicants are screened in an efficient yet
          professional manner.
        </div>
      </div>
      <div className="course3-question-section">
        <div>
          <div className="course3-question-section-title">Question1</div>
          <div className="course3-question-section-quiz">
            How many people have been apart of this project?
          </div>
          <div className="course3-question-section-desp">
            Please choose one answer
          </div>
          <div>
            <div className="course3-question-section-answer">
              <input type="checkbox" />
              <lable className="pl-3">
                How many people have been apart of this project?
              </lable>
            </div>
            <div className="course3-question-section-answer">
              <input type="checkbox" />
              <lable className="pl-3">
                How many people have been apart of this project?
              </lable>
            </div>
            <div className="course3-question-section-answer">
              <input type="checkbox" />
              <lable className="pl-3">
                How many people have been apart of this project?
              </lable>
            </div>
            <div className="course3-question-section-answer">
              <input type="checkbox" />
              <lable className="pl-3">
                How many people have been apart of this project?
              </lable>
            </div>
          </div>
        </div>
        <div>
          <div className="course3-question-section-title">Question1</div>
          <div className="course3-question-section-quiz">
            How many people have been apart of this project?
          </div>
          <div className="course3-question-section-desp">
            Please choose one answer
          </div>
          <div>
            <div className="course3-question-section-answer">
              <input type="checkbox" />
              <lable className="pl-3">
                How many people have been apart of this project?
              </lable>
            </div>
            <div className="course3-question-section-answer">
              <input type="checkbox" />
              <lable className="pl-3">
                How many people have been apart of this project?
              </lable>
            </div>
            <div className="course3-question-section-answer">
              <input type="checkbox" />
              <lable className="pl-3">
                How many people have been apart of this project?
              </lable>
            </div>
            <div className="course3-question-section-answer">
              <input type="checkbox" />
              <lable className="pl-3">
                How many people have been apart of this project?
              </lable>
            </div>
          </div>
        </div>
        <div>
          <div className="course3-question-section-title">Question1</div>
          <div className="course3-question-section-quiz">
            How many people have been apart of this project?
          </div>
          <div className="course3-question-section-desp">
            Please choose one answer
          </div>
          <div>
            <div className="course3-question-section-answer">
              <input type="checkbox" />
              <lable className="pl-3">
                How many people have been apart of this project?
              </lable>
            </div>
            <div className="course3-question-section-answer">
              <input type="checkbox" />
              <lable className="pl-3">
                How many people have been apart of this project?
              </lable>
            </div>
            <div className="course3-question-section-answer">
              <input type="checkbox" />
              <lable className="pl-3">
                How many people have been apart of this project?
              </lable>
            </div>
            <div className="course3-question-section-answer">
              <input type="checkbox" />
              <lable className="pl-3">
                How many people have been apart of this project?
              </lable>
            </div>
          </div>
        </div>
        <div>
          <div className="course3-question-section-title">Question1</div>
          <div className="course3-question-section-quiz">
            How many people have been apart of this project?
          </div>
          <div className="course3-question-section-desp">
            Please choose one answer
          </div>
          <div>
            <div className="course3-question-section-answer">
              <input type="checkbox" />
              <lable className="pl-3">
                How many people have been apart of this project?
              </lable>
            </div>
            <div className="course3-question-section-answer">
              <input type="checkbox" />
              <lable className="pl-3">
                How many people have been apart of this project?
              </lable>
            </div>
            <div className="course3-question-section-answer">
              <input type="checkbox" />
              <lable className="pl-3">
                How many people have been apart of this project?
              </lable>
            </div>
            <div className="course3-question-section-answer">
              <input type="checkbox" />
              <lable className="pl-3">
                How many people have been apart of this project?
              </lable>
            </div>
          </div>
        </div>
      </div>
      <div className="course3-section4">
        <div
          className="course3-section4-nextbtn"
          onClick={() => props.handleClick(2)}
        >
          PREV
        </div>
        <div
          className="course3-section4-submitbtn"
          // onClick={() => props.handleClick(4)}
        >
          <FaCheckCircle size={20} />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SUBMIT
        </div>
      </div>
    </div>
  );
};
export default Course3;
