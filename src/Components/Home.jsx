import React from 'react'
import {AuthContext} from './AuthContextProvider'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'; 


class Home extends React.Component{
    addTask = (name) => {
        console.log(name)
        axios.post("http://localhost:3000/tasks", {
            id: uuidv4(),
            title: name
        })
    }
    render(){
        const {task,handleChange} = this.context
     return(
         <div>
            <input placeholder="Add Task" name="task" value={task} onChange = {(e) => handleChange(e)}></input>
            <button onClick={() => this.addTask(task)}>ADD BUTTON</button>
         </div>
     )
    }
}

Home.contextType = AuthContext
export default Home