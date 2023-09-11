import "./yellowPart.css"
import { Component } from "react"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { rightcircle } from '@fortawesome/free-solid-svg-icons';
//                  <FontAwesomeIcon icon="rightcircle" />

class YellowPart extends Component{
    render(){
        return (
            <div className='yellowPart'>
                <div className='image'></div>
                  <div className='text'>
                  <p className='h1'>Let's get you set up</p>
                  <p className='h2'>I should only take a couple of minutes to pair with your watch</p>
                  </div>
             </div>
        )
    }
}

export default YellowPart