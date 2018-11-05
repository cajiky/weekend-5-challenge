import React, { Component } from 'react';
import { connect } from 'react-redux';

const emptyForm = {
    feeling: ''
}

class PageOne extends Component{

state = emptyForm


clearInputs = () =>{
    this.setState(emptyForm);
}

onSubmit = (event) => {
    event.preventDefault();
    console.log(this.state); 
    this.props.dispatch({type: 'SET_FEELING', payload: this.state })   
    this.clearInputs();
    this.props.history.push('/PageTwo')
}


handleFormChange = (event) => {
    this.setState({
        ...this.state,
        feeling: event.target.value
    })
    console.log(this.state);
}



    render( ){
        return(
            <div>
            <h1>How are you feeling today?</h1>
            <form onSubmit={this.onSubmit}>
                <label>1-5:</label>
                <input onChange={this.handleFormChange} value={this.state.feeling} />
            </form>
            <button onClick={this.onSubmit}>Next</button>
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({ reduxState });
export default connect(mapStateToProps)(PageOne);