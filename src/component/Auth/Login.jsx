import {React,useEffect,useState} from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { useNavigate ,Link} from "react-router-dom";

import "../users/Users.css";

const Login = () => {
    const navigate = useNavigate();

    const intialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

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

    if(values.email==localStorage.getItem('email'))
    {
        navigate('/Users')
        console.log('yes');
    }
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
        <Alert severity="error">
        <AlertTitle>error</AlertTitle>
        This is a <strong>Sign Up Success</strong>
      </Alert>
      )}
      <form className="form" onSubmit={handleSubmit}>

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

export default Login;
