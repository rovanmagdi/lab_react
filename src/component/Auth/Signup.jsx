import {React,useEffect,useState} from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { useNavigate ,Link} from "react-router-dom";

import "../users/Users.css";

const Signup = () => {
    const intialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const submitForm = () => {
    console.log(formValues);
  };

 const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmitting(true);
  };

const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Enter please Email";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid email format";
    }
    if (!values.password) {
      errors.password = "Enter please password";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    }

    if (!values.confirmPassword) {
        errors.confirmPassword = "Enter please password";
      } else if (values.confirmPassword!==values.password) {
        errors.confirmPassword = "you must match with password ";
      }
    if (!values.fName) {
        errors.fName = "Enter please First Name";
      } else if (values.fName.length < 4) {
        errors.fName = "first name must be more than 4 characters";
      }
      if (!values.lName) {
        errors.lName = "Enter please Last Name";
      } else if (values.lName.length < 4) {
        errors.lName = "last name must be more than 4 characters";
      }
      console.log(values);
      localStorage.setItem('lName', values.lName);
      localStorage.setItem('fName', values.fName);
      localStorage.setItem('email', values.email);
      localStorage.setItem('password', values.password);
      localStorage.setItem('confirm ', values.confirmPassword);
      navigate('/Login');
    return errors;

  };

useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      submitForm();
    }
  }, [formErrors]);
  return (
    <div>
       
      {Object.keys(formErrors).length === 0 && isSubmitting && (
        <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        This is a <strong>Sign Up Success</strong>
      </Alert>
      )}
      <form className="form" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          id="fisrtName"
          name="fName"
          label="First Name"
          type="text"
          value={formValues.fName}
          onChange={handleChange}
          className={formErrors.fName && "input-error"}
        />
         {formErrors.fName && (
            <span className="error">{formErrors.fName}</span>
          )}
        <TextField
          fullWidth
          id="lName"
          name="lName"
          label="Last Name"
          type="text"
          value={formValues.lName}
          onChange={handleChange}
          className={formErrors.lName && "input-error"}
        />
        {formErrors.lName && (
            <span className="error">{formErrors.lName}</span>
          )}
         <TextField
          fullWidth
          id="email"
          name="email"
          label="Email "
          type="email"
          value={formValues.email}
          onChange={handleChange}
          className={formErrors.email && "input-error"}
        />
        {formErrors.email && (
            <span className="error">{formErrors.email}</span>
          )}
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formValues.password}
          onChange={handleChange}
          className={formErrors.password && "input-error"}
        />
         {formErrors.password && (
            <span className="error">{formErrors.password}</span>
          )}
        <TextField
          fullWidth
          id="password"
          name="confirmPassword"
          label="confirmPassword"
          type="password"
          value={formValues.confirmPassword}
          onChange={handleChange}
          className={formErrors.confirmPassword && "input-error"}
        />
          {formErrors.confirmPassword && (
            <span className="error">{formErrors.confirmPassword}</span>
          )}
          <br/>
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Signup;
