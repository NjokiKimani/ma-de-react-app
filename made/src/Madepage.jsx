import React, {useState, useEffect} from 'react'

//dependencies imports
import { useNavigate, useLocation } from 'react-router-dom'

function Madepage(response) {

  
//let name = response.response.name
//console.log(name)
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

 // e.preventDefault()
 



console.log(formData.response)

//console.log(data.taskList)

let todaysTask;


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

return (

<div>





</div>
)
 
 // return <div>{data && data.taskList.map((task, i) => <li>{data.taskList}</li>)}</div>;}
} export default Madepage