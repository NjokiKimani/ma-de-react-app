
//dependencies imports
import React, { useEffect, useState } from "react";

function Madepage() {
  const [randomTask, setRandomTask] = useState(null);
  const [name, setName] = useState (null)


const now = new Date();
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const day = days[now.getDay()];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const month = months[now.getMonth()];
const hour = now.getHours();
const minutes = now.getMinutes();
const date = now.getDate();


let time;
if (date < 10) {
  date = `0${date}`;
}

if (date <= 9) {
}

if (hour <= 11 && minutes <= 59) {
  time = "morning";
} else if (hour <= 17 && minutes <= 59) {
  time = "afternoon";
} else {
  time = "evening";
}



  useEffect(() => {
    // Check if there's a saved response in local storage
    const savedResponse = localStorage.getItem("savedResponse");


    if (savedResponse) {
      const response = JSON.parse(savedResponse);
    console.log(response);
    const name = response.name
    setName(name)

    console.log(name)

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
    <div className="text-[#fdfcfb]">
      <h1 className="text-4xl my-4 text-center py-4 px-2 font-thin border-2 border-black">
        Ma—De
        <hr className="opacity-20" />
      </h1>
      <p className="text-center text-xl my-8 py-4 px-2 border-2 border-yellow-200">
        Good {time}, {name ? <span className="capitalize underline">{name}.</span> : <p> No name found. </p>} It's {day}, {month} {date}.
        <br />
        Today at a glance:
      </p>

      <div className="text-center my-12 py-4 px-2  border-2 ">
        <h3 className="underline uppercase">Today's task</h3>
        {randomTask ? <li className="my-6 text-2xl tracking-wider"> {randomTask}</li> : <p>No tasks found.</p>}
      </div>
    </div>
  );
}

export default Madepage;

 // return <div>{data && data.taskList.map((task, i) => <li>{data.taskList}</li>)}</div>;}
//} export default Madepage