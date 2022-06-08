import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../component/header/Header";
import Users from "../component/users/Users";
import Notfound from "../component/notFound/Notfound";
import Signup from "../component/Auth/Signup";
import Login from "../component/Auth/Login";

import ModuleUsers from "../module/moduleUsers";

import "./App.css";
import Adduser from "../component/users/Adduser";
import EditUser from "../component/users/EditUser";

import DetailsUser from'../component/users/DetailsUser'
import AlbumDetails from'../component/users/AlbumDetails';


const App = () => {
  return (
	  <ModuleUsers>
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="Users" element={<Users />} />

          <Route path="Signup" element={<Signup />} />
          <Route path="Login" element={<Login />} />

          <Route path="EditUser/:id" element={<EditUser />} />

          <Route path="Addusers" element={<Adduser />} />

          <Route path="DetailsUser/:id" element={<DetailsUser />} />
          
          <Route path="DetailsUser/:id/AlbumDetails/:id" element={<AlbumDetails />} />



          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </div>
	</ModuleUsers>
  );
};

export default App;
