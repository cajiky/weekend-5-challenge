import React, { Component } from 'react';
import { connect } from 'react-redux';

class PageFour extends Component{
    render(){
        return(
            <h1>Page PageFour</h1>
        )
    }
}

const mapStateToProps = reduxState => ({ reduxState });
export default connect(mapStateToProps)(PageFour);