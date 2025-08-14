import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Login = () => {
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

            >
                <TextField
                    id="outlined-basic"
                    label="username"
                    variant="outlined" />
                <TextField
                    id="filled-basic" 
                    label="password"
                    variant="outlined" />
            
            
            <Stack spacing={2}><br></br>
                <Button variant="contained">Login</Button>
            </Stack>
            </Box>
        </div>
    )
}

export default Login
