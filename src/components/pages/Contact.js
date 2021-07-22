import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function Contact(props) {
    return (
        <Form className="form">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Normal text" required />
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} required />
            </Form.Group>
            <div className="d-grid gap-2">
                <Button variant="secondary" size="lg" type="submit">
                    Submit
                </Button>
            </div>
        </Form>
    );
}

export default Contact;