import { useState,useEffect,useContext } from "react";
import { useParams } from "react-router-dom";
import { UsersContext } from "../../module/moduleUsers";
import '../Auth/SignUp.css'
import Form from'./form'
const EditUser = () => {

    const { id } = useParams();
    const { users } = useContext(UsersContext);

	const [newUser, setNewUser] = useState(
    { name:"",
     email:"" ,
     phone:"",
     address:{street:""}
    }
     );
     
    useEffect(() => {
		const currentUser = users?.find((u) => u.id.toString() === id.toString());
		if (currentUser) setNewUser(currentUser);
		
	}, [id,users]);

  return (
    <div>
    <Form setNewUser={setNewUser} newUser={newUser}/>

    </div>
  );
};

export default EditUser;
