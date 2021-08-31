import React from 'react';
import { useAuth0, User } from '@auth0/auth0-react';
import './Home.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import { Form } from 'react-bootstrap';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import FileButton from './FileButton';

//Home Page
//Descr: display projects created by the user and the first page the user 
// lands on after logging in

const Home = () => {

    const { user, isAuthenticated } = useAuth0();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});
    const [reviews, setReviews] = useState([]);
    var colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light' , 'dark'];
    
//setField function
//Descr: Sets a value to a field
//Parameters: Field of String, Value of String
    const setField = (field,value) => {
        setForm({...form, [field]: value})
        console.log(form);
        //check and see if errors exist otherwise remove error from feedback
        if( !!errors[field] ) setErrors({
            ...errors, [field]:null
        })
    }


//function: createReview
//Descr: Creates a Display of the review, containing Date, Description of review and review name
//colors of the display is randomized or can be set using bootstrap color keywords

    function CreateReview(){ 
    var today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const {reviewName, description} = form
    var randomColor = Math.floor(Math.random()*colors.length);
    console.log("inside create review")
    return <div className="reviews">
        <Card bg={colors[randomColor]} text={colors[randomColor] === 'light' ? 'dark' : 'white'}>
        <Card.Header>{reviewName}</Card.Header>
        <Card.Body>
            <Card.Title>{reviewName}</Card.Title>
            <Card.Text>{description}
            </Card.Text>
            <Button variant="primary">Open</Button>
        </Card.Body>
        <Card.Footer>
            {date}
        </Card.Footer>
        </Card>
    </div>
    }
  
//Function formError
//Descr: checks if input review name is within characters boundary, containing no special letter
// and if the name is not blank
//Parameters: none
//Return: array of strings pertaining error names
    const formError = () => {
        const {reviewName} = form;
        const newErrors = {}
        var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/; 
        if (!reviewName || reviewName === "") newErrors.reviewName = "Name cannot be blank"
        else if (reviewName.length > 30) newErrors.reviewName = "Name cannot be more than 30 characters"
        else if (format.test(reviewName)) newErrors.reviewName = "Name contains special character(s)"
        
        return newErrors
    }

//Function: checkCreation
//Descr: Callback from onClick Button during the creation of project
// function checks length of newErrors array, if it's less than 0 then review name
// contains no error and closes Modal and creates review.
//Review Card is concatenated and displayed
 
    const checkCreation = e => {
        e.preventDefault();
        const newErrors = formError();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
        }
        else{
            handleClose();
            setReviews(reviews.concat(<CreateReview key={reviews.length} />));
            
            
        }
    }

    return (
        isAuthenticated && (

            <div className="home-container">
                <h1>Home</h1>
                <div className="line"></div>
                
                <div className="create-btn-container">
                    <button className="create-review" onClick={handleShow}>Create a new review</button>
                </div>
                <Modal show={show} onHide={handleClose} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Creating Review</Modal.Title>
                    </Modal.Header>
                        <Modal.Body>
                            <Form.Group className="mb-3">
                                <Form.Label>Review Name </Form.Label>
                                <Form.Control
                                type="text" 
                                placeholder="Name of Review"
                                onChange={e => setField("reviewName", e.target.value)}
                                isInvalid={ !!errors.reviewName}
                                />
                                <Form.Control.Feedback type="invalid">
                                    { errors.reviewName}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Description </Form.Label>
                                <Form.Control
                                type="text" 
                                placeholder="Description"
                                onChange={e => setField("description", e.target.value)}
                                />
                            </Form.Group>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={checkCreation}>
                            Create Review
                        </Button>
                        </Modal.Footer>
                </Modal>
                <div className="review-container">
                {reviews}
                </div>
                <FileButton/>
            </div>

        )
        
    )
}

export default Home
