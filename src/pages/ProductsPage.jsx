import { Box, Grid } from '@mui/material';
import React from 'react';
import ProductList from '../Components/product/ProductList';
import SideBar from '../Components/product/SideBar';

const ProductsPage = () => {
  return (
    <Box p={2}>
      <Grid container spacing={3} className="bbb">
        {/* <img className='imgg' src="https://images.pexels.com/photos/7233716/pexels-photo-7233716.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" /> */}
        <ProductList />
        <SideBar />
      </Grid>
    </Box>
  );
};

export default ProductsPage;
