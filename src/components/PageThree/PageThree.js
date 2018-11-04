import React, { Component } from 'react';
import { connect } from 'react-redux';

class PageThree extends Component{
    render(){
        return(
            <h1>Page PageThree</h1>
        )
    }
}

const mapStateToProps = reduxState => ({ reduxState });
export default connect(mapStateToProps)(PageThree);