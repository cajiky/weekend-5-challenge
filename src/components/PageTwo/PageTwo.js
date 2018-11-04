import React, { Component } from 'react';
import { connect } from 'react-redux';

class PageTwo extends Component{
    render(){
        return(
            <h1>Page PageTwo</h1>
        )
    }
}

const mapStateToProps = reduxState => ({ reduxState });
export default connect(mapStateToProps)(PageTwo);