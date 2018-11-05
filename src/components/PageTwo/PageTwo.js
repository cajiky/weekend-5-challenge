import React, { Component } from 'react';
import { connect } from 'react-redux';

const emptyForm = {
    understanding: ''
}
class PageTwo extends Component{

    state = emptyForm

onSubmit = (event) => {
    event.preventDefault();
    console.log(this.state); 
    this.props.dispatch({type: 'SET_UNDERSTANDING', payload: this.state })   
    this.clearInputs(); 
    this.props.history.push('/PageThree') 
}

clearInputs = () =>{
    this.setState(emptyForm);
}

handleFormChange = (event) => {
    this.setState({
        ...this.state,
        understanding: event.target.value
    })
    console.log(this.state);
}

    render(){
        return(
            <div>
            <h2>Page 2/4</h2>
            
            
            <h1>How well are you understanding the content?</h1>
            <form onSubmit={this.onSubmit}>
                <label>1-5:</label>
                <input onChange={this.handleFormChange} value={this.state.understanding} />
            </form>
            <button onClick={this.onSubmit}>Next</button>
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({ reduxState });
export default connect(mapStateToProps)(PageTwo);