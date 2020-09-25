import React from 'react'
import axios from 'axios'
import {v4 as uuidv4} from 'uuid'
import {Link} from 'react-router-dom'

export default class TasksPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            "allTasks":[]
        }
    }
    componentDidMount(){
        axios.get("http://localhost:3004/tasks")
        .then(res=>{
            this.setState({
                "allTasks":res.data
            })
        })
        .catch(err=>console.log(err))

    }

    deleteTask = (taskId) => {
        axios.delete(`http://localhost:3004/tasks/${taskId}`)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))

        axios.get("http://localhost:3004/tasks")
        .then(res=>{
            this.setState({
                "allTasks":res.data
            })
        })


    }
    render(){
        const {allTasks} = this.state
       
        return(
            <div>
                {allTasks.map(task => {
                    return (
                        <div key={uuidv4()}>
                            <span>
                                <Link to = {`/tasks/${task.id}`}>{task.title}</Link>
                            </span>
                            <span>
                                <button onClick={()=>this.deleteTask(task.id)}>Delete</button>
                            </span>
                        </div>
                    )
                })}
            </div>
        )
    }
}