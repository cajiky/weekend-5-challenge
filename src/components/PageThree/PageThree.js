import React, { Component } from 'react';
import { connect } from 'react-redux';

const emptyForm = {
    support: ''
}
class PageThree extends Component{

    state = emptyForm

    onSubmit = (event) => {
        event.preventDefault();
        console.log(this.state); 
        this.props.dispatch({type: 'SET_SUPPORT', payload: this.state })   
        this.clearInputs();  
        this.props.history.push('/PageFour')
    }

clearInputs = () =>{
    this.setState(emptyForm);
}

handleFormChange = (event) => {
    this.setState({
        ...this.state,
        support: event.target.value
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
                <input onChange={this.handleFormChange} value={this.state.support} />
            </form>
            <button onClick={this.onSubmit}>Next</button>
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({ reduxState });
export default connect(mapStateToProps)(PageThree);