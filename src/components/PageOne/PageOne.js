import React, { Component } from 'react';
import { connect } from 'react-redux';

const emptyForm = {
    response: ''
}

class PageOne extends Component{

state = emptyForm

onSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);    
}

clearInputs = () =>{
    this.setState(emptyForm);
}

handleFormChange = (event) => {
    this.setState({
        ...this.state,
        response: event.target.value
    })
    console.log(this.state);
}

    render(){
        return(
            <div>
            <h1>How are you feeling today?</h1>
            <form onSubmit={this.onSubmit}>
                <label>1-5:</label>
                <input onChange={this.handleFormChange} value={this.state.response} />
            </form>
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({ reduxState });
export default connect(mapStateToProps)(PageOne);