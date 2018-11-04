import React, { Component } from 'react';
import { connect } from 'react-redux';

const emptyForm = {
    response: ''
}
class PageThree extends Component{

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
            <h2>Page 3/4</h2>
            
            
            <h1>How well are you being supported?</h1>
            <form onSubmit={this.onSubmit}>
                <label>1-5:</label>
                <input onChange={this.handleFormChange} value={this.state.response} />
            </form>
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({ reduxState });
export default connect(mapStateToProps)(PageThree);