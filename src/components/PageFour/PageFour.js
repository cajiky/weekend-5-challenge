import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import swal from '@sweetalert/with-react'


const emptyForm = {
    comment: ''
}
class PageFour extends Component{

    state = emptyForm

//SETTING REDUXSTATE AND FINISHING FEEDBACK
finishFeedback = (event) => {
        event.preventDefault();
        console.log(this.state); 
        this.props.dispatch({type: 'SET_COMMENT', payload: this.state })  
        this.sweetAlertsAlert(); 
        this.clearInputs(); 
        
}



clearInputs = () =>{
    this.setState(emptyForm);
}

handleFormChange = (event) => {
    this.setState({
        ...this.state,
        comment: event.target.value
    })
    console.log(this.state);
}

//Sweetalert for submiting feedback to db
saSubmit = () =>{
    axios({
        method: 'POST',
        url: '/api/feedback',
        data: this.props.reduxState.feedbackReducer
    })
    .then( (response) =>{
        console.log('response', response);
        this.props.history.push('/PageFive');
    })
    .catch( (error) =>{
        console.log('error', error);
    })
   
    
}

//SA FUNCTION
sweetAlertsAlert = () => {
    swal({
        title: "Are you sure?",
        text: "Are you sure that you want to submit this feedback?",
        icon: "info",
        dangerMode: false,
      })
      .then(willSubmit => {
        if (willSubmit) {
          swal("Submitted!");
          this.saSubmit();
        }
      });
}

    render(){
        return(
            <div>
            <h2>Page 4/4</h2>
            
            
            <h1>Any comments you wish to leave?</h1>
            <form onSubmit={this.onSubmit}>
                <label>Comment:</label>
                <input onChange={this.handleFormChange} onSubmit={this.finishFeedback} value={this.state.comment} />
            </form>
            <button onClick={this.finishFeedback}>Submit Feedback!</button>
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({ reduxState });
export default connect(mapStateToProps)(PageFour);