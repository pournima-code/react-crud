import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Table, Button } from 'semantic-ui-react';
export default function Read() {
    const [APIData, setAPIData] = useState([]);
    useEffect(()=>{
        axios.get(`https://638c93b4eafd555746a9688e.mockapi.io/fake_data`)
        .then((response) => {
            setAPIData(response.data);
        })
    },[])

    const getData =()=>{
        axios.get(`https://638c93b4eafd555746a9688e.mockapi.io/fake_data`)
        .then((response) => {
            console.log(response);
            // setAPIData(response.data);
        })
    }

    const onDelete = (id) => {
        axios.delete(`https://638c93b4eafd555746a9688e.mockapi.io/fake_data/${id}`)
        .then(() => {
            getData();
        })
    }

    const updatePost= (data)=>{
        // console.log(data);
        const { id,firstName,lastName,checkbox } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Checkbox Value', checkbox);
    }
    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>last Name</Table.HeaderCell>
                        <Table.HeaderCell>Checkbox</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                {
                    APIData.map((data) => {
                        return (
                            <Table.Row key={data.id}>
                                <Table.Cell>{data.firstName}</Table.Cell>
                                <Table.Cell>{data.lastName}</Table.Cell>
                                <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
                                <Table.Cell>
                                     <Button onClick={onDelete}>Delete</Button>
                                </Table.Cell>
                                <Link to='/update'>
                                    <Table.Cell>
                                        <Button onClick={()=>updatePost(data)}>Update</Button>
                                    </Table.Cell>
                                </Link>
                            </Table.Row>
                        )
                    })
                }
                </Table.Body>
            </Table>
        </div>
    )
}