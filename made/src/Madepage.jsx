import React, {useState, useEffect} from 'react'

//dependencies imports
import { useNavigate, useLocation } from 'react-router-dom'

function Madepage(response) {
let name = response.response.name
console.log(name)
const now = new Date();
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const day = days[now.getDay()]
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const month = months[now.getMonth()]
const hour = now.getHours()
const minutes = now.getMinutes()
const date = now.getDate()

const location = useLocation();
let time;
const [formData, setFormData] = useState(response)

//location state
useEffect(() => {
  let formData = location.formData;
  setFormData(formData)}, [location.formData]
)





let todaysTask;
//console.log(formData.response.taskList)
//function getRandomTask (response) {
 // const tasks = response.response.name;
  //return(
 // todaysTask = Math.floor(Math.random() * response.response.taskList[].length)
 //todaysTask =
 //)
//}
//console.log(tasks)

if(date<10){
  date=`0${date}`
}

if(date <=9) {

}

if (hour <= 11 && minutes <= 59 ){
time = 'morning'
}

else if (hour <= 17 && minutes <= 59) {
time = 'afternoon'
}

else{
  time = 'evening'
}

//const tasks = formData.response.taskList;
//console.log(tasks)
  return (
    <div >
      {response.response && (
        <div className="text-[#fdfcfb]">
          <h1 className="text-4xl my-4 text-center py-4 px-2 font-thin border-2 border-black">
            Ma—De
            <hr className="opacity-20" />
          </h1>
          <p className="text-center text-xl my-8 py-4 px-2 border-2 border-yellow-200">
            Good {time},{" "}
            <span className="capitalize underline">
              {response.response.name}{" "}
            </span>
            .It's {day}, {month} {date}.
            <br />
            Today at a glance:
          </p>
          <h3 className="text-center uppercase underline my-12 py-4 px-2  border-2 ">
            Today's task
          </h3>

          <li>{response.response.taskList.tasks}</li>
        </div>
      )}
    </div>
  );}
export default Madepage