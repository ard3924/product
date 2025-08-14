import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Add = () => {
    const [form, setForm] = useState({
        email: '',
        password: '',
    });
const navigate= useNavigate()

function capValue(e){
    e.preventDefault();
    axios.post("http://localhost:5173/user/log",form)
    .then(res => {
        console.log('form submitted',from);
        alert(res.data.message)
        if (res.data.message === 'success'){
            navigate('/home')
        }
        })
        .catch((err)=> {
            console.error(err);
            alert("Inavalid credentials or server error")
            navigate('/log');
            });
        
}

    return (
        <div>
            <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                noValidate
                autoComplete="off"
                border={2}
                marginTop={4}
                alignContent={"center"}
                justifyContent={"center"}
                width={300}

            ><h1>Add Your Products</h1>
                <TextField
                    id="outlined-basic"
                    label="Product Title"
                    variant="outlined" />
                <TextField
                    id="filled-basic" 
                    label="Description"
                    variant="outlined" />
                    <TextField
                    id="filled-basic" 
                    label="Status"
                    variant="outlined" />
                     <TextField
                    id="filled-basic" 
                    label="ImageUrl"
                    variant="outlined" />
            
            
            <Stack spacing={2}><br></br>
                <Button variant="contained">Login</Button>
            </Stack>
            </Box>
        </div>
    )
}

export default Add
