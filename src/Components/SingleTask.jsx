import React from 'react'
import axios from 'axios'

export default class SingleTask extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            "editMode":false,
            "task":{}, 
            "page_task":""

        }
    }
    componentDidMount(){
        axios.get(`http://localhost:3004/tasks/${this.props.match.params.id}`)
        .then(res=>{
            this.setState({
                "task":res.data,
                "page_task":res.data.title
            })
        })
    }

    handleEdit = () => {
        this.setState({
            "editMode":!this.state.editMode
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleUpdate = () => {
        axios.patch(`http://localhost:3004/tasks/${this.props.match.params.id}`,{
            "title":this.state.page_task
        })
        .then(res => {
            this.setState({
                "editMode":!this.state.editMode
            })
        })
        .catch(err=>console.log(err))
    }

    handleBack = () => {
        this.props.history.push('/tasks')
    }

   
    render(){
        const {editMode, task, page_task} = this.state
        if(!editMode){
            return (
                <div>
                    <span>{task.title}</span>
                    <span>
                        <button onClick={this.handleEdit}>Edit</button>
                    </span>
                    <span>
                        <button onClick={this.handleBack}>Go back</button>
                    </span>
                </div>
            )
        }
        else{
            return(
                <div>
                    <input name = "page_task" value = {page_task} onChange = {(e)=>this.handleChange(e)} />
                    <button onClick={this.handleUpdate}>
                        Update
                    </button>
                </div>
            )
        }
    }
}