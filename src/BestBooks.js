import axios from 'axios';
import React, { Component } from 'react';
import { Carousel, Caption } from 'react-bootstrap';
class BestBooks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            randbooks: [],
        }
    }
    componentDidMount = () => {
        axios.get(`http://localhost:3001/allBooks?id=6147be01d09977cc31d25274`).then(Response => {
            { console.log(Response) }
            this.setState({
                randbooks: Response.data

            })
        })

    }
    render() {
        return (
            <div>
                {this.state.randbooks.length > 0 && <Carousel indicators={true} className="Carousel" >

                    {
                        this.state.randbooks.map((Element, i) => {
                            return Element.Books.map((singleBook, i) => {
                                console.log(singleBook)
                                return <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://wallpaperaccess.com/full/124383.jpg"
                                        alt="slides"
                                    />
                                    <Carousel.Caption className="color">
                                        <h3 className="ele">Book Title :{singleBook.title}</h3>
                                        <p className="ele">Description :{singleBook.description}</p>
                                        <p className="ele">Status :{singleBook.status}</p>
                                        <p className="ele">E-mail :{singleBook.email}</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            })
                        }
                        )}
                </Carousel>
                }
                {
                    this.state.randbooks.length === 0 && <h3>The book collection is empty.</h3>
                }
            </div>
        )
    }
}
export default BestBooks;
