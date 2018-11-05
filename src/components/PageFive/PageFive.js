import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class PageFive extends Component{

    //button to go back to home page
    onClick = () =>{
       
        this.props.history.push('/')
    } 



//On Mount function
componentDidMount(){
    this.state2Redux();
}
    

    render(){
        return(
            <div>
                <h1>Thank YOU!!!!!</h1>
                <button onClick={this.onClick}>Do another feedback!</button>
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({ reduxState });
export default connect(mapStateToProps)(PageFive);