import React from "react";
import Score from "./Score";
export default (props) => {

    return (
      <div className="Student">
        <h2>{props.name}</h2>
        <p>{props.bio}</p>
        <Score scores={props.scores} />
      </div>
    );
};
