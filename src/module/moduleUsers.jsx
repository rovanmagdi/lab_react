import {React,useState,useEffect,createContext} from 'react';
import axios from 'axios';
//1
export const UsersContext = createContext();

const ModuleUsers = ({children}) => {
    const [users, setUsers] = useState();
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setUsers(response.data);
      // console.log(users);
    });
  }, []);
    return (
        <UsersContext.Provider value={{users,setUsers}}>
          {children}
        </UsersContext.Provider>
    );
};

export default ModuleUsers;