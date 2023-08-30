import React from "react";

export default function Score(props) {
  return (
    <div className="Scores">
      {props.scores.map((el) => {
        return (
          <div>
            <p>{el.date}</p>
            <p>{el.score}</p>
          </div>
        );
      })}
    </div>
  );
}
