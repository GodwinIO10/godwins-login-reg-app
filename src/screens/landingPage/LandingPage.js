import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import "./LandingPage.css"


const LandingPage = () => {

    return (
        <div className='main'>
            <Container>
                <Row>
                    <div className='introtext'>
                        <div>
                            <h1>Welcome to RapidLearning</h1>
                            <hr />
                            <p>fun way to learn online</p>
                        </div>
                        <div className='buttoncontainer'>
                            <a href='/login'>
                            <Button size='lg' className='landingbutton'>Login</Button>
                            </a>
                            <a href='/signup'>
                            <Button size='lg' className='landingbutton' variant='outline-primary'>Register</Button>
                            </a>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default LandingPage
