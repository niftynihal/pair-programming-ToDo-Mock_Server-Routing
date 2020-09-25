import React from 'react'
import {Route} from 'react-router-dom'
import Home from './Home'


class Routes extends React.Component{
    render(){
        return(
            <>
                <Route path="/" exact component = {Home}/>
            </>
        )
    }
}

export default Routes