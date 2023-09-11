import "./Form.css"
import { Component } from "react"

class Form extends Component {
    render() {
        return (
            <div className='form'>
               <form>
                <div className="inputDiv"><p>name</p> <input className = "textTipe"type = "text" placeholder = "select your name"></input></div>
                <div className="inputDiv"><p>gender</p> <input className = "textTipe"type = "text" placeholder = "select your gender"></input></div>
                <div className="inputDiv"><p>data</p> <input className = "textTipe"type = "text" placeholder = "select your birgth date"></input></div>
                <div className="inputDiv"><p>maile</p> <input className = "textTipe"type = "text" placeholder = "select your name"></input></div>    
                <div className="inputDiv"><p>name</p> <input className = "textTipe"type = "text" placeholder = "select your name"></input></div>
                <div className="inputDiv"><p>name</p> <input className = "textTipe"type = "text" placeholder = "select your name"></input></div>
               </form>
             </div>
        )
    }
}

export default Form