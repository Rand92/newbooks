import axios from 'axios';
import React, { Component } from 'react';
import { Carousel, Button } from 'react-bootstrap';
// import './Header.css';


class BestBooks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            randbooks: [],
        }
    }
    
    render() {
        return (
            <div> <h1 className="title"> Welcom To Our Library </h1>
               
                {this.state.randbooks.length > 0 && <Carousel indicators={true} className="Carousel ">
                    {this.state.randbooks.map((singleBook, i) => {
                        return <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm21-paper-ning-01_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=eb5357c6132db98d4d05948323e6c050"
                                alt="slides"
                            />
                            <Carousel.Caption className="color">
                                <h3 className="ele">{singleBook.title}</h3>
                                <p className="ele">{singleBook.description}</p>
                                <p className="ele">Status :{singleBook.status}</p>
                                <p className="ele">E-mail :{singleBook.email}</p>
                                <Button variant="primary" size="lg" >
                                    Delete Book
                                </Button>
                            </Carousel.Caption>
                        </Carousel.Item>
                    })
                    }
                </Carousel>}

                {this.state.randbooks.length === 0 && <h3>The book collection is empty.</h3>}
            </div>
        )
    }
}
export default BestBooks;
