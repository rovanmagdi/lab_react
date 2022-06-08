import {React,useContext}from 'react';
import {UsersContext} from '../../module/moduleUsers';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';


const User = ({user}) => {
  const navigate = useNavigate();
  const {users,setUsers}=useContext(UsersContext);
 const onDelete=(userId)=>
  {
    console.log(userId);
    if(window.confirm("Are you sure to execute this action?"))
    {
      setUsers( users.filter(u => u.id !== userId));
  
    }
 
    
  }
  const onGo=(id)=>
  {
    console.log("Go",id);
    navigate(`/DetailsUser/${id}`);


  }

 const onEidt=(id)=>
 {
  
  navigate(`/EditUser/${id}`);
  // console.log(e.name);
  // // const { name, value } = e.target;
  // setUsers((oldUser) => ({ ...oldUser }));


 }
    // console.log(user);
    return (
      
       <tr key={user.id} onClick={()=>onGo(user.id)}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.phone}</td>
        <td>{user.address.street}</td>
      <td><Button variant="outlined" color="error"onClick={(e)=>{onDelete(user.id) ;e.stopPropagation()}} >Delete</Button></td>  
      <td><Button variant="outlined" color="primary" onClick={(e)=>{onEidt(user.id);e.stopPropagation()}}>Edit</Button></td>  

      </tr>
     
       
    );
};

export default User;