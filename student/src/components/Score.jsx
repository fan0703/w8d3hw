import React from "react";
export default (props)=>{
  return(
    <div className="Scores">
      {props.scores.map((el)=>{
        return(
        <div>
        <p>date: {el.date}</p>
        <p>score: {el.score}</p>
        </div>
        )
      })}
    </div>
  )
}