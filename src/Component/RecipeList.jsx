import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";



export default function RecipeList() {

  const [dt, setDt] = useState([]);
  const [uid, setUid] = useState();
  const [searchQuery, setSearchQuery] = useState('');
  const [recipeData, setRecipeData] = useState({
       Dish: '',
       Countryitem:''
      
  })
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipeData({ ...recipeData, [name]: value });
}
const fetchitem = async () => {
    try {
         await fetch("http://localhost:3000/recipe/").then(res => res.json()).then
              (res => setDt(res));
    } catch (error) {
         console.log(error.message);
    }
}
useEffect(() => {
    fetchitem();
}, []);


  const editData = (id) => {
    setUid(id);
    fetch("http://localhost:3000/recipe/" + id, {
         method: "PATCH",
         headers: {
              "Content-Type": "application/json"
         },
    })
         .then(res => res.json())
         .then(json => setRecipeData(json));
         navigate("/form")
}
const deleteData = (id) => {

    setDt(dt.filter(item => item.id !== id));

    fetch("http://localhost:3000/recipe/" + id, {
         method: "DELETE",
         headers: {
              "Content-Type": "application/json"
         },
         body: JSON.stringify(recipeData)
    })
         .then(res => res.json())
         .then(json => console.log(json))
         .catch(error => console.error('Error deleting data:', error));


}

const handleSearchChange = (e) => {
     setSearchQuery(e.target.value);
};

  return (
    <>
        <TextField
                 label="Search"
                 fullWidth
                 value={searchQuery}
                 onChange={handleSearchChange}
                 style={{ marginTop: '20px', marginLeft: '75px', width: '400px' }}
            />

      <table className='table table-striped'>
                 <thead>
                      <tr className='fw-bold'>
                           <td>Id</td>
                           <td>Dish</td>
                           <td>Country</td>
                           <td>Action</td>
                      </tr>
                 </thead>
                 <tbody>
                      {
                           dt.map((i) => {
                                return (
                                     <tr>
                                          <td>{i.rno}</td>
                                          <td>{i.Dish}</td>
                                          <td>{i.Countryitem}</td>
                                          <td><button className='btn btn-outline-info' onClick={() => editData(i.id)}>Edit</button>&nbsp;<button className='btn btn-outline-danger' onClick={() => deleteData(i.id)}>Delete</button></td>
                                     </tr>
                                )
                           })
                      }
                 </tbody>
            </table></>
  )
}
