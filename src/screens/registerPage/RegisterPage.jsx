import React, { useState } from 'react'
import "./RegisterPage.css"
import MainScreen  from "../../components/MainScreen"
import { Button, Col, Form, Row } from "react-bootstrap"
import axios from "axios"
import Loading from "../../components/Loading"
import ErrorMessage from '../../components/ErrorMessage'

const RegisterPage = () => {
    
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [message, setMessage] = useState(null)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    const submitHandler = async (e) => {
        e.preventDefault()

        if (password !== confirmPassword ) {
            setMessage ("Passwords do not match!")
        } else {
            setMessage (null)
            // try-catch is for calling the api
                try {
                    const config = {
                        headers: {
                         "Content-type" : "application/json",
                         },
                    }
                    setLoading (true)
    
                    // making the api request ie calling the api...
                    const { data } = await axios.post(
                        "http://localhost:4000/api/users/signup", 
                        {  // while supplying the body below:
                        name,
                        email,
                        password,
                        },
                    config
                    )
                    setLoading (false) // when connection or request is successful
                    localStorage.setItem("userInfo", JSON.stringify(data)) 
                    window.location.href = "/login"
                
                } catch (error) {
                     setError(error.response.data.message)
                     setLoading (false) // to stop continuos spinning effect
                    }
        }
    }

    return (
        <MainScreen title="REGISTER">
            <div className='registerContainer'>
                { error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
                { message && <ErrorMessage variant="danger">{message}</ErrorMessage> }
                { loading && <Loading />}
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                            <Form.Control 
                                type="name"
                                value={name}
                                placeholder="Name"
                                onChange={(e) => setName(e.target.value)}
                            />
                    </Form.Group>

                    <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                            <Form.Control 
                                type="email"
                                value={email}
                                placeholder="Email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                            <Form.Control 
                            type="password"
                                value={password}
                            placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                    </Form.Group>

                    <Form.Group controlId="confirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                            <Form.Control 
                            type="password"
                                value={confirmPassword}
                            placeholder="Confirm Password"
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                    </Form.Group>
                    <hr />
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    <Row className='py-3'>
                        <Col>
                        Already registered? <a href="/login">Login Here</a>
                         </Col>
                    </Row>
                </Form>
                
            </div>
        </MainScreen>

    )

}

export default RegisterPage
