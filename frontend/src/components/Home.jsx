import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';


const Home = () => {
    const[products,SetProducts]=useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/prod')
        .then(response => {
            console.log(response.data);
            SetProducts(response.data)

            })
            .catch(error => {
                console.error(error);

                });

        }, []);

    // const products = [
    //     {
    //         title: "Phone",
    //         description: "Samsung F15",
    //         status: "Available",
    //         imageurl: "https://img-prd-pim.poorvika.com/product/Samsung-galaxy-f15-5g-groovy-violet-128gb-6gb-ram-Front-Back-View.png",
    //     },
    //     {
    //         title: "Laptop",
    //         description: "Acer ALG",
    //         status: "Available",
    //         imageurl: "https://m.media-amazon.com/images/I/51JH5OhIx2L._UF1000,1000_QL80_.jpg",
    //     },
    //     {
    //         title: "Earbud",
    //         description: "Realme T310",
    //         status: "Unavailable",
    //         imageurl: "https://media.tatacroma.com/Croma%20Assets/Entertainment/Wireless%20Earbuds/Images/308611_15_bj18pj.png",
    //     }

    // ]
    return (
        <div style={{ display: "flex", flexWrap: "wrap", gap:"16px"}}>
            {products.map((product, index) =>
                <Card key={index} sx={{ maxWidth: 345, marginTop:6,padding:5}}>
                    <CardMedia
                        component="img"
                        height="200"
                        sx={{ height: 140
                         }}
                        title={product.title}
                        image={product.imageurl}/>
                         <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            {product.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {product.description}
                        </Typography>
                        <Typography variant="body2" color={product.status === "Available" ? "green" : "red"}>
                            {product.status}
                        </Typography>
                    </CardContent>
                
                </Card>
            )}
        </div>
    );
}

export default Home
