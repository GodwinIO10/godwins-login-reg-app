import React, { useState } from 'react'
import "./LoginPage.css"
import MainScreen from "../../components/MainScreen"
import { Button, Col, Form, Row } from "react-bootstrap"
import axios from "axios"
import Loading from "../../components/Loading"
import ErrorMessage from '../../components/ErrorMessage'

const LoginPage = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)


    const submitHandler = async (e) => {
        e.preventDefault()
        
        // calling the api with the try-catch below
        try{
            const config = {
                headers: {
                    "Content-type" : "application/json",
                },
            }
            setLoading (true)

            // making the request
            const { data } = await axios.post(
                "http://localhost:4000/api/users/login", 
                {
                    email,
                    password,
                },
                config
            )
            console.log(data)
            setLoading (false) // when connection or request is successful.  Spinning effect stops.
            localStorage.setItem("userInfo", JSON.stringify(data))
            window.location.href = "/mynotez"

        } catch (error) {
            setError(error.response.data.message)
            setLoading (false) // to stop continuos spinning effect
        }
    }

    return (
        <MainScreen title="LOGIN">
            <div className='loginContainer'>
                {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
                {loading && <Loading />}
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email Address</Form.Label>
                            <Form.Control 
                                type="email"
                                value={email}
                                placeholder="Enter Email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                            <Form.Control 
                            type="password"
                                value={password}
                            placeholder="Enter Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                    </Form.Group>
                    <hr />
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
              
                    <Row className='py-3'>
                        <Col>
                            New User? <a href="/signup">Register Here</a>
                        </Col>
                    </Row>
                </Form> 
                
            </div>
        </MainScreen>
    )
}

export default LoginPage
