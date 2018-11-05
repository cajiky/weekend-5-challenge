import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';


class PageAdmin extends Component{
state = {feedback: []}
//snaggin get response from our db and mounting it to the dom
componentDidMount(){
    this.getFeedback();
}

getFeedback = (props) =>{
    axios({
        mehtod: 'GET',
        url: '/api/feedback'
    })
    .then((response)=>{
        console.log(response);
        this.setState({
            feedback: response.data
        })
    })
    .catch((error)=>{
        console.log('error getting responses from db', error);
    })

}

    render(){
        return(
            <div>
            <h1>Page Admin</h1>
            <table>
                <thead>
                    <tr>
                        <th>Feeling</th>
                        <th>Understanding</th>
                        <th>Support</th>
                        <th>Comments</th>
                        <th>Date</th>
                    </tr>
             
                    {this.state.feedback.map(feedback => (
                        <tr key={feedback.id}>
                            <td>{feedback.feeling}</td>
                            <td>{feedback.understanding}</td>
                            <td>{feedback.support}</td>
                            <td>{feedback.comments}</td>
                            <td>{feedback.date}</td>
                        </tr>
                    ))}
                   </thead>
            </table>
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({ reduxState });
export default connect(mapStateToProps)(PageAdmin);