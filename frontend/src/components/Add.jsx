import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Add = () => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    status: '',
    imageurl: ''
  });

  const navigate = useNavigate();

  function submitform(e) {
    e.preventDefault();

    axios.post('http://localhost:5000/prod/add', form)
      .then((res) => {
        console.log('Product added:', res.data);
        alert('Product added successfully!');
        // reset form
        setForm({ title: '', description: '', status: '', imageurl: '' });
        // navigate back to home
        navigate('/');
      })
      .catch((err) => {
        console.error(err);
        alert('Failed to add product');
      });
  }

  return (
    <div style={{ marginLeft: "400px", marginTop: "80px" }}>
      <h2 style={{ marginLeft: "100px" }}>ADD PRODUCT</h2>
      <Box
        component="form"
        onSubmit={submitform}
        sx={{ '& > :not(style)': { m: 1, width: '50ch' } }}
        noValidate
        autoComplete="off"
      >
        <TextField
          label="Product Title"
          variant="outlined"
          type="text"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        /><br />

        <TextField
          label="Product Description"
          variant="outlined"
          type="text"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        /><br />

        <TextField
          label="Status"
          variant="outlined"
          type="text"
          value={form.status}
          onChange={(e) => setForm({ ...form, status: e.target.value })}
        /><br />

        <TextField
          label="Image URL"
          variant="outlined"
          type="text"
          value={form.imageurl}
          onChange={(e) => setForm({ ...form, imageurl: e.target.value })}
        /><br />

        <Button variant="contained" type="submit" style={{ backgroundColor: "green" }}>
          ADD PRODUCT
        </Button>
      </Box>
    </div>
  );
}

export default Add;
