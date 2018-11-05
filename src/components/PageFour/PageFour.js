import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

const emptyForm = {
    comment: ''
}
class PageFour extends Component{

    state = emptyForm


onSubmit = (event) => {
        event.preventDefault();
        console.log(this.state); 
        this.props.dispatch({type: 'SET_COMMENT', payload: this.state })   
        this.clearInputs(); 
        this.submit();
       
        this.props.history.push('/PageFive')
        
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

submit = () => {
    axios({
        method: 'POST',
        url: '/api/feedback',
        data: this.props.reduxState.feedbackReducer
    })
    .then( (response) =>{
        console.log('response', response);
    })
    .catch( (error) =>{
        console.log('error', error);
    })
}

    render(){
        return(
            <div>
            <h2>Page 4/4</h2>
            
            
            <h1>Any comments you wish to leave?</h1>
            <form onSubmit={this.onSubmit}>
                <label>Comment:</label>
                <input onChange={this.handleFormChange} value={this.state.comment} />
            </form>
            <button onClick={this.submit}>Submit Feedback!</button>
            <button onClick={this.onSubmit}>Next</button>
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({ reduxState });
export default connect(mapStateToProps)(PageFour);