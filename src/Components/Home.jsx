import React from 'react'
import {AuthContext} from './AuthContextProvider'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'; 
import {Link} from 'react-router-dom'


class Home extends React.Component{
    addTask = (name) => {
        console.log(name)
        axios.post("http://localhost:3004/tasks", {
            id: uuidv4(),
            title: name
        })
    }
    render(){
        const {task,handleChange} = this.context
     return(
         <div>
            <div>
                <input placeholder="Add Task" name="task" value={task} onChange = {(e) => handleChange(e)}></input>
                <button onClick={() => this.addTask(task)}>ADD BUTTON</button>
            </div>
            <div>
                <Link to = "/tasks">See all tasks</Link>
            </div>
         </div>
     )
    }
}

Home.contextType = AuthContext
export default Home