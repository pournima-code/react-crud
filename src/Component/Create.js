import React, { Component, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Form, Button, Checkbox} from 'semantic-ui-react'
import axios from 'axios'

export default function Create() {
    const [firstName, setFirstName]=useState('');
    const [lastName, setLastName]=useState('');
    const [checkbox, setCheckBox]=useState(false);
    const navigate = useNavigate();
    const postData = () => {
        // console.log(firstName,lastName,checkbox);
        axios.post(`https://638c93b4eafd555746a9688e.mockapi.io/fake_data`, {
            firstName,
            lastName,
            checkbox
        })
        navigate('/Read');
    }
    return (
        <Form className='create-form'>
            <Form.Field>
                <label>First Name</label>
                <input placeholder='First Name' onChange={(e)=>setFirstName(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                <label>Last Name</label>
                <input placeholder='Last Name' onChange={(e)=>setLastName(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                <Checkbox label='I agree to the Terms and Conditions' onChange={(e)=>setCheckBox(!checkbox) }/>
            </Form.Field>
            <Button type='submit' onClick={postData}>Submit</Button>
        </Form>
    );
}
