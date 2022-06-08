import { React, useState, useEffect, useContext } from "react";
import { Table } from "react-bootstrap";
import { useNavigate ,Link} from "react-router-dom";
import User from "./User";
import Button from '@mui/material/Button';

import {UsersContext} from '../../module/moduleUsers';
const Users = () => {
   const {users}=useContext(UsersContext);
	const navigate = useNavigate();
  const add=()=>
  {
    navigate('/Addusers')
  }
   
  return (
    <div>
  
<Button variant="outlined" color="primary"onClick={()=>{add()}}>Add User</Button>


      <Table striped bordered hover>
        <thead>
          <tr>
            <th> Name</th>
            <th> Email</th>
            <th>Phone</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => {
            return <User user={user} />;
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Users;
