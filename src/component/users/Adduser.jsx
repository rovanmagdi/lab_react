import { useState } from "react";
import '../Auth/SignUp.css'
import Form from'./form'
const Adduser = () => {


	const [newUser, setNewUser] = useState(
    { name:"",
     email:"" ,
     phone:"",
     address:{street:""}
    }
     );
  return (
    <div>
    <Form setNewUser={setNewUser} newUser={newUser}/>

    </div>
  );
};

export default Adduser;
