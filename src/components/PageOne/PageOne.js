import React, { Component } from 'react';
import { connect } from 'react-redux';

class PageOne extends Component{
    render(){
        return(
            <h1>Page PageOne</h1>
        )
    }
}

const mapStateToProps = reduxState => ({ reduxState });
export default connect(mapStateToProps)(PageOne);