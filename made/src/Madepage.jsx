//import React, {useState, useEffect} from 'react'

//dependencies imports
import React, { useEffect, useState } from "react";

function Madepage() {
  const [randomTask, setRandomTask] = useState(null);

  useEffect(() => {
    // Check if there's a saved response in local storage
    const savedResponse = localStorage.getItem("savedResponse");


    if (savedResponse) {
      const response = JSON.parse(savedResponse);
    console.log(response);

      if (response.name && response.taskList && response.taskList.length > 0) {
        const randomIndex = Math.floor(
          Math.random() * response.taskList.length
        );
        const randomTask = response.taskList[randomIndex].tasks;
        setRandomTask(randomTask);
      }
    }
  }, []);

  return (
    <div>
      <div>
        {randomTask ? <p>Random Task: {randomTask}</p> : <p>No tasks found.</p>}
      </div>
    </div>
  );
}

export default Madepage;

 // return <div>{data && data.taskList.map((task, i) => <li>{data.taskList}</li>)}</div>;}
//} export default Madepage