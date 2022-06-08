import {React,useEffect,useState }from 'react';


import { useParams } from "react-router-dom";
import axios from 'axios';


const AlbumDetails = () => {
    const { id } = useParams();
	const [photos, setPhotos] = useState(null);

    console.log(useParams());

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`).then((response) => {
          setPhotos(response.data);
      });
  }, []);
    return (
        <div>
          
           {photos?.map((e)=>{
                 return <img src={e.url}></img> 
                // console.log(e.title);
                // return <p>{e.title}</p>
             })}
        </div>
    );
};

export default AlbumDetails;