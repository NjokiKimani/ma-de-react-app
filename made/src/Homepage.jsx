import React, {useState} from 'react'

//dependecies imports
import {Form, FormControl, FormGroup, FormLabel, FormText} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
//import {Link} from 'react-router-dom'

function Homepage({setResponse}) {

    //states
const [taskList, setTaskList] = useState([{tasks:''}])
const [name, setName] = useState('')

//utility functions
const handleAdd = () => {
    setTaskList([...taskList, {tasks:""}])
}

const handleRemove = (i) => {
    setTaskList([...taskList].splice(1))
    }

const handleTaskChange = (e, i) => {
    const {name, value} = e.target;
    const list = [...taskList];
    list [i][name] = value;
    setTaskList(list)
    
}
const navigate = useNavigate()
const handleSubmit = (e) => {
    e.preventDefault();
    const data = {name, taskList}
    setResponse(data)
    //console.log(data)

  
   localStorage.setItem("savedResponse", JSON.stringify(data));
   navigate("/made");

   console.log(JSON.stringify(data))
}

  return (
    <div className="w-full h-screen p-2 bg-[#08422f]">
      <header>
        <h3 className=" text-[#fdfcfb] text-4xl my-4 p-4 font-thin border-2 border-black">
          Ma—De
        </h3>
      </header>
      <div className="border-2 border-yellow-300 my-8 py-4">
        <p className="text-[#fdfcfb] text-center mb-1 font-semibold text-3xl tracking-wide">
          we're so glad you're here.
        </p>
        <p className="text-[#fdfcfb] text-center text-lg tracking-tight">
          one task a day to help manage the storm.
          <br />
          it shall pass.
        </p>
      </div>
      <div className="w-full  border-black border-2 flex flex-col items-center ">
        <div className="border-2 border-purple-300 rounded-lg text-center my-12 py-3 px-2 bg-[#eff2ed] text-[#00240c]">
          <Form
            onSubmit={handleSubmit}
            className="inline-block mx-0 text-left bg-[#eff2ed]"
          >
            <FormGroup className="mb-3 bg-[#eff2ed]">
              <FormLabel className="bg-[#eff2ed]">
                Name
                <span className="text-[#b76038] bg-[#eff2ed]">*</span>
              </FormLabel>
              <FormControl
                onChange={(e) => setName(e.target.value)}
                type="text"
                value={name}
                placeholder="Enter name"
                className="focus:border-[#00240c] focus:ring-0 focus:outline-none"
                required
                name="name"
                autoComplete="off"
              />
              <FormText className="text-muted bg-[#eff2ed]">
                Please enter preferred name
              </FormText>
            </FormGroup>

            <FormGroup className="bg-[#eff2ed]">
              <FormLabel className="bg-[#eff2ed]">
                Tasks <span className="text-[#b76038] bg-[#eff2ed]">*</span>
              </FormLabel>
              {taskList.map((t, i) => (
                <div key={i}>
                  <div className="border-2 border-red-200 bg-[#eff2ed] flex justify-between items-center">
                    <FormControl
                      onChange={(e) => handleTaskChange(e, i)}
                      type="text"
                      name="tasks"
                      value={t.tasks}
                      placeholder="Enter task"
                      required
                      autoComplete="off"
                      className="mr-12 focus:border-[#00240c] focus:ring-0 focus:outline-none"
                    />
                    {taskList.length !== 1 && taskList.length < 7 && (
                      <Button
                        onClick={handleRemove}
                        className="text-[#eff2ed] bg-[#e9b095] border-[#e9b095] hover:bg-[#eff2ed] hover:border-[#e9b095] hover:text-[#e9b095]
                 active:!bg-[#eff2ed] active:!text-[#e9b095] active:!border-[#e9b095]"
                      >
                        Remove
                      </Button>
                    )}
                  </div>

                  {taskList.length - 1 === i && (
                    <div className="bg-[#eff2ed]">
                      <Button
                        onClick={handleAdd}
                        className="text-[#eff2ed] my-2 bg-[#597161] border-[#597161] hover:bg-[#eff2ed] hover:border-[#597161] hover:text-[#597161]
               active:!bg-[#eff2ed] active:!text-[#597161] active:!border-[#597161]"
                      >
                        Add task
                      </Button>
                    </div>
                  )}
                </div>
              ))}
            </FormGroup>

            <div className="flex justify-center items-center bg-[#eff2ed]">
              <Button
                type="submit"
                className="text-[#eff2ed] my-6 bg-[#00240c] border-[#00240c] hover:bg-[#eff2ed] hover:border-[#00240c] hover:text-[#00240c]
               active:!bg-[#eff2ed] active:!text-[#00240c] active:!border-[#00240c]"
              >
                  Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Homepage