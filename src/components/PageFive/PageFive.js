import React, { Component } from 'react';
import { connect } from 'react-redux';

class PageFive extends Component{
    render(){
        return(
            <h1>Page PageFive</h1>
        )
    }
}

const mapStateToProps = reduxState => ({ reduxState });
export default connect(mapStateToProps)(PageFive);