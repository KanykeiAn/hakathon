import { Box, Grid } from '@mui/material';
import React from 'react';
import ProductList from '../Components/product/ProductList';
import SideBar from '../Components/product/SideBar';

const ProductsPage = () => {
  return (
    <Box p={5}>
      ProductsPage
      <Grid container spacing={3}>
        <ProductList />
        <SideBar />
      </Grid>
    </Box>
  );
};

export default ProductsPage;
