import { React, useContext, useEffect, useState } from "react";
import { UsersContext } from "../../module/moduleUsers";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Users.css";
import { useNavigate } from "react-router-dom";

const DetailsUser = () => {
  const navigate = useNavigate();
  const { users } = useContext(UsersContext);
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [albums, setAlbums] = useState();

  // console.log(useParams());

  useEffect(() => {
    const currentUser = users?.find((u) => u.id.toString() === id.toString());
    if (currentUser) setUser(currentUser);
    // else navigate("/not-found");
  }, []);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/albums?userId=${id}`)
      .then((response) => {
        setAlbums(response.data);
      });
  }, []);
  console.log(albums);
  
  const onGo = (Albumid) => {
    console.log(id);
    navigate(`/DetailsUser/${id}/AlbumDetails/${Albumid}`);
  };

  return user ? (
    <div>
      <div>ID:{id}</div>
      <div>Name:{user.name}</div>
      <div>Email:{user.email}</div>
      <div>Phone:{user.phone}</div>
      <div>Address:{user.address.street}</div>
      <div className="album">Albums</div>
      <div>
        {albums?.map((e) => {
          return (
            <p
              onClick={() => {
                onGo(e.id);
              }}
            >
              {e.title}
            </p>
          );
        })}
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default DetailsUser;
