import React,{createContext} from 'react'


export const AuthContext = createContext()

export class AuthContextProvider extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            task : ""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render(){
        const {task} = this.state
        console.log(task)
        const {handleChange} = this
        return(
            <AuthContext.Provider value={{task, handleChange}}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}