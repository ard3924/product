import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios'; 
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Add = () => { 
  const [form, setForm] = useState({
    productTitle: '',
    description: '',
    status: '',
    imageUrl: '',
  });

  const navigate = useNavigate();

  // Function to handle changes in the form inputs
  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prevForm => ({
      ...prevForm,
      [name]: value,
    }));
  }

  // Function to handleform submit    
  function handleSubmit(e) {
    e.preventDefault();
    axios.post("http://localhost:5173/products/add", form) /
      .then(res => {
        console.log('form submitted', form);
        alert(res.data.message);
        if (res.data.message === 'success') {
          navigate('/home');
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Error adding product or server error");
    
      });
  }

  return (
    <div>
      <Box
        component="form"
        onSubmit={handleSubmit} 
        sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off"
        border={2}
        marginTop={4}
        alignContent={"center"}
        justifyContent={"center"}
        width={300}
      >
        <h1>Add Your Products</h1>
        <TextField
          id="product-title"
          label="Product Title"
          variant="outlined"
          name="productTitle"
          value={form.productTitle}
          onChange={handleChange}
        />
        <TextField
          id="description"
          label="Description"
          variant="outlined"
          name="description"
          value={form.description}
          onChange={handleChange}
        />
        <TextField
          id="status"
          label="Status"
          variant="outlined"
          name="status"
          value={form.status}
          onChange={handleChange}
        />
        <TextField
          id="image-url"
          label="ImageUrl"
          variant="outlined"
          name="imageUrl"
          value={form.imageUrl}
          onChange={handleChange}
        />
        
        <Stack spacing={2}><br></br>
          <Button variant="contained" type="submit">
            Add Product
          </Button>
        </Stack>
      </Box>
    </div>
  );
};

export default Add; 
