import { useState, useCallback, useContext } from "react";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { UsersContext } from "../../module/moduleUsers";
import { useParams } from "react-router-dom";
import "../Auth/SignUp.css";

const Form = (props) => {
  const { id } = useParams();
  const { setUsers, users } = useContext(UsersContext);
  const navigate = useNavigate();
  const { newUser, setNewUser } = props;

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;
    setNewUser((oldUser) => ({ ...oldUser, [name]: value }));
  }, [setNewUser]);

  const handlesubmit = useCallback(
    (e) => {
      e.preventDefault();
      setUsers((oldUsers) => [{ ...newUser, id: uuid() }, ...oldUsers]);
      navigate("/Users");
    },
    [newUser, setNewUser, navigate, setNewUser, users]
  );

  const handleEdit = useCallback(
    (e) => {
      e.preventDefault();
      console.log(newUser);
      const userIndex=users.findIndex(user=>user.id.toString()===id.toString());
      users[userIndex]=newUser;
      navigate("/Users");
    },
    [navigate,newUser,id]
  );


  return (
    <div>
      <form className="form" onSubmit={!id ? handlesubmit : handleEdit}>
        <TextField
          fullWidth
          type="text"
          name="name"
          value={newUser.name}
          placeholder="Enter Name"
          onChange={handleChange}
          label=" Name"
        />
        <TextField
          fullWidth
          type="text"
          name="email"
          value={newUser.email}
          placeholder="Enter Email"
          onChange={handleChange}
          label="Email"
        />
        <TextField
          fullWidth
          type="number"
          name="phone"
          value={newUser.phone}
          placeholder="Enter Phone"
          onChange={handleChange}
          label="Phone"
        />
        <TextField
          fullWidth
          type="text"
          name="address"
          value={newUser.address.street}
          placeholder="Enter Address"
          onChange={handleChange}
          label="Address"
        />
        {id ? (
          <>
            <Button color="primary" variant="contained" fullWidth type="submit">
              save
            </Button>
            <Button color="primary" variant="contained" fullWidth type="submit">
              Cancel
            </Button>
          </>
        ) : (
          <Button color="primary" variant="contained" fullWidth type="submit">
            submit
          </Button>
        )}
      </form>
    </div>
  );
};

export default Form;
