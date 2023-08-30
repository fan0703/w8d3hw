import React from 'react'
import Score from './Score'

export default function Student(props) { 
  return (
    <div>
        <h1>{props.name}</h1>
        <h2>{props.bio}</h2>
        <Score scores={props.scores}/>
    </div>
  )
}
