import React from "react";
import "./School.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faBoxArchive } from "@fortawesome/free-solid-svg-icons";

const Schoolandbox = () => {
  return (
    <div className="infodiv">
      <div className="schooldiv">
        <p className="schoolIcon">
          <FontAwesomeIcon icon={faGraduationCap} />
        </p>
        <input
          className="schoolbox"
          outline="none"
          border="none"
          type="text"
          placeholder="Okul Adı:"
        />
      </div>
      <div className="ballotdiv">
        <p className="boxIcon">
          <FontAwesomeIcon icon={faBoxArchive} />
        </p>
        <input
          className="ballotbox"
          outline="none"
          border="none"
          type="text"
          placeholder="Sandık No:"
        />
      </div>
    </div>
  );
};

export default Schoolandbox;
