import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Form,Checkbox,Button } from "semantic-ui-react";


const Update = () => {
    const [id, setID]=useState(0);
    const [firstName, setFirstName]=useState('');
    const [lastName, setLastName]=useState('');
    const [checkbox, setCheckBox]=useState(false);
    const navigate = useNavigate();

    useEffect(()=>{
        setID(localStorage.getItem('ID'))
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
        setCheckBox(localStorage.getItem('Checkbox Value'))
    },[]);

    const updateAPIData = () => {
        axios.put(`https://638c93b4eafd555746a9688e.mockapi.io/fake_data/${id}`, {
             firstName,
             lastName,
             checkbox
        });
        navigate('/home');
    }

  
    return (
        <Form className='create-form'>
             <Form.Field>
                <label>Id</label>
                <input disabled placeholder='Id' value={id}/>
            </Form.Field>
            <Form.Field>
                <label>First Name</label>
                <input placeholder='First Name' value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                <label>Last Name</label>
                <input placeholder='Last Name' value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                <Checkbox label='I agree to the Terms and Conditions' checked={checkbox} onChange={()=>setCheckBox(!checkbox) }/>
            </Form.Field>
            <Button type='submit' onClick={updateAPIData}>Submit</Button>
        </Form>
    );
}
 
export default Update;