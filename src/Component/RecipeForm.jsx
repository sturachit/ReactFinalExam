import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link,useNavigate } from "react-router-dom";

export default function RecipeForm() {
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

  const handleSubmit = (e) => {
       fetch('http://localhost:3000/recipe/', {
            method: 'POST',
            headers: {
                 'Content-Type': 'application/json'
            },
            body: JSON.stringify(recipeData)
       })
            .then(res => res.json())
            fetchitem();
            navigate("/list")
  }

  

  return (
       <>
            <div className='frm'>
                 <form onSubmit={handleSubmit} method='post'>
                      <Box
                           sx={{
                                width: 500,
                                maxWidth: '100%',
                                marginLeft: "75px",
                                marginTop: "30px"
                           }}
                      >
                           <TextField fullWidth label="Dish Number" name='rno' value={recipeData.rno} onChange={handleChange} id="fullWidth" />
                           <br /><br />

                           <TextField fullWidth label="Dish" name='Dish' value={recipeData.Dish} onChange={handleChange} id="fullWidth" />
                           <br /><br />
                           <TextField fullWidth label="Country Dish" name='Countryitem' value={recipeData.Countryitem} onChange={handleChange} id="fullWidth" />
                           <br /><br />

                           <Button type='submit' variant="contained" color="success">
                                SaveData
                           </Button>
                      </Box>
                 </form>
            </div>
        
          
       </>
  )
}
