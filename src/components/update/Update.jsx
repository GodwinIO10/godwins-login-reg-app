import React, { useState } from 'react'
import "./Update.css"
import { Button, Form,} from "react-bootstrap"
import MainScreen  from "../../components/MainScreen" 
import axios from "axios"

//import { updateError, updateStart, updateSuccess } from '../../redux/userSlice'


const Update = () => {
    


    const user = useSelector((state) => state.user.userInfo.name)
    const dispatch = useDispatch()




    const updateHandler = async (e) => {
        e.preventDefault()
        updateUser({name, email}, dispatch)


    return (
        <MainScreen title="Update">
            <div className='updateContainer'>
                { error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
                { message && <ErrorMessage variant="danger">{message}</ErrorMessage> }
                { loading && <Loading />}
                <Form onSubmit={updateHandler}>
                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                            <Form.Control 
                                type="name"
                                value={name}
                                placeholder={user.name}
                                onChange={(e) => setName(e.target.value)}
                            />
                    </Form.Group>

                    <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                            <Form.Control 
                                type="email"
                                value={email}
                                placeholder={user.email}
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

                    <hr />
                    <div className='buttoncontainer'>
                    <Button variant="primary" type="submit" onClick={updateHandler}>
                        Update
                    </Button><></>
                
                    </div>
        
                </Form>
                
            </div>
        </MainScreen>

    )
    }
}

export default Update
