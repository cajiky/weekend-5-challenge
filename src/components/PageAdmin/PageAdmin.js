import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import swal from '@sweetalert/with-react'
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

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
//Delete button click function
deleteButtonClick = (id) => {
    swal({
        title: "Are you sure?",
        text: "Are you sure that you want to delete this feedback?",
        icon: "warning",
        dangerMode: true,
      })
      .then(willDelete => {
        if (willDelete) {
          swal("Deleted!");
          this.deleteFeedback(id);
        }
      });
}

//DELETE FUNCTION TO GET RID OF A PARTICULAR TABLE ROW
deleteFeedback = (id) => {
    axios({
        method: 'DELETE',
        url: `/api/feedback/${id}`
      })
      .then( (response) => {
        this.getFeedback();
      })
      .catch( (error) => {
        alert('Error in Delete request');
      })
    }
    render(){
        return(
            <div>
            <h1>Admin</h1>
            <Table className="feedbackTable">
                <TableHead>
                    <TableRow>
                        <TableCell>Feeling</TableCell>
                        <TableCell>Understanding</TableCell>
                        <TableCell>Support</TableCell>
                        <TableCell>Comments</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>DELETE</TableCell>
                    </TableRow>
                    </TableHead>
                    {this.state.feedback.map(feedback => (
                        <TableRow key={feedback.id}>
                            <TableCell>{feedback.feeling}</TableCell>
                            <TableCell>{feedback.understanding}</TableCell>
                            <TableCell>{feedback.support}</TableCell>
                            <TableCell>{feedback.comments}</TableCell>
                            <TableCell>{feedback.date}</TableCell>
                            <TableCell><button onClick={() => this.deleteButtonClick(feedback.id)}>DELETE</button></TableCell>
                        </TableRow>
                    ))}
                   
            </Table>
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({ reduxState });
export default connect(mapStateToProps)(PageAdmin);