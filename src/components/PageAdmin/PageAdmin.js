import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';


class PageAdmin extends Component{


    render(){
        return(
            <h1>Page PageAdmin</h1>
        )
    }
}

const mapStateToProps = reduxState => ({ reduxState });
export default connect(mapStateToProps)(PageAdmin);