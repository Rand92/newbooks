import React, { Component } from 'react'
import {Button} from 'react-bootstrap';
import axios from 'axios';
import {Form ,Butto} from  "react-bootstrap"
export class AddBookButton extends Component {
    constructor(props){
        super(props)
        this.state={
            showForm:false,
        }
    }
    // onchange=event=>{
    //     del=event.target.value;
    // }
   handleAdd=()=>{
       this.setState({
           showForm:true,
       })
   }
    handleSubmit =(e)=>{
        e.preventDefault();
        let books ={
            title:e.target.title.value,
            description:e.target.description.value,
            status:e.target.status.value,
            email:e.target.email.value
        };
        this.addBook(books);
        this.props.onHide();
    }
    addBook(books){
    axios.post('http://localhost:3001/addBook',books)
    this.props.updateData()
    }
        render() {
            return (
                <div show={this.props.show} onHide={this.props.onHide} >
                    {this.state.showForm && 
                    <Form onSubmit={this.handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control type="title" placeholder="type the book the title" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Description</Form.Label>
        <Form.Control type="description" placeholder="enter the book Description" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Status</Form.Label>
        <Form.Control type="status" placeholder="enter the book Status" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="type you're Email" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>}
    <div>
                <>
<Button variant="primary" size="lg" onClick={this.handleAdd}>
  Add Book
</Button>{' '}

</> 
            </div>
                </div>

            )
        }
}

export default AddBookButton
