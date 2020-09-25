import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './Home'
import TasksPage from './TasksPage'
import SingleTask from './SingleTask'


class Routes extends React.Component{
    render(){
        return(
            <>
                <Switch>
                    <Route path="/" exact component = {Home}/>
                    <Route path="/tasks" exact component = {TasksPage}/>
                    <Route path="/tasks/:id" render = {(props) => <SingleTask {...props}/>} />
                </Switch>
            </>
        )
    }
}

export default Routes